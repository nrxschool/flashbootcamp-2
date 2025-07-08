# 📝 TaskManager Smart Contract - Guia Didático Completo

## 🎯 O que é este projeto?

Este é um **Smart Contract** (contrato inteligente) escrito em **Solidity** que funciona como um gerenciador de tarefas descentralizado na blockchain Ethereum. Imagine um aplicativo de lista de tarefas, mas que funciona de forma descentralizada, sem precisar de um servidor central!

---

## 🧠 Conceitos Básicos Para Entender

### O que é um Smart Contract?
É como um programa de computador que roda na blockchain. Uma vez publicado, ele funciona automaticamente, sem precisar de ninguém para controlá-lo.

### O que é Solidity?
É a linguagem de programação usada para escrever smart contracts no Ethereum (como JavaScript é para sites).

### O que é uma Struct?
É como uma "ficha" que guarda várias informações relacionadas. Nossa struct `Task` é como uma ficha de tarefa.

### O que é um Timestamp?
É um número que representa uma data/hora específica. Na blockchain Ethereum, timestamps são contados em segundos desde 1º de janeiro de 1970 (Unix timestamp). Por exemplo:
- `1609459200` = 1º de janeiro de 2021
- `1735689600` = 1º de janeiro de 2025

---

## 🔍 Análise Detalhada do Código

### 1. **Declaração da Licença e Versão**

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;
```

**🤔 Por que isso existe?**
- `SPDX-License-Identifier: MIT`: Define que o código é open source (qualquer um pode usar)
- `pragma solidity ^0.8.13`: Especifica que o código precisa da versão 0.8.13 ou superior do Solidity para funcionar

**💡 Analogia**: É como dizer "este documento foi feito no Word 2019 ou superior"

---

### 2. **Estrutura da Tarefa (Struct Task)**

```solidity
struct Task {
    uint256 id;           // Número único da tarefa
    string title;         // Título da tarefa
    string description;   // Descrição detalhada
    uint256 createdAt;    // Quando foi criada (timestamp)
    uint256 completedAt;  // Quando foi concluída (timestamp)
    bool status;          // true = concluída, false = pendente
    address creator;      // Endereço de quem criou a tarefa
    uint256 deadline;     // Prazo para conclusão (timestamp)
}
```

**🤔 Por que cada campo?**

- **`id`**: Como o RG de uma pessoa, cada tarefa tem um número único
- **`title`**: O nome da tarefa (ex: "Estudar Solidity")
- **`description`**: Detalhes da tarefa (ex: "Completar o curso de smart contracts")
- **`createdAt`**: Data/hora exata da criação (em formato timestamp)
- **`completedAt`**: Data/hora quando foi marcada como concluída
- **`status`**: Como uma checkbox - marcada (true) ou desmarcada (false)
- **`creator`**: O "dono" da tarefa (endereço da carteira que criou)
- **`deadline`**: Data limite para completar a tarefa (evita procrastinação!)

**💡 Analogia**: É como uma agenda onde cada página tem: número da página, título da tarefa, descrição, data de criação, data de conclusão, status, quem escreveu e **prazo final**.

---

### 3. **Armazenamento de Dados**

```solidity
mapping(uint256 => Task) public tasks;
uint256 public taskCount = 0;
```

**🤔 O que isso faz?**

- **`mapping(uint256 => Task) public tasks`**: Como um arquivo com gavetas numeradas. Cada número (ID) abre uma gaveta com uma tarefa específica
- **`uint256 public taskCount = 0`**: Um contador que sempre sabe quantas tarefas existem

**💡 Analogia**: 
- `mapping` = armário com gavetas numeradas
- `taskCount` = etiqueta na porta do armário mostrando quantas gavetas estão ocupadas

**🔧 Por que `public`?**
Significa que qualquer pessoa pode ler esses dados da blockchain (mas não alterar).

---

### 4. **Função de Criar Tarefa**

```solidity
function createTask(string memory _title, string memory _description, uint256 _deadline) public payable {
```

**🤔 O que significa cada parte?**

- **`function`**: Palavra-chave que indica "aqui começa uma função"
- **`createTask`**: Nome da função
- **`string memory _title`**: Recebe um texto (título) temporariamente na memória
- **`string memory _description`**: Recebe um texto (descrição) temporariamente na memória
- **`uint256 _deadline`**: Recebe o timestamp do prazo limite para conclusão
- **`public`**: Qualquer pessoa pode chamar esta função
- **`payable`**: Permite que a função receba ETH junto com a chamada

#### Validação 1: Verificar se não foi enviado dinheiro

```solidity
if (msg.value > 0) {
    revert("Valor do stake deve ser 0");
}
```

**🤔 Por que essa verificação?**
- `msg.value` = quantidade de ETH enviada junto com a transação
- O contrato não quer receber dinheiro para criar tarefas
- `revert()` = cancela a transação e devolve o erro

**💡 Analogia**: É como um formulário que rejeita se você tentar anexar dinheiro onde não é necessário.

#### Validação 2: Verificar se o endereço é válido

```solidity
if (msg.sender == address(0)) {
    revert("Endereco do criador invalido");
}
```

**🤔 Por que essa verificação?**
- `msg.sender` = endereço de quem está chamando a função
- `address(0)` = endereço inválido (0x0000...)
- Garante que só endereços válidos criem tarefas

**💡 Analogia**: Como verificar se a pessoa tem um documento válido antes de deixá-la entrar.

#### Validação 3: Verificar se o prazo é válido

```solidity
if (_deadline < block.timestamp) {
    revert("Prazo de conclusao deve ser maior que a data atual");
}
```

**🤔 Por que essa verificação?**
- `_deadline` = timestamp do prazo limite fornecido pelo usuário
- `block.timestamp` = timestamp atual da blockchain
- Garante que não se pode criar tarefas com prazo no passado

**💡 Analogia**: Como impedir que alguém agende uma reunião para ontem - não faz sentido!

#### Criação da Tarefa

```solidity
taskCount++;
tasks[taskCount] = Task(taskCount, _title, _description, block.timestamp, 0, false, msg.sender, _deadline);
```

**🤔 O que acontece aqui?**

1. **`taskCount++`**: Aumenta o contador (de 0 para 1, de 1 para 2, etc.)
2. **`tasks[taskCount] = Task(...)`**: Cria uma nova tarefa na gaveta com o número atual
3. **Parâmetros da Task**:
   - `taskCount`: ID da tarefa
   - `_title`: Título recebido
   - `_description`: Descrição recebida
   - `block.timestamp`: Hora atual da blockchain (criação)
   - `0`: Ainda não foi concluída (então data de conclusão é 0)
   - `false`: Status pendente
   - `msg.sender`: Quem está criando a tarefa
   - `_deadline`: Prazo limite para conclusão

**💡 Analogia**: É como pegar uma ficha em branco, preenchê-la com os dados **incluindo a data limite** e colocá-la na próxima gaveta disponível do arquivo.

---

### 5. **Função de Completar Tarefa**

```solidity
function completeTask(uint256 _id) public {
```

**🤔 O que faz?**
Marca uma tarefa como concluída, mas só se quem está pedindo for o dono da tarefa.

#### Buscar a Tarefa

```solidity
Task storage task = tasks[_id];
```

**🤔 Por que `storage`?**
- `storage` = modificações ficam permanentes na blockchain
- É como pegar a ficha original para editar (não uma cópia)

#### Validação 1: Verificar se é o dono

```solidity
if (task.creator != msg.sender) {
    revert("Voce nao e o criador da tarefa");
}
```

**🤔 Por que essa verificação?**
- Só quem criou a tarefa pode marcá-la como concluída
- `task.creator` = quem criou
- `msg.sender` = quem está tentando marcar como concluída

**💡 Analogia**: Como um diário pessoal - só você pode marcar suas próprias tarefas como concluídas.

#### Validação 2: Verificar se já não foi concluída

```solidity
if (task.status) {
    revert("Tarefa ja foi concluida");
}
```

**🤔 Por que essa verificação?**
- Evita marcar uma tarefa como concluída duas vezes
- `task.status` = se for `true`, já está concluída

#### Marcar como Concluída

```solidity
task.status = true;
task.completedAt = block.timestamp;
```

**🤔 O que acontece?**
1. Muda o status para `true` (concluída)
2. Registra a hora exata da conclusão

**💡 Analogia**: Como marcar um ✅ na tarefa e anotar a data/hora ao lado.

---

### 6. **Funções de Consulta**

#### Buscar uma Tarefa Específica

```solidity
function getTask(uint256 _id) public view returns (Task memory) {
    return tasks[_id];
}
```

**🤔 Para que serve?**
- `view` = função só para ler (não modifica nada)
- `returns (Task memory)` = retorna uma cópia da tarefa
- Permite ver os detalhes de qualquer tarefa pelo ID

#### Saber Quantas Tarefas Existem

```solidity
function getTaskCount() public view returns (uint256) {
    return taskCount;
}
```

**🤔 Para que serve?**
- Retorna o número total de tarefas criadas
- Útil para saber qual foi a última tarefa criada

**💡 Analogia**: Como perguntar "quantas fichas tem neste arquivo?"

---

## 🎮 Como Usar Este Contrato

### 1. **Criar uma Tarefa**
```javascript
// Exemplo em JavaScript (usando Web3)
const deadline = Math.floor(Date.now() / 1000) + (7 * 24 * 60 * 60); // 7 dias a partir de agora
await contract.createTask("Estudar Blockchain", "Completar curso de Solidity", deadline);
```

### 2. **Marcar como Concluída**
```javascript
await contract.completeTask(1); // Completa a tarefa ID 1
```

### 3. **Ver uma Tarefa**
```javascript
const task = await contract.getTask(1); // Busca tarefa ID 1
console.log(task.title); // "Estudar Blockchain"
console.log(task.deadline); // Timestamp do prazo limite
```

### 4. **Ver Total de Tarefas**
```javascript
const total = await contract.getTaskCount();
console.log(`Total de tarefas: ${total}`);
```

### 5. **Verificar se uma Tarefa Está Atrasada**
```javascript
const task = await contract.getTask(1);
const now = Math.floor(Date.now() / 1000);
const isOverdue = !task.status && (now > task.deadline);
console.log(`Tarefa atrasada: ${isOverdue}`);
```

---

## 🔒 Recursos de Segurança

### 1. **Validação de Proprietário**
- Só quem criou a tarefa pode marcá-la como concluída
- Previne que outras pessoas modifiquem suas tarefas

### 2. **Validação de Estado**
- Não permite marcar uma tarefa como concluída duas vezes
- Garante consistência dos dados

### 3. **Validação de Entrada**
- Verifica se o endereço é válido
- Rejeita valores de ETH desnecessários

---

## 🚀 Possíveis Melhorias

1. **Editar Tarefas**: Permitir alterar título/descrição/prazo
2. **Deletar Tarefas**: Remover tarefas da lista
3. **Categorias**: Adicionar tags ou categorias
4. **Notificações de Prazo**: Alertas automáticos quando se aproxima do deadline
5. **Penalidades**: Sistema de multa por tarefas atrasadas
6. **Recompensas**: Sistema de incentivos por conclusão antecipada
7. **Tarefas Recorrentes**: Permitir criar tarefas que se repetem
8. **Prioridades**: Sistema de alta/média/baixa prioridade

---

## 🎓 Conceitos Aprendidos

- **Structs**: Como organizar dados relacionados
- **Mappings**: Como criar "bancos de dados" simples
- **Validações**: Como garantir segurança
- **Events**: (Não usado aqui, mas seria útil para notificações)
- **Gas Optimization**: Técnicas para economizar taxas

---

## 📚 Próximos Passos

1. Teste o contrato em uma rede de teste (Sepolia)
2. Crie uma interface web para interagir com o contrato
3. Adicione eventos para monitorar atividades
4. Implemente as melhorias sugeridas

---

## 🚀 Como Fazer Deploy na Rede Sepolia (Testnet)

### 📋 **Pré-requisitos**

Antes de fazer o deploy, você precisa ter:

1. **Foundry instalado**
2. **Uma carteira MetaMask ou similar**
3. **ETH de teste na Sepolia**
4. **Uma chave de API do provedor RPC**

---

### 🔧 **Passo 1: Configurar o Ambiente**

#### 1.1 Instalar Foundry (se ainda não tiver)

```bash
curl -L https://foundry.paradigm.xyz | bash
foundryup
```

#### 1.2 Verificar se está no diretório correto

```bash
cd smartcontract
```

#### 1.3 Compilar o contrato

```bash
forge build
```

**✅ Se tudo der certo, você verá:**
```
[⠢] Compiling...
[⠆] Compiling 1 files with 0.8.13
[⠰] Solc 0.8.13 finished in X.XXs
Compiler run successful!
```


Agora você tem tudo o que precisa para fazer o deploy do seu smart contract TaskManager na rede Sepolia! 🚀

---

### 💰 **Passo 2: Obter ETH de Teste**

#### 2.1 Configurar MetaMask para Sepolia

1. Abra o MetaMask
2. Clique na rede no topo
3. Ative "Mostrar redes de teste"
4. Selecione "Sepolia test network"

#### 2.2 Conseguir ETH de teste

Visite um destes faucets (torneiras) para conseguir ETH gratuito:

- **Alchemy Sepolia Faucet**: https://sepoliafaucet.com/
- **Infura Faucet**: https://www.infura.io/faucet/sepolia
- **QuickNode Faucet**: https://faucet.quicknode.com/ethereum/sepolia

**📝 Dica**: Você precisará fazer login com Google/GitHub em alguns faucets.

---

### 🔑 **Passo 3: Configurar Chaves e RPC**

#### 3.1 Obter sua chave privada (⚠️ CUIDADO!)

**⚠️ ATENÇÃO**: Nunca compartilhe sua chave privada real! Use uma carteira separada para testes.

1. No MetaMask, clique nos 3 pontos
2. "Detalhes da conta" → "Exportar chave privada"
3. Digite sua senha
4. **COPIE A CHAVE PRIVADA**

#### 3.2 Obter URL do RPC

**Opção A - Alchemy (Recomendado)**:
1. Crie conta em https://alchemy.com
2. Crie um novo app para "Ethereum Sepolia"
3. Copie a "HTTP URL"

**Opção B - Infura**:
1. Crie conta em https://infura.io
2. Crie novo projeto
3. Selecione "Sepolia" nas configurações
4. Copie o endpoint HTTPS

#### 3.3 Criar arquivo de variáveis de ambiente

Crie um arquivo `.env` na pasta `smartcontract`:

```bash
# No diretório smartcontract
touch .env
```

Adicione suas informações no arquivo `.env`:

```env
PRIVATE_KEY=sua_chave_privada_aqui_sem_0x
SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/sua_api_key_aqui
ETHERSCAN_API_KEY=sua_chave_etherscan_opcional
```

**⚠️ IMPORTANTE**: Adicione `.env` ao `.gitignore` para não subir suas chaves para o GitHub!

```bash
echo ".env" >> .gitignore
```

---

### 🚀 **Passo 4: Fazer o Deploy**

#### 4.1 Verificar se o script está correto

Nosso script já está pronto em `script/TaskManager.s.sol`:

```solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {TaskManager} from "../src/TaskManager.sol";

contract TaskManagerScript is Script {
    TaskManager public taskManager;

    function run() public {
        vm.startBroadcast();
        
        taskManager = new TaskManager();
        
        console.log("TaskManager deployed to:", address(taskManager));
        
        vm.stopBroadcast();
    }
}
```

#### 4.2 Executar o deploy

```bash
# Caregar variáveis de ambiente e fazer deploy
source .env
forge script script/TaskManager.s.sol --rpc-url $SEPOLIA_RPC_URL --private-key $PRIVATE_KEY --broadcast --verify --etherscan-api-key $ETHERSCAN_API_KEY
```

**💡 Comando Explicado:**
- `forge script script/TaskManager.s.sol`: Executa o script de deploy
- `--rpc-url $SEPOLIA_RPC_URL`: Conecta na rede Sepolia
- `--private-key $PRIVATE_KEY`: Usa sua chave privada para assinar
- `--broadcast`: Realmente envia a transação (sem isso é só simulação)
- `--verify`: Verifica o contrato no Etherscan automaticamente
- `--etherscan-api-key`: Chave para verificação (opcional)

#### 4.3 O que você verá durante o deploy

```bash
[⠢] Compiling...
No files changed, compilation skipped

Script ran successfully.

== Logs ==
  TaskManager deployed to: 0x742d35Cc8A7EFB6b8F9F7e7c5A2C4D6E9F8G1H2I

## Setting up 1 EVM.
==========================
Simulated On-chain Traces:

  [Success]Hash: 0x1234567890abcdef...
  Contract Address: 0x742d35Cc8A7EFB6b8F9F7e7c5A2C4D6E9F8G1H2I
  Gas Used: 234567

==========================

ONCHAIN EXECUTION COMPLETE & SUCCESSFUL.
Total Paid: 0.001234567 ETH (234567 gas * avg 5.28 gwei)
```

---

### 🎉 **Passo 5: Verificar o Deploy**

#### 5.1 Verificar na Sepolia Etherscan

1. Vá para https://sepolia.etherscan.io/
2. Cole o endereço do seu contrato
3. Você deve ver:
   - ✅ Contrato verificado (código fonte visível)
   - ✅ Transações
   - ✅ Funções para interagir

#### 5.2 Testar o contrato

Na página do Etherscan, vá para a aba "Write Contract":

1. **Connect to Web3** → Conecte sua MetaMask
2. **createTask**:
   - `_title`: "Minha primeira tarefa on-chain"
   - `_description`: "Deploy realizado com sucesso!"
   - `_deadline`: Use um timestamp futuro (ex: `1735689600` = 1º Jan 2025)
   - Clique "Write"
3. **Confirme a transação** no MetaMask

**🕐 Dica para calcular timestamp:**
- Visite: https://www.epochconverter.com/
- Escolha uma data futura e copie o timestamp

#### 5.3 Verificar se funcionou

Na aba "Read Contract":

1. **getTaskCount**: Deve retornar `1`
2. **getTask**: Digite `1` e veja sua tarefa criada
3. **tasks**: Digite `1` para ver os detalhes completos

---

### 🛠️ **Comandos Úteis**

#### Compilar sem deploy
```bash
forge build
```

#### Executar testes
```bash
forge test
```

#### Simular deploy (sem broadcast)
```bash
forge script script/TaskManager.s.sol --rpc-url $SEPOLIA_RPC_URL
```

#### Ver informações do contrato
```bash
cast code 0xSEU_ENDERECO_DO_CONTRATO --rpc-url $SEPOLIA_RPC_URL
```

#### Interagir com o contrato via CLI
```bash
# Criar uma tarefa (prazo em 7 dias = timestamp atual + 604800 segundos)
cast send 0xSEU_ENDERECO_DO_CONTRATO "createTask(string,string,uint256)" "Título" "Descrição" $(($(date +%s) + 604800)) --private-key $PRIVATE_KEY --rpc-url $SEPOLIA_RPC_URL

# Completar uma tarefa (marcar como concluída)
cast send 0xSEU_ENDERECO_DO_CONTRATO "completeTask(uint256)" 1 --private-key $PRIVATE_KEY --rpc-url $SEPOLIA_RPC_URL

# Ler uma tarefa
cast call 0xSEU_ENDERECO_DO_CONTRATO "getTask(uint256)" 1 --rpc-url $SEPOLIA_RPC_URL

# Verificar se uma tarefa está atrasada (comparar deadline com timestamp atual)
cast call 0xSEU_ENDERECO_DO_CONTRATO "getTask(uint256)" 1 --rpc-url $SEPOLIA_RPC_URL | grep deadline
```

#### Exemplo prático completo
```bash
# 1. Criar uma tarefa com prazo em 1 hora
cast send 0xSEU_ENDERECO_DO_CONTRATO "createTask(string,string,uint256)" "Estudar Solidity" "Completar tutorial de smart contracts" $(($(date +%s) + 3600)) --private-key $PRIVATE_KEY --rpc-url $SEPOLIA_RPC_URL

# 2. Verificar se a tarefa foi criada
cast call 0xSEU_ENDERECO_DO_CONTRATO "getTaskCount()" --rpc-url $SEPOLIA_RPC_URL

# 3. Ler os detalhes da tarefa criada (ID 1)
cast call 0xSEU_ENDERECO_DO_CONTRATO "getTask(uint256)" 1 --rpc-url $SEPOLIA_RPC_URL

# 4. Completar a tarefa
cast send 0xSEU_ENDERECO_DO_CONTRATO "completeTask(uint256)" 1 --private-key $PRIVATE_KEY --rpc-url $SEPOLIA_RPC_URL

# 5. Verificar se foi marcada como concluída
cast call 0xSEU_ENDERECO_DO_CONTRATO "getTask(uint256)" 1 --rpc-url $SEPOLIA_RPC_URL
```

---

### ❌ **Possíveis Erros e Soluções**

#### 🚫 "insufficient funds for gas"
**Problema**: Não tem ETH suficiente na carteira  
**Solução**: Conseguir mais ETH do faucet

#### 🚫 "nonce too low"
**Problema**: Transação com nonce incorreto  
**Solução**: 
```bash
cast nonce SEU_ENDERECO --rpc-url $SEPOLIA_RPC_URL
```

#### 🚫 "invalid private key"
**Problema**: Chave privada incorreta no .env  
**Solução**: Verificar se a chave está sem o prefixo "0x"

#### 🚫 "failed to verify contract"
**Problema**: Verificação no Etherscan falhou  
**Solução**: Verificar manualmente ou tentar novamente depois

#### 🚫 "Prazo de conclusao deve ser maior que a data atual"
**Problema**: Tentando criar tarefa com deadline no passado  
**Solução**: Usar um timestamp futuro para o deadline
```bash
# Exemplo: deadline em 7 dias
deadline=$(($(date +%s) + 604800))
```

---

### 🎯 **Próximos Passos Após o Deploy**

1. **Salvar informações importantes**:
   - Endereço do contrato
   - Número do bloco do deploy
   - Hash da transação

2. **Documentar seu contrato**:
   - Adicionar o endereço ao README
   - Criar interface web para interagir

3. **Monitorar atividade**:
   - Usar Etherscan para ver transações
   - Configurar alertas de atividade

4. **Integrar com frontend**:
   - Usar Web3.js ou Ethers.js
   - Conectar com seu app React/Next.js

---

## 🏆 **Parabéns!**

Você acabou de fazer seu primeiro deploy de um smart contract na blockchain Ethereum! 🎉

Seu contrato agora está rodando de forma descentralizada e qualquer pessoa no mundo pode interagir com ele usando o endereço do contrato.

**📝 Anote sempre**:
- **Endereço do contrato**: `0x...`
- **Rede**: Sepolia Testnet
- **Explorer**: https://sepolia.etherscan.io/address/SEU_ENDERECO

---

*Este README foi criado para fins educacionais, explicando cada conceito de forma didática para iniciantes em blockchain e Solidity.*