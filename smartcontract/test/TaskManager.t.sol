// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {TaskManager} from "../src/TaskManager.sol";

contract TaskManagerTest is Test {
    TaskManager public taskManager;
    address public user1 = makeAddr("user1");
    address public user2 = makeAddr("user2");

    event TaskCreated(uint256 id, string title, address creator, uint256 stakeAmount, uint256 deadline);
    event TaskCompleted(uint256 id, uint256 stakeReturned);
    event StakeLost(uint256 id, uint256 stakeAmount);

    function setUp() public {
        taskManager = new TaskManager();
        vm.deal(user1, 1 ether);
        vm.deal(user2, 1 ether);
    }

    // Teste 1: Criar tarefa
    function test_CreateTask() public {
        uint256 stakeAmount = 0.001 ether;
        uint256 deadline = block.timestamp + 1000;
        
        vm.prank(user1);
        taskManager.createTask{value: stakeAmount}("Estudar Solidity", "Completar tutorial", deadline);
        
        assertEq(taskManager.getTaskCount(), 1);
        
        TaskManager.Task memory task = taskManager.getTask(1);
        assertEq(task.stakeAmount, stakeAmount);
        assertEq(task.deadline, deadline);
        assertEq(task.status, false);
        assertEq(task.creator, user1);
    }

    // Teste 2: Completar tarefa
    function test_CompleteTask() public {
        uint256 stakeAmount = 0.001 ether;
        uint256 deadline = block.timestamp + 1000;
        uint256 initialBalance = user1.balance;
        
        // Criar tarefa
        vm.prank(user1);
        taskManager.createTask{value: stakeAmount}("Estudar Solidity", "Completar tutorial", deadline);
        
        // Completar tarefa
        vm.prank(user1);
        taskManager.completeTask(1);
        
        // Verificar se recebeu o stake de volta
        uint256 finalBalance = user1.balance;
        assertEq(finalBalance, initialBalance);
        
        TaskManager.Task memory task = taskManager.getTask(1);
        assertEq(task.status, true);
        assertEq(task.stakeReturned, true);
    }

    // Teste 3: Listar tarefas do usuário
    function test_ListUserTasks() public {
        uint256 stakeAmount = 0.001 ether;
        uint256 deadline = block.timestamp + 1000;
        
        // User1 cria 3 tarefas
        vm.startPrank(user1);
        taskManager.createTask{value: stakeAmount}("Tarefa 1", "Primeira tarefa", deadline);
        taskManager.createTask{value: stakeAmount}("Tarefa 2", "Segunda tarefa", deadline);
        taskManager.createTask{value: stakeAmount}("Tarefa 3", "Terceira tarefa", deadline);
        vm.stopPrank();
        
        // Verificar tarefas do usuário
        uint256[] memory userTasks = taskManager.getUserTasks(user1);
        
        assertEq(userTasks.length, 3);
        assertEq(userTasks[0], 1);
        assertEq(userTasks[1], 2);
        assertEq(userTasks[2], 3);
        
        // Verificar que total de tarefas é 3
        assertEq(taskManager.getTaskCount(), 3);
        
        // Verificar detalhes de cada tarefa
        for (uint i = 0; i < userTasks.length; i++) {
            TaskManager.Task memory task = taskManager.getTask(userTasks[i]);
            assertEq(task.creator, user1);
            assertEq(task.stakeAmount, stakeAmount);
            assertEq(task.status, false); // Todas ainda pendentes
        }
    }

    // 🚀 Teste 4: getUserTasksWithData - Buscar todas as tarefas com dados completos
    function test_GetUserTasksWithData() public {
        uint256 stakeAmount = 0.001 ether;
        uint256 deadline = block.timestamp + 1000;
        
        // User1 cria 4 tarefas
        vm.startPrank(user1);
        taskManager.createTask{value: stakeAmount}("Tarefa A", "Descricao A", deadline);
        taskManager.createTask{value: stakeAmount}("Tarefa B", "Descricao B", deadline + 100);
        taskManager.createTask{value: stakeAmount}("Tarefa C", "Descricao C", deadline + 200);
        taskManager.createTask{value: stakeAmount}("Tarefa D", "Descricao D", deadline + 300);
        vm.stopPrank();
        
        // User2 cria 1 tarefa (para garantir isolamento)
        vm.prank(user2);
        taskManager.createTask{value: stakeAmount}("Tarefa User2", "Descricao User2", deadline);
        
        // Completar 2 tarefas do user1
        vm.startPrank(user1);
        taskManager.completeTask(1); // Tarefa A completada
        taskManager.completeTask(3); // Tarefa C completada
        vm.stopPrank();
        
        // 🎯 BUSCAR TAREFAS COM DADOS COMPLETOS
        TaskManager.Task[] memory userTasksWithData = taskManager.getUserTasksWithData(user1);
        
        // Verificar quantidade de tarefas
        assertEq(userTasksWithData.length, 4, "Deve retornar 4 tarefas do user1");
        
        // Verificar dados da Tarefa A (ID 1 - concluída)
        assertEq(userTasksWithData[0].id, 1);
        assertEq(userTasksWithData[0].title, "Tarefa A");
        assertEq(userTasksWithData[0].description, "Descricao A");
        assertEq(userTasksWithData[0].creator, user1);
        assertEq(userTasksWithData[0].stakeAmount, stakeAmount);
        assertEq(userTasksWithData[0].status, true); // Concluída
        assertEq(userTasksWithData[0].stakeReturned, true);
        
        // Verificar dados da Tarefa B (ID 2 - pendente)
        assertEq(userTasksWithData[1].id, 2);
        assertEq(userTasksWithData[1].title, "Tarefa B");
        assertEq(userTasksWithData[1].description, "Descricao B");
        assertEq(userTasksWithData[1].creator, user1);
        assertEq(userTasksWithData[1].stakeAmount, stakeAmount);
        assertEq(userTasksWithData[1].status, false); // Pendente
        assertEq(userTasksWithData[1].stakeReturned, false);
        
        // Verificar dados da Tarefa C (ID 3 - concluída)
        assertEq(userTasksWithData[2].id, 3);
        assertEq(userTasksWithData[2].title, "Tarefa C");
        assertEq(userTasksWithData[2].status, true); // Concluída
        
        // Verificar dados da Tarefa D (ID 4 - pendente)
        assertEq(userTasksWithData[3].id, 4);
        assertEq(userTasksWithData[3].title, "Tarefa D");
        assertEq(userTasksWithData[3].status, false); // Pendente
        
        // 🔍 COMPARAR com dados individuais via getTask
        for (uint i = 0; i < userTasksWithData.length; i++) {
            TaskManager.Task memory individualTask = taskManager.getTask(userTasksWithData[i].id);
            
            // Verificar se dados são idênticos
            assertEq(userTasksWithData[i].id, individualTask.id);
            assertEq(userTasksWithData[i].title, individualTask.title);
            assertEq(userTasksWithData[i].description, individualTask.description);
            assertEq(userTasksWithData[i].creator, individualTask.creator);
            assertEq(userTasksWithData[i].stakeAmount, individualTask.stakeAmount);
            assertEq(userTasksWithData[i].status, individualTask.status);
            assertEq(userTasksWithData[i].stakeReturned, individualTask.stakeReturned);
            assertEq(userTasksWithData[i].deadline, individualTask.deadline);
            assertEq(userTasksWithData[i].createdAt, individualTask.createdAt);
        }
        
        // 🔒 VERIFICAR ISOLAMENTO: User2 deve ter apenas 1 tarefa
        TaskManager.Task[] memory user2TasksWithData = taskManager.getUserTasksWithData(user2);
        assertEq(user2TasksWithData.length, 1, "User2 deve ter apenas 1 tarefa");
        assertEq(user2TasksWithData[0].title, "Tarefa User2");
        assertEq(user2TasksWithData[0].creator, user2);
        
        // 📊 VERIFICAR MÉTRICAS
        uint256 completedTasks = 0;
        uint256 pendingTasks = 0;
        uint256 totalStakeInPending = 0;
        
        for (uint i = 0; i < userTasksWithData.length; i++) {
            if (userTasksWithData[i].status) {
                completedTasks++;
            } else {
                pendingTasks++;
                totalStakeInPending += userTasksWithData[i].stakeAmount;
            }
        }
        
        assertEq(completedTasks, 2, "Deve ter 2 tarefas concluidas");
        assertEq(pendingTasks, 2, "Deve ter 2 tarefas pendentes");
        assertEq(totalStakeInPending, stakeAmount * 2, "Stake total pendente deve ser 2x stakeAmount");
    }

    // 🔄 Teste 5: getUserTasksWithData com usuário sem tarefas
    function test_GetUserTasksWithData_EmptyUser() public {
        address emptyUser = makeAddr("emptyUser");
        
        TaskManager.Task[] memory emptyUserTasks = taskManager.getUserTasksWithData(emptyUser);
        
        assertEq(emptyUserTasks.length, 0, "Usuario sem tarefas deve retornar array vazio");
    }
}
