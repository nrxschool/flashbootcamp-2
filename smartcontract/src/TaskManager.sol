// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

// Criar um contrato que gerencia tarefas
// Tarefas devem ter um titulo, descrição, data de criação, data de conclusão, status e valor de stake em wei
// Status deve ser um enum com os valores: "Pendente", "Concluída"
// Tarefas devem ser criadas por um endereço específico
// Tarefas devem ser atualizadas o status de concluido por um endereço específico
// Tarefas devem ter prazo de conclusão (timestamp)

event TaskCreated(uint256 id, string title, string description, uint256 createdAt, address creator);
event TaskCompleted(uint256 id, uint256 completedAt);

contract TaskManager {
    struct Task {
        uint256 id;
        string title;
        string description;
        uint256 createdAt;
        uint256 completedAt;
        bool status;
        address creator;
        uint256 deadline;
    }

    mapping(uint256 => Task) public tasks;

    uint256 public taskCount = 0;

    function createTask(string memory _title, string memory _description, uint256 _deadline) public payable {
        require(msg.value >= 0.0000001 ether, "Valor do stake deve ser maior que 0.0000001 ether");
        require(_deadline > block.timestamp, "Prazo de conclusao deve ser maior que a data atual");
        
        taskCount++;
        tasks[taskCount] = Task(taskCount, _title, _description, block.timestamp, 0, false, msg.sender, _deadline);

        emit TaskCreated(taskCount, _title, _description, block.timestamp, msg.sender);
    }

    function completeTask(uint256 _id) public {
        Task storage task = tasks[_id];
        require(task.creator == msg.sender, "Voce nao e o criador da tarefa");
        require(!task.status, "Tarefa ja foi concluida");
       
        task.status = true;
        task.completedAt = block.timestamp;

        emit TaskCompleted(_id, block.timestamp);
    }

    function getTask(uint256 _id) public view returns (Task memory) {
        return tasks[_id];
    }

    function getTaskCount() public view returns (uint256) {
        return taskCount;
    }
}