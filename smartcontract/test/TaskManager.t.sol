// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {TaskManager} from "../src/TaskManager.sol";

contract TaskManagerTest is Test {
    TaskManager public taskManager;

    address public user1 = makeAddr("user1");

    function setUp() public {
        taskManager = new TaskManager();
        // Dar ETH para os usuários de teste
        vm.deal(user1, 1 ether);
    }

    function test_CreateTask() public {
        vm.prank(user1);
        taskManager.createTask{value: 0.0000001 ether}("titulo", "descricao", block.timestamp + 1000);
        assertEq(taskManager.getTaskCount(), 1);
    }

    function test_CompleteTask() public {
        vm.prank(user1);
        taskManager.createTask{value: 0.0000001 ether}("titulo", "descricao", block.timestamp + 1000);
        
        vm.prank(user1);
        taskManager.completeTask(1);
        
        TaskManager.Task memory task = taskManager.getTask(1);
        assertEq(task.status, true);
    }

    function test_GetTask() public {
        vm.prank(user1);
        taskManager.createTask{value: 0.0000001 ether}("titulo", "descricao", block.timestamp + 1000);
        
        TaskManager.Task memory task = taskManager.getTask(1);
        assertEq(task.title, "titulo");
        assertEq(task.description, "descricao");
        assertEq(task.creator, user1);
        assertEq(task.status, false);
    }

    function test_OnlyCreatorCanComplete() public {
        address user2 = makeAddr("user2");
        vm.deal(user2, 1 ether);
        
        vm.prank(user1);
        taskManager.createTask{value: 0.0000001 ether}("titulo", "descricao", block.timestamp + 1000);
        
        vm.prank(user2);
        vm.expectRevert("Voce nao e o criador da tarefa");
        taskManager.completeTask(1);
    }

    function test_CannotCompleteAlreadyCompletedTask() public {
        vm.prank(user1);
        taskManager.createTask{value: 0.0000001 ether}("titulo", "descricao", block.timestamp + 1000);
        
        vm.prank(user1);
        taskManager.completeTask(1);
        
        vm.prank(user1);
        vm.expectRevert("Tarefa ja foi concluida");
        taskManager.completeTask(1);
    }

    function test_RevertIfStakeTooLow() public {
        vm.prank(user1);
        vm.expectRevert("Valor do stake deve ser maior que 0.0000001 ether");
        taskManager.createTask{value: 0.00000001 ether}("titulo", "descricao", block.timestamp + 1000);
    }

    function test_RevertIfDeadlineInPast() public {
        vm.prank(user1);
        vm.expectRevert("Prazo de conclusao deve ser maior que a data atual");
        taskManager.createTask{value: 0.0000001 ether}("titulo", "descricao", block.timestamp - 1);
    }
}
