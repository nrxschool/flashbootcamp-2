# Web3 todo interface

*Automatically synced with your [v0.dev](https://v0.dev) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/manoelgomesdevs-projects/v0-web3-todo-interface)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/Tw7JzfnvoEm)

## Overview

This repository will stay in sync with your deployed chats on [v0.dev](https://v0.dev).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.dev](https://v0.dev).

## Deployment

Your project is live at:

**[https://vercel.com/manoelgomesdevs-projects/v0-web3-todo-interface](https://vercel.com/manoelgomesdevs-projects/v0-web3-todo-interface)**

## Build your app

Continue building your app on:

**[https://v0.dev/chat/projects/Tw7JzfnvoEm](https://v0.dev/chat/projects/Tw7JzfnvoEm)**

## How It Works

1. Create and modify your project using [v0.dev](https://v0.dev)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

---

## 📚 Aula 1

### 🚀 Prompt para criar seu Front com mais agilidade

```
WEB3 TODO — Interface de Usuário

O objetivo deste projeto é desenvolver a interface de usuário do WEB3 TODO, um aplicativo de gerenciamento de tarefas com integração à tecnologia Web3. O sistema permitirá que os usuários conectem sua carteira digital, criem e acompanhem tarefas, além de visualizarem métricas em tempo real, sempre priorizando a usabilidade e o design moderno.

A estrutura da interface é dividida em três áreas principais:

1. Cabeçalho

Exibir no topo da página um botão de destaque com o rótulo "Conectar Carteira".

Abaixo do botão, apresentar uma mensagem de alerta:
"Conecte sua carteira para gerenciar suas tarefas na blockchain."

O botão e a mensagem devem indicar visualmente o status da conexão com a carteira, facilitando o entendimento do usuário sobre o que está ou não disponível.

2. Seção de Métricas

Criar uma grade horizontal com quatro cards informativos:

Total de Tarefas

Tarefas Concluídas

Tarefas Pendentes

Wei em Stake

Cada card deve:

Utilizar cores que remetam à tecnologia, como azul cobalto, ciano elétrico e violeta digital.

Conter ícones visuais que facilitem a leitura rápida dos dados.

3. Seção de Tarefas

Exibir o título da seção: "Tarefas".

Ao lado do título, adicionar um botão destacado: "Nova Tarefa".

Exibir a lista de tarefas em formato de cards horizontais, contendo:

Nome da tarefa

Status: Pendente ou Concluído

Descrição

Data de criação

Data de conclusão (se aplicável)

Valor em wei associado

Ícone de ação para "Concluir Tarefa" (sem edição ou exclusão)

Os cards devem:

Reforçar visualmente as ações disponíveis.

Diferenciar claramente tarefas pendentes e tarefas concluídas.

Diretrizes de Design

Estilo Visual

Interface clean e moderna, com tema claro (light mode).

Aplicar a regra 60-30-10 para proporção de cores.

Utilizar no máximo duas cores principais.

Tipografia clara com hierarquia visual definida.

Design minimalista, com espaçamento adequado.

Fornecer feedback visual para:

Ações do usuário

Estados de carregamento

Erros ou validações

Interface responsiva para se adaptar a diferentes dispositivos.

Clareza e Consistência

Utilizar rótulos descritivos e ícones intuitivos.

Manter coerência visual em:

Cores

Tamanhos

Fontes

Espaçamentos

Destacar visualmente elementos que dependem da conexão da carteira.

Interatividade

Fornecer feedback imediato com animações suaves.

Criar transições fluidas entre os diferentes estados da interface.

Botões devem apresentar estados visuais distintos:

Hover

Ativo

Desativado

Carregando

Acessibilidade

Garantir contraste de cores adequado.

Incluir textos alternativos (alt) para ícones e imagens.

Permitir navegação completa por teclado.

Evitar a comunicação exclusiva por cor (ex: não usar só cor para indicar status).

Considerações Finais

A interface deve ser intuitiva e acessível para iniciantes em Web3, deixando claro quando determinadas funcionalidades exigem a carteira conectada. Todos os elementos interativos devem responder com feedback visual, e a experiência deve manter consistência e fluidez em toda a jornada do usuário.
```

---

## 🎓 Aula 2

### 🔗 O que é Blockchain Ethereum?

**Blockchain** é como um **livro de registros digital** que funciona de forma descentralizada:

- **📖 Livro Público**: Todas as transações ficam registradas e visíveis para todos
- **🔒 Imutável**: Uma vez registrado, não pode ser alterado ou apagado
- **🌐 Descentralizado**: Não há uma autoridade central controlando
- **⛓️ Em Blocos**: Informações organizadas em "blocos" conectados em sequência

**Ethereum** é uma blockchain especial que permite executar **programas** (smart contracts), não apenas transferir dinheiro como o Bitcoin.

### 📋 O que é Smart Contract?

**Smart Contract** é um **programa de computador** que roda na blockchain:

- **🤖 Automático**: Executa sozinho quando as condições são atendidas
- **📝 Código é Lei**: As regras estão escritas em código e não podem ser quebradas
- **🔍 Transparente**: Qualquer pessoa pode ver o código e verificar como funciona
- **💰 Lida com Dinheiro**: Pode receber, guardar e enviar criptomoedas

**Exemplo prático**: 
- Você cria uma tarefa no nosso sistema
- Envia 0.001 ETH como "aposta" 
- Se completar no prazo = recebe o dinheiro de volta
- Se atrasar = perde o dinheiro
- Tudo acontece automaticamente, sem intermediários!

### ⛽ O que é "Gas"?

**Gas** é a **"gasolina"** da blockchain Ethereum:

- **💸 Taxa de Transação**: Você paga para usar a blockchain
- **⚡ Energia Computacional**: Quanto mais complexa a operação, mais gas custa
- **👷 Pagamento aos Mineradores**: Quem mantém a rede funcionando recebe essas taxas
- **🚀 Velocidade**: Pagar mais gas = transação mais rápida

**Analogia simples**:
- Blockchain = Estrada
- Smart Contract = Destino  
- Gas = Combustível para chegar lá
- Mais gas = Viagem mais rápida, menos gas = Viagem mais lenta

**Exemplo de custos**:
- Criar tarefa: ~50,000 gas
- Completar tarefa: ~30,000 gas  
- Consultar dados: 0 gas (leitura é grátis!)

**💡 Dica**: Gas varia conforme a demanda da rede. Em horários de pico, fica mais caro!

### 💻 Entendendo Solidity - A Linguagem dos Smart Contracts

**Solidity** é como o **"idioma oficial"** para escrever contratos inteligentes no Ethereum.

#### 🌍 **Onde Solidity é Usado?**

**Analogia**: Como **idiomas do mundo real**:

- **Português**: Usado no Brasil, Portugal, alguns países da África
- **Inglês**: Usado nos EUA, Inglaterra, Austrália
- **Solidity**: Usado em **blockchains compatíveis com Ethereum**

**Principais blockchains que "falam" Solidity**:
- 🔷 **Ethereum** (a blockchain original)
- 🟣 **Polygon** (mais rápida e barata)
- 🟡 **Binance Smart Chain** (BSC)
- 🔵 **Avalanche** 
- ⚪ **Arbitrum** e **Optimism** (Layer 2 do Ethereum)

#### 📚 **Conceitos Básicos de Solidity**

#### 🏗️ **1. Struct - O "Formulário Padrão"**

```solidity
struct Task {
    uint256 id;
    string title;
    bool isCompleted;
}
```

**Analogia**: Como **formulário de cadastro** médico:

- **Struct** = O **modelo em branco** do formulário
- Cada struct define **exatamente quais campos** existem
- É como dizer: "Todo paciente tem: Nome, CPF, Idade"
- **Reutilizável**: Você pode preencher **milhares** de formulários iguais

**No nosso caso**:
- `Task` = Modelo do formulário de tarefa
- Toda tarefa **sempre** tem: id, título, descrição, prazo, etc.
- É como ter um **"carimbo"** que sempre cria fichas idênticas

#### 💾 **2. Memory vs Storage - "Caderno vs Arquivo"**

**Analogia**: Como **diferentes tipos de anotação**:

**📝 Memory - "Rascunho"**:
```solidity
string memory tempTitle = "Estudar Solidity";
```
- É como escrever num **papel rascunho**
- **Temporário**: Depois que a função termina, some
- **Rápido**: Não custa muito gas
- **Uso**: Calculations, variáveis temporárias

**📁 Storage - "Arquivo Permanente"**:
```solidity
Task storage task = tasks[1];  // Pegando uma tarefa já salva
task.isCompleted = true;       // Modificando permanentemente
```
- É como escrever num **arquivo oficial**
- **Permanente**: Fica gravado na blockchain para sempre
- **Caro**: Custa mais gas (você está pagando pelo "papel oficial")
- **Uso**: Dados que precisam ser salvos

**Exemplo Prático**:
```solidity
function completeTask(uint256 _taskId) public {
    string memory message = "Completing task...";  // MEMORY (temporário)
    Task storage task = tasks[_taskId];             // STORAGE (permanente)
    task.isCompleted = true;                        // Modifica permanentemente
}
```

#### 🔢 **3. Tipos de Dados Básicos**

**Analogia**: Como **tipos de gaveta** para guardar coisas:

```solidity
uint256 public totalTasks;           // Gaveta para NÚMEROS (sempre positivos)
string public title;                 // Gaveta para TEXTO
bool public isCompleted;             // Gaveta para SIM/NÃO
address public creator;              // Gaveta para ENDEREÇOS da blockchain
mapping(uint256 => Task) tasks;      // Gaveta para DICIONÁRIOS (chave → valor)
```

- **`uint256`**: Como gaveta para **"números grandes positivos"** (0, 1, 2, 1000000...)
- **`string`**: Como gaveta para **"textos"** ("João", "Estudar Solidity")
- **`bool`**: Como gaveta para **"verdadeiro/falso"** (true/false, sim/não)
- **`address`**: Como gaveta para **"CPF da blockchain"** (0x1a2b3c4d...)
- **`mapping`**: Como gaveta para **"agenda telefônica"** (nome → telefone)

#### 🛡️ **4. Modificadores de Visibilidade**

**Analogia**: Como **níveis de privacidade** numa empresa:

```solidity
uint256 public totalTasks;     // PÚBLICO - Qualquer um pode ver
uint256 private secretData;    // PRIVADO - Só este contrato vê
uint256 internal teamData;     // INTERNO - Só "funcionários" (contratos filhos) veem
```

- **`public`**: Como **"mural da empresa"** - todo mundo pode ler
- **`private`**: Como **"cofre do diretor"** - só o próprio contrato acessa
- **`internal`**: Como **"pasta da equipe"** - só contratos "da família" acessam

#### ⚡ **5. Functions - As "Máquinas" do Contrato**

```solidity
function createTask(string memory _title) public payable returns (uint256) {
    // Código aqui
    return newTaskId;
}
```

**Partes da função**:
- **`function`**: "Esta é uma máquina"
- **`createTask`**: Nome da máquina
- **`(string memory _title)`**: "Ingredientes" que você coloca na máquina
- **`public`**: "Qualquer um pode usar esta máquina"
- **`payable`**: "Esta máquina aceita dinheiro"
- **`returns (uint256)`**: "Esta máquina devolve um número"

### 🔨 Framework Foundry - A "Oficina Profissional"

**Foundry** é como uma **oficina mecânica completa** para desenvolver smart contracts.

#### 🎯 **Por que Foundry é Especial?**

**Analogia**: Comparando **oficinas**:

**🔧 Oficina Antiga (Remix, Truffle)**:
- Como oficina de **"fundo de quintal"**
- Ferramentas básicas
- Tudo manual e lento
- Difícil de organizar projetos grandes

**🏭 Foundry - "Oficina da Mercedes"**:
- Como oficina **profissional de montadora**
- Ferramentas de última geração
- Tudo automatizado e rápido
- Organização industrial

#### ⚙️ **Ferramentas do Foundry**

**1. 🔨 Forge - O "Martelo Inteligente"**:
```bash
forge build    # Constrói o contrato
forge test     # Testa todas as funcionalidades
forge deploy   # Coloca na blockchain
```
- **Analogia**: Como **robô de montagem** que faz tudo automaticamente

**2. 📊 Cast - O "Medidor Universal"**:
```bash
cast call 0x... "totalTasks()"  # Consulta dados do contrato
cast send 0x... "createTask()"  # Executa função
```
- **Analogia**: Como **multímetro profissional** que mede qualquer coisa

**3. ⚡ Anvil - A "Bancada de Teste"**:
```bash
anvil  # Cria blockchain local para testes
```
- **Analogia**: Como **bancada com todos os equipamentos** para testar peças

#### 🚀 **Vantagens do Foundry**

**1. 🏃‍♂️ Velocidade Extrema**:
- **Testes rodam em milissegundos** (vs. segundos em outras ferramentas)
- Como comparar **Ferrari vs. bicicleta**

**2. 🧪 Testes em Solidity**:
- Você escreve testes **na mesma linguagem** do contrato
- Como mecânico **usar as mesmas ferramentas** para construir e testar

**3. 📦 Gestão de Dependências**:
```bash
forge install OpenZeppelin/openzeppelin-contracts
```
- Como **loja de auto-peças integrada** na oficina

**4. 🔍 Debugging Avançado**:
- Mostra **exatamente onde** o erro aconteceu
- Como **raio-X** que mostra problema interno

**5. ⛽ Análise de Gas**:
- Calcula **exatamente quanto** cada função custa
- Como **calculadora de combustível** precisa

#### 📦 **Instalação do Foundry - "Montando sua Oficina"**

**Analogia**: Como **montar uma oficina profissional** em casa - você precisa das ferramentas certas!

#### 🔧 **Pré-requisitos (O que você precisa ter)**

**1. 💻 Sistema Operacional Compatível**:
- ✅ **Linux** (recomendado)
- ✅ **macOS** 
- ✅ **Windows** (via WSL - Windows Subsystem for Linux)

**Analogia**: Como verificar se sua **garagem tem espaço** para a oficina.

**2. 🦀 Rust (Linguagem de Programação)**:
- Foundry é escrito em **Rust**
- É como o **"motor"** que faz tudo funcionar

**3. 📋 Git (Controle de Versão)**:
- Para baixar bibliotecas e gerenciar código
- Como o **"sistema de entrega"** da oficina

#### 🚀 **Instalação Passo a Passo**

#### **Método 1: Instalação Automática (Recomendado)**

**1. 📥 Instalar Foundry com um comando:**

```bash
curl -L https://foundry.paradigm.xyz | bash
```

**Analogia**: Como **"kit de oficina automático"** - um caminhão chega e instala tudo de uma vez!

**2. 🔄 Reiniciar o terminal ou executar:**

```bash
source ~/.bashrc
```

**3. 📦 Instalar as ferramentas:**

```bash
foundryup
```

**Analogia**: Como **"ligar todas as máquinas"** da oficina pela primeira vez.

#### **Método 2: Instalação Manual (Para Usuários Avançados)**

```bash
# 1. Instalar Rust (se não tiver)
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# 2. Instalar Foundry via Cargo (gerenciador do Rust)
cargo install --git https://github.com/foundry-rs/foundry foundry-cli anvil --bins --locked
```

#### **Para Windows (WSL)**

**1. 🪟 Instalar WSL primeiro:**

```powershell
wsl --install Ubuntu
```

**2. 🐧 Dentro do WSL, seguir os passos do Linux:**

```bash
curl -L https://foundry.paradigm.xyz | bash
foundryup
```

**Analogia**: Como **"construir uma oficina dentro do porão"** (WSL é como o porão do Windows).

#### ✅ **Verificando se Funcionou**

**Teste se as ferramentas estão instaladas:**

```bash
forge --version    # Deve mostrar versão do Forge
cast --version     # Deve mostrar versão do Cast  
anvil --version    # Deve mostrar versão do Anvil
```

**Analogia**: Como **"testar se todas as máquinas ligam"** na sua nova oficina.

#### 🛠️ **Criando seu Primeiro Projeto**

```bash
# 1. Criar novo projeto
forge init meu-primeiro-contrato

# 2. Entrar na pasta
cd meu-primeiro-contrato

# 3. Compilar contratos de exemplo
forge build

# 4. Rodar testes
forge test
```

**Estrutura criada automaticamente:**
```
meu-primeiro-contrato/
├── src/
│   └── Counter.sol           # Contrato de exemplo
├── test/
│   └── Counter.t.sol         # Teste de exemplo
├── script/
│   └── Counter.s.sol         # Script de deploy
├── foundry.toml              # Configurações
└── lib/                      # Bibliotecas (vazio inicialmente)
```

**Analogia**: Como receber uma **"oficina pré-montada"** com tudo organizado e um projeto de exemplo para você começar!

#### 🚨 **Problemas Comuns e Soluções**

**1. 💣 "command not found: forge"**

**Solução**: Reiniciar terminal ou executar:
```bash
source ~/.bashrc
# ou
source ~/.zshrc
```

**2. 🐌 Instalação muito lenta**

**Solução**: Usar um VPN ou tentar em horário diferente:
```bash
# Usar proxy se necessário
export https_proxy=http://proxy:port
```

**3. 🪟 Problemas no Windows**

**Solução**: Instalar WSL2:
```powershell
# No PowerShell como administrador
wsl --install
wsl --set-default-version 2
```

#### 💡 **Dicas Pro**

**1. 🔄 Manter Atualizado:**
```bash
foundryup  # Atualiza para a versão mais recente
```

**2. 📚 Instalar Bibliotecas Úteis:**
```bash
# OpenZeppelin (biblioteca de segurança)
forge install OpenZeppelin/openzeppelin-contracts

# Solmate (biblioteca otimizada)
forge install transmissions11/solmate
```

**3. ⚙️ Configurar VS Code:**
- Instalar extensão "Solidity"
- Configurar para usar Foundry como formatter

**Analogia**: Como **"personalizar sua oficina"** com ferramentas extras e organização própria!

#### 💼 **Foundry vs. Outras Ferramentas**

| Característica | Foundry | Hardhat | Remix |
|---|---|---|---|
| **Velocidade** | 🏎️ Ferrari | 🚗 Carro normal | 🚲 Bicicleta |
| **Linguagem dos testes** | Solidity | JavaScript | Manual |
| **Instalação** | 1 comando | Configuração complexa | Browser |
| **Para iniciantes** | 📚 Curva de aprendizado | 😊 Mais fácil | 🎯 Muito simples |
| **Para profissionais** | 👑 Padrão da indústria | ✅ Boa opção | ❌ Limitado |

#### 🏗️ **Estrutura de Projeto Foundry**

```
meu-projeto/
├── src/           # Contratos principais
├── test/          # Testes
├── script/        # Scripts de deploy  
├── lib/           # Bibliotecas externas
└── foundry.toml   # Configurações
```

**Analogia**: Como **organização de oficina profissional**:
- `src/` = **"Área de montagem"** (onde você constrói)
- `test/` = **"Área de testes"** (onde você verifica qualidade)
- `script/` = **"Manuais de procedimento"** (como fazer deploy)
- `lib/` = **"Estoque de peças"** (bibliotecas de terceiros)

**🎯 Conclusão**: Foundry é como **"evoluir de oficina caseira para fábrica da Tesla"** - mais profissional, mais rápido, mais confiável!

### 📝 Anatomia do Smart Contract TaskManager

Imagine que vamos construir uma **fábrica de gerenciamento de tarefas** na blockchain. Vamos dissecar cada peça desta máquina:

#### 🏗️ **Estrutura Básica do Contrato - A "Certidão de Nascimento"**

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract TaskManager {
    // Código do contrato aqui
}
```

**Analogia**: É como o **cabeçalho de um documento oficial**:

- **`SPDX-License-Identifier: MIT`**: Como uma **"licença de uso"** - MIT significa "qualquer um pode usar gratuitamente"
  - É como colocar "Domínio Público" numa música
  
- **`pragma solidity ^0.8.13`**: Define a **"versão do idioma"** que estamos falando
  - Como dizer "este documento está escrito em Português versão 2024"
  - `^0.8.13` = "versão 8.13 ou mais nova, mas não versão 9"
  
- **`contract TaskManager`**: É o **nome da nossa empresa/fábrica**
  - Como "Papelaria João" ou "Padaria do Seu José"

#### 💎 **Variáveis e Constantes - As "Regras da Casa"**

```solidity
uint256 public constant MINIMUM_STAKE = 0.001 ether;
uint256 public totalTasks;
```

**Analogia**: Como **regras afixadas na parede** de um estabelecimento:

- **`MINIMUM_STAKE = 0.001 ether`**: É o **"preço mínimo da entrada"**
  - Como uma placa: "Taxa mínima: R$ 5,00"
  - `constant` = Esta regra **NUNCA muda** (como "gravada em pedra")
  - `public` = **Todos podem ver** esta regra (está na parede para todos lerem)
  - `uint256` = Tipo de número (sempre positivo, muito grande)
  
- **`totalTasks`**: É o **"contador da porta"** daqueles cinemas
  - Conta quantas pessoas (tarefas) já entraram
  - Começa em 0 e vai aumentando: 1, 2, 3, 4...
  - É como um **"odômetro" de tarefas criadas**

#### 📋 **Struct Task - Nossa "Ficha de Cadastro"**

```solidity
struct Task {
    uint256 id;           // Identificador único
    string title;         // Título da tarefa
    string description;   // Descrição detalhada
    uint256 createdAt;    // Quando foi criada (timestamp)
    uint256 deadline;     // Prazo limite (timestamp)
    bool isCompleted;     // Se foi concluída (true/false)
    address creator;      // Quem criou a tarefa
    uint256 stake;        // Valor apostado em wei
    bool stakeProcessed;  // Se o stake já foi processado
}
```

**Analogia**: É como uma **ficha de cadastro médico completa**:

- **`id`**: Número da **carteirinha do paciente** (único, nunca repete)
- **`title`**: **Nome do tratamento** ("Consulta cardiológica")
- **`description`**: **Detalhes do procedimento** ("Exame completo do coração")
- **`createdAt`**: **Data de abertura da ficha** (quando foi criado o cadastro)
- **`deadline`**: **Data da consulta marcada** (prazo para completar)
- **`isCompleted`**: **"Paciente compareceu?"** (✅ Sim / ❌ Não)
- **`creator`**: **Endereço de quem fez o agendamento** (CPF da pessoa)
- **`stake`**: **Valor da consulta** (quanto foi pago)
- **`stakeProcessed`**: **"Pagamento foi processado?"** (evita cobrar duas vezes)

**Por que struct?** É como ter um **"formulário padrão"** - toda tarefa tem exatamente os mesmos campos preenchidos!

#### 🗺️ **Mappings - Nossos "Arquivos Organizados"**

```solidity
mapping(uint256 => Task) public tasks;
mapping(address => uint256[]) public userTasks;
```

**Analogia**: Como **dois sistemas de arquivo diferentes**:

**1. `tasks` - O "Arquivo Geral por Número"**
- É como um **arquivo médico por número de protocolo**
- Você fala: "Quero ver a ficha número 1" → Recebe todos os dados da Tarefa 1
- `uint256` = número da tarefa (1, 2, 3...)
- `Task` = ficha completa com todos os dados
- É como uma **gaveta numerada**: Gaveta 1 = Ficha 1, Gaveta 2 = Ficha 2...

**2. `userTasks` - O "Índice por Pessoa"**
- É como um **caderno de "quem tem consulta marcada"**
- Você fala: "Quais são as consultas do João?" → Recebe: [1, 5, 8] (números das fichas dele)
- `address` = "CPF" da pessoa na blockchain (0x1a2b3c4d...)
- `uint256[]` = lista de números das tarefas daquela pessoa

**Exemplo prático**:
- João criou 3 tarefas (IDs: 1, 3, 5)
- Maria criou 2 tarefas (IDs: 2, 4)
- `tasks[1]` = dados completos da tarefa 1 (do João)
- `userTasks[João]` = [1, 3, 5] (lista das tarefas do João)

#### 📢 **Eventos - O "Jornal da Empresa"**

```solidity
event TaskCreated(uint256 taskId, address creator, string title, uint256 deadline, uint256 stake);
event TaskCompleted(uint256 taskId, address creator, uint256 stakeReturned);
event StakeLost(uint256 taskId, address creator, uint256 stakeLost);
```

**Analogia**: Como **manchetes de jornal que ficam arquivadas para sempre**:

**🔍 Por que eventos?**
- A blockchain é como um **"cofre fechado"** - você não pode "bisbilhotar" o que está dentro
- Eventos são como **"recortes de jornal"** que saem do cofre e ficam acessíveis
- É uma forma de **"avisar o mundo exterior"** o que aconteceu

**📰 Nossos "tipos de notícia"**:

**1. `TaskCreated` - "Nascimentos"**
- **Manchete**: "Nova tarefa foi criada!"
- **Detalhes**: ID da tarefa, quem criou, título, prazo, quanto apostou
- Como anunciar: "Família Silva teve um bebê! Nome: João, nasceu dia 15/03"

**2. `TaskCompleted` - "Sucessos"**
- **Manchete**: "Tarefa concluída no prazo!"
- **Detalhes**: Qual tarefa, quem completou, quanto dinheiro recebeu de volta
- Como anunciar: "João Silva se formou! Recebeu diploma e prêmio de R$ 1000"

**3. `StakeLost` - "Penalties"**
- **Manchete**: "Prazo perdido!"
- **Detalhes**: Qual tarefa, quem perdeu o prazo, quanto dinheiro foi perdido
- Como anunciar: "João Silva perdeu aposta de R$ 500 por não entregar projeto"

**🔗 Importante**: Estes "jornais" ficam **gravados para sempre** na blockchain - qualquer site pode ler e mostrar essas notificações!

#### 🛠️ **Função createTask() - A "Máquina de Fazer Tarefas"**

```solidity
function createTask(string memory _title, string memory _description, uint256 _deadline) 
    public payable
{
    // Verificações de segurança
    require(_deadline > block.timestamp, "Deadline must be in the future");
    require(msg.value >= MINIMUM_STAKE, "Stake must be at least 0.001 ether");

    totalTasks++;  // Incrementa contador

    // Cria nova tarefa
    tasks[totalTasks] = Task({
        id: totalTasks,
        title: _title,
        description: _description,
        createdAt: block.timestamp,
        deadline: _deadline,
        isCompleted: false,
        creator: msg.sender,
        stake: msg.value,
        stakeProcessed: false
    });

    userTasks[msg.sender].push(totalTasks);  // Adiciona à lista do usuário
    
    emit TaskCreated(totalTasks, msg.sender, _title, _deadline, msg.value);  // Emite evento
}
```

**Analogia**: Como uma **máquina de fazer apostas em corrida de cavalos**:

**🎰 Como funciona a máquina:**

**Entrada (Parâmetros)**:
- **`_title`**: Nome do seu cavalo ("Estudar Solidity")
- **`_description`**: Descrição da corrida ("Completar curso em 30 dias")
- **`_deadline`**: Data da corrida (timestamp futuro)
- **`payable`**: A máquina **aceita dinheiro** junto com o pedido

**🛡️ Seguranças da Máquina (require)**:
```solidity
require(_deadline > block.timestamp, "Deadline must be in the future");
```
- **Analogia**: Como um **segurança na porta** que verifica se você não está tentando apostar numa corrida que já acabou
- `block.timestamp` = "que horas são agora na blockchain"
- É como dizer: "Só aceito apostas para corridas futuras!"

```solidity
require(msg.value >= MINIMUM_STAKE, "Stake must be at least 0.001 ether");
```
- **Analogia**: Como um **caixa** que verifica se você trouxe dinheiro suficiente
- `msg.value` = quanto dinheiro você colocou na máquina
- É como: "Aposta mínima: R$ 5,00"

**🏭 Produção da Ficha (Criação da Task)**:
```solidity
totalTasks++;  // Gera número sequencial da ficha
```
- Como uma **máquina de senha do banco**: 001, 002, 003...

```solidity
tasks[totalTasks] = Task({...});
```
- **Analogia**: Como **preencher uma ficha de aposta completa**:
  - `id`: Número da sua aposta (único)
  - `title` e `description`: Nome e detalhes do cavalo
  - `createdAt`: "Hora que fez a aposta" (agora)
  - `deadline`: "Hora da corrida"
  - `isCompleted: false`: "Corrida ainda não aconteceu"
  - `creator`: "Seu CPF" (quem fez a aposta)
  - `stake`: "Quanto você apostou"
  - `stakeProcessed: false`: "Pagamento ainda não foi processado"

**📝 Organização (userTasks)**:
```solidity
userTasks[msg.sender].push(totalTasks);
```
- **Analogia**: Como **anotar no seu caderno pessoal**: "Apostas que fiz: 1, 5, 12"
- A máquina lembra **todas as suas apostas**

**📢 Divulgação (Evento)**:
```solidity
emit TaskCreated(...);
```
- **Analogia**: Como **anunciar no alto-falante**: "João Silva fez aposta #5 no cavalo 'Estudar Solidity' para corrida do dia 15!"
- Todo mundo pode **ouvir** este anúncio

#### ✅ **Função completeTask() - O "Juiz da Corrida"**

```solidity
function completeTask(uint256 _taskId) public
{
    // Verificações
    require(_taskId > 0 && _taskId <= totalTasks, "Task does not exist");
    require(tasks[_taskId].creator == msg.sender, "Only task creator can call this function");
    
    Task storage task = tasks[_taskId];
    require(!task.isCompleted, "Task is already completed");
    require(!task.stakeProcessed, "Stake has already been processed");

    task.isCompleted = true;
    task.stakeProcessed = true;

    // Lógica do stake
    if (block.timestamp <= task.deadline) {
        // No prazo = devolve o dinheiro
        (bool success, ) = payable(task.creator).call{value: task.stake}("");
        require(success, "Failed to return stake");
        emit TaskCompleted(_taskId, task.creator, task.stake);
    } else {
        // Atrasado = perde o dinheiro
        emit StakeLost(_taskId, task.creator, task.stake);
    }
}
```

**Analogia**: Como um **juiz rigoroso de corrida** que decide se você ganhou ou perdeu a aposta:

**🔍 Verificações do Juiz (requires)**:

```solidity
require(_taskId > 0 && _taskId <= totalTasks, "Task does not exist");
```
- **Analogia**: "Esta aposta existe?" - Como verificar se o **bilhete é válido**
- Evita que alguém invente números de apostas

```solidity
require(tasks[_taskId].creator == msg.sender, "Only task creator can call this function");
```
- **Analogia**: "Você é realmente dono desta aposta?" - Como pedir **documento de identidade**
- Só quem fez a aposta pode reivindicar o prêmio

```solidity
require(!task.isCompleted, "Task is already completed");
require(!task.stakeProcessed, "Stake has already been processed");
```
- **Analogia**: "Esta corrida já foi julgada?" - Evita **duplicar pagamentos**
- Como carimbar "PAGO" no bilhete para não pagar duas vezes

**📝 Marcação dos Resultados**:
```solidity
task.isCompleted = true;
task.stakeProcessed = true;
```
- **Analogia**: Carimbar na ficha: **"CORRIDA FINALIZADA"** e **"PAGAMENTO PROCESSADO"**

**💰 A Grande Decisão - Lógica do Pagamento**:
```solidity
if (block.timestamp <= task.deadline) {
    // GANHOU!
} else {
    // PERDEU!
}
```

**🎯 CENÁRIO 1 - GANHOU (No prazo)**:
```solidity
(bool success, ) = payable(task.creator).call{value: task.stake}("");
require(success, "Failed to return stake");
emit TaskCompleted(_taskId, task.creator, task.stake);
```
- **Analogia**: Como o **caixa do hipódromo pagando sua aposta**
- `payable(task.creator).call{value: task.stake}("")` = "Transferir dinheiro para o ganhador"
- `require(success...)` = "Garantir que o dinheiro chegou na conta"
- `emit TaskCompleted(...)` = "Anunciar no alto-falante: João ganhou R$ 100!"

**💸 CENÁRIO 2 - PERDEU (Atrasado)**:
```solidity
emit StakeLost(_taskId, task.creator, task.stake);
```
- **Analogia**: Como **rasgar o bilhete de aposta perdida**
- O dinheiro fica "na casa" (no contrato)
- `emit StakeLost(...)` = "Anunciar: João perdeu R$ 100 por atraso"

**🎰 Sistema de Incentivos**:
- ⏰ **Chegou no prazo**: Dinheiro volta 100% + sensação de vitória
- ❌ **Atrasou**: Perde o dinheiro + lição aprendida
- 🧠 **Psicologia**: A possibilidade de perder dinheiro **motiva** você a cumprir prazos!

#### 📋 **Funções de Consulta - Os "Relatórios" do Sistema**

Agora vamos entender as funções que **apenas consultam dados** (não gastam gas e não modificam nada):

#### 🔍 **1. getUserTasks() - O "Extrato de Tarefas"**

```solidity
function getUserTasks(address _user) public view returns (uint256[] memory) {
    return userTasks[_user];
}
```

**Analogia**: Como **"pedir extrato bancário"** de uma pessoa específica.

**📖 Explicação:**
- **`address _user`**: "CPF" da pessoa que queremos consultar
- **`uint256[] memory`**: Lista dos **números das tarefas** (não os dados completos)
- **`userTasks[_user]`**: Busca na "agenda" quais tarefas pertencem àquela pessoa
- **Exemplo de retorno**: `[1, 3, 7]` = pessoa tem as tarefas 1, 3 e 7

#### 📊 **2. getUserTasksWithData() - O "Relatório Completo"**

```solidity
function getUserTasksWithData(address _user) public view returns (Task[] memory) {
    uint256[] memory taskIds = userTasks[_user];
    Task[] memory userTasksData = new Task[](taskIds.length);
    
    for (uint256 i = 0; i < taskIds.length; i++) {
        userTasksData[i] = tasks[taskIds[i]];
    }
    
    return userTasksData;
}
```

**Analogia**: Como **"pedir histórico completo"** ao invés de só os números das operações.

**📖 Explicação linha por linha:**

```solidity
uint256[] memory taskIds = userTasks[_user];
```
- **O que faz**: Primeiro pega a **lista de números** das tarefas da pessoa
- **Analogia**: Como pegar a lista "1, 3, 7" do extrato

```solidity
Task[] memory userTasksData = new Task[](taskIds.length);
```
- **O que faz**: Cria um **"relatório em branco"** com espaço para todas as tarefas
- **Analogia**: Como preparar uma pasta com o número exato de folhas necessárias

```solidity
for (uint256 i = 0; i < taskIds.length; i++) {
    userTasksData[i] = tasks[taskIds[i]];
}
```
- **O que faz**: **Para cada número** da lista, busca os **dados completos** da tarefa
- **Analogia**: Como "pegar cada número do extrato e buscar os detalhes completos da operação"

**🚀 Por que esta função é importante:**
- **Uma única chamada**: Ao invés de chamar `getUserTasks()` + várias vezes `getTask()`
- **Mais eficiente**: Economiza gas e tempo
- **Dados completos**: Retorna tudo: título, descrição, prazo, status, etc.

#### 🔍 **3. getTask() - O "Consultor Individual"**

```solidity
function getTask(uint256 _id) public view returns (Task memory) {
    return tasks[_id];
}
```

**Analogia**: Como **"pedir detalhes de uma compra específica"** pelo número da nota fiscal.

**📖 Explicação:**
- **`uint256 _id`**: Número da tarefa que queremos consultar
- **`Task memory`**: Dados completos da tarefa (struct inteira)
- **Uso**: Para ver detalhes de UMA tarefa específica

#### 📊 **4. getTaskCount() - O "Contador Global"**

```solidity
function getTaskCount() public view returns (uint256) {
    return taskCount;
}
```

**Analogia**: Como **"quantas pessoas já se cadastraram"** no sistema.

**📖 Explicação:**
- **Retorna**: Número total de tarefas já criadas por todos os usuários
- **Uso**: Para estatísticas gerais do sistema

#### 💰 **5. getContractBalance() - O "Cofre do Sistema"**

```solidity
function getContractBalance() public view returns (uint256) {
    return address(this).balance;
}
```

**Analogia**: Como **"quanto dinheiro tem no cofre"** da empresa.

**📖 Explicação:**
- **`address(this).balance`**: Saldo total do contrato em wei
- **O que representa**: Todo o ETH apostado em tarefas pendentes + tarefas perdidas
- **Uso**: Para transparência financeira do sistema

#### ⏰ **6. isTaskOverdue() - O "Detector de Atraso"**

```solidity
function isTaskOverdue(uint256 _id) public view returns (bool) {
    Task memory task = tasks[_id];
    return !task.status && block.timestamp > task.deadline;
}
```

**Analogia**: Como **"verificar se a conta está vencida"**.

**📖 Explicação linha por linha:**

```solidity
Task memory task = tasks[_id];
```
- **O que faz**: Busca os dados da tarefa pelo ID

```solidity
return !task.status && block.timestamp > task.deadline;
```
- **`!task.status`**: Tarefa ainda **não foi concluída** (false)
- **`block.timestamp > task.deadline`**: **Agora** é depois do prazo
- **`&&`**: Só é "atrasada" se **AMBAS** as condições forem verdadeiras
- **Retorna**: `true` = atrasada, `false` = não atrasada

**🎯 Lógica completa:**
- ✅ **Concluída no prazo**: `status = true` → não é atrasada
- ✅ **Pendente no prazo**: `status = false` + `agora < prazo` → não é atrasada  
- ❌ **Pendente após prazo**: `status = false` + `agora > prazo` → **É ATRASADA**

### 🧪 Laboratório de Testes (TaskManager.t.sol)

Os testes são como **laboratório de qualidade** - testamos tudo antes de lançar no mercado. Vamos dissecar cada teste para entender como garantimos que nosso contrato funciona perfeitamente:

#### 🔧 **Preparação do Laboratório (Setup)**

```solidity
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
}
```

**Analogia**: Como **montar um laboratório de teste** para uma fábrica de carros:

**📋 Declarações de recursos:**
- **`TaskManager public taskManager`**: O **"protótipo do carro"** que vamos testar
- **`address public user1/user2`**: **"Motoristas de teste"** (bonecos de crash test)
- **`event ...`**: **"Sensores"** que detectam se os eventos corretos foram emitidos

**🏭 Preparação antes de cada teste (`setUp()`):**
- **`taskManager = new TaskManager()`**: **"Construir um carro novo"** para cada teste
- **`vm.deal(user1, 1 ether)`**: **"Dar combustível"** para o motorista de teste
- **Analogia**: Como resetar completamente o laboratório antes de cada experimento

---

#### ✅ **Teste 1: test_CreateTask() - "Teste de Ignição"**

```solidity
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
```

**Analogia**: Como **testar se o carro liga e acelera**:

**🔑 Preparação do Teste:**
```solidity
uint256 stakeAmount = 0.001 ether;
uint256 deadline = block.timestamp + 1000;
```
- **Analogia**: **"Preparar o combustível e definir destino"**
- **stakeAmount**: Quanto "combustível" colocar (0.001 ETH)
- **deadline**: "Quando queremos chegar" (agora + 1000 segundos)

**🚗 Simular motorista:**
```solidity
vm.prank(user1);
```
- **Analogia**: **"Colocar o user1 no banco do motorista"**
- **vm.prank()**: Simula que a próxima ação vem do user1

**🔥 Ação testada:**
```solidity
taskManager.createTask{value: stakeAmount}("Estudar Solidity", "Completar tutorial", deadline);
```
- **Analogia**: **"Virar a chave, pisar no acelerador e partir"**
- **{value: stakeAmount}**: Envia ETH junto com a transação

**🔍 Verificações múltiplas:**
```solidity
assertEq(taskManager.getTaskCount(), 1);  // Contador aumentou?
TaskManager.Task memory task = taskManager.getTask(1);  // Buscar dados da tarefa
assertEq(task.stakeAmount, stakeAmount);  // Valor salvo corretamente?
assertEq(task.deadline, deadline);       // Prazo salvo corretamente?
assertEq(task.status, false);           // Status inicial pendente?
assertEq(task.creator, user1);          // Criador correto?
```
- **Analogia**: **"Verificar se todos os instrumentos do painel funcionam"**

**✅ O que este teste garante:**
- Motor da criação funciona
- Dados são salvos corretamente
- Contador está funcionando
- Valores são preservados

---

#### ✅ **Teste 2: test_CompleteTask() - "Teste de Freios e Devolução"**

```solidity
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
```

**Analogia**: Como **testar freios e sistema de devolução**:

**📊 Medições iniciais:**
```solidity
uint256 initialBalance = user1.balance;
```
- **Analogia**: **"Medir velocidade antes de frear"** (dinheiro inicial)

**🏁 Primeira fase - Acelerar:**
```solidity
vm.prank(user1);
taskManager.createTask{value: stakeAmount}("Estudar Solidity", "Completar tutorial", deadline);
```
- **Analogia**: **"Acelerar até 100 km/h"** (criar tarefa e apostar dinheiro)

**🛑 Segunda fase - Frear:**
```solidity
vm.prank(user1);
taskManager.completeTask(1);
```
- **Analogia**: **"Pisar no freio"** (completar a tarefa)

**🔍 Verificação do sistema de segurança:**
```solidity
uint256 finalBalance = user1.balance;
assertEq(finalBalance, initialBalance);  // Dinheiro voltou?
assertEq(task.status, true);            // Status mudou para concluída?
assertEq(task.stakeReturned, true);     // Flag de devolução ativada?
```
- **Analogia**: **"Confirmar que parou na posição exata e airbag não disparou"**

**✅ O que este teste garante:**
- Sistema de conclusão funciona
- Dinheiro é devolvido corretamente
- Status é atualizado
- Não há vazamentos de dinheiro

---

#### 📋 **Teste 3: test_ListUserTasks() - "Teste do Sistema de Navegação"**

```solidity
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
```

**Analogia**: Como **testar o sistema de navegação GPS completo**:

**🗺️ Programar múltiplos destinos:**
```solidity
vm.startPrank(user1);  // User1 assume controle
// Criar 3 destinos: Casa → Trabalho → Shopping
taskManager.createTask{value: stakeAmount}("Tarefa 1", "Primeira tarefa", deadline);
taskManager.createTask{value: stakeAmount}("Tarefa 2", "Segunda tarefa", deadline);
taskManager.createTask{value: stakeAmount}("Tarefa 3", "Terceira tarefa", deadline);
vm.stopPrank();  // User1 solta controle
```
- **Analogia**: **"Programar rota com 3 paradas"**

**📱 Consultar GPS:**
```solidity
uint256[] memory userTasks = taskManager.getUserTasks(user1);
```
- **Analogia**: **"Perguntar ao GPS: qual minha rota?"**

**🔍 Verificar se GPS lembra tudo:**
```solidity
assertEq(userTasks.length, 3);  // GPS lembra dos 3 destinos?
assertEq(userTasks[0], 1);      // Primeiro destino é o ID 1?
assertEq(userTasks[1], 2);      // Segundo destino é o ID 2?
assertEq(userTasks[2], 3);      // Terceiro destino é o ID 3?
```

**📊 Verificar estatísticas globais:**
```solidity
assertEq(taskManager.getTaskCount(), 3);  // Total no sistema = 3?
```

**🔍 Verificar detalhes individuais:**
```solidity
for (uint i = 0; i < userTasks.length; i++) {
    TaskManager.Task memory task = taskManager.getTask(userTasks[i]);
    assertEq(task.creator, user1);      // Todas pertencem ao user1?
    assertEq(task.stakeAmount, stakeAmount);  // Mesmo valor apostado?
    assertEq(task.status, false);       // Todas ainda pendentes?
}
```
- **Analogia**: **"Verificar cada destino individualmente"**

**✅ O que este teste garante:**
- Sistema de listagem funciona
- Isolamento entre usuários
- Contadores estão corretos
- Dados individuais preservados

---

#### 🚀 **Teste 4: test_GetUserTasksWithData() - "Teste do Relatório Completo"**

```solidity
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
    
    // Verificações extensivas...
}
```

**Analogia**: Como **testar um sistema de relatório empresarial completo**:

**📊 Criar cenário complexo:**
- **4 projetos** do user1 com prazos diferentes
- **1 projeto** do user2 (para testar isolamento)
- **2 projetos concluídos** pelo user1
- **2 projetos pendentes** do user1

**🎯 Buscar relatório completo:**
```solidity
TaskManager.Task[] memory userTasksWithData = taskManager.getUserTasksWithData(user1);
```
- **Analogia**: **"Gerar relatório executivo com todos os detalhes"**

**🔍 Verificações detalhadas:**
- **Quantidade correta**: 4 tarefas do user1
- **Dados individuais**: Título, descrição, criador, stake
- **Status corretos**: 2 concluídas, 2 pendentes
- **Flags corretas**: stakeReturned para as concluídas
- **Isolamento**: User2 tem apenas 1 tarefa
- **Consistência**: Dados idênticos ao `getTask()` individual

**📊 Cálculos de métricas:**
```solidity
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
```
- **Analogia**: **"Calcular estatísticas do relatório"**

**✅ O que este teste garante:**
- Função otimizada funciona corretamente
- Isolamento entre usuários
- Consistência dos dados
- Cálculos de métricas corretos
- Performance (uma chamada vs. múltiplas)

---

#### 🔄 **Teste 5: test_GetUserTasksWithData_EmptyUser() - "Teste de Usuário Vazio"**

```solidity
function test_GetUserTasksWithData_EmptyUser() public {
    address emptyUser = makeAddr("emptyUser");
    
    TaskManager.Task[] memory emptyUserTasks = taskManager.getUserTasksWithData(emptyUser);
    
    assertEq(emptyUserTasks.length, 0, "Usuario sem tarefas deve retornar array vazio");
}
```

**Analogia**: Como **testar o que acontece com cliente novo**:

**🆕 Cliente sem histórico:**
- **emptyUser**: Cliente que nunca fez nada no sistema
- **Expectativa**: Sistema deve retornar lista vazia (não dar erro)

**✅ O que este teste garante:**
- Sistema não quebra com usuários novos
- Arrays vazios são tratados corretamente
- Não há vazamentos entre usuários

---

#### 🎯 **Por que Estes Testes São Cruciais?**

**🛡️ Segurança financeira:**
- **Testa devolução de ETH**: Garante que dinheiro não se perde
- **Verifica isolamento**: User1 não acessa dados do User2
- **Previne reentrancy**: Flags impedem duplos saques

**📊 Confiabilidade dos dados:**
- **Consistência**: Dados são os mesmos em diferentes funções
- **Integridade**: Contadores e listas sempre corretos
- **Performance**: Funções otimizadas funcionam igual às básicas

**🔄 Cobertura completa:**
- **Casos normais**: Criação e conclusão de tarefas
- **Casos extremos**: Usuários vazios, múltiplas tarefas
- **Casos mistos**: Algumas concluídas, outras pendentes

**🚀 Confiança para produção:**
- **Cada linha testada**: Sabemos que tudo funciona
- **Casos reais simulados**: Testamos como usuários reais usariam
- **Prova de funcionamento**: Evidência que o código está correto

**✅ Resultado:** Um contrato **blindado** e pronto para lidar com dinheiro real! 🛡️

#### 🎯 **Dicas de Testes Adicionais - "Expandindo o Laboratório"**

Nosso contrato atual tem 3 testes básicos, mas poderíamos **"testar muito mais"**! Aqui estão ideias de **testes que você pode implementar**:

#### 🛡️ **Testes de Segurança - "Teste de Invasão"**

**Analogia**: Como **testar a segurança de um banco** - tentar todas as formas de roubar!

**1. Teste de Autorização:**
```solidity
function testOnlyOwnerCanComplete() public {
    // Usuário 1 cria tarefa
    // Usuário 2 tenta completar tarefa do usuário 1
    // Deve FALHAR
}
```
- **O que testa**: Se alguém pode completar tarefa de outra pessoa
- **Analogia**: Como testar se **vizinho pode sacar na sua conta**

**2. Teste de Double Spending:**
```solidity
function testCannotCompleteTaskTwice() public {
    // Criar tarefa
    // Completar uma vez (sucesso)
    // Tentar completar segunda vez (deve falhar)
}
```
- **O que testa**: Se é possível receber dinheiro duas vezes
- **Analogia**: Como testar se dá para **sacar o prêmio duas vezes**

**3. Teste de Overflow/Underflow:**
```solidity
function testMassiveTaskCreation() public {
    // Criar 1000+ tarefas
    // Verificar se totalTasks não "quebra"
}
```
- **O que testa**: Se o contador aguenta números gigantes
- **Analogia**: Como testar se **odômetro não volta ao zero** quando chega ao limite

#### ⏰ **Testes de Tempo - "Teste da Máquina do Tempo"**

**Analogia**: Como **testar diferentes cenários temporais** numa corrida!

**1. Teste de Tarefa Atrasada:**
```solidity
function testLateTaskCompletion() public {
    // Criar tarefa com prazo de 1 dia
    // Avançar tempo para 2 dias (vm.warp)
    // Completar tarefa
    // Verificar se stake foi perdido (não devolvido)
}
```
- **O que testa**: Se stake é realmente perdido quando atrasado
- **Analogia**: **Chegar atrasado na corrida** e perder a aposta

**2. Teste de Verificação de Atraso:**
```solidity
function testIsTaskOverdueLogic() public {
    // Criar tarefa
    // Verificar que não está atrasada
    // Avançar tempo após prazo
    // Verificar que está atrasada
    // Completar tarefa
    // Verificar que não está mais "atrasada" (foi concluída)
}
```
- **O que testa**: Se a lógica de "atrasado" funciona corretamente
- **Analogia**: **Cronômetro da corrida** está funcionando direito

#### 💰 **Testes Financeiros - "Teste do Cofre"**

**Analogia**: Como **testar todos os cenários de dinheiro** num cassino!

**1. Teste de Stake Insuficiente:**
```solidity
function testInsufficientStake() public {
    // Tentar criar tarefa com 0.0001 ether (menos que mínimo)
    // Deve FALHAR
}
```
- **O que testa**: Se valores baixos são rejeitados
- **Analogia**: **Tentar apostar centavos** numa mesa que exige reais

**2. Teste de Stake Exato:**
```solidity
function testExactMinimumStake() public {
    // Criar tarefa com exatamente 0.001 ether
    // Deve FUNCIONAR
}
```
- **O que testa**: Se o valor mínimo exato é aceito
- **Analogia**: **Apostar exatamente o mínimo** permitido

**3. Teste de Stakes Diferentes:**
```solidity
function testDifferentStakeAmounts() public {
    // Criar tarefas com 0.001, 0.01, 0.1, 1 ether
    // Completar todas no prazo
    // Verificar se cada um recebeu o valor correto de volta
}
```
- **O que testa**: Se valores diferentes são manuseados corretamente
- **Analogia**: **Apostas de valores diferentes** na mesma corrida

#### 📊 **Testes de Estado - "Teste do Inventário"**

**Analogia**: Como **conferir se o estoque** da loja está correto!

**1. Teste de Contador Global:**
```solidity
function testTotalTasksIncrement() public {
    uint256 initialCount = taskManager.totalTasks();
    
    // Criar 3 tarefas
    // Verificar se totalTasks aumentou em 3
    
    assertEq(taskManager.totalTasks(), initialCount + 3);
}
```
- **O que testa**: Se o contador global está certo
- **Analogia**: **Conferir se o caixa** registrou todas as vendas

**2. Teste de Lista de Usuário:**
```solidity
function testUserTasksList() public {
    // Usuário A cria 2 tarefas
    // Usuário B cria 3 tarefas
    // Verificar se cada um tem a quantidade correta na sua lista
    // Verificar se as listas não se misturam
}
```
- **O que testa**: Se cada usuário vê apenas suas tarefas
- **Analogia**: **Cada cliente só vê seus próprios pedidos**

#### 🎲 **Testes de Casos Extremos - "Teste do Impossível"**

**Analogia**: Como **testar situações malucas** que provavelmente nunca vão acontecer!

**1. Teste de Deadline no Futuro Distante:**
```solidity
function testFarFutureDeadline() public {
    // Criar tarefa com deadline em 100 anos
    // Deve funcionar normalmente
}
```
- **O que testa**: Se o contrato aguenta datas muito futuras
- **Analogia**: **Apostar numa corrida de 2124**

**2. Teste de String Vazia:**
```solidity
function testEmptyTaskTitle() public {
    // Tentar criar tarefa com título vazio ""
    // Pode aceitar ou rejeitar (depende da regra)
}
```
- **O que testa**: Como o contrato lida com dados vazios
- **Analogia**: **Apostar sem dar nome ao cavalo**

**3. Teste de String Gigante:**
```solidity
function testMassiveTaskDescription() public {
    // Criar tarefa com descrição de 10.000 caracteres
    // Verificar custo de gas e funcionamento
}
```
- **O que testa**: Se textos enormes causam problemas
- **Analogia**: **Escrever uma redação de 50 páginas** como descrição

#### 🏆 **Testes de Performance - "Teste de Velocidade"**

**Analogia**: Como **testar se o carro aguenta** Fórmula 1!

**1. Teste de Gas Cost:**
```solidity
function testGasCosts() public {
    // Medir gas de createTask
    // Medir gas de completeTask
    // Verificar se está dentro de limites aceitáveis
}
```
- **O que testa**: Quanto "combustível" cada função gasta
- **Analogia**: **Testar consumo** de cada carro

**2. Teste de Stress:**
```solidity
function testStressTest() public {
    // Criar 100 tarefas em sequência
    // Completar todas
    // Verificar se tudo ainda funciona
}
```
- **O que testa**: Se o contrato aguenta uso intenso
- **Analogia**: **Dirigir 1000km** sem parar para ver se quebra

#### 💡 **Como Implementar Estes Testes**

**1. 📁 Organizar por Categoria:**
```
test/
├── TestSecurity.t.sol     # Testes de segurança
├── TestTiming.t.sol       # Testes de tempo
├── TestFinancial.t.sol    # Testes financeiros
├── TestState.t.sol        # Testes de estado
└── TestEdgeCases.t.sol    # Casos extremos
```

**2. 🎯 Usar Foundry Features:**
```solidity
// Testar com fuzzing (dados aleatórios)
function testFuzzCreateTask(string memory title, uint256 deadline) public {
    vm.assume(deadline > block.timestamp);
    // Foundry vai testar com centenas de valores aleatórios
}

// Testar invariants (regras que nunca devem quebrar)
function invariant_totalTasksNeverDecrease() public {
    // Esta regra deve ser sempre verdadeira
    assert(taskManager.totalTasks() >= previousTotalTasks);
}
```

**3. 🚨 Usar vm Commands:**
```solidity
vm.warp(timestamp);        // Viajar no tempo
vm.deal(user, amount);     // Dar dinheiro fake
vm.expectRevert("error");  // Esperar que falhe
vm.startPrank(user);       // Simular outro usuário
```

**🎯 Meta**: Com estes testes, seu contrato fica **blindado** como Fort Knox! 🏰

### 🚀 Script de Deploy (DeployTaskManager.s.sol)

O script de deploy é como um **"manual de instalação"** do nosso contrato na blockchain:

#### 🏗️ **Estrutura do Script de Deploy**

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "../src/TaskManager.sol";

contract DeployTaskManager is Script {
    function setUp() public {}

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        TaskManager taskManager = new TaskManager();
        
        console.log("TaskManager deployed at:", address(taskManager));
        console.log("Deployer address:", vm.addr(deployerPrivateKey));
        console.log("Minimum stake required:", taskManager.MINIMUM_STAKE());

        vm.stopBroadcast();
    }
}
```

**Analogia**: Como **abrir uma nova loja física**:

#### 📋 **Preparação (Imports)**
```solidity
import "forge-std/Script.sol";
import "../src/TaskManager.sol";
```
- **Analogia**: Como **reunir todas as ferramentas** necessárias antes de construir
- `Script.sol` = "Kit de ferramentas para construção"
- `TaskManager.sol` = "Planta da loja que vamos construir"

#### 🔑 **Autenticação (Private Key)**
```solidity
uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
```
- **Analogia**: Como **pegar a chave do proprietário** para autorizar a construção
- `PRIVATE_KEY` = Sua "chave secreta" (como a senha do banco)
- `vm.envUint()` = Pega a chave de um arquivo seguro (variável de ambiente)

#### 📢 **Início da Construção (startBroadcast)**
```solidity
vm.startBroadcast(deployerPrivateKey);
```
- **Analogia**: Como **avisar a prefeitura**: "Vou começar a construir agora!"
- A partir daqui, tudo que você fizer **custa dinheiro real** (gas)
- É como ligar um **"taxímetro"** da blockchain

#### 🏭 **Construção da Loja (new TaskManager)**
```solidity
TaskManager taskManager = new TaskManager();
```
- **Analogia**: Como **construir fisicamente a loja**
- `new TaskManager()` = "Erguer um prédio novo do zero"
- A partir daqui, sua loja existe **para sempre** na blockchain

#### 📍 **Relatório de Conclusão (console.log)**
```solidity
console.log("TaskManager deployed at:", address(taskManager));
console.log("Deployer address:", vm.addr(deployerPrivateKey));
console.log("Minimum stake required:", taskManager.MINIMUM_STAKE());
```
- **Analogia**: Como **entregar a certidão de conclusão da obra**:
  - "Loja construída no endereço: Rua A, nº 123"
  - "Proprietário: João Silva (CPF: 123.456.789-00)"
  - "Taxa de entrada: R$ 5,00"

#### 🛑 **Fim da Construção (stopBroadcast)**
```solidity
vm.stopBroadcast();
```
- **Analogia**: Como **desligar o taxímetro** e avisar: "Obra concluída!"
- A partir daqui, não gastamos mais gas

#### 🎯 **Por que usar Script de Deploy?**

- **🔄 Repetível**: Pode rodar várias vezes (testnet, mainnet, etc.)
- **📝 Documentado**: Fica registrado exatamente como o contrato foi criado
- **🛡️ Seguro**: Usa variáveis de ambiente para proteger chaves privadas
- **📊 Informativo**: Mostra endereços e informações importantes
- **⚡ Automatizado**: Um comando só faz tudo

**Comando para usar**:
```bash
forge script script/TaskManager.s.sol:TaskManagerScript --rpc-url <REDE> --private-key <SUA_CHAVE> --broadcast
```

**🎯 Importante**: Note que o script se chama `TaskManager.s.sol` e a classe é `TaskManagerScript`. Este é o comando correto baseado na estrutura real do projeto.

**Analogia**: Como usar um **"app de construção"** que faz tudo automaticamente!

### 🌐 Deploy Manual na Rede Sepolia - "Construindo na Cidade Real"

Agora vamos aprender a **"construir nossa loja"** numa cidade real (rede de teste), não apenas no terreno de treino (rede local).

#### 🏢 **Entendendo os Provedores - "Companhias Telefônicas da Blockchain"**

**Analogia**: Como **empresas de telecomunicações** que conectam você à internet.

**🤔 Por que precisamos de provedores?**

Imagine que você quer **ligar para alguém** numa cidade distante:
- Você não pode ir fisicamente até lá
- Precisa de uma **"empresa telefônica"** para fazer a conexão
- A empresa tem **torres e cabos** que conectam as cidades

**Na blockchain é igual**:
- Sua aplicação local não consegue "falar" diretamente com Ethereum
- Precisa de um **"provedor RPC"** para fazer a conexão
- O provedor tem **servidores e nós** que conectam você à rede

#### 📡 **Infura - A "Operadora Premium"**

**Infura** é como a **"Vivo/Claro da blockchain"** - uma empresa que oferece conexão profissional.

**🔗 Outros provedores similares:**
- **Alchemy** (concorrente principal)
- **QuickNode** 
- **Moralis**
- **GetBlock**

**Analogia**: Como **operadoras de celular** - todas fazem a mesma coisa (conectar), mas com preços e qualidades diferentes.

#### 🗝️ **Obtendo API Key da Infura - "Seu Cartão de Acesso"**

**Passo a passo para pegar sua "linha telefônica":**

**1. 📝 Criar Conta na Infura:**
- Acesse: https://infura.io/
- Clique em **"Sign Up"** (criar conta)
- Use um email válido (você receberá confirmação)

**Analogia**: Como **"contratar um plano de celular"** numa operadora.

**2. ✅ Confirmar Email:**
- Vá ao seu email
- Clique no link de confirmação
- Faça login na Infura

**3. 🎯 Criar um Projeto:**
- No painel, clique **"Create New Key"**
- **Name**: "TaskManager Project" (ou qualquer nome)
- **Network**: **"Web3 API"** (não Ethereum 2.0)
- Clique **"Create"**

**Analogia**: Como **"registrar um novo número"** na operadora.

**4. 📋 Copiar as URLs:**

Após criar, você verá algo assim:
```
PROJECT ID: 9aa3d95b3bc440fa88ea12eaa4456161

ENDPOINTS:
Mainnet: https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161
Sepolia: https://sepolia.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161
```

**🎯 Importante**: Copie a URL da **Sepolia** - é ela que vamos usar!

**Analogia**: Como **"pegar seu número de telefone"** depois de contratar o plano.

#### 🔍 **Etherscan - O "Google da Blockchain"**

**Etherscan** é como o **"Google"** da blockchain Ethereum - você pode pesquisar qualquer coisa.

**🌐 Links importantes:**
- **Mainnet**: https://etherscan.io/ (rede principal)
- **Sepolia**: https://sepolia.etherscan.io/ (rede de teste)

**O que você pode fazer no Etherscan:**
- 🔍 **Pesquisar transações** (como rastrear encomenda dos Correios)
- 👀 **Ver contratos** deployados (como ver lojas numa rua)
- 💰 **Verificar saldos** (como extrato bancário)
- ⛽ **Monitorar gas** (como preço da gasolina)

#### 🔑 **Configurando API Key do Etherscan**

**Por que precisamos?**
- Para **verificar contratos** automaticamente
- Como ter **"acesso VIP"** ao Google da blockchain

**Passo a passo:**

**1. 📝 Criar Conta no Etherscan:**
- Acesse: https://etherscan.io/
- Clique **"Sign In"** → **"Click to sign up"**
- Registre-se com email

**2. 🗝️ Gerar API Key:**
- Faça login
- Vá em **"API Keys"** (no menu do usuário)
- Clique **"Add"** 
- **App Name**: "TaskManager"
- Copie a **API Key** gerada

**Exemplo da API Key:**
```
YourApiKeyToken: ABC123DEF456GHI789JKL012MNO345PQR678
```

**Analogia**: Como **"pegar cartão VIP"** para ter acesso especial ao shopping.

#### 🦊 **MetaMask - Sua "Carteira Digital"**

**MetaMask** é como sua **"carteira física"**, mas para criptomoedas.

#### 📥 **Instalando MetaMask:**

**1. 💻 Instalar Extensão:**
- Acesse: https://metamask.io/
- Clique **"Download"**
- Adicione ao Chrome/Firefox/Safari

**2. 🆕 Criar Carteira Nova:**
- Abra a extensão
- **"Create a new wallet"**
- Criar senha forte
- **⚠️ ANOTAR AS 12 PALAVRAS** (seed phrase) num papel

**Analogia**: As 12 palavras são como **"chave mestre do cofre"** - se perder, perde tudo!

#### 🌐 **Configurando Rede Sepolia:**

**Sepolia já vem configurada** no MetaMask moderno, mas se não estiver:

```
Network Name: Sepolia test network
New RPC URL: https://sepolia.infura.io/v3/SEU_PROJECT_ID
Chain ID: 11155111
Currency Symbol: ETH
Block Explorer: https://sepolia.etherscan.io
```

#### 💰 **Conseguindo Ethereum de Teste (Sepolia ETH):**

**Analogia**: Como **"dinheiro de Monopoly"** - vale apenas no jogo (rede de teste).

**Faucets (torneiras) gratuitas:**
1. **Sepolia Faucet**: https://sepoliafaucet.com/
2. **Alchemy Faucet**: https://sepoliafaucet.com/
3. **Infura Faucet**: https://www.infura.io/faucet

**Como usar:**
- Copie seu endereço MetaMask
- Cole no faucet
- Aguarde 1-2 minutos
- Receba ~0.5 ETH de teste

#### 🔐 **Obtendo Chave Privada - "Senha do Cofre"**

**⚠️ ATENÇÃO EXTREMA**: Chave privada é como **"senha do banco"** - NUNCA compartilhe!

**Passo a passo no MetaMask:**

**1. 🦊 Abrir MetaMask:**
- Clique na extensão
- Faça login

**2. ⚙️ Acessar Configurações:**
- Clique nos **3 pontinhos** (menu)
- **"Account Details"**

**3. 🔑 Exportar Chave:**
- **"Show private key"**
- Digite sua **senha do MetaMask**
- **Copie a chave privada**

**Exemplo de chave privada:**
```
0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef
```

**🚨 SEGURANÇA MÁXIMA**:
- ❌ **NUNCA** cole em sites duvidosos
- ❌ **NUNCA** compartilhe com ninguém
- ❌ **NUNCA** commit no Git
- ✅ Use apenas para deploy local/teste
- ✅ Crie uma carteira separada só para desenvolvimento

#### 🚀 **Deploy Manual na Sepolia - Passo a Passo**

Agora vamos **"construir nossa loja"** na cidade real!

#### 🛠️ **Preparação do Ambiente:**

**1. 📁 Criar arquivo .env:**

Na pasta do projeto, crie `.env`:
```bash
# .env (NUNCA commit este arquivo!)
PRIVATE_KEY=0xSUA_CHAVE_PRIVADA_AQUI
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/SEU_PROJECT_ID
ETHERSCAN_API_KEY=SUA_API_KEY_DO_ETHERSCAN
```

**2. 🔒 Proteger .env:**

Adicione no `.gitignore`:
```
.env
```

**Analogia**: Como **"trancar o cofre"** onde você guarda senhas.

#### 🏗️ **Executando o Deploy:**

**🔧 Pré-requisito IMPORTANTE: Carregar Variáveis de Ambiente**

Antes de executar o comando de deploy, você **DEVE** carregar as variáveis do arquivo `.env`:

```bash
# 🔑 PRIMEIRO: Carregar as variáveis de ambiente
source .env

# ✅ Verificar se as variáveis foram carregadas
echo "RPC: $SEPOLIA_RPC_URL"
echo "Private Key configurada: $([ -n "$PRIVATE_KEY" ] && echo "✅ SIM" || echo "❌ NÃO")"
echo "Etherscan API: $([ -n "$ETHERSCAN_API_KEY" ] && echo "✅ SIM" || echo "❌ NÃO")"
```

**💡 Por que isso é necessário?**
- O comando usa variáveis como `$SEPOLIA_RPC_URL`, `$PRIVATE_KEY`, `$ETHERSCAN_API_KEY`
- Sem o `source .env`, essas variáveis ficam vazias e o comando falha
- É como **"logar no sistema"** antes de usar seus dados

**📋 Exemplo Visual:**

```bash
# ❌ SEM carregar .env - FALHA!
forge script script/TaskManager.s.sol:TaskManagerScript --rpc-url $SEPOLIA_RPC_URL
# Resultado: --rpc-url ""  (vazio!)

# ✅ COM source .env - FUNCIONA!
source .env
forge script script/TaskManager.s.sol:TaskManagerScript --rpc-url $SEPOLIA_RPC_URL  
# Resultado: --rpc-url "https://sepolia.infura.io/v3/1b375955f267496abf270f2423801349"
```

**🔍 Como as variáveis são substituídas:**
- `$SEPOLIA_RPC_URL` → `https://sepolia.infura.io/v3/SEU_PROJECT_ID`
- `$PRIVATE_KEY` → `0x1234567890abcdef...` (sua chave privada)
- `$ETHERSCAN_API_KEY` → `ABC123DEF456...` (sua API key)

**1. 💻 Comando de Deploy:**

```bash
# Opção A: Carregar variáveis E executar deploy em um comando
source .env && forge script script/TaskManager.s.sol:TaskManagerScript \
  --rpc-url $SEPOLIA_RPC_URL \
  --private-key $PRIVATE_KEY \
  --broadcast \
  --verify \
  --etherscan-api-key $ETHERSCAN_API_KEY \
  -vvvv

# Opção B: Carregar variáveis primeiro, depois executar
source .env
forge script script/TaskManager.s.sol:TaskManagerScript \
  --rpc-url $SEPOLIA_RPC_URL \
  --private-key $PRIVATE_KEY \
  --broadcast \
  --verify \
  --etherscan-api-key $ETHERSCAN_API_KEY \
  -vvvv
```

**✅ Este é o comando testado e funcionando!** Note que usamos `TaskManager.s.sol:TaskManagerScript` (não `DeployTaskManager.s.sol`).

**Quebrado em partes:**
- `forge script` = Executar script de deploy
- `--rpc-url` = Conectar via Infura na Sepolia
- `--private-key` = Usar sua carteira para pagar gas
- `--broadcast` = Realmente enviar para blockchain
- `--verify` = Publicar código no Etherscan
- `-vvvv` = Mostrar TUDO que está acontecendo

**2. 💸 O que acontece:**

```
[⠢] Compiling...
[✅] Compilation completed successfully.

== Logs ==
TaskManager deployed at: 0x742d35Cc6636C0532925a3b8D8C9a76C4577F6B5
Deployer address: 0xYourAddress
Minimum stake required: 1000000000000000

## Setting up 1 EVM.
##
## Environment
Chain: sepolia

## Sender
Address: 0xYourAddress
Balance: 0.123456789 ETH

✅ Transaction sent! Hash: 0xabc123...
⏳ Waiting for confirmation...
✅ Transaction confirmed!
⛽ Gas used: 1,234,567
💰 Gas cost: 0.001234 ETH
```

**3. 🔍 Verificação no Etherscan:**

- Acesse: https://sepolia.etherscan.io/
- Cole o endereço do contrato
- Veja seu contrato deployado!

#### 🎯 **Testando o Contrato Deployado:**

**1. 📞 Consultar dados (grátis):**

```bash
# Ver total de tarefas
cast call 0xSEU_CONTRATO_ADDRESS "totalTasks()" --rpc-url $SEPOLIA_RPC_URL

# Ver stake mínimo
cast call 0xSEU_CONTRATO_ADDRESS "MINIMUM_STAKE()" --rpc-url $SEPOLIA_RPC_URL
```

**2. 📝 Criar tarefa (custa gas):**

```bash
cast send 0xSEU_CONTRATO_ADDRESS \
  "createTask(string,string,uint256)" \
  "Estudar Solidity" \
  "Completar tutorial completo" \
  1703980800 \
  --value 0.001ether \
  --private-key $PRIVATE_KEY \
  --rpc-url $SEPOLIA_RPC_URL
```

#### 🎉 **Parabéns! Seu Contrato está Vivo!**

**🌐 Links úteis após deploy:**
- **Contrato**: https://sepolia.etherscan.io/address/SEU_ENDEREÇO
- **Código Verificado**: Aba "Contract" → "Read Contract"
- **Transações**: Aba "Txns" mostra todas as interações

**Analogia**: Como **"inaugurar sua loja"** numa rua movimentada - agora todo mundo pode visitá-la!

#### 🚨 **Troubleshooting - Problemas Comuns**

**Erro: "No such file or directory: script/DeployTaskManager.s.sol"**
- **❌ Problema**: Script não existe com esse nome
- **✅ Solução**: Use `script/TaskManager.s.sol:TaskManagerScript`

**Erro: "a value is required for '--fork-url' but none was supplied"**
- **❌ Problema**: Comando quebrado em múltiplas linhas
- **✅ Solução**: Execute o comando completo em uma linha ou use `\` para quebra

**🚨 Erro: Variáveis vazias ou "Invalid RPC URL"**
- **❌ Problema**: Não carregou o arquivo `.env` antes do comando
- **✅ Solução**: SEMPRE execute `source .env` primeiro
- **🔍 Como verificar**: `echo $SEPOLIA_RPC_URL` deve mostrar a URL completa

**🚨 Erro: "insufficient funds for gas * price + value"**
- **❌ Problema**: Carteira sem ETH suficiente para pagar gas
- **✅ Solução**: Pegue ETH de teste no faucet Sepolia

**📋 Checklist antes do deploy:**
```bash
# 1. Verificar se está na pasta smartcontract
pwd  # Deve mostrar: .../fb02/smartcontract

# 2. Verificar se arquivo .env existe
ls -la .env

# 3. Carregar variáveis
source .env

# 4. Verificar se variáveis estão carregadas
echo "✅ RPC: $SEPOLIA_RPC_URL"
echo "✅ Private Key: $([ -n "$PRIVATE_KEY" ] && echo "configurada" || echo "❌ VAZIA")"
echo "✅ Etherscan API: $([ -n "$ETHERSCAN_API_KEY" ] && echo "configurada" || echo "❌ VAZIA")"
```

**Comando COMPLETO que FUNCIONA:**
```bash
source .env && forge script script/TaskManager.s.sol:TaskManagerScript --rpc-url $SEPOLIA_RPC_URL --private-key $PRIVATE_KEY --broadcast --verify --etherscan-api-key $ETHERSCAN_API_KEY -vvvv
```

**🎯 Próximos passos:**
- Criar interface front-end
- Conectar MetaMask ao seu site
- Permitir que usuários interajam visualmente

---

## 🎁 Bonus - Prompt do Contrato

Para referência e estudo, aqui está o **prompt original** usado para criar o contrato TaskManager:

```
Crie um contrato inteligente em Solidity chamado "TaskManager" que permita aos usuários criar, gerenciar e concluir tarefas associadas a prazos e valores apostados (stakes). O contrato deve atender aos seguintes requisitos:

Estrutura de Dados

Armazenar informações de cada tarefa, incluindo:

Um identificador único para cada tarefa.

Um título descritivo.

Uma descrição detalhada.

A data de criação da tarefa.

Um prazo para conclusão (data futura).

O status atual da tarefa (pendente ou concluída).

O endereço do criador da tarefa.

O valor apostado (stake) associado à tarefa.

Um indicador que mostre se o valor apostado já foi processado.

Funcionalidades Principais

Permitir que usuários criem novas tarefas fornecendo:

Um título, uma descrição e um prazo (que deve ser uma data futura).

Um valor apostado mínimo de 0.001 ether, enviado junto com a criação.

Restringir a conclusão de tarefas apenas ao criador da tarefa.

Processar o valor apostado da seguinte forma:

Devolver o valor ao criador se a tarefa for concluída antes do prazo.

Considerar o valor perdido se o prazo expirar sem conclusão.

Oferecer uma maneira de os usuários consultarem todas as tarefas que eles próprios criaram.

Possibilitar a verificação se uma tarefa está atrasada com base no prazo e no tempo atual.

Disponibilizar informações gerais, como:

O número total de tarefas criadas no contrato.

O saldo total de ether atualmente armazenado no contrato.

Notificações

Gerar notificações públicas (eventos) nos seguintes casos:

Quando uma nova tarefa é criada.

Quando uma tarefa é concluída.

Quando o valor apostado é perdido devido ao atraso.

Segurança

Garantir que as transferências de ether sejam feitas de forma segura, verificando se foram concluídas com sucesso.

Especificações Técnicas

Utilizar a versão 0.8.13 do Solidity.

Incluir a licença MIT no início do código.

Usar estruturas de mapeamento para organizar as tarefas e associá-las aos respectivos criadores.

Fornecer uma forma de consultar os detalhes completos de uma tarefa específica.

Incluir uma maneira de determinar se uma tarefa está atrasada em relação ao prazo.

Permitir consulta ao número total de tarefas criadas e ao saldo atual do contrato.
```

**💡 Dica**: Este prompt pode servir como **base** para criar outros contratos similares ou para **estudar** como traduzir requisitos em código Solidity!

---

### 📌 **Atualização: Deploy Corrigido**

**✅ Deploy Funcional**: O comando de deploy foi corrigido e testado com sucesso!
- **Contrato**: TaskManager deployado em: `0xb17d39826a1b83f7685de1ebc924b3185b677383`
- **Rede**: Sepolia Testnet
- **Hash**: `0x317b05ffccb85fad4a670cdee712c2f908322101767e78b4ad809e4b0fe8d10e`
- **Verificado**: ✅ Código verificado no Etherscan

**🔗 Ver contrato**: [https://sepolia.etherscan.io/address/0xb17d39826a1b83f7685de1ebc924b3185b677383](https://sepolia.etherscan.io/address/0xb17d39826a1b83f7685de1ebc924b3185b677383)

#### 🔑 **LEMBRE-SE: Sempre Carregar Variáveis de Ambiente!**

**⚠️ ERRO MAIS COMUM**: Esquecer de executar `source .env` antes do deploy.

**✅ PROCESSO CORRETO:**
1. `cd smartcontract` (entrar na pasta do smart contract)
2. `source .env` (carregar variáveis)
3. Executar comando de deploy
4. ✨ Deploy funciona perfeitamente!

**💡 Dica**: Sempre que abrir um novo terminal, execute `source .env` novamente, pois as variáveis só ficam carregadas na sessão atual do terminal.

---

## 🎯 Aula 3 - Integração Frontend com Smart Contract

### 🌉 **Construindo a Ponte entre Seu Site e a Blockchain**

**Analogia**: Imagine que você tem um **restaurante físico** (smart contract) e quer criar um **aplicativo de delivery** (frontend). Você precisa de uma **"ponte"** para conectar os dois mundos!

**🔗 O que vamos fazer nesta aula:**
- Conectar nosso site Next.js com o smart contract deployado
- Usar **wagmi** e **viem** para fazer essa conexão
- Criar componentes e hooks organizados para Web3
- Implementar interface funcional e intuitiva

#### 🧩 **As Peças do Quebra-Cabeça**

```
🏠 Seu Site (Next.js)     🌉 Ponte (wagmi + viem)     🏪 Smart Contract (Blockchain)
     │                           │                           │
     │ "Quero criar tarefa"       │                           │
     ├──────────────────────────▶│ Traduz para blockchain   │
     │                           ├──────────────────────────▶│ Executa createTask()
     │                           │                           │
     │ "Mostrar minhas tarefas"   │                           │
     ├──────────────────────────▶│ Consulta dados           │
     │                           ├──────────────────────────▶│ Retorna lista [1,2,3]
     │                           │                           │
     │ Exibe na interface ✨      │◀──────────────────────────│
     │◀──────────────────────────│                           │
```

### 📋 **Sequência de Integração (Siga esta ordem!)**

**1. 📦 Instalar dependências necessárias**
**2. 📝 Copiar ABI e endereço do contrato**  
**3. 🔌 Criar componente de conexão Web3**
**4. 🏭 Configurar providers da aplicação**
**5. 🎣 Criar hooks customizados**
**6. 🔧 Atualizar layout.tsx**
**7. 💻 Implementar interface na page.tsx**

---

### 🛠️ **Passo 1: Instalação das Dependências**

#### 📦 **Bibliotecas Web3 Essenciais**

```bash
# 📦 Bibliotecas principais para Web3
pnpm add wagmi viem @tanstack/react-query @wagmi/connectors

# 🎨 Componentes UI (se ainda não instalados)
npx shadcn@latest add dialog button input textarea label card badge tooltip alert
```

**📖 Por que cada biblioteca:**

- **`wagmi`**: O "assistente pessoal" que busca dados da blockchain automaticamente
- **`viem`**: O "tradutor" que converte JavaScript ↔ Blockchain  
- **`@tanstack/react-query`**: A "memória inteligente" que guarda dados em cache
- **`@wagmi/connectors`**: Os "adaptadores" para diferentes carteiras (MetaMask, etc.)

**🎯 O que fazem juntos:**
```
📱 Seu App (React)
    ↓ usa
🎣 Wagmi (busca dados automaticamente)
    ↓ usa
⚡ Viem (traduz para blockchain)
    ↓ usa
🦊 MetaMask (assina transações)
    ↓ envia para
🌐 Blockchain (executa contratos)
```

---

### 📝 **Passo 2: Copiando ABI e Endereço do Contrato**

#### **📋 O que é ABI e por que precisamos?**

**Analogia**: ABI é como um **"cardápio de restaurante"** que lista todos os pratos (funções) disponíveis e seus ingredientes (parâmetros).

**🤔 Sem ABI**: É como tentar pedir comida sem ver o cardápio - você não sabe o que está disponível

**✅ Com ABI**: Você sabe exatamente quais funções pode chamar e como chamar

**📖 ABI (Application Binary Interface):**
- **O que é**: "Manual de instruções" em formato JSON
- **Contém**: Lista de todas as funções, eventos e variáveis do contrato  
- **Como funciona**: Seu frontend usa o ABI para saber como "falar" com o contrato
- **Analogia**: Como um tradutor que sabe exatamente como conversar com o restaurante

#### **📁 2.1 Encontrar e Copiar o ABI**

**Onde está o ABI**: Após compilar com Foundry, fica em:
```
smartcontract/out/TaskManager.sol/TaskManager.json
```

**🔍 Como extrair:**

1. **Abra o arquivo**:
```bash
cd smartcontract
cat out/TaskManager.sol/TaskManager.json
```

2. **Procure pela seção "abi"** (é um array gigante):
```json
{
  "abi": [
    {
      "inputs": [...],
      "name": "createTask", 
      "outputs": [...],
      "stateMutability": "payable",
      "type": "function"
    },
    // ... muitas outras funções
  ]
}
```

3. **Copie APENAS o array da seção "abi"** (tudo entre `"abi": [` e `]`)

#### **📍 2.2 Obter Endereço do Contrato Deployado**

**De onde vem**: Quando você fez o deploy, apareceu algo como:
```
TaskManager deployed at: 0xb17d39826a1b83f7685de1ebc924b3185b677383
```

**📋 Como confirmar se está correto:**
- Acesse: https://sepolia.etherscan.io/address/SEU_ENDERECO
- Se mostrar seu contrato = está correto ✅

#### **💾 2.3 Criar arquivo de configuração Web3**

**📁 Criar `lib/web3.ts`**:

```typescript
// lib/web3.ts - Central de Configurações Web3

import { createConfig, http } from 'wagmi'
import { sepolia } from 'wagmi/chains'
import { metaMask } from 'wagmi/connectors'

// 🔑 Configuração do provedor Infura
const infuraProjectId = process.env.NEXT_PUBLIC_INFURA_PROJECT_ID

// ⚙️ Configuração principal do wagmi
export const config = createConfig({
  chains: [sepolia],
  connectors: [metaMask()],
  transports: {
    [sepolia.id]: http(`https://sepolia.infura.io/v3/${infuraProjectId}`)
  },
})

// 📍 COLE AQUI: Endereço do seu contrato deployado
export const CONTRACT_ADDRESS = '0xSEU_ENDERECO_DEPLOYADO_AQUI'

// 📋 COLE AQUI: ABI copiado do arquivo TaskManager.json
export const CONTRACT_ABI = [
  // Cole aqui todo o array ABI que você copiou
  {
    "inputs": [
      { "internalType": "string", "name": "_title", "type": "string" },
      { "internalType": "string", "name": "_description", "type": "string" },
      { "internalType": "uint256", "name": "_deadline", "type": "uint256" }
    ],
    "name": "createTask",
    "outputs": [],
    "stateMutability": "payable", 
    "type": "function"
  },
  // ... resto das funções do ABI
] as const
```

#### **📖 Análise Detalhada do Código `lib/web3.ts`**

Vamos dissecar cada linha do nosso arquivo de configuração para entender como funciona essa **"central de comando"** do nosso DApp:

#### **📦 2.3.1 Imports - "Ferramentas da Oficina"**

```typescript
// lib/web3.ts - Nossa "Central de Conexões"

// 📦 Importa as ferramentas necessárias
import { createConfig, http } from 'wagmi'
import { sepolia } from 'wagmi/chains'
import { metaMask } from 'wagmi/connectors'
```

**Analogia**: Como **organizar as ferramentas** antes de montar um móvel:

**`createConfig`**: A **"furadeira principal"**
- **O que faz**: Função que monta toda a configuração Web3
- **Por que importante**: Centraliza todas as configurações em um lugar
- **Analogia**: Como um **"manual de montagem"** que junta todas as instruções

**`http`**: O **"cabo de força"**
- **O que faz**: Protocolo de comunicação com provedores RPC
- **Por que importante**: Define como seu app "fala" com a blockchain
- **Analogia**: Como o **"fio elétrico"** que leva energia para a furadeira

**`sepolia`**: A **"planta do terreno"**
- **O que faz**: Configuração pré-definida da rede Sepolia
- **Contém**: Chain ID (11155111), nome, URLs oficiais, configurações
- **Analogia**: Como **"certidão do terreno"** com todas as informações legais

**`metaMask`**: O **"adaptador universal"**
- **O que faz**: Conector específico para carteira MetaMask
- **Por que importante**: Permite comunicação com a extensão do navegador
- **Analogia**: Como **"tomada adaptadora"** que conecta diferentes aparelhos

#### **🔑 2.3.2 Variáveis de Ambiente - "Cofre de Senhas"**

```typescript
// 🔑 Configuração do provedor Infura
// 📝 Adicione sua chave da Infura no arquivo .env.local:
// NEXT_PUBLIC_INFURA_PROJECT_ID=sua_chave_infura_aqui
const sepoliaRpcUrl = process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL
```

**📖 Explicação detalhada:**

**`process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL`**:
- **`process.env`**: "Cofre de senhas" do sistema operacional
- **`NEXT_PUBLIC_`**: Prefixo especial do Next.js para variáveis públicas
- **Por que NEXT_PUBLIC?**: Permite que o navegador acesse a variável
- **Segurança**: Não coloque chaves privadas aqui (só RPC URLs públicas)

**Analogia**: Como ter um **"cofre com gavetas"**:
- **Gaveta pública**: `NEXT_PUBLIC_` - qualquer um pode ver
- **Gaveta privada**: Sem prefixo - só o servidor vê

**Exemplo do arquivo `.env.local`**:
```bash
# .env.local
NEXT_PUBLIC_SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/sua_chave_infura
```

#### **⚙️ 2.3.3 Configuração Principal - "Receita de Conexão"**

```typescript
// ⚙️ Configuração principal - nossa "receita de conexão"
export const config = createConfig({
  // 🌐 Em qual blockchain vamos trabalhar
  chains: [sepolia],
  
  // 🔌 Apenas MetaMask como conector
  connectors: [
    metaMask(),  // MetaMask (mais popular e confiável)
  ],
  
  // 🌍 Conexão via Infura - provedor profissional
  transports: {
    [sepolia.id]: http(sepoliaRpcUrl)
  },
})
```

**📖 Explicação de cada propriedade:**

**`chains: [sepolia]`**: **"Lista de cidades onde trabalhamos"**
- **O que define**: Quais blockchains seu DApp suporta
- **Sepolia**: Rede de teste do Ethereum (gratuita)
- **Por que array?**: Pode suportar múltiplas redes (Ethereum, Polygon, etc.)
- **Analogia**: Como **"lista de franquias"** de uma empresa

**`connectors: [metaMask()]`**: **"Tipos de carteira aceitos"**
- **O que define**: Quais carteiras os usuários podem conectar
- **MetaMask()**: Função que configura integração com MetaMask
- **Outros conectores**: WalletConnect, Coinbase Wallet, etc.
- **Analogia**: Como **"bandeiras de cartão aceitas"** numa loja

**`transports: { [sepolia.id]: http(sepoliaRpcUrl) }`**: **"Sistema de entrega"**
- **O que define**: Como se conectar a cada blockchain
- **`[sepolia.id]`**: Chave dinâmica usando ID da Sepolia (11155111)
- **`http(sepoliaRpcUrl)`**: Protocolo HTTP usando URL da Infura
- **Analogia**: Como **"rotas de entrega"** - cada cidade tem sua rota específica

**🔍 Por que essa estrutura?**
```typescript
transports: {
  [sepolia.id]: http(sepoliaRpcUrl),
  // [mainnet.id]: http(mainnetRpcUrl),  // Poderia ter mais redes
  // [polygon.id]: http(polygonRpcUrl),  
}
```

#### **📍 2.3.4 Endereço do Contrato - "GPS da Blockchain"**

```typescript
// 📍 Endereço do nosso smart contract (deployado com sucesso!)
// ✅ ATUALIZADO: Contrato TaskManager na rede Sepolia
export const CONTRACT_ADDRESS = '0xa4545d4bF47D46d5AE101C02eE670aE0052d94Bb' as `0x${string}`
```

**📖 Análise do endereço:**

**`0xa4545d4bF47D46d5AE101C02eE670aE0052d94Bb`**: **"CEP da blockchain"**
- **Formato**: Sempre 42 caracteres (0x + 40 hex)
- **Único**: Só existe um contrato neste endereço
- **Imutável**: Nunca muda depois de deployado
- **Analogia**: Como **"coordenadas GPS"** exatas de uma casa

**`as `0x${string}``**: **"Etiqueta de tipo TypeScript"**
- **O que faz**: Diz ao TypeScript "isso é um endereço válido"
- **Por que importante**: Evita erros de digitação
- **Formato esperado**: 0x seguido de letras/números
- **Analogia**: Como **"carimbo de autenticidade"** num documento

#### **📋 2.3.5 ABI Completo - "Manual de Instruções Detalhado"**

```typescript
// 📋 ABI - "Manual de instruções" do contrato
export const CONTRACT_ABI = [
    {
        "type": "function",
        "name": "createTask",
        "inputs": [
            {
                "name": "_title",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "_description", 
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "_deadline",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "payable"
    },
    // ... outras funções
] as const
```

**📖 Anatomia de uma função ABI:**

**Função `createTask` explicada:**

**`"type": "function"`**: **"Tipo de item do cardápio"**
- **Opções**: function, event, error, constructor
- **function**: Algo que você pode chamar/executar
- **Analogia**: Como **"categoria no menu"** (prato principal, sobremesa, etc.)

**`"name": "createTask"`**: **"Nome do prato"**
- **O que é**: Nome exato da função no contrato
- **Case-sensitive**: Deve ser exatamente igual
- **Analogia**: Como **"nome no cardápio"** - "Pizza Margherita"

**`"inputs": [...]`**: **"Ingredientes necessários"**
- **O que é**: Lista de parâmetros que a função precisa
- **Ordem importante**: Deve passar na sequência correta
- **Analogia**: Como **"lista de ingredientes"** de uma receita

**Detalhamento dos inputs:**
```typescript
{
    "name": "_title",           // Nome do parâmetro
    "type": "string",           // Tipo em Solidity  
    "internalType": "string"    // Tipo interno (pode diferir)
}
```

**`"outputs": []`**: **"O que você recebe de volta"**
- **Array vazio**: Esta função não retorna nada
- **Se tivesse**: Lista dos tipos de dados retornados
- **Analogia**: Como **"tempo de preparo"** - quanto tempo até receber o prato

**`"stateMutability": "payable"`**: **"Política de pagamento"**
- **payable**: Função aceita ETH junto com a chamada
- **view**: Só lê dados (grátis)
- **pure**: Não acessa dados do contrato (grátis)
- **nonpayable**: Não aceita ETH
- **Analogia**: Como **"política de pagamento"** (à vista, cartão, PIX)

#### **🎯 2.3.6 Funções Importantes do ABI**

**📖 Vamos analisar as principais funções:**

**1. `getUserTasksWithData` - "Buscar Histórico Completo":**
```typescript
{
    "type": "function",
    "name": "getUserTasksWithData",
    "inputs": [
        {
            "name": "_user",
            "type": "address",
            "internalType": "address"
        }
    ],
    "outputs": [
        {
            "name": "",
            "type": "tuple[]",  // Array de structs
            "internalType": "struct TaskManager.Task[]",
            "components": [      // Definição da struct Task
                {
                    "name": "id",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "title",
                    "type": "string", 
                    "internalType": "string"
                },
                // ... outros campos da struct
            ]
        }
    ],
    "stateMutability": "view"
}
```

**Explicação**:
- **Input**: Endereço do usuário (`address`)
- **Output**: Array de structs `Task[]` completos
- **`tuple[]`**: Array de objetos estruturados
- **`components`**: Define a estrutura interna de cada Task
- **`view`**: Função gratuita (só leitura)

**2. `completeTask` - "Finalizar Tarefa":**
```typescript
{
    "type": "function",
    "name": "completeTask", 
    "inputs": [
        {
            "name": "_id",
            "type": "uint256",
            "internalType": "uint256"
        }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
}
```

**Explicação**:
- **Input**: ID da tarefa (`uint256`)
- **Output**: Nada (só executa ação)
- **`nonpayable`**: Não aceita ETH (mas gasta gas)

#### **📢 2.3.7 Eventos do ABI - "Sistema de Notificações"**

```typescript
{
    "type": "event",
    "name": "TaskCreated",
    "inputs": [
        {
            "name": "id",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
        },
        {
            "name": "title",
            "type": "string",
            "indexed": false,
            "internalType": "string"
        },
        {
            "name": "creator",
            "type": "address",
            "indexed": false,
            "internalType": "address"
        },
        {
            "name": "stakeAmount",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
        },
        {
            "name": "deadline",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
        }
    ],
    "anonymous": false
}
```

**📖 Explicação dos eventos:**

**`"type": "event"`**: **"Tipo de notificação"**
- **Eventos**: Logs que ficam gravados na blockchain
- **Uso**: Acompanhar o que aconteceu no contrato
- **Analogia**: Como **"notificações push"** do seu celular

**`"indexed": false`**: **"Tipo de busca"**
- **false**: Dados armazenados, mas não indexados para busca
- **true**: Dados otimizados para busca rápida
- **Limite**: Máximo 3 campos indexed por evento

**`"anonymous": false`**: **"Evento nomeado"**
- **false**: Evento tem nome (normal)
- **true**: Evento anônimo (raro, economia de gas)

#### **🔒 2.3.8 O Modificador `as const` - "Proteção TypeScript"**

```typescript
] as const
```

**📖 Por que `as const` é crucial:**

**Sem `as const`:**
```typescript
const ABI = [{ "name": "createTask", "type": "function" }]
// TypeScript vê: Array<object>
// Problema: Não sabe os nomes das funções
```

**Com `as const`:**
```typescript
const ABI = [{ "name": "createTask", "type": "function" }] as const
// TypeScript vê: readonly [{ readonly "name": "createTask", readonly "type": "function" }]
// Benefício: Conhece exatamente cada função
```

**Vantagens concretas:**
- **Autocompletar**: VS Code sugere nomes de funções
- **Verificação**: TypeScript detecta erros de digitação
- **Performance**: Wagmi otimiza melhor o código
- **Analogia**: Como **"lista pré-aprovada"** vs **"lista genérica"**

#### **🎯 2.3.9 Fluxo Completo de Uso**

**Como tudo se conecta:**

```
1. 🌐 Usuario acessa site
         ↓
2. ⚙️ wagmi carrega config
         ↓  
3. 🔌 MetaMask conecta
         ↓
4. 📡 Infura faz ponte com Sepolia  
         ↓
5. 📍 CONTRACT_ADDRESS localiza contrato
         ↓
6. 📋 CONTRACT_ABI "traduz" chamadas
         ↓
7. ⚡ Função executa na blockchain
```

**✅ Resultado**: Seu frontend consegue **"conversar fluentemente"** com a blockchain, sabendo exatamente onde encontrar o contrato e como usar cada função!

**📖 Explicação das configurações:**

**`sepoliaRpcUrl`**: Sua "chave de acesso" à blockchain via Infura
- **Como obter**: https://infura.io/ → Criar conta → Criar projeto → Copiar Project ID
- **Configurar**: Criar `.env.local` e adicionar `NEXT_PUBLIC_SEPOLIA_RPC_URL=sua_url_completa`

**`CONTRACT_ADDRESS`**: "Endereço físico" onde seu contrato mora na blockchain
- **Analogia**: Como endereço de uma casa - permite encontrar seu contrato

**`CONTRACT_ABI`**: "Cardápio completo" de todas as funções disponíveis
- **`as const`**: Diz ao TypeScript "estes dados nunca mudam" (otimização)

---

### 🔌 **Passo 3: Criando Componente de Conexão Web3**

#### **🤔 Por que precisamos de um componente de conexão?**

**Analogia**: É como criar um **"porteiro inteligente"** que gerencia quem entra e sai do seu prédio (DApp).

**🎯 O que o componente faz:**
- Detecta se MetaMask está instalado
- Conecta/desconecta carteiras
- Mostra status da conexão (conectado/desconectado)
- Verifica se está na rede correta (Sepolia)
- Exibe endereço do usuário de forma amigável

#### **📁 3.1 Criar `components/WalletConnection.tsx`**

```typescript
// components/WalletConnection.tsx - Gerenciador de Conexão

'use client'

import { useConnect, useDisconnect, useAccount, useChainId } from 'wagmi'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Wallet, AlertCircle } from 'lucide-react'
import { sepolia } from 'wagmi/chains'

export function WalletConnection() {
  // 🎣 Hooks do wagmi para gerenciar conexão
  const { connectors, connect, isPending } = useConnect()
  const { disconnect } = useDisconnect()
  const { address, isConnected } = useAccount()
  const chainId = useChainId()

  // 🌐 Verificar se está na rede correta
  const isCorrectNetwork = chainId === sepolia.id
  const networkName = isCorrectNetwork ? 'Sepolia' : `Rede ${chainId}`

  // 📱 Encontrar MetaMask nos conectores disponíveis
  const metamaskConnector = connectors.find(connector => connector.name === 'MetaMask')

  // 🔄 Função para conectar/desconectar
  const handleConnection = () => {
    if (isConnected) {
      disconnect()
    } else if (metamaskConnector) {
      connect({ connector: metamaskConnector })
    }
  }

  // 📍 Formatar endereço para exibição (0x1234...abcd)
  const shortAddress = address ? `${address.slice(0, 6)}...${address.slice(-4)}` : null

  return (
    <div className="space-y-4">
      {/* 🔌 Botão de Conexão */}
      <div className="flex items-center gap-4">
        {isConnected && (
          <div className="flex flex-col items-end text-sm">
            <span className="text-green-600 font-medium">{shortAddress}</span>
            <div className="flex items-center gap-1">
              <div className={`w-2 h-2 rounded-full ${isCorrectNetwork ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span className={`text-xs ${isCorrectNetwork ? 'text-green-600' : 'text-red-600'}`}>
                {networkName}
              </span>
            </div>
          </div>
        )}
        
        <Button
          onClick={handleConnection}
          disabled={isPending}
          className={`transition-all duration-300 ${
            isConnected ? "bg-green-600 hover:bg-green-700" : "bg-violet-600 hover:bg-violet-700"
          }`}
        >
          <Wallet className="mr-2 h-4 w-4" />
          {isPending ? 'Conectando...' : isConnected ? 'Carteira Conectada' : 'Conectar Carteira'}
        </Button>
      </div>

      {/* ⚠️ Alertas informativos */}
      {!isConnected && (
        <Alert variant="destructive" className="border-yellow-500/50 text-yellow-700">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Conecte sua carteira para gerenciar suas tarefas na blockchain.
          </AlertDescription>
        </Alert>
      )}

      {isConnected && !isCorrectNetwork && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Você está na rede {networkName}. Mude para Sepolia para usar este DApp.
          </AlertDescription>
        </Alert>
      )}
    </div>
  )
}
```

#### **📖 Explicação detalhada do código:**

**🎣 Hooks do wagmi:**
```typescript
const { connectors, connect, isPending } = useConnect()
const { disconnect } = useDisconnect()
const { address, isConnected } = useAccount()
const chainId = useChainId()
```

- **`useConnect()`**: Gerencia processo de conexão
  - `connectors`: Lista de carteiras disponíveis (MetaMask, WalletConnect, etc.)
  - `connect()`: Função para conectar uma carteira específica
  - `isPending`: `true` enquanto está conectando

- **`useDisconnect()`**: Fornece função para desconectar carteira

- **`useAccount()`**: Informações da conta conectada
  - `address`: Endereço da carteira (0x123...)
  - `isConnected`: `true` se carteira está conectada

- **`useChainId()`**: ID da rede atual (Sepolia = 11155111)

**🌐 Verificação de rede:**
```typescript
const isCorrectNetwork = chainId === sepolia.id
const networkName = isCorrectNetwork ? 'Sepolia' : `Rede ${chainId}`
```
- **Por que importante**: Evita transações na rede errada
- **Sepolia ID**: 11155111 (rede de teste)

**📱 Encontrar MetaMask:**
```typescript
const metamaskConnector = connectors.find(connector => connector.name === 'MetaMask')
```
- **Por que**: wagmi suporta várias carteiras, queremos especificamente MetaMask
- **Flexível**: Se MetaMask não estiver disponível, botão fica desabilitado

**📍 Formatação de endereço:**
```typescript
const shortAddress = address ? `${address.slice(0, 6)}...${address.slice(-4)}` : null
```
- **Antes**: `0x1234567890abcdef1234567890abcdef12345678`
- **Depois**: `0x1234...5678` (mais legível)

#### **🎨 3.2 Elementos visuais inteligentes**

**🔘 Botão dinâmico:**
- **Estado 1**: "Conectar Carteira" (violet) - quando desconectado
- **Estado 2**: "Conectando..." (disabled) - durante conexão  
- **Estado 3**: "Carteira Conectada" (green) - quando conectado

**🚨 Sistema de alertas:**
- **Alerta amarelo**: Quando não conectado (instructivo)
- **Alerta vermelho**: Quando na rede errada (crítico)

**💡 Indicador de rede:**
- **Ponto verde**: Rede correta (Sepolia)
- **Ponto vermelho**: Rede incorreta

---

### 🏭 **Passo 4: Configurar Providers da Aplicação**

Agora vamos configurar os **"fornecedores de energia"** do nosso DApp. Os providers são como a **"fiação elétrica"** que distribui funcionalidades Web3 para todo o aplicativo.

#### **📁 4.1 Criar `providers/Web3Provider.tsx`**

**Analogia**: É como instalar um **"quadro de força especializado"** que distribui energia Web3 para todos os cômodos da casa.

```typescript
// providers/Web3Provider.tsx - Provider Web3 isolado

'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from '@/lib/web3'
import { useState, ReactNode } from 'react'

interface Web3ProviderProps {
  children: ReactNode
}

export function Web3Provider({ children }: Web3ProviderProps) {
  // 🧠 Cria a "memória inteligente" (cache)
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        // ⚡ Configurações otimizadas para Web3
        refetchOnWindowFocus: false,
        retry: 1,
        staleTime: 1000 * 60 * 5, // 5 minutos
      },
    },
  }))

  return (
    {/* 🔧 WAGMI: Fornece conexão Web3 para todo o app */}
    <WagmiProvider config={config}>
      {/* 🗄️ QUERY: Gerencia cache e atualizações automáticas */}
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}
```

#### **📖 Análise Detalhada do Código `providers/Web3Provider.tsx`**

Vamos dissecar cada linha deste arquivo crucial para entender como funciona nossa **"central de distribuição de energia Web3"**:

#### **📦 4.1.1 Imports - "Ferramentas Especializadas"**

```typescript
// providers/Web3Provider.tsx - Provider Web3 isolado

'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from '@/lib/web3'
import { useState, ReactNode } from 'react'
```

**Analogia**: Como **reunir ferramentas especializadas** para montar uma central elétrica:

**`'use client'`**: **"Etiqueta de localização"**
- **O que faz**: Diz ao Next.js "este código roda no navegador"
- **Por que necessário**: Providers precisam gerenciar estado no cliente
- **Analogia**: Como **"placa: Esta máquina funciona com eletricidade"**

**`QueryClient, QueryClientProvider`**: **"Sistema de memória inteligente"**
- **QueryClient**: Classe que gerencia cache de dados
- **QueryClientProvider**: Componente que distribui cache para filhos
- **Por que importante**: Evita buscar os mesmos dados repetidamente
- **Analogia**: Como **"HD com cache automático"** que lembra dados recentes

**`WagmiProvider`**: **"Distribuidor de energia Web3"**
- **O que faz**: Componente que fornece funcionalidades Web3 para filhos
- **Por que central**: Todos os hooks Web3 dependem dele
- **Analogia**: Como **"quadro de força principal"** da casa

**`config`**: **"Manual de instalação"**
- **Vem de**: `@/lib/web3` (o arquivo que configuramos antes)
- **Contém**: Redes, conectores, transportes, endereços, ABIs
- **Analogia**: Como **"diagrama elétrico"** com todas as especificações

**`useState, ReactNode`**: **"Ferramentas básicas do React"**
- **useState**: Para gerenciar estado local
- **ReactNode**: Tipo TypeScript para componentes filhos
- **Analogia**: Como **"chaves de fenda básicas"** para montagem

#### **📋 4.1.2 Interface TypeScript - "Especificações Técnicas"**

```typescript
interface Web3ProviderProps {
  children: ReactNode
}
```

**📖 Explicação da interface:**

**`Web3ProviderProps`**: **"Manual de uso do componente"**
- **Função**: Define exatamente o que o componente espera receber
- **children**: Todos os componentes filhos que vão usar Web3
- **ReactNode**: Pode ser qualquer elemento React válido
- **Analogia**: Como **"especificações de entrada"** numa tomada (110V, 220V, etc.)

#### **🎛️ 4.1.3 Função Principal - "Centro de Controle"**

```typescript
export function Web3Provider({ children }: Web3ProviderProps) {
```

**📖 Anatomia da função:**

**`export function`**: **"Função pública"**
- **export**: Permite que outros arquivos importem esta função
- **function**: Componente funcional React
- **Analogia**: Como **"porta principal"** da central elétrica

**`{ children }`**: **"Desestruturação de props"**
- **Recebe**: Objeto com propriedade children
- **Extrai**: Diretamente a propriedade children
- **Equivale a**: `props.children` mas mais limpo

#### **🧠 4.1.4 Configuração do Cache - "Memória Inteligente"**

```typescript
// 🧠 Cria a "memória inteligente" (cache)
const [queryClient] = useState(() => new QueryClient({
  defaultOptions: {
    queries: {
      // ⚡ Configurações otimizadas para Web3
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 1000 * 60 * 5, // 5 minutos
    },
  },
}))
```

**📖 Explicação detalhada linha por linha:**

**`const [queryClient] = useState(() => ...)`**: **"Lazy Initialization"**
- **Por que array?**: useState retorna `[valor, setter]`, queremos só o valor
- **Por que função?**: `() => new QueryClient(...)` só executa uma vez
- **Benefício**: QueryClient não é recriado a cada render
- **Analogia**: Como **"instalar sistema de cache uma única vez"** na central

**`new QueryClient({...})`**: **"Configurar sistema de memória"**
- **QueryClient**: Classe principal do TanStack Query
- **defaultOptions**: Configurações que se aplicam a todas as consultas
- **Analogia**: Como **"configurar políticas padrão"** do sistema de cache

**`queries: {...}`**: **"Regras para consultas"**
- **queries**: Configurações específicas para busca de dados
- **Aplicam-se**: A todas as consultas feitas pelos hooks
- **Analogia**: Como **"políticas de armazenamento"** de uma biblioteca

**Configurações específicas:**

**`refetchOnWindowFocus: false`**: **"Não recarregar ao voltar"**
- **O que faz**: Não busca dados novos quando usuário volta para aba
- **Por que desabilitado**: Blockchain muda lentamente, não precisa de updates frequentes
- **Economia**: Reduz chamadas desnecessárias à API
- **Analogia**: Como **"não verificar correio toda vez que chega em casa"**

**`retry: 1`**: **"Tentar apenas uma vez extra"**
- **O que faz**: Se consulta falhar, tenta mais 1 vez antes de desistir
- **Por que 1?**: Blockchain pode estar temporariamente ocupada
- **Economia**: Evita spam de requisições se rede estiver congestionada
- **Analogia**: Como **"bater na porta duas vezes antes de desistir"**

**`staleTime: 1000 * 60 * 5`**: **"Dados frescos por 5 minutos"**
- **O que faz**: Considera dados "frescos" por 5 minutos
- **Cálculo**: 1000ms × 60s × 5min = 300.000ms
- **Benefício**: Não busca dados novos se ainda estão "frescos"
- **Analogia**: Como **"leite fica bom por 5 minutos fora da geladeira"**

#### **🔌 4.1.5 Estrutura de Providers - "Instalação Elétrica"**

```typescript
return (
  {/* 🔧 WAGMI: Fornece conexão Web3 para todo o app */}
  <WagmiProvider config={config}>
    {/* 🗄️ QUERY: Gerencia cache e atualizações automáticas */}
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  </WagmiProvider>
)
```

**📖 Hierarquia dos providers explicada:**

**Estrutura em camadas:**
```
🏠 Casa (sua aplicação)
└── 🔧 WagmiProvider (energia Web3)
    └── 🗄️ QueryClientProvider (sistema de cache)
        └── 📱 children (seus componentes)
```

**`<WagmiProvider config={config}>`**: **"Instalação elétrica principal"**
- **Função**: Fornece todas as funcionalidades Web3 para componentes filhos
- **config**: Usa nossa configuração do arquivo web3.ts
- **Habilita**: Todos os hooks wagmi (useAccount, useConnect, etc.)
- **Analogia**: Como **"quadro de força principal"** que alimenta toda casa

**`<QueryClientProvider client={queryClient}>`**: **"Sistema de backup inteligente"**
- **Função**: Fornece sistema de cache para componentes filhos
- **client**: Usa o QueryClient que configuramos acima
- **Habilita**: Cache automático, sincronização, atualizações em background
- **Analogia**: Como **"no-break"** que mantém energia estável

**`{children}`**: **"Aparelhos da casa"**
- **Função**: Todos os componentes que vão usar Web3
- **Recebem**: Tanto energia Web3 quanto sistema de cache
- **Podem usar**: Qualquer hook do wagmi ou TanStack Query
- **Analogia**: Como **"todos os aparelhos eletrônicos"** da casa

#### **🎯 4.1.6 Por que essa ordem específica?**

**❌ Ordem incorreta seria:**
```typescript
<QueryClientProvider client={queryClient}>
  <WagmiProvider config={config}>  // ❌ ERRADO!
    {children}
  </WagmiProvider>
</QueryClientProvider>
```

**✅ Ordem correta:**
```typescript
<WagmiProvider config={config}>
  <QueryClientProvider client={queryClient}>  // ✅ CORRETO!
    {children}
  </QueryClientProvider>
</WagmiProvider>
```

**📖 Por que a ordem importa:**

1. **WagmiProvider primeiro**: Precisa estar "mais externo" porque:
   - Fornece conexão básica com blockchain
   - TanStack Query vai fazer cache de dados Web3
   - Cache depende da conexão existir

2. **QueryClientProvider segundo**: "Mais interno" porque:
   - Vai cachear dados que vêm via wagmi
   - Precisa que wagmi já esteja disponível
   - É uma "camada de otimização" sobre wagmi

**Analogia**: Como **instalar primeiro a eletricidade básica**, depois o **sistema de backup e estabilização**.

#### **⚡ 4.1.7 Fluxo de Funcionamento**

**Como tudo funciona na prática:**

```
1. 🚀 Aplicação inicia
     ↓
2. 🔧 WagmiProvider carrega configuração (web3.ts)
     ↓
3. 🗄️ QueryClient se prepara para cachear
     ↓
4. 📱 Componentes filhos renderizam
     ↓
5. 🎣 Hooks wagmi fazem consultas
     ↓
6. 💾 TanStack Query guarda resultados em cache
     ↓
7. 🔄 Próximas consultas usam cache quando possível
```

#### **🛡️ 4.1.8 Configurações Otimizadas para Web3**

**Por que essas configurações específicas para Web3?**

**Blockchain é diferente de APIs tradicionais:**
- **Mais lenta**: Transações levam segundos para confirmar
- **Mais cara**: Cada consulta pode custar gas
- **Mais estável**: Dados mudam menos frequentemente
- **Menos tolerante**: Muitas requisições podem sobrecarregar nós

**Nossas otimizações:**
- **refetchOnWindowFocus: false**: Blockchain não muda quando você sai da aba
- **retry: 1**: Evita spam em redes congestionadas  
- **staleTime: 5min**: Dados blockchain são estáveis por períodos longos

#### **🔧 4.1.9 Alternativas de Configuração**

**Para desenvolvimento local (mais agressivo):**
```typescript
{
  refetchOnWindowFocus: true,   // Útil para debugging
  retry: 3,                     // Rede local raramente falha
  staleTime: 1000 * 30,        // 30 segundos para ver mudanças rápido
}
```

**Para produção mainnet (mais conservador):**
```typescript
{
  refetchOnWindowFocus: false,  // Mainnet é cara
  retry: 0,                     // Falha rápido para não gastar gas
  staleTime: 1000 * 60 * 15,   // 15 minutos (dados mudam devagar)
}
```

**🎯 Resultado final**: Uma infraestrutura Web3 robusta, otimizada e pronta para escalar, que distribui energia Web3 e cache inteligente para toda sua aplicação!

---

### 🎣 **Passo 5: Criar Hooks Customizados**

#### **🤔 Por que criar hooks customizados?**

**Analogia**: Hooks são como **"funcionários especializados"** numa empresa:

- **👔 Gerente de Tarefas** (useTaskMetrics): Calcula estatísticas automaticamente
- **🔍 Pesquisador** (useAllUserTasks): Busca dados completos da blockchain
- **✍️ Assistente de Criação** (useCreateTask): Registra novas tarefas
- **✅ Supervisor** (useCompleteTask): Marca tarefas como concluídas
- **🔗 Recepcionista** (useWeb3Status): Sabe quem está conectado

**✅ Vantagens dos hooks customizados:**
- **Reutilizável**: Usa o mesmo hook em vários componentes
- **Organizado**: Cada hook tem uma responsabilidade específica
- **Automático**: Atualiza dados quando a blockchain muda
- **Limpo**: Componente fica simples, lógica fica nos hooks

#### **📁 5.1 Criar `hooks/useTaskManager.ts`**

```typescript
// hooks/useTaskManager.ts - Nossos "assistentes especializados"

import { useReadContract, useWriteContract, useAccount } from 'wagmi'
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '@/lib/web3'
import { parseEther } from 'viem'

// 🔍 Hook: Buscar todas as tarefas de um usuário (com dados completos)
export function useAllUserTasks() {
  const { address } = useAccount()
  
  return useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getUserTasksWithData',
    args: address ? [address] : undefined,
    query: { enabled: !!address } // Só busca se tiver carteira conectada
  })
}

// 📊 Hook: Calcular métricas automaticamente
export function useTaskMetrics() {
  const { data: allTasks, isLoading, error, refetch } = useAllUserTasks()
  
  // Se ainda está carregando ou sem dados
  if (isLoading || !allTasks) {
    return {
      total: 0, concluidas: 0, pendentes: 0, weiInStake: 0,
      tasks: [], isLoading: true, error: null, refetch
    }
  }

  // Se não há tarefas
  if (!Array.isArray(allTasks) || allTasks.length === 0) {
    return {
      total: 0, concluidas: 0, pendentes: 0, weiInStake: 0,
      tasks: [], isLoading: false, error: null, refetch
    }
  }

  // 🧮 Calcular métricas automaticamente
  let concluidas = 0
  let totalStake = 0

  allTasks.forEach((task: any) => {
    if (task.status) {
      concluidas++
    } else {
      totalStake += Number(task.stakeAmount)
    }
  })

  return {
    total: allTasks.length,
    concluidas,
    pendentes: allTasks.length - concluidas,
    weiInStake: totalStake / 1e18, // Converte wei para ETH
    tasks: allTasks,
    isLoading: false,
    error,
    refetch
  }
}

// ✍️ Hook: Criar nova tarefa
export function useCreateTask() {
  const { writeContract, isPending, error } = useWriteContract()
  
  const createTask = async (
    title: string, 
    description: string, 
    deadline: Date,
    stakeAmount: string = '0.001'
  ) => {
    try {
      // 🗓️ Converte data para timestamp unix
      const deadlineTimestamp = Math.floor(deadline.getTime() / 1000)
      
      // 📝 Chama função do contrato
      await writeContract({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'createTask',
        args: [title, description, BigInt(deadlineTimestamp)],
        value: parseEther(stakeAmount), // Converte ETH para Wei
      })
      
    } catch (err) {
      console.error('❌ Erro ao criar tarefa:', err)
      throw err
    }
  }
  
  return { createTask, isPending, error }
}

// ✅ Hook: Completar tarefa
export function useCompleteTask() {
  const { writeContract, isPending, error } = useWriteContract()
  
  const completeTask = async (taskId: number) => {
    try {
      await writeContract({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'completeTask',
        args: [BigInt(taskId)],
      })
    } catch (err) {
      console.error('❌ Erro ao completar tarefa:', err)
      throw err
    }
  }
  
  return { completeTask, isPending, error }
}

// 💰 Hook: Saldo do contrato
export function useContractBalance() {
  const { refetch } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getContractBalance',
  })
  
  return { refetchBalance: refetch }
}

// 🔗 Hook: Status da conexão Web3
export function useWeb3Status() {
  const { address, isConnected } = useAccount()
  
  return {
    address,
    isConnected,
    shortAddress: address ? `${address.slice(0, 6)}...${address.slice(-4)}` : null
  }
}
```

#### **📖 Análise Detalhada dos Hooks Customizados `hooks/useTaskManager.ts`**

Vamos dissecar cada hook para entender como funcionam essas **"máquinas especializadas"** que conectam nossa interface com a blockchain:

#### **📦 5.1.1 Imports e Dependências - "Ferramentas dos Especialistas"**

```typescript
// hooks/useTaskManager.ts - Nossos "assistentes especializados"

import { useReadContract, useWriteContract, useAccount } from 'wagmi'
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '@/lib/web3'
import { parseEther } from 'viem'
```

**Analogia**: Como **reunir ferramentas específicas** para cada tipo de trabalho especializado:

**`useReadContract, useWriteContract, useAccount`**: **"Ferramentas básicas do wagmi"**
- **useReadContract**: Como **"microscópio"** - só olha/lê dados da blockchain
- **useWriteContract**: Como **"martelo"** - modifica/escreve dados na blockchain  
- **useAccount**: Como **"carteira de identidade"** - informa quem está conectado

**`CONTRACT_ADDRESS, CONTRACT_ABI`**: **"Endereço e manual do contrato"**
- **CONTRACT_ADDRESS**: "GPS" para encontrar nosso contrato
- **CONTRACT_ABI**: "Manual de instruções" para usar o contrato
- **Vem de**: `@/lib/web3` que configuramos antes

**`parseEther`**: **"Conversor de moeda"**
- **Função**: Converte ETH (1.0) para wei (1000000000000000000)
- **Por que necessário**: Blockchain trabalha apenas com wei
- **Analogia**: Como **"conversor de real para centavos"**

#### **🔍 5.1.2 useAllUserTasks() - O "Detetive de Dados"**

```typescript
// 🔍 Hook: Buscar todas as tarefas de um usuário (com dados completos)
export function useAllUserTasks() {
  const { address } = useAccount()
  
  return useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getUserTasksWithData',
    args: address ? [address] : undefined,
    query: { enabled: !!address } // Só busca se tiver carteira conectada
  })
}
```

**📖 Explicação linha por linha:**

**`const { address } = useAccount()`**: **"Pegar carteira de identidade"**
- **useAccount()**: Hook do wagmi que monitora conexão da carteira
- **{ address }**: Desestruturação - pega só o endereço
- **address**: Endereço da carteira conectada (0x123...) ou `undefined`
- **Analogia**: Como **"verificar se a pessoa tem RG na mão"**

**`return useReadContract({...})`**: **"Configurar o microscópio"**
- **useReadContract**: Hook que faz consultas (leitura) à blockchain
- **Retorna**: Objeto com dados, loading, error, refetch
- **Analogia**: Como **"ajustar lentes do microscópio"** para ver dados

**Configurações do microscópio:**

**`address: CONTRACT_ADDRESS`**: **"Onde procurar"**
- **Função**: Informa qual contrato consultar
- **Valor**: Endereço do nosso TaskManager deployado
- **Analogia**: Como **"endereço da empresa"** onde buscar informações

**`abi: CONTRACT_ABI`**: **"Como falar"**
- **Função**: Manual de como chamar funções do contrato
- **Valor**: Array com todas as funções disponíveis
- **Analogia**: Como **"dicionário de idiomas"** para se comunicar

**`functionName: 'getUserTasksWithData'`**: **"Que pergunta fazer"**
- **Função**: Nome exato da função do contrato a chamar
- **Retorna**: Array completo com dados de todas as tarefas do usuário
- **Analogia**: Como **"fazer pergunta específica"** ao atendente

**`args: address ? [address] : undefined`**: **"Parâmetros da pergunta"**
- **Se tem address**: Passa `[endereço_da_carteira]` como parâmetro
- **Se não tem**: Passa `undefined` (não faz a chamada)
- **Por que array?**: Funções Solidity esperam parâmetros em array
- **Analogia**: Como **"mostrar RG"** quando perguntam seus dados

**`query: { enabled: !!address }`**: **"Quando fazer a pergunta"**
- **!!address**: Converte address em boolean (true se existe, false se não)
- **enabled**: Só executa a consulta quando true
- **Comportamento**: Só busca dados se carteira estiver conectada
- **Analogia**: Como **"só perguntar dados se a pessoa tem RG"**

#### **📊 5.1.3 useTaskMetrics() - A "Calculadora Super Inteligente"**

```typescript
// 📊 Hook: Calcular métricas automaticamente
export function useTaskMetrics() {
  const { data: allTasks, isLoading, error, refetch } = useAllUserTasks()
  
  // Se ainda está carregando ou sem dados
  if (isLoading || !allTasks) {
    return {
      total: 0, concluidas: 0, pendentes: 0, weiInStake: 0,
      tasks: [], isLoading: true, error: null, refetch
    }
  }

  // Se não há tarefas
  if (!Array.isArray(allTasks) || allTasks.length === 0) {
    return {
      total: 0, concluidas: 0, pendentes: 0, weiInStake: 0,
      tasks: [], isLoading: false, error: null, refetch
    }
  }

  // 🧮 Calcular métricas automaticamente
  let concluidas = 0
  let totalStake = 0

  allTasks.forEach((task: any) => {
    if (task.status) {
      concluidas++
    } else {
      totalStake += Number(task.stakeAmount)
    }
  })

  return {
    total: allTasks.length,
    concluidas,
    pendentes: allTasks.length - concluidas,
    weiInStake: totalStake / 1e18, // Converte wei para ETH
    tasks: allTasks,
    isLoading: false,
    error,
    refetch
  }
}
```

**📖 Explicação detalhada da lógica:**

**`const { data: allTasks, isLoading, error, refetch } = useAllUserTasks()`**: **"Receber dados do detetive"**
- **data**: Dados retornados da blockchain (renomeado para allTasks)
- **isLoading**: Se ainda está buscando dados (true/false)
- **error**: Se deu erro na consulta
- **refetch**: Função para buscar dados novamente
- **Analogia**: Como **"receber relatório do detetive"** com status da investigação

**Estados de carregamento e erro:**

**Estado 1 - "Aguardando dados":**
```typescript
if (isLoading || !allTasks) {
  return {
    total: 0, concluidas: 0, pendentes: 0, weiInStake: 0,
    tasks: [], isLoading: true, error: null, refetch
  }
}
```
- **Quando**: Primeira vez carregando ou dados ainda não chegaram
- **Retorna**: Zeros em tudo + `isLoading: true`
- **Por que**: Evita erros na interface enquanto espera
- **Analogia**: Como **"mostrar '0' na calculadora"** enquanto espera números

**Estado 2 - "Sem tarefas":**
```typescript
if (!Array.isArray(allTasks) || allTasks.length === 0) {
  return {
    total: 0, concluidas: 0, pendentes: 0, weiInStake: 0,
    tasks: [], isLoading: false, error: null, refetch
  }
}
```
- **Quando**: Dados chegaram mas usuário não tem tarefas
- **Verificações**: `Array.isArray()` confirma que é array válido
- **Retorna**: Zeros em tudo + `isLoading: false`
- **Analogia**: Como **"conta bancária zerada"** mas funcional

**Cálculo das métricas:**

**Preparação dos contadores:**
```typescript
let concluidas = 0
let totalStake = 0
```
- **concluidas**: Contador de tarefas finalizadas
- **totalStake**: Acumulador de ETH apostado em tarefas pendentes
- **Tipo let**: Variáveis que vão mudar durante o loop

**Loop de análise:**
```typescript
allTasks.forEach((task: any) => {
  if (task.status) {
    concluidas++
  } else {
    totalStake += Number(task.stakeAmount)
  }
})
```
- **forEach**: Analisa cada tarefa individualmente
- **task.status**: `true` = concluída, `false` = pendente
- **Se concluída**: Soma no contador de concluídas
- **Se pendente**: Soma o stake no total apostado
- **Number()**: Converte string/BigInt para number
- **Analogia**: Como **"contar dinheiro"** separando notas por valor

**Resultado final:**
```typescript
return {
  total: allTasks.length,                    // Total de tarefas
  concluidas,                                // Tarefas finalizadas
  pendentes: allTasks.length - concluidas,   // Cálculo automático
  weiInStake: totalStake / 1e18,            // Conversão wei → ETH
  tasks: allTasks,                           // Dados completos
  isLoading: false,                          // Não está mais carregando
  error,                                     // Repassa erros se houver
  refetch                                    // Função para atualizar
}
```

**Conversão wei → ETH:**
- **`totalStake / 1e18`**: Divide por 1 seguido de 18 zeros
- **Por que**: 1 ETH = 1.000.000.000.000.000.000 wei
- **Exemplo**: 1000000000000000 wei ÷ 1e18 = 0.001 ETH
- **Analogia**: Como **"converter centavos para reais"** (÷ 100)

#### **✍️ 5.1.4 useCreateTask() - O "Assistente de Criação Inteligente"**

```typescript
// ✍️ Hook: Criar nova tarefa
export function useCreateTask() {
  const { writeContract, isPending, error } = useWriteContract()
  
  const createTask = async (
    title: string, 
    description: string, 
    deadline: Date,
    stakeAmount: string = '0.001'
  ) => {
    try {
      // 🗓️ Converte data para timestamp unix
      const deadlineTimestamp = Math.floor(deadline.getTime() / 1000)
      
      // 📝 Chama função do contrato
      await writeContract({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'createTask',
        args: [title, description, BigInt(deadlineTimestamp)],
        value: parseEther(stakeAmount), // Converte ETH para Wei
      })
      
    } catch (err) {
      console.error('❌ Erro ao criar tarefa:', err)
      throw err
    }
  }
  
  return { createTask, isPending, error }
}
```

**📖 Análise completa da função:**

**`const { writeContract, isPending, error } = useWriteContract()`**: **"Ferramentas de escrita"**
- **writeContract**: Função para executar transações na blockchain
- **isPending**: Se transação está sendo processada (true/false)
- **error**: Erros que aconteceram durante transação
- **Analogia**: Como **"pegar caneta, papel e borracha"** para escrever

**Parâmetros da função createTask:**
```typescript
const createTask = async (
  title: string,           // Título da tarefa
  description: string,     // Descrição detalhada
  deadline: Date,          // Prazo como objeto Date
  stakeAmount: string = '0.001'  // Valor apostado (padrão 0.001 ETH)
) => {
```
- **async**: Função assíncrona (trabalha com blockchain)
- **title/description**: Textos que vão para o contrato
- **deadline**: Data JavaScript que será convertida
- **stakeAmount**: String porque parseEther espera string
- **Valor padrão**: '0.001' se usuário não especificar

**Conversão de data:**
```typescript
const deadlineTimestamp = Math.floor(deadline.getTime() / 1000)
```
- **deadline.getTime()**: Converte Date para milissegundos desde 1970
- **/ 1000**: Converte milissegundos para segundos (formato blockchain)
- **Math.floor()**: Remove decimais (blockchain usa inteiros)
- **Exemplo**: 25/12/2024 15:30 → 1735134600
- **Analogia**: Como **"converter data para código postal"**

**Chamada do contrato:**
```typescript
await writeContract({
  address: CONTRACT_ADDRESS,              // Onde enviar
  abi: CONTRACT_ABI,                     // Como falar
  functionName: 'createTask',            // Que função chamar
  args: [title, description, BigInt(deadlineTimestamp)],  // Parâmetros
  value: parseEther(stakeAmount),        // ETH a enviar
})
```

**Detalhamento dos parâmetros:**

- **address/abi**: Igual ao useReadContract, define qual contrato e como falar
- **functionName**: Nome exato da função no contrato Solidity
- **args**: Array com parâmetros na ordem exata do contrato
- **value**: ETH a enviar junto com a transação (para funções payable)

**Preparação dos argumentos:**
```typescript
args: [title, description, BigInt(deadlineTimestamp)]
```
- **title**: String diretamente (Solidity aceita)
- **description**: String diretamente  
- **BigInt(deadlineTimestamp)**: Converte number para BigInt
- **Por que BigInt?**: Solidity uint256 é muito grande para number JavaScript
- **Analogia**: Como **"usar calculadora científica"** para números grandes

**Conversão de valor:**
```typescript
value: parseEther(stakeAmount)
```
- **parseEther('0.001')**: Converte "0.001 ETH" para "1000000000000000 wei"
- **Por que**: Blockchain só entende wei (menor unidade)
- **Função viem**: Biblioteca otimizada para conversões
- **Analogia**: Como **"converter R$ 1,00 para 100 centavos"**

**Tratamento de erros:**
```typescript
try {
  // ... código da transação
} catch (err) {
  console.error('❌ Erro ao criar tarefa:', err)
  throw err
}
```
- **try/catch**: Captura erros de rede, gas, rejeição do usuário
- **console.error**: Registra erro para debugging
- **throw err**: Repassa erro para quem chamou a função
- **Analogia**: Como **"ter plano B"** se algo der errado

#### **✅ 5.1.5 useCompleteTask() - O "Finalizador Preciso"**

```typescript
// ✅ Hook: Completar tarefa
export function useCompleteTask() {
  const { writeContract, isPending, error } = useWriteContract()
  
  const completeTask = async (taskId: number) => {
    try {
      await writeContract({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'completeTask',
        args: [BigInt(taskId)],
      })
    } catch (err) {
      console.error('❌ Erro ao completar tarefa:', err)
      throw err
    }
  }
  
  return { completeTask, isPending, error }
}
```

**📖 Explicação da simplicidade:**

**Por que mais simples que createTask?**
- **Apenas 1 parâmetro**: Só precisa do ID da tarefa
- **Sem value**: Não envia ETH (função nonpayable)
- **Sem conversões complexas**: ID é apenas número
- **Analogia**: Como **"marcar checkbox"** numa lista

**Parâmetro único:**
```typescript
const completeTask = async (taskId: number) => {
```
- **taskId**: Número da tarefa (1, 2, 3...)
- **number**: Tipo JavaScript simples
- **Será convertido**: Para BigInt antes de enviar

**Conversão simples:**
```typescript
args: [BigInt(taskId)]
```
- **BigInt(taskId)**: Converte number para formato blockchain
- **Array único**: Função Solidity espera apenas um parâmetro
- **Exemplo**: `BigInt(5)` → `5n` (formato blockchain)

#### **💰 5.1.6 useContractBalance() - O "Contador do Cofre"**

```typescript
// 💰 Hook: Saldo do contrato
export function useContractBalance() {
  const { refetch } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getContractBalance',
  })
  
  return { refetchBalance: refetch }
}
```

**📖 Explicação da função:**

**Por que só refetch?**
- **Função raramente usada**: Só para estatísticas administrativas
- **Não precisa dados automáticos**: Só consulta quando solicitado
- **Economiza recursos**: Não fica fazendo consultas desnecessárias
- **Analogia**: Como **"verificar saldo do cofre"** só quando gerente pede

**Como usar na prática:**
```typescript
const { refetchBalance } = useContractBalance()

// Quando quiser consultar:
const checkBalance = async () => {
  const result = await refetchBalance()
  console.log('Saldo do contrato:', result.data)
}
```

#### **🔗 5.1.7 useWeb3Status() - O "Monitor da Conexão"**

```typescript
// 🔗 Hook: Status da conexão Web3
export function useWeb3Status() {
  const { address, isConnected } = useAccount()
  
  return {
    address,
    isConnected,
    shortAddress: address ? `${address.slice(0, 6)}...${address.slice(-4)}` : null
  }
}
```

**📖 Funcionalidade detalhada:**

**Dados originais:**
```typescript
const { address, isConnected } = useAccount()
```
- **address**: Endereço completo da carteira (42 caracteres)
- **isConnected**: Boolean indicando se está conectado
- **Fonte**: Hook nativo do wagmi

**Formatação inteligente:**
```typescript
shortAddress: address ? `${address.slice(0, 6)}...${address.slice(-4)}` : null
```
- **address.slice(0, 6)**: Primeiros 6 caracteres (0x1234)
- **address.slice(-4)**: Últimos 4 caracteres (abcd)
- **Template string**: Junta com "..." no meio
- **Resultado**: "0x1234...abcd"
- **Se não conectado**: Retorna null
- **Analogia**: Como **"resumir número de telefone"** (11) 9999-1234

#### **🎯 5.1.8 Fluxo de Uso dos Hooks**

**Como os hooks trabalham juntos:**

```
1. 🔗 useWeb3Status()
   ↓ (verifica se conectado)
   
2. 🔍 useAllUserTasks()
   ↓ (busca dados se conectado)
   
3. 📊 useTaskMetrics()
   ↓ (processa e calcula)
   
4. 🎨 Interface usa métricas
   ↓
   
5. ✍️ useCreateTask() (quando usuário cria)
   ↓
   
6. ✅ useCompleteTask() (quando usuário completa)
   ↓
   
7. 🔄 Dados atualizam automaticamente
```

#### **🛡️ 5.1.9 Padrões de Segurança e Otimização**

**Segurança implementada:**
- **Verificação de conexão**: `enabled: !!address`
- **Tratamento de erros**: try/catch em todas as funções
- **Validação de tipos**: TypeScript + BigInt para números grandes
- **Estados de loading**: Evita ações durante processamento

**Otimizações implementadas:**
- **Cache automático**: TanStack Query cacheia dados
- **Lazy loading**: Só busca quando conectado
- **Reuse de hooks**: useTaskMetrics reutiliza useAllUserTasks
- **Estados consistentes**: Sempre retorna formato padrão

**🎯 Resultado**: Hooks robustos, otimizados e seguros que abstraem toda a complexidade Web3 para desenvolvedores!

---

### 🔧 **Passo 6: Atualizar layout.tsx**

Agora vamos conectar nossos providers à aplicação. O `layout.tsx` é como a **"fiação principal"** da casa que distribui energia para todos os cômodos.

#### **🤔 Por que modificar o layout.tsx?**

**Analogia**: O `layout.tsx` é como o **"chassi principal"** de um carro - tudo se conecta nele.

**🎯 O que vamos fazer:**
- Importar o Web3Provider que criamos
- Envolver toda a aplicação com funcionalidades Web3
- Adicionar sistema de notificações (Toaster)
- Manter otimizações do Next.js (Server Components)

#### **📁 6.1 Modificar `app/layout.tsx`**

```typescript
// app/layout.tsx - Fiação principal da aplicação

import { Web3Provider } from '@/providers/Web3Provider'
import { Toaster } from '@/components/ui/toaster'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TaskManager DApp',
  description: 'Gerencie suas tarefas na blockchain Ethereum (Sepolia)',
  keywords: ['blockchain', 'ethereum', 'web3', 'dapp', 'task manager'],
  authors: [{ name: 'Seu Nome' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-background font-sans antialiased">
        <Web3Provider>
          <main className="relative flex min-h-screen flex-col">
            {children}
          </main>
          <Toaster />
        </Web3Provider>
      </body>
    </html>
  )
  }
  ```

#### **📖 Explicação detalhada do código:**

**🚫 Nota sobre `'use client'`:**
```typescript
// ❌ NÃO tem 'use client' no layout.tsx
```
- **Por que não**: Layout é Server Component (roda no servidor)
- **Benefícios**: SEO melhor, carregamento mais rápido
- **Como funciona**: Só o Web3Provider que tem 'use client'

```typescript
import { Web3Provider } from '@/providers/Web3Provider'
import { Toaster } from '@/components/ui/toaster'
import type { Metadata } from 'next'
import './globals.css'
```

- **`Web3Provider`**: O provider que criamos no Passo 4
- **`Toaster`**: Sistema de notificações para transações
- **`Metadata`**: Tipagem do Next.js para metadados
- **`globals.css`**: Estilos globais da aplicação

**🔧 Configuração de metadados:**
```typescript
export const metadata: Metadata = {
  title: 'TaskManager DApp',
  description: 'Gerencie suas tarefas na blockchain Ethereum (Sepolia)',
  keywords: ['blockchain', 'ethereum', 'web3', 'dapp', 'task manager'],
  authors: [{ name: 'Seu Nome' }],
  viewport: 'width=device-width, initial-scale=1',
}
```

- **title**: Aparece na aba do navegador
- **description**: Para Google e redes sociais
- **keywords**: Para SEO
- **viewport**: Para responsividade mobile

**🏠 Estrutura principal:**
```typescript
<html lang="pt-BR">
  <body className="min-h-screen bg-background font-sans antialiased">
    <Web3Provider>
      <main className="relative flex min-h-screen flex-col">
        {children}
      </main>
      <Toaster />
    </Web3Provider>
  </body>
</html>
```

**📖 Explicação de cada elemento:**

- **`<html lang="pt-BR">`**: Define idioma para acessibilidade
- **`<body>`**: Estilos básicos (altura, fonte, suavização)
- **`<Web3Provider>`**: **CHAVE!** Envolve tudo com funcionalidades Web3
- **`<main>`**: Área principal das páginas
- **`{children}`**: Conteúdo das páginas (page.tsx)
- **`<Toaster />`**: Notificações de transações

---

### 💻 **Passo 7: Implementar Interface na page.tsx**

Agora vamos criar a interface principal que usa todos os componentes e hooks que criamos. A `page.tsx` é como a **"sala principal"** da casa onde tudo se conecta.

#### **🤔 O que vamos implementar na page.tsx?**

**🎯 Funcionalidades principais:**
- Sistema de conexão/desconexão de carteira
- Verificação de rede (deve estar na Sepolia)
- Cards de métricas em tempo real
- Lista de tarefas com dados da blockchain
- Modal para criar novas tarefas
- Sistema de notificações

#### **📁 7.1 Implementação da `app/page.tsx`**

```typescript
// app/page.tsx - Interface principal do DApp

"use client"

import { useState } from "react"
import { useConnect, useDisconnect, useChainId } from 'wagmi'
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { AlertCircle, CheckCircle2, ListTodo, Loader, Coins, PlusCircle, Wallet } from "lucide-react"

// 🔧 Hooks customizados que criamos
import { useWeb3Status, useContractBalance, useTaskMetrics } from '@/hooks/useTaskManager'
import { CreateTaskModal } from '@/components/CreateTaskModal'
import { TaskItem } from '@/components/TaskItem'
import { sepolia } from 'wagmi/chains'

export default function Web3TodoPage() {
  const [showCreateModal, setShowCreateModal] = useState(false)
  
  // 🔗 Hooks Web3 simplificados
  const { connectors, connect } = useConnect()
  const { disconnect } = useDisconnect()
  const { isConnected, shortAddress } = useWeb3Status()
  const { refetchBalance } = useContractBalance()
  const chainId = useChainId()
  
  // 🚀 Hook central que faz tudo
  const {
    total, concluidas, pendentes, weiInStake, tasks,
    isLoading: loadingTasks, refetch: refetchTasks
  } = useTaskMetrics()
  
  // 🌐 Verificação de rede
  const isCorrectNetwork = chainId === sepolia.id
  const networkName = chainId === sepolia.id ? 'Sepolia' : `Rede ${chainId}`

  // 🔄 Função para conectar/desconectar
  const handleConnectWallet = () => {
    if (isConnected) {
      disconnect()
    } else {
      const metamask = connectors.find(c => c.name === 'MetaMask')
      if (metamask) connect({ connector: metamask })
    }
  }

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <main className="container mx-auto p-4 sm:p-6 lg:p-8">
          
          {/* 🎯 CABEÇALHO */}
          <header className="mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <h1 className="text-3xl font-bold text-gray-800">WEB3 TODO</h1>
              
              <div className="flex items-center gap-2">
                {isConnected && (
                  <div className="flex flex-col items-end text-sm">
                    <span className="text-green-600 font-medium">{shortAddress}</span>
                    <div className="flex items-center gap-1">
                      <div className={`w-2 h-2 rounded-full ${isCorrectNetwork ? 'bg-green-500' : 'bg-red-500'}`}></div>
                      <span className={`text-xs ${isCorrectNetwork ? 'text-green-600' : 'text-red-600'}`}>
                        {networkName}
                      </span>
                    </div>
                  </div>
                )}
                
                <Button
                  onClick={handleConnectWallet}
                  className={`transition-all duration-300 ${
                    isConnected ? "bg-green-600 hover:bg-green-700" : "bg-violet-600 hover:bg-violet-700"
                  }`}
                >
                  <Wallet className="mr-2 h-4 w-4" />
                  {isConnected ? "Carteira Conectada" : "Conectar Carteira"}
                </Button>
              </div>
            </div>
            
            {/* ⚠️ Alertas */}
            {!isConnected && (
              <Alert variant="destructive" className="mt-4 border-yellow-500/50 text-yellow-700">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Conecte sua carteira para gerenciar suas tarefas na blockchain.
                </AlertDescription>
              </Alert>
            )}

            {isConnected && !isCorrectNetwork && (
              <Alert variant="destructive" className="mt-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Você está na rede {networkName}. Mude para Sepolia para usar este DApp.
                </AlertDescription>
              </Alert>
            )}
          </header>

          {/* 📊 SEÇÃO DE MÉTRICAS */}
          <section className="mb-10">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <MetricCard
                title="Total de Tarefas"
                value={total}
                icon={<ListTodo className="h-6 w-6 text-violet-500" />}
                tooltip="Número total de tarefas criadas"
              />
              <MetricCard
                title="Tarefas Concluídas"
                value={concluidas}
                icon={<CheckCircle2 className="h-6 w-6 text-cyan-500" />}
                tooltip="Tarefas finalizadas no prazo - stake devolvido"
              />
              <MetricCard
                title="Tarefas Pendentes"
                value={pendentes}
                icon={<Loader className="h-6 w-6 text-yellow-500" />}
                tooltip="Tarefas ainda não concluídas"
              />
              <MetricCard
                title="ETH em Stake"
                value={`${weiInStake.toFixed(6)} ETH`}
                icon={<Coins className="h-6 w-6 text-indigo-500" />}
                tooltip="Valor total apostado em tarefas pendentes"
              />
            </div>
          </section>

          {/* 📋 SEÇÃO DE TAREFAS */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">Tarefas</h2>
              
              <Button 
                disabled={!isConnected} 
                className="bg-violet-600 hover:bg-violet-700 disabled:opacity-50"
                onClick={() => setShowCreateModal(true)}
              >
                <PlusCircle className="mr-2 h-4 w-4" />
                Nova Tarefa
              </Button>
            </div>
            
            <div className="space-y-4">
              {loadingTasks && isConnected ? (
                <div className="text-center p-8">
                  <Loader className="animate-spin h-8 w-8 mx-auto mb-4" />
                  <p>Carregando tarefas da blockchain...</p>
                </div>
              ) : (!tasks || tasks.length === 0) && isConnected ? (
                <div className="text-center p-8">
                  <p className="text-gray-500">Você ainda não tem tarefas. Crie sua primeira!</p>
                </div>
              ) : isConnected && tasks ? (
                tasks.map((task: any) => (
                  <TaskItem 
                    key={Number(task.id)} 
                    task={task}
                    isConnected={isConnected}
                  />
                ))
              ) : null}
              
              {!isConnected && (
                <div className="text-center p-8">
                  <AlertCircle className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-500">Conecte sua carteira para ver suas tarefas</p>
                </div>
              )}
            </div>
          </section>
        </main>
      </div>
      
      {/* Modal de Criar Tarefa */}
      <CreateTaskModal 
        open={showCreateModal} 
        onClose={() => setShowCreateModal(false)} 
      />
    </TooltipProvider>
  )
}

// 🎨 Componente reutilizável para cards de métricas
function MetricCard({ title, value, icon, tooltip }) {
  const content = (
    <Card className="transition-shadow duration-300 hover:shadow-lg cursor-pointer">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  )

  if (tooltip) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>{content}</TooltipTrigger>
        <TooltipContent><p>{tooltip}</p></TooltipContent>
      </Tooltip>
    )
  }

  return content
}
```

#### **📖 Explicação detalhada dos pontos-chave:**

**🔌 Gerenciamento de Estado:**
```typescript
const [showCreateModal, setShowCreateModal] = useState(false)
```
- **Estado local**: Controla se o modal de criar tarefa está aberto
- **Simples e efetivo**: Apenas true/false

**🎣 Uso dos Hooks Customizados:**
```typescript
const { isConnected, shortAddress } = useWeb3Status()
const { total, concluidas, pendentes, weiInStake, tasks } = useTaskMetrics()
```
- **useWeb3Status()**: Sabe se carteira está conectada
- **useTaskMetrics()**: Pega todos os dados e calcula métricas automaticamente
- **Simplicidade**: Um hook faz todo o trabalho pesado

**🌐 Verificação Inteligente de Rede:**
```typescript
const isCorrectNetwork = chainId === sepolia.id
const networkName = chainId === sepolia.id ? 'Sepolia' : `Rede ${chainId}`
```
- **Segurança**: Só funciona na Sepolia (rede de teste)
- **UX**: Mostra alerta se estiver na rede errada

**⚡ Renderização Condicional Inteligente:**
```typescript
{loadingTasks && isConnected ? (
  <LoadingSpinner />
) : (!tasks || tasks.length === 0) && isConnected ? (
  <EmptyState />
) : isConnected && tasks ? (
  <TasksList />
) : (
  <NotConnectedState />
)}
```
- **4 estados diferentes**: Loading, Empty, WithData, NotConnected
- **UX fluida**: Usuário sempre vê algo apropriado

---

### 📝 **Passo 7.2: Criando Modal de Tarefas (CreateTaskModal.tsx)**

O modal de criação é como um **"formulário inteligente"** que coleta informações do usuário e as envia diretamente para a blockchain.

#### **🤔 Por que precisamos de um modal separado?**

**Analogia**: É como ter um **"balcão de atendimento especializado"** numa agência bancária - ao invés de misturar tudo na mesma tela, você tem um espaço dedicado para cada operação específica.

**🎯 Vantagens do modal:**
- **Foco**: Usuário se concentra apenas na criação
- **Validação**: Dados são verificados antes do envio
- **UX limpa**: Interface principal não fica poluída
- **Reutilização**: Pode ser usado em várias páginas

#### **📁 7.2.1 Anatomia do `components/CreateTaskModal.tsx`**

```typescript
// components/CreateTaskModal.tsx - Modal para criar tarefas

'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Loader } from 'lucide-react'
import { useCreateTask } from '@/hooks/useTaskManager'

interface CreateTaskModalProps {
  open: boolean
  onClose: () => void
}
```

#### **📖 Explicação dos imports e interface:**

**🎭 Componentes UI:**
- **`Dialog`**: "Janela flutuante" que sobrepõe a tela principal
- **`Button, Input, Textarea, Label`**: Peças do formulário
- **`Loader`**: Ícone de carregamento animado

**🎣 Hook customizado:**
- **`useCreateTask`**: Nosso "assistente especializado" em criar tarefas

**📋 Interface (Contrato):**
```typescript
interface CreateTaskModalProps {
  open: boolean    // Modal está aberto? (true/false)
  onClose: () => void  // Função para fechar modal
}
```
- **Analogia**: Como **"instruções de operação"** de uma máquina - deve receber um botão liga/desliga e um botão de emergência

#### **📊 7.2.2 Estados do Modal - A "Memória" do Formulário**

```typescript
export function CreateTaskModal({ open, onClose }: CreateTaskModalProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [deadline, setDeadline] = useState('')
  const [stakeAmount, setStakeAmount] = useState('0.001')
  
  const { createTask, isPending } = useCreateTask()
```

**📝 Explicação dos estados:**

**`useState('')` para textos:**
- **`title`**: Nome da tarefa (ex: "Estudar Solidity")
- **`description`**: Detalhes da tarefa
- **`deadline`**: Data limite no formato HTML datetime-local
- **`stakeAmount`**: Valor apostado (padrão: 0.001 ETH)

**Analogia**: Como **"campos de um formulário de papel"** que você vai preenchendo aos poucos - cada campo tem seu próprio espaço na memória.

**Hook de criação:**
```typescript
const { createTask, isPending } = useCreateTask()
```
- **`createTask`**: Função que envia dados para blockchain
- **`isPending`**: `true` enquanto transação está sendo processada

#### **⚡ 7.2.3 Lógica de Envio - "Entregando o Formulário"**

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault() // Impede recarregar a página
  
  try {
    const deadlineDate = new Date(deadline)
    await createTask(title, description, deadlineDate, stakeAmount)
    
    // Limpa formulário e fecha modal
    setTitle('')
    setDescription('')
    setDeadline('')
    setStakeAmount('0.001')
    onClose()
    
  } catch (error) {
    console.error('Erro ao criar tarefa:', error)
  }
}
```

**📖 Explicação linha por linha:**

**1. `e.preventDefault()`:**
- **O que faz**: Impede comportamento padrão do formulário HTML
- **Por que**: Sem isso, página recarregaria e perderia dados
- **Analogia**: Como **"segurar a porta"** para não fechar sozinha

**2. `const deadlineDate = new Date(deadline)`:**
- **O que faz**: Converte string datetime-local para objeto Date
- **Exemplo**: "2024-12-25T15:30" → Date object
- **Por que**: Smart contract precisa de timestamp unix (número)

**3. `await createTask(...)`:**
- **O que faz**: Chama nosso hook para enviar à blockchain
- **Parâmetros**: Todos os dados coletados no formulário
- **`await`**: Espera transação ser processada antes de continuar

**4. Limpeza do formulário:**
```typescript
setTitle('')           // Limpa campo título
setDescription('')     // Limpa campo descrição
setDeadline('')        // Limpa campo prazo
setStakeAmount('0.001') // Volta ao valor padrão
onClose()              // Fecha o modal
```
- **Analogia**: Como **"jogar o papel usado fora"** e preparar formulário novo para próxima pessoa

#### **📅 7.2.4 Validação de Data - "Detector de Viagem no Tempo"**

```typescript
// Gera data mínima (hoje + 1 hora)
const minDateTime = new Date(Date.now() + 60 * 60 * 1000).toISOString().slice(0, 16)
```

**📖 Explicação da matemática temporal:**
- **`Date.now()`**: Agora em milissegundos (ex: 1703980800000)
- **`+ 60 * 60 * 1000`**: Soma 1 hora (60 min × 60 seg × 1000 ms)
- **`.toISOString()`**: Converte para formato ISO ("2024-12-25T15:30:00.000Z")
- **`.slice(0, 16)`**: Pega só "2024-12-25T15:30" (formato datetime-local)

**🚫 Por que 1 hora mínima?**
- **Evita prazos impossíveis**: Não pode criar tarefa para "agora" ou passado
- **Buffer de segurança**: Dá tempo para escrever descrição e enviar transação
- **UX melhor**: Força usuário a pensar em prazo realista

#### **🎨 7.2.5 Interface do Modal - "Balcão de Atendimento"**

```typescript
return (
  <Dialog open={open} onOpenChange={onClose}>
    <DialogContent className="sm:max-w-[500px]">
      <DialogHeader>
        <DialogTitle>🎯 Nova Tarefa na Blockchain</DialogTitle>
      </DialogHeader>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Campos do formulário */}
      </form>
    </DialogContent>
  </Dialog>
)
```

**📖 Componentes explicados:**

**`Dialog`**: Container principal
- **`open={open}`**: Controla se modal está visível
- **`onOpenChange={onClose}`**: Fecha quando clica fora ou ESC

**`DialogContent`**: Área do formulário
- **`sm:max-w-[500px]`**: Largura máxima em telas pequenas

**`form onSubmit={handleSubmit}`**: Formulário inteligente
- **Ao pressionar Enter**: Chama `handleSubmit`
- **Ao clicar "Criar Tarefa"**: Chama `handleSubmit`

#### **📝 7.2.6 Campos do Formulário - "Fichas de Cadastro"**

**1. Campo Título:**
```typescript
<div className="space-y-2">
  <Label htmlFor="title">Título da Tarefa</Label>
  <Input
    id="title"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    placeholder="Ex: Estudar Solidity"
    required
  />
</div>
```

**2. Campo Descrição:**
```typescript
<Textarea
  id="description"
  value={description}
  onChange={(e) => setDescription(e.target.value)}
  placeholder="Descreva o que precisa ser feito..."
  rows={3}
  required
/>
```

**3. Campo Prazo:**
```typescript
<Input
  id="deadline"
  type="datetime-local"
  value={deadline}
  onChange={(e) => setDeadline(e.target.value)}
  min={minDateTime}  // ⚡ Não permite data passada
  required
/>
```

**4. Campo Stake:**
```typescript
<Input
  id="stake"
  type="number"
  step="0.001"        // Incrementos de 0.001
  min="0.001"         // Valor mínimo
  value={stakeAmount}
  onChange={(e) => setStakeAmount(e.target.value)}
  required
/>
<p className="text-xs text-gray-500">
  💡 Mínimo: 0.001 ETH • Você recupera se completar no prazo!
</p>
```

#### **🔘 7.2.7 Botões de Ação - "Decisões Finais"**

```typescript
<div className="flex justify-end gap-3 pt-4">
  <Button type="button" variant="outline" onClick={onClose}>
    Cancelar
  </Button>
  <Button type="submit" disabled={isPending} className="bg-violet-600 hover:bg-violet-700">
    {isPending ? (
      <>
        <Loader className="mr-2 h-4 w-4 animate-spin" />
        Criando...
      </>
    ) : (
      'Criar Tarefa'
    )}
  </Button>
</div>
```

**📖 Lógica dos botões:**

**Botão Cancelar:**
- **`type="button"`**: Não submete formulário
- **`onClick={onClose}`**: Fecha modal sem salvar

**Botão Criar:**
- **`type="submit"`**: Submete formulário (chama `handleSubmit`)
- **`disabled={isPending}`**: Desabilitado enquanto processa
- **Estado dinâmico**:
  - **Normal**: "Criar Tarefa"
  - **Processando**: Spinner + "Criando..."

**Analogia**: Como **"botões de um caixa eletrônico"** - um para cancelar operação, outro para confirmar e processar.

---

### 📋 **Passo 7.3: Componente de Item de Tarefa (TaskItem.tsx)**

Cada tarefa é exibida através de um componente especializado que funciona como um **"cartão inteligente"** - mostra informações e permite ações específicas.

#### **🤔 Por que um componente separado para cada tarefa?**

**Analogia**: É como ter **"fichas individuais"** numa agenda médica - cada paciente tem sua própria ficha com dados específicos e ações possíveis (consultar, remarcar, etc.).

**🎯 Vantagens do componente isolado:**
- **Reutilização**: Uma tarefa = um componente
- **Responsabilidade única**: Só cuida de mostrar/gerenciar uma tarefa
- **Estilo dinâmico**: Visual muda conforme status da tarefa
- **Ações contextuais**: Botões aparecem/somem conforme necessário

#### **📁 7.3.1 Estrutura do `components/TaskItem.tsx`**

```typescript
'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { CheckSquare, Loader, Coins } from 'lucide-react'
import { useCompleteTask } from '@/hooks/useTaskManager'

interface TaskItemProps {
  task: any // Dados completos da tarefa da blockchain
  isConnected: boolean
  onTaskUpdate?: () => void // Callback para atualizar lista
}
```

#### **📖 Explicação da interface:**

**`TaskItemProps` - "Instruções de Uso":**
- **`task`**: Objeto com todos os dados da tarefa (vem da blockchain)
- **`isConnected`**: Se usuário está com carteira conectada
- **`onTaskUpdate?`**: Função opcional para atualizar lista após ações

**🎭 Imports especializados:**
- **`Card, Badge, Button`**: Componentes visuais
- **`Tooltip`**: Dicas contextuais ao passar mouse
- **`CheckSquare, Loader, Coins`**: Ícones específicos
- **`useCompleteTask`**: Hook para completar tarefas

#### **⚡ 7.3.2 Processamento de Dados - "Tradutor de Blockchain"**

```typescript
export function TaskItem({ task, isConnected, onTaskUpdate }: TaskItemProps) {
  const { completeTask, isPending } = useCompleteTask()

  // Processar dados da tarefa
  const now = Math.floor(Date.now() / 1000)
  const isOverdue = now > Number(task.deadline) && !task.status
  const isCompleted = task.status
  const createdDate = new Date(Number(task.createdAt) * 1000)
  const deadlineDate = new Date(Number(task.deadline) * 1000)
  const stakeInEth = Number(task.stakeAmount) / 1e18
```

**📖 Explicação das conversões:**

**Tempo atual em segundos:**
```typescript
const now = Math.floor(Date.now() / 1000)
```
- **`Date.now()`**: Agora em milissegundos
- **`/ 1000`**: Converte para segundos (formato blockchain)
- **`Math.floor()`**: Remove decimais (só números inteiros)

**Lógica de atraso:**
```typescript
const isOverdue = now > Number(task.deadline) && !task.status
```
- **`now > Number(task.deadline)`**: Agora é depois do prazo?
- **`&& !task.status`**: E ainda não foi concluída?
- **Resultado**: `true` = atrasada, `false` = não atrasada

**Conversão de timestamps:**
```typescript
const createdDate = new Date(Number(task.createdAt) * 1000)
const deadlineDate = new Date(Number(task.deadline) * 1000)
```
- **`Number(task.createdAt)`**: Timestamp da blockchain (segundos)
- **`* 1000`**: Converte para milissegundos (formato JavaScript)
- **`new Date()`**: Cria objeto Date para formatação

**Conversão Wei → ETH:**
```typescript
const stakeInEth = Number(task.stakeAmount) / 1e18
```
- **`1e18`**: 1 seguido de 18 zeros (1 ETH = 1.000.000.000.000.000.000 wei)
- **Exemplo**: 1000000000000000 wei ÷ 1e18 = 0.001 ETH

#### **🎯 7.3.3 Função de Completar - "Botão de Finalização"**

```typescript
const handleComplete = async () => {
  if (!isConnected) return
  
  try {
    await completeTask(Number(task.id))
    // Atualizar lista após completar
    setTimeout(() => {
      onTaskUpdate && onTaskUpdate()
    }, 2000)
  } catch (error) {
    console.error('Erro ao completar tarefa:', error)
  }
}
```

**📖 Explicação da lógica:**

**Verificação de segurança:**
```typescript
if (!isConnected) return
```
- **Proteção**: Só executa se carteira estiver conectada
- **UX**: Evita erros confusos para usuário

**Chamada para blockchain:**
```typescript
await completeTask(Number(task.id))
```
- **`Number(task.id)`**: Converte ID para formato correto
- **`await`**: Espera transação ser confirmada

**Atualização inteligente:**
```typescript
setTimeout(() => {
  onTaskUpdate && onTaskUpdate()
}, 2000)
```
- **Por que setTimeout?**: Blockchain precisa de tempo para processar
- **2 segundos**: Tempo típico de confirmação em redes de teste
- **`onTaskUpdate &&`**: Só chama se função foi fornecida

#### **🎨 7.3.4 Renderização Dinâmica - "Camaleão Visual"**

```typescript
return (
  <Card className={`transition-all duration-300 ${
    isCompleted ? "bg-gray-100/80 border-gray-200" : 
    isOverdue ? "bg-red-50/80 border-red-200" : "bg-white"
  }`}>
```

**🎨 Sistema de cores por status:**

**✅ Tarefa Concluída:**
- **Fundo**: `bg-gray-100/80` (cinza claro com transparência)
- **Borda**: `border-gray-200` (cinza médio)
- **Significado**: "Tarefa finalizada, fora de foco"

**❌ Tarefa Atrasada:**
- **Fundo**: `bg-red-50/80` (vermelho muito claro)
- **Borda**: `border-red-200` (vermelho claro)
- **Significado**: "Atenção! Prazo vencido"

**⏳ Tarefa Pendente:**
- **Fundo**: `bg-white` (branco normal)
- **Borda**: Padrão do Card
- **Significado**: "Tarefa ativa, precisa de atenção"

**🔄 Transição suave:**
- **`transition-all duration-300`**: Cores mudam suavemente em 0.3s
- **UX**: Mudanças visuais não são bruscas

#### **📝 7.3.5 Área de Informações - "Cartão de Dados"**

```typescript
<div className="flex flex-col sm:flex-row justify-between items-start gap-4">
  <div className="flex-1">
    <div className="flex items-center gap-3 mb-2">
      <h3 className={`text-lg font-semibold ${
        isCompleted ? "text-gray-500 line-through" : "text-gray-900"
      }`}>
        {task.title}
      </h3>
      <Badge
        variant={isCompleted ? "default" : isOverdue ? "destructive" : "secondary"}
        className={`text-xs font-medium ${
          isCompleted
            ? "bg-cyan-100 text-cyan-800 border-cyan-200"
            : isOverdue 
              ? "bg-red-100 text-red-800 border-red-200"
              : "bg-yellow-100 text-yellow-800 border-yellow-200"
        }`}
      >
        {isCompleted ? "Concluído" : isOverdue ? "Atrasada" : "Pendente"}
      </Badge>
    </div>
```

**📖 Explicação dos elementos:**

**Layout responsivo:**
- **`flex-col sm:flex-row`**: Coluna no mobile, linha no desktop
- **`justify-between`**: Espalha conteúdo pelas extremidades
- **`gap-4`**: Espaçamento entre elementos

**Título dinâmico:**
```typescript
<h3 className={`text-lg font-semibold ${
  isCompleted ? "text-gray-500 line-through" : "text-gray-900"
}`}>
```
- **Tarefa concluída**: Texto cinza + riscado (`line-through`)
- **Tarefa pendente**: Texto escuro normal
- **Analogia**: Como **"riscar item da lista de compras"**

**Badge de status:**
```typescript
{isCompleted ? "Concluído" : isOverdue ? "Atrasada" : "Pendente"}
```
- **Lógica ternária**: if-else encadeado
- **3 estados**: Concluído (azul) → Atrasada (vermelho) → Pendente (amarelo)

#### **📄 7.3.6 Descrição e Metadados - "Detalhes da Tarefa"**

```typescript
<p className={`text-sm text-gray-600 mb-3 ${
  isCompleted ? "text-gray-500" : ""
}`}>
  {task.description}
</p>

<div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
  <span>Criado: {createdDate.toLocaleDateString("pt-BR")}</span>
  <span>Prazo: {deadlineDate.toLocaleDateString("pt-BR")}</span>
  <span className="flex items-center gap-1">
    <Coins className="h-3 w-3" /> 
    {stakeInEth.toFixed(6)} ETH
  </span>
</div>
```

**📖 Explicação dos metadados:**

**Formatação de datas:**
```typescript
{createdDate.toLocaleDateString("pt-BR")}
```
- **`.toLocaleDateString("pt-BR")`**: Formato brasileiro (dd/mm/aaaa)
- **Exemplo**: 2024-12-25 → 25/12/2024

**Formatação de ETH:**
```typescript
{stakeInEth.toFixed(6)} ETH
```
- **`.toFixed(6)`**: Mostra 6 casas decimais
- **Exemplo**: 0.001000 ETH (mais preciso)

**Layout flexível:**
- **`flex flex-wrap`**: Quebra linha quando necessário
- **`gap-x-4 gap-y-1`**: Espaçamento horizontal e vertical diferentes

#### **🔘 7.3.7 Botão de Ação - "Centro de Controle"**

```typescript
{!isCompleted && (
  <Tooltip>
    <TooltipTrigger asChild>
      <div className="inline-block">
        <Button
          variant="outline"
          size="icon"
          onClick={handleComplete}
          disabled={!isConnected || isPending}
          aria-label="Concluir Tarefa"
          className="border-violet-300 text-violet-600 hover:bg-violet-50 hover:text-violet-700 disabled:opacity-50"
        >
          {isPending ? (
            <Loader className="h-5 w-5 animate-spin" />
          ) : (
            <CheckSquare className="h-5 w-5" />
          )}
        </Button>
      </div>
    </TooltipTrigger>
    <TooltipContent>
      <p>
        {!isConnected 
          ? "Conecte a carteira para concluir" 
          : isPending 
            ? "Processando transação..."
            : "Concluir Tarefa"
        }
      </p>
    </TooltipContent>
  </Tooltip>
)}
```

**📖 Explicação dos estados do botão:**

**Visibilidade condicional:**
```typescript
{!isCompleted && (
```
- **Só aparece se**: Tarefa NÃO está concluída
- **Lógica**: Tarefas concluídas não precisam de botão

**Estados do botão:**
- **Normal**: Ícone de check + hover violeta
- **Processando**: Spinner animado + desabilitado
- **Desconectado**: Desabilitado com dica

**Tooltip inteligente:**
```typescript
{!isConnected 
  ? "Conecte a carteira para concluir" 
  : isPending 
    ? "Processando transação..."
    : "Concluir Tarefa"
}
```
- **3 mensagens diferentes** conforme contexto
- **UX**: Usuário sempre sabe o que fazer

**Acessibilidade:**
- **`aria-label`**: Para leitores de tela
- **`disabled`**: Previne cliques inválidos
- **`Tooltip`**: Dicas visuais claras

#### **🎯 7.3.8 Fluxo Completo do Componente**

**📊 Sequência de funcionamento:**

```
1. 📥 Recebe dados da blockchain
     ↓
2. 🧮 Processa e calcula status
     ↓
3. 🎨 Aplica estilos conforme status
     ↓
4. 📺 Renderiza informações
     ↓
5. 🔘 Mostra botão (se aplicável)
     ↓
6. 👆 Usuário clica "Concluir"
     ↓
7. ⚡ Envia transação blockchain
     ↓
8. 🔄 Atualiza interface
```

**✅ Resultado**: Um cartão que **"vive e respira"** com os dados da blockchain, sempre mostrando informações atualizadas e ações contextuais!

---

### 🧪 **Passo 8: Testando a Integração**

#### **📋 Checklist de Teste Completo**

**🔌 Conectividade:**
- [ ] ✅ Botão "Conectar Carteira" abre MetaMask
- [ ] ✅ Endereço aparece formatado (0x1234...abcd)
- [ ] ✅ Indicador de rede mostra "Sepolia"
- [ ] ✅ Alerta aparece se rede estiver errada

**📊 Funcionalidades Core:**
- [ ] ✅ Cards de métricas mostram dados corretos
- [ ] ✅ Modal "Nova Tarefa" abre e funciona
- [ ] ✅ Lista de tarefas carrega automaticamente
- [ ] ✅ Transações são assinadas no MetaMask
- [ ] ✅ Interface atualiza após transações

**🚨 Estados de Erro:**
- [ ] ✅ Loading spinner aparece durante carregamento
- [ ] ✅ Mensagem amigável quando não há tarefas
- [ ] ✅ Alerta para conectar carteira quando desconectado
- [ ] ✅ Tooltips funcionam nos cards de métricas

---

### 🎉 **Conclusão da Aula 3**

**🏆 Parabéns! Você construiu um DApp completo!**

#### **✅ O que conquistamos:**

1. **📝 ABI e Configuração**: Copiamos dados do contrato e configuramos conexão
2. **🔌 Componente de Conexão**: Sistema inteligente de conexão de carteira
3. **🏭 Providers Organizados**: Infraestrutura Web3 distribuída por toda aplicação
4. **🎣 Hooks Customizados**: Lógica organizada e reutilizável
5. **🔧 Layout Integrado**: Fiação principal da aplicação
6. **💻 Interface Funcional**: Página principal completa e responsiva
7. **🧪 Sistema Testado**: Checklist completo de funcionalidades

#### **🧩 Stack Tecnológica Dominada:**
- **Frontend**: Next.js 15 + TypeScript + Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI + Lucide Icons
- **Web3**: wagmi + viem + TanStack Query
- **Blockchain**: Ethereum Sepolia + Infura
- **Smart Contract**: Solidity + Foundry
- **Carteira**: MetaMask

#### **🚀 Próximos Passos:**
- Deploy em produção no Vercel
- Migrar para mainnet Ethereum
- Adicionar funcionalidades avançadas
- Implementar notificações push
- Adicionar temas dark/light

#### **🎓 Você agora domina:**
- 🔧 **Configuração Web3**: Setup completo de provedores e conexões
- 🎣 **Hooks Customizados**: Organização e reutilização de lógica Web3
- ⚡ **Performance**: Cache automático e otimizações
- 💻 **Integração Full-Stack**: React + TypeScript + Blockchain
- 🧪 **Testes e Debug**: Validação de funcionalidades Web3

**🎯 Seu DApp está pronto para o mundo! 🌍**

---

# 💡 Este repositório é parte dos cursos, workshops ou bootcamps da NearX School.

Quer acompanhar a aula completa em vídeo e entrar na comunidade? 
👉 https://nearx.com.br/register | Comunidade: https://discord.com/invite/wavXA98gd8

_NearX School: Aprenda o futuro, hoje._
