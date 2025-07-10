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

#### 📋 **Funções de Consulta**

```solidity
// Pega tarefas de qualquer usuário
function getUserTasks(address _user) public view returns (uint256[] memory) {
    return userTasks[_user];
}

// Pega suas próprias tarefas
function getMyTasks() public view returns (uint256[] memory) {
    return userTasks[msg.sender];
}

// Verifica se uma tarefa está atrasada
function isTaskOverdue(uint256 _taskId) public view returns (bool) {
    require(_taskId > 0 && _taskId <= totalTasks, "Task does not exist");
    Task memory task = tasks[_taskId];
    return (block.timestamp > task.deadline && !task.isCompleted);
}
```

### 🧪 Laboratório de Testes (TaskManager.t.sol)

Os testes são como **laboratório de qualidade** - testamos tudo antes de lançar no mercado:

#### 🔧 **Preparação do Laboratório (Setup)**

```solidity
contract TaskManagerTest is Test {
    TaskManager public taskManager;
    address public user1 = address(0x1);
    
    function setUp() public {
        taskManager = new TaskManager();
        vm.deal(user1, 10 ether);  // Dá dinheiro fake para testes
    }
}
```

**Analogia**: Como **montar um laboratório de teste** para carros:

- **`TaskManager public taskManager`**: É o **"carro protótipo"** que vamos testar
- **`address public user1 = address(0x1)`**: É o **"motorista de teste"** (boneco de crash test)
- **`taskManager = new TaskManager()`**: **"Construir um carro novo"** para cada teste
- **`vm.deal(user1, 10 ether)`**: **"Dar combustível"** para o motorista de teste
- **`setUp()`**: Roda **antes de cada teste** - como resetar o laboratório

#### ✅ **Teste 1: testCreateTask() - "Teste de Ignição"**

```solidity
function testCreateTask() public {
    vm.startPrank(user1);  // Simula que user1 está dirigindo
    
    taskManager.createTask{value: stake}(title, description, deadline);
    
    // Verifica se os dados foram salvos corretamente
    (uint256 id, string memory taskTitle, ...) = taskManager.tasks(1);
    assertEq(id, 1);
    assertEq(taskTitle, title);
    // ... mais verificações
}
```

**Analogia**: Como **testar se o carro liga**:

**🔑 Preparação do Teste**:
```solidity
vm.startPrank(user1);
```
- **Analogia**: **"Colocar o motorista no banco do motorista"**
- `vm.startPrank()` = simula que user1 está fazendo as ações

**🚗 Ação Testada**:
```solidity
taskManager.createTask{value: stake}(title, description, deadline);
```
- **Analogia**: **"Virar a chave e pisar no acelerador"**
- Testamos se a "criação de tarefa" funciona

**🔍 Verificação**:
```solidity
(uint256 id, string memory taskTitle, ...) = taskManager.tasks(1);
assertEq(id, 1);
assertEq(taskTitle, title);
```
- **Analogia**: **"Verificar se o motor ligou corretamente"**
- `taskManager.tasks(1)` = "Olhar o painel do carro"
- `assertEq()` = "Confirmar que o velocímetro mostra 0 km/h"

**O que este teste garante**:
- ✅ O "motor" da criação de tarefas funciona
- ✅ Os "dados do painel" estão corretos
- ✅ O "contador" está funcionando

#### ✅ **Teste 2: testCompleteTask() - "Teste de Freios"**

```solidity
function testCompleteTask() public {
    // Primeiro cria uma tarefa
    taskManager.createTask{value: stake}(title, description, deadline);
    
    uint256 balanceBefore = user1.balance;
    taskManager.completeTask(1);  // Completa a tarefa
    uint256 balanceAfter = user1.balance;
    
    // Verifica se o dinheiro voltou
    assertEq(balanceAfter, balanceBefore + stake);
}
```

**Analogia**: Como **testar se os freios funcionam**:

**🏁 Preparação**:
```solidity
taskManager.createTask{value: stake}(title, description, deadline);
```
- **Analogia**: **"Acelerar o carro até 100 km/h"** (criar a tarefa)

**📊 Medição Inicial**:
```solidity
uint256 balanceBefore = user1.balance;
```
- **Analogia**: **"Medir a velocidade antes de frear"** (dinheiro antes)

**🛑 Ação de Teste**:
```solidity
taskManager.completeTask(1);
```
- **Analogia**: **"Pisar no freio"** (completar a tarefa)

**📊 Verificação Final**:
```solidity
uint256 balanceAfter = user1.balance;
assertEq(balanceAfter, balanceBefore + stake);
```
- **Analogia**: **"Confirmar que o carro parou"** (dinheiro voltou)
- Se o dinheiro não voltou = "freios falharam"

**O que este teste garante**:
- ✅ O "sistema de freios" (conclusão) funciona
- ✅ O "airbag" (devolução de dinheiro) ativa corretamente
- ✅ A "frenagem" acontece no tempo certo

#### 📋 **Teste 3: testGetMyTasks() - "Teste do GPS"**

```solidity
function testGetMyTasks() public {
    // Cria 3 tarefas
    taskManager.createTask{value: stake}("Tarefa 1", description, deadline);
    taskManager.createTask{value: stake}("Tarefa 2", description, deadline);
    taskManager.createTask{value: stake}("Tarefa 3", description, deadline);
    
    // Verifica se a lista está correta
    uint256[] memory myTasks = taskManager.getMyTasks();
    assertEq(myTasks.length, 3);
    assertEq(myTasks[0], 1);  // Primeira tarefa tem ID 1
}
```

**Analogia**: Como **testar se o GPS funciona**:

**🗺️ Criação do Percurso**:
```solidity
taskManager.createTask{value: stake}("Tarefa 1", description, deadline);
taskManager.createTask{value: stake}("Tarefa 2", description, deadline);
taskManager.createTask{value: stake}("Tarefa 3", description, deadline);
```
- **Analogia**: **"Programar 3 destinos no GPS"**: Casa → Trabalho → Shopping

**📱 Consulta do GPS**:
```solidity
uint256[] memory myTasks = taskManager.getMyTasks();
```
- **Analogia**: **"Perguntar ao GPS: onde estão meus destinos?"**

**🔍 Verificação da Lista**:
```solidity
assertEq(myTasks.length, 3);
assertEq(myTasks[0], 1);
```
- **Analogia**: **"Conferir se o GPS lembra dos 3 destinos"**
- **"Confirmar que o primeiro destino é o número 1"**

**O que este teste garante**:
- ✅ O "GPS" (função de listar) funciona
- ✅ A "memória" (storage) guarda tudo corretamente
- ✅ A "ordem" dos destinos está certa

#### 🎯 **Por que Fazer Estes Testes?**

**Analogia**: Como **testar um carro antes de vender**:

- **🛡️ Segurança**: Evita que o "carro exploda" (bugs que perdem dinheiro)
- **🔄 Confiança**: Se você mudar o "motor" (código), testa se ainda funciona
- **📊 Cobertura**: Testa "subida", "descida", "chuva", "sol" (diferentes cenários)  
- **⚡ Rapidez**: Encontra problemas no "laboratório", não na "estrada" (produção)
- **💰 Economia**: É mais barato consertar no laboratório que pagar indenização

**🚨 Sem testes é como**:
- Vender carro sem testar freios
- Lançar remédio sem testar efeitos
- Construir prédio sem testar fundação

**✅ Com testes é como**:
- Certificado de qualidade
- Seguro total
- Garantia que funciona

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
- Criar hooks customizados para organizar a lógica Web3
- Configurar providers e implementar a interface
- Fazer tudo funcionar **sem complicação**

#### 🧩 **As Peças do Quebra-Cabeça**

Antes de começar, vamos entender **o que cada ferramenta faz**:

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

### 📚 **Entendendo Wagmi e Viem - Os "Tradutores Mágicos"**

#### 🎣 **Wagmi - O "Pescador de Dados da Blockchain"**

**Analogia**: **Wagmi** é como um **"assistente pessoal"** que fica buscando informações na blockchain e traz prontas para seu site.

**🤔 O que wagmi faz na prática:**

```typescript
// ✨ MÁGICA DO WAGMI
const { address, isConnected } = useAccount()  // Pega dados da carteira
const { data: balance } = useBalance()         // Pesca o saldo
const { data: tasks } = useReadContract()      // Lê dados do contrato
```

**Analogia detalhada:**
- **`useAccount()`**: Como um **"recepcionista"** que sabe quem está logado
  - "Ah, o senhor João (endereço 0x123...) está aqui!"
  
- **`useBalance()`**: Como um **"caixa eletrônico"** que mostra seu saldo
  - "Senhor João, você tem R$ 150,00 na conta"
  
- **`useReadContract()`**: Como um **"consultor"** que vai no banco de dados buscar informação
  - "Senhor João, você tem 3 tarefas cadastradas: [1, 2, 3]"

#### 🔄 **Como Wagmi Funciona Automaticamente**

```typescript
// 🤖 WAGMI TRABALHANDO 24/7
function MeuComponente() {
  const { data: minhasTarefas } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getMyTasks'
  })
  
  // ✨ WAGMI AUTOMÁTICO:
  // - Verifica dados a cada 4 segundos
  // - Se mudou algo na blockchain, atualiza automático
  // - Mostra "loading" enquanto busca
  // - Guarda cache para não buscar toda hora
  
  return <div>Você tem {minhasTarefas?.length} tarefas</div>
}
```

**🧠 Por que isso é incrível:**
- **Atualização automática**: Se criar nova tarefa, a lista atualiza sozinha
- **Cache inteligente**: Não fica fazendo a mesma consulta mil vezes
- **Loading states**: Mostra "carregando..." automático
- **Zero configuração**: Funciona sem você programar nada complexo

#### ⚡ **Viem - O "Tradutor da Linguagem Blockchain"**

**Analogia**: **Viem** é como um **"tradutor simultâneo"** que converte suas instruções em JavaScript para a "linguagem" da blockchain.

**🗣️ Tradução em tempo real:**

```typescript
// 🗣️ VOCÊ FALA (JavaScript):
await writeContract({
  address: CONTRACT_ADDRESS,
  abi: CONTRACT_ABI,
  functionName: 'createTask',
  args: ['Estudar React', 'Terminar curso', deadline],
  value: parseEther('0.001')  // 0.001 ETH
})

// 🤖 VIEM TRADUZ PARA BLOCKCHAIN:
// "Chamar função createTask no contrato 0x123... 
//  com parâmetros ('Estudar React', 'Terminar curso', 1703980800)
//  enviando 1000000000000000 wei (0.001 ETH)"
```

**🎯 O que viem faz especificamente:**

**1. 🔢 Conversão de Números:**
```typescript
// Você escreve (fácil):
parseEther('0.001')  // 0.001 ETH

// Viem converte para (formato blockchain):
'1000000000000000'   // 1000000000000000 wei
```

**2. 📝 Preparação de Dados:**
```typescript
// Você escreve:
args: ['Estudar React', 'Terminar curso', deadline]

// Viem empacota para blockchain:
encodeFunctionData({...}) // Dados em formato hexadecimal
```

**3. 🔐 Assinatura de Transações:**
```typescript
// Você clica "Enviar"
// Viem + MetaMask fazem toda a criptografia e assinatura digital
```

#### 🤝 **Como Wagmi e Viem Trabalham Juntos**

**Analogia**: Como um **"app de delivery"** completo:

```
📱 SEU APP          🚚 WAGMI           ⚡ VIEM            🏪 BLOCKCHAIN
     │                  │                  │                    │
📝 "Criar tarefa"      │                  │                    │
     ├─────────────────▶│                  │                    │
     │                  │ Prepara dados    │                    │
     │                  ├─────────────────▶│                    │
     │                  │                  │ Assina transação   │
     │                  │                  ├───────────────────▶│
     │                  │                  │                    │ Executa
     │                  │ Monitora status  │                    │ createTask()
     │                  ├─────────────────▶│                    │
📊 Atualiza interface  │                  │                    │
     │◀─────────────────│                  │                    │
     │                  │                  │                    │
```

**Divisão de responsabilidades:**
- **📱 Seu App**: Interface bonita e experiência do usuário
- **🚚 Wagmi**: Gerencia estado, cache, atualizações automáticas
- **⚡ Viem**: Comunicação direta e tradução para blockchain
- **🏪 Blockchain**: Executa o código e guarda os dados

### 🛠️ **Passo 1: Instalação das Dependências**

#### 📦 **1.1 Dependências Web3**

```bash
# 📦 Bibliotecas principais para Web3
pnpm add wagmi viem

# 🔄 Gerenciamento de estado (cache inteligente)
pnpm add @tanstack/react-query

# 🔌 Conectores para carteiras
pnpm add @wagmi/connectors
```

#### 🎨 **1.2 Componentes UI com shadcn**

**Analogia**: Como usar uma **"loja de componentes prontos"** ao invés de fazer tudo do zero!

```bash
# 🎯 Inicializar shadcn (se ainda não foi feito)
npx shadcn@latest init

# 📋 Instalar componentes necessários
npx shadcn@latest add dialog
npx shadcn@latest add label  
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add textarea
npx shadcn@latest add card
npx shadcn@latest add badge
npx shadcn@latest add tooltip
npx shadcn@latest add alert
```

**🤔 Por que usar shadcn:**
- ✅ **Componentes prontos**: Não precisa criar Dialog, Label, etc. manualmente
- ✅ **Tipos TypeScript**: Já vem com tipagem perfeita
- ✅ **Customizável**: Você pode modificar o código depois
- ✅ **Acessível**: Segue padrões de acessibilidade
- ✅ **Consistente**: Visual uniforme em todo o app

**🤔 Por que cada biblioteca Web3:**

- **`wagmi`**: O "assistente pessoal" que busca dados da blockchain
- **`viem`**: O "tradutor" que converte JavaScript ↔ Blockchain  
- **`@tanstack/react-query`**: A "memória inteligente" que guarda dados
- **`@wagmi/connectors`**: Os "adaptadores" para diferentes carteiras

### 🎣 **Passo 2: Criar Hooks Customizados**

#### **🤔 Por que usar Hooks?**

**Analogia**: Hooks são como **"funcionários especializados"** numa empresa:

- **👔 Gerente de Vendas** (useCreateTask): Só cuida de criar tarefas
- **📊 Analista de Dados** (useTaskMetrics): Só cuida de calcular estatísticas
- **🔍 Pesquisador** (useAllUserTasks): Só cuida de buscar dados
- **🔗 Recepcionista** (useWeb3Status): Só cuida de saber quem está logado

**✅ Vantagens dos Hooks:**
- **Reutilizável**: Usa o mesmo hook em vários componentes
- **Organizado**: Cada hook tem uma responsabilidade específica
- **Automático**: Atualiza dados automaticamente quando necessário
- **Limpo**: Componente fica simples, lógica fica nos hooks

Vamos criar **"assistentes especializados"** para cada tarefa do nosso app:

#### 📁 **Criar `hooks/useTaskManager.ts`**

```typescript
// hooks/useTaskManager.ts - Nossos "assistentes especialistas"

import { useReadContract, useWriteContract, useAccount } from 'wagmi'
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '@/lib/web3'
import { parseEther } from 'viem'

// 🎣 Hook: Buscar minhas tarefas
export function useMyTasks() {
  const { address } = useAccount()
  
  return useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getMyTasks',
    account: address,
    // ✨ WAGMI AUTOMÁTICO:
    // - Atualiza a cada 4 segundos
    // - Para de buscar se usuário não conectado
    // - Guarda resultado em cache
  })
}

// 🔍 Hook: Buscar dados de uma tarefa específica
export function useTask(taskId: number | undefined) {
  return useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'tasks',
    args: taskId ? [BigInt(taskId)] : undefined,
    enabled: !!taskId, // Só busca se taskId existir
  })
}

// 📊 Hook: Buscar total de tarefas no sistema
export function useTotalTasks() {
  return useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'totalTasks',
  })
}

// ✍️ Hook: Criar nova tarefa
export function useCreateTask() {
  const { writeContract, isPending, error } = useWriteContract()
  
  const createTask = async (
    title: string, 
    description: string, 
    deadline: Date,
    stakeAmount: string = '0.001' // ETH
  ) => {
    try {
      // 🗓️ Converte data para timestamp
      const deadlineTimestamp = Math.floor(deadline.getTime() / 1000)
      
      // 📝 Chama função do contrato
      await writeContract({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'createTask',
        args: [title, description, BigInt(deadlineTimestamp)],
        value: parseEther(stakeAmount), // Converte ETH para Wei
      })
      
      console.log('✅ Tarefa criada com sucesso!')
      
    } catch (err) {
      console.error('❌ Erro ao criar tarefa:', err)
      throw err
    }
  }
  
  return {
    createTask,
    isPending, // true = transação sendo processada
    error      // detalhes do erro, se houver
  }
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
      
      console.log('✅ Tarefa completada!')
      
    } catch (err) {
      console.error('❌ Erro ao completar tarefa:', err)
      throw err
    }
  }
  
  return {
    completeTask,
    isPending,
    error
  }
}

// 🔗 Hook: Status da conexão
export function useWeb3Status() {
  const { address, isConnected } = useAccount()
  
  return {
    address,
    isConnected,
    // Endereço formatado para exibição
    shortAddress: address ? `${address.slice(0, 6)}...${address.slice(-4)}` : null
  }
}
```

**Analogia**: Cada hook é como um **"funcionário especializado"**:

- **`useMyTasks`**: "Secretário" que sempre sabe suas tarefas
- **`useTask`**: "Arquivista" que busca dados de tarefa específica  
- **`useCreateTask`**: "Assistente de criação" que registra novas tarefas
- **`useCompleteTask`**: "Supervisor" que marca tarefas como concluídas
- **`useWeb3Status`**: "Recepcionista" que sabe quem está logado

### 🏗️ **Passo 3: Configuração da Conexão Web3**

Agora que entendemos os hooks, vamos configurar a **conexão com a blockchain**. Este arquivo é como a **"configuração de internet"** do nosso DApp:

#### 📁 **Criar `lib/web3.ts` - O "Centro de Controle" da Conexão**

**Analogia**: Imagine que você vai instalar **internet e TV a cabo** em casa. O arquivo `web3.ts` é como o **"manual de configuração"** que o técnico usa para conectar tudo corretamente.

```typescript
// lib/web3.ts - Nossa "Central de Conexões"

// 📦 Importa as ferramentas necessárias
import { createConfig, http } from 'wagmi'
import { sepolia } from 'wagmi/chains'
import { metaMask, walletConnect } from 'wagmi/connectors'
```

**📖 Explicação das importações:**

**`import { createConfig, http } from 'wagmi'`**
- **Analogia**: Como importar **"ferramentas de instalação"** da caixa de ferramentas
- **`createConfig`**: É a **"função principal"** que monta toda a configuração
- **`http`**: É o **"tipo de conexão"** (como escolher cabo ou fibra ótica)

**`import { sepolia } from 'wagmi/chains'`**
- **Analogia**: Como escolher **"qual cidade"** você quer internet
- **`sepolia`**: É a **"rede de teste"** do Ethereum (como uma cidade de treino)
- **Por que Sepolia**: É grátis e seguro para aprender (não usa dinheiro real)

**`import { metaMask, walletConnect } from 'wagmi/connectors'`**
- **Analogia**: Como escolher **"quais aparelhos"** podem conectar na sua internet
- **`metaMask`**: Conecta carteiras MetaMask (o mais popular)
- **`walletConnect`**: Conecta carteiras do celular (Trust Wallet, etc.)

---

#### 🔑 **Seção 1: Configurações de Acesso**

```typescript
// 🔑 Configurações (substitua pelos seus valores)
const projectId = 'SEU_WALLETCONNECT_PROJECT_ID' // De https://cloud.walletconnect.com
const alchemyApiKey = 'SUA_ALCHEMY_API_KEY'      // De https://alchemy.com
```

**📖 Explicação das chaves:**

**`const projectId = 'SEU_WALLETCONNECT_PROJECT_ID'`**
- **Analogia**: Como o **"código do seu plano de internet"** 
- **O que é**: Identificador único para carteiras mobile se conectarem
- **Onde pegar**: Site oficial da WalletConnect (gratuito)
- **Para que serve**: Permite que apps mobile conectem ao seu DApp

**`const alchemyApiKey = 'SUA_ALCHEMY_API_KEY'`**
- **Analogia**: Como a **"senha da sua conexão"** com a operadora de internet
- **O que é**: Chave de acesso aos serviços da Alchemy
- **Onde pegar**: Site oficial da Alchemy (gratuito até certo limite)
- **Para que serve**: Permite que seu app "fale" com a blockchain Ethereum

---

#### ⚙️ **Seção 2: Configuração Principal**

```typescript
// ⚙️ Configuração principal - nossa "receita de conexão"
export const config = createConfig({
  // 🌐 Em qual blockchain vamos trabalhar
  chains: [sepolia],
  
  // 🔌 Quais carteiras podem conectar
  connectors: [
    metaMask(),                     // MetaMask (mais popular)
    walletConnect({ projectId }),   // WalletConnect (carteiras mobile)
  ],
  
  // 🌍 Como conectar na internet da blockchain
  transports: {
    [sepolia.id]: http(`https://eth-sepolia.g.alchemy.com/v2/${alchemyApiKey}`)
  },
})
```

**📖 Explicação linha por linha:**

**`export const config = createConfig({`**
- **Analogia**: Como **"criar o manual de instalação completo"**
- **`export`**: Torna disponível para outros arquivos usarem
- **`createConfig`**: Função que monta toda a configuração Web3

**`chains: [sepolia],`**
- **Analogia**: Como escolher **"em qual cidade você quer internet"**
- **`chains`**: Lista de blockchains que seu app pode usar
- **`[sepolia]`**: Só a rede Sepolia (array com um item)
- **Por que array**: Você pode adicionar mais redes depois: `[sepolia, mainnet]`

**`connectors: [metaMask(), walletConnect({ projectId })],`**
- **Analogia**: Como listar **"quais tipos de aparelho podem conectar"**
- **`connectors`**: Lista de carteiras aceitas pelo seu app
- **`metaMask()`**: Carteira MetaMask (extensão do navegador)
- **`walletConnect({ projectId })`**: Carteiras mobile (precisa do projectId)

**`transports: { [sepolia.id]: http(...) }`**
- **Analogia**: Como configurar **"qual cabo usar para cada cidade"**
- **`transports`**: Como se conectar fisicamente com cada blockchain
- **`[sepolia.id]`**: Para a rede Sepolia especificamente
- **`http(...)`**: Usar conexão HTTP com a URL da Alchemy

---

#### 📍 **Seção 3: Endereço do Smart Contract**

```typescript
// 📍 Endereço do nosso smart contract (copie do deploy)
export const CONTRACT_ADDRESS = '0xSEU_ENDERECO_DO_CONTRATO_AQUI'
```

**📖 Explicação:**

**`export const CONTRACT_ADDRESS = '0x...'`**
- **Analogia**: Como o **"endereço da sua loja"** na blockchain
- **O que é**: Localização única onde seu smart contract foi instalado
- **Formato**: Sempre começa com `0x` seguido de 40 caracteres
- **Onde pegar**: Console do terminal quando você fez o deploy
- **Exemplo real**: `'0xb17d39826a1b83f7685de1ebc924b3185b677383'`

---

#### 📋 **Seção 4: ABI - O "Manual de Instruções"**

```typescript
// 📋 ABI - "Manual de instruções" do contrato
export const CONTRACT_ABI = [
  // 📝 Função: createTask (criar nova tarefa)
  {
    "inputs": [
      { "internalType": "string", "name": "_title", "type": "string" },
      { "internalType": "string", "name": "_description", "type": "string" },
      { "internalType": "uint256", "name": "_deadline", "type": "uint256" }
    ],
    "name": "createTask",
    "outputs": [],
    "stateMutability": "payable",  // ← Aceita ETH junto
    "type": "function"
  },
  // ... mais funções
] as const
```

**📖 Explicação do ABI:**

**`export const CONTRACT_ABI = [`**
- **Analogia**: Como o **"manual de instruções"** de um aparelho eletrônico
- **ABI significa**: Application Binary Interface (Interface Binária da Aplicação)
- **O que é**: Lista de todas as funções que o contrato sabe fazer
- **Por que precisamos**: Sem isso, não sabemos como "falar" com o contrato

**Explicação de uma função do ABI:**

```typescript
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
}
```

**`"name": "createTask"`**
- **Analogia**: Como o **"nome do botão"** que você aperta
- **O que é**: Nome da função no smart contract
- **Uso**: É isso que chamamos no JavaScript: `createTask(...)`

**`"inputs": [...]`**
- **Analogia**: Como a **"lista de ingredientes"** que você precisa dar
- **`_title`**: Texto com o nome da tarefa
- **`_description`**: Texto com a descrição
- **`_deadline`**: Número representando a data limite

**`"stateMutability": "payable"`**
- **Analogia**: Como um **"cofre que aceita moedas"**
- **`"payable"`**: Esta função **aceita ETH** junto com a chamada
- **`"nonpayable"`**: Função que **não aceita ETH**
- **`"view"`**: Função que **só lê dados** (não gasta gas)

**`"outputs": []`**
- **Analogia**: Como **"o que a máquina te devolve"**
- **`[]`**: Esta função não retorna nada
- **Se tivesse**: `[{"type": "uint256"}]` = retorna um número

**`"type": "function"`**
- **Analogia**: Como dizer **"isto é um botão"** (não um texto ou imagem)
- **Outros tipos**: `"event"` (notificação), `"constructor"` (instalação)

---

#### 🎯 **Resumo do que Configuramos**

**🔍 O que este arquivo faz:**

1. **🌐 Escolhe a rede**: Sepolia (rede de teste)
2. **🔌 Define carteiras**: MetaMask e carteiras mobile
3. **🛣️ Configura conexão**: Via Alchemy (como internet)
4. **📍 Define endereço**: Onde encontrar nosso contrato
5. **📋 Lista funções**: O que o contrato sabe fazer

**🎯 Analogia completa**: 
É como **configurar um sistema de delivery**:
- **Rede** = qual cidade (Sepolia)
- **Carteiras** = quais apps de pagamento aceitar (MetaMask, etc.)
- **Transporte** = qual internet usar (Alchemy)
- **Endereço** = onde fica o restaurante (CONTRACT_ADDRESS)
- **ABI** = cardápio do restaurante (que pratos têm, ingredientes, preços)

### 🎯 **Passo 4: Configurar Provedores no App**

Agora vamos configurar os **"fornecedores de energia"** do nosso DApp. Os providers são como a **"fiação elétrica"** que distribui funcionalidades Web3 para todo o aplicativo.

#### 📁 **Criar `providers/Web3Provider.tsx` - O "Quadro de Força" Web3**

**Analogia**: Imagine que você instalou **painéis solares** em casa. O `Web3Provider` é como o **"quadro de força especializado"** que converte e distribui essa energia solar para todos os aparelhos da casa.

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
```

**📖 Explicação das importações:**

**`'use client'`**
- **Analogia**: Como uma **"placa de aviso"** que diz "esta peça precisa funcionar no navegador"
- **Por que**: Bibliotecas Web3 precisam de recursos do navegador (MetaMask, localStorage, etc.)
- **Quando usar**: Sempre que o componente usar Web3, useState, ou eventos

**`import { QueryClient, QueryClientProvider } from '@tanstack/react-query'`**
- **Analogia**: Como importar um **"sistema de armazenamento inteligente"**
- **QueryClient**: Gerencia **cache** (memória temporária) dos dados da blockchain
- **QueryClientProvider**: **Distribui** esse sistema de cache para toda a aplicação

**`import { WagmiProvider } from 'wagmi'`**
- **Analogia**: Como importar o **"gerador principal"** de energia Web3
- **WagmiProvider**: **Fornece** todas as funcionalidades Web3 (conexão, contratos, etc.)

**`import { config } from '@/lib/web3'`**
- **Analogia**: Como importar o **"manual de configuração"** que criamos no Passo 3
- **config**: Todas as configurações (redes, carteiras, contratos) que definimos

---

#### 🧠 **Seção 1: Criando a "Memória Inteligente"**

```typescript
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
```

**📖 Explicação detalhada:**

**`const [queryClient] = useState(() => new QueryClient({`**
- **Analogia**: Como **"instalar um HD SSD"** especializado para guardar dados temporários
- **useState**: Garante que criamos só um cliente de cache (não recria a cada render)
- **Arrow function `() =>`**: Só executa na primeira vez (lazy initialization)

**`defaultOptions: { queries: {`**
- **Analogia**: Como **"configurar as regras do arquivo temporário"**
- **defaultOptions**: Configurações que se aplicam a **todas** as consultas
- **queries**: Específico para **buscar dados** (não para enviar transações)

**`refetchOnWindowFocus: false,`**
- **Analogia**: Como **"não verificar emails toda vez que olha pro computador"**
- **O que faz**: Não recarrega dados quando você volta para a aba do navegador
- **Por que false**: Blockchain não muda tão rápido, evita consultas desnecessárias

**`retry: 1,`**
- **Analogia**: Como **"tentar discar de novo só 1 vez se deu ocupado"**
- **O que faz**: Se uma consulta falhar, tenta mais 1 vez antes de desistir
- **Por que 1**: Blockchain às vezes está congestionada, mas não adianta insistir muito

**`staleTime: 1000 * 60 * 5, // 5 minutos`**
- **Analogia**: Como **"considerar notícia velha depois de 5 minutos"**
- **O que faz**: Dados são considerados "frescos" por 5 minutos
- **Depois de 5 min**: Busca dados novos da blockchain automaticamente
- **Cálculo**: 1000ms × 60s × 5min = 300.000ms

---

#### 🔌 **Seção 2: Estrutura dos Providers**

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
}
```

**📖 Explicação da estrutura aninhada:**

**`<WagmiProvider config={config}>`**
- **Analogia**: Como **"ligar o gerador principal"** na casa
- **O que faz**: Disponibiliza todas as funcionalidades Web3 para componentes filhos
- **config**: Usa as configurações que criamos no `lib/web3.ts`
- **Fornece**: useAccount, useConnect, useContract, etc.

**`<QueryClientProvider client={queryClient}>`**
- **Analogia**: Como **"instalar o sistema de armazenamento"** na casa
- **O que faz**: Gerencia cache, loading states, refetch automático
- **client**: Usa o cliente que configuramos acima
- **Dentro de WagmiProvider**: Porque precisa das funcionalidades Web3

**`{children}`**
- **Analogia**: Como **"todos os aparelhos da casa"** que vão receber energia
- **O que são**: Todos os componentes que estão dentro do provider
- **Benefício**: Podem usar hooks Web3 (useAccount, useContract, etc.)

**🔄 Fluxo de funcionamento:**

```
🏠 WagmiProvider
     ↓ fornece conexões Web3
🧠 QueryClientProvider  
     ↓ fornece cache inteligente
📱 Seus Componentes
     ↓ podem usar hooks como:
     • useAccount() → "quem está logado?"
     • useContract() → "chamar função do contrato"  
     • useBalance() → "quanto dinheiro tem?"
```

---

#### 📁 **Atualizar `app/layout.tsx` - A "Fiação Principal"**

**Analogia**: O `layout.tsx` é como a **"fiação elétrica principal"** da casa, que distribui energia para todos os cômodos.

```typescript
// app/layout.tsx - Mantém como está (sem 'use client')

import { Web3Provider } from '@/providers/Web3Provider'
import { Toaster } from '@/components/ui/toaster'
import type { Metadata } from 'next'
import './globals.css'
```

**📖 Explicação das importações:**

**Sem `'use client'` no topo**
- **Analogia**: Como **"fiação que funciona tanto na geração quanto na distribuição"**
- **Server Component**: Pode usar otimizações do Next.js (SEO, performance)
- **Roda no servidor**: Melhor para SEO e carregamento inicial

**`import { Web3Provider } from '@/providers/Web3Provider'`**
- **Analogia**: Como **"importar o quadro de força especializado"**
- **O que é**: O provider que criamos acima

**`import { Toaster } from '@/components/ui/toaster'`**
- **Analogia**: Como **"sistema de notificações"** da casa
- **O que faz**: Mostra mensagens de sucesso/erro das transações

---

#### 🔧 **Seção 1: Configurações do App**

```typescript
export const metadata: Metadata = {
  title: 'TaskManager DApp',
  description: 'Gerencie suas tarefas na blockchain Ethereum (Sepolia)',
  // ... resto das configurações
}
```

**📖 Explicação:**

**`export const metadata: Metadata`**
- **Analogia**: Como **"placa de identificação"** da casa
- **O que faz**: Define título, descrição para Google, redes sociais
- **Server Component**: Só funciona em componentes servidor (sem 'use client')

---

#### 🏠 **Seção 2: Estrutura Principal do Layout**

```typescript
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

**📖 Explicação da estrutura:**

**`<html lang="pt-BR">`**
- **Analogia**: Como **"definir que a casa fica no Brasil"**
- **lang="pt-BR"**: Diz aos navegadores que o conteúdo está em português
- **Acessibilidade**: Leitores de tela sabem como pronunciar

**`<body className="min-h-screen bg-background font-sans antialiased">`**
- **Analogia**: Como **"estilo básico de todos os cômodos"**
- **min-h-screen**: Altura mínima = tela inteira
- **bg-background**: Cor de fundo padrão do tema
- **font-sans**: Fonte sem serifa (mais moderna)
- **antialiased**: Suaviza bordas das letras

**`<Web3Provider>`**
- **Analogia**: Como **"instalar o quadro de força Web3"** na casa inteira
- **Posição**: Envolve quase tudo (exceto html/body)
- **Efeito**: Todos os componentes filhos podem usar Web3

**`<main className="relative flex min-h-screen flex-col">`**
- **Analogia**: Como **"área principal utilizável"** da casa
- **relative**: Permite posicionamento de elementos filhos
- **flex flex-col**: Layout flexível em coluna (vertical)
- **min-h-screen**: Garante que ocupa toda a tela

**`{children}`**
- **Analogia**: Como **"cada página específica"** da casa
- **O que são**: page.tsx, about/page.tsx, etc.
- **Dinâmico**: Muda conforme a URL que o usuário visita

**`<Toaster />`**
- **Analogia**: Como **"sistema de campainha/interfone"** da casa
- **Posição**: Fora do main para aparecer sobre tudo
- **Função**: Mostra notificações de transações Web3

---

#### 🔄 **Hierarquia Completa - Como Tudo se Conecta**

```
📄 layout.tsx (Server Component)
│
├── 🌐 <html> (define idioma)
│   │
│   └── 🏠 <body> (estilos básicos)
│       │
│       └── 🔌 <Web3Provider> (energia Web3)
│           │
│           ├── 📱 <main> (área principal)
│           │   │
│           │   └── {children} (suas páginas)
│           │       │
│           │       └── 📄 page.tsx
│           │           ├── useAccount() ✅
│           │           ├── useContract() ✅  
│           │           └── useBalance() ✅
│           │
│           └── 🔔 <Toaster> (notificações)
```

---

#### 🎯 **Vantagens desta Arquitetura**

**✅ Separação de Responsabilidades:**
- **layout.tsx**: SEO, estrutura geral, metadados
- **Web3Provider**: Funcionalidades blockchain, cache
- **page.tsx**: Lógica específica da página

**✅ Performance Otimizada:**
- **Server Component**: layout.tsx roda no servidor (mais rápido)
- **Client Component**: Web3Provider só onde necessário
- **Cache inteligente**: Não refaz consultas desnecessárias

**✅ Manutenção Fácil:**
- **Provider isolado**: Mudanças Web3 ficam em um lugar só
- **Configuração centralizada**: lib/web3.ts tem tudo
- **Tipagem segura**: TypeScript previne erros

**✅ Experiência do Usuário:**
- **Loading automático**: Cache gerencia estados de carregamento
- **Notificações**: Toaster mostra feedback das transações
- **Reconexão**: wagmi reconecta automaticamente se perder conexão

**🎯 Analogia Final:**

É como **construir uma casa inteligente**:
- **🏠 Layout**: Estrutura e fiação básica
- **🔌 Web3Provider**: Sistema especializado para aparelhos inteligentes
- **🧠 QueryClient**: Central de automação que lembra configurações
- **📱 Componentes**: Aparelhos inteligentes que se conectam automaticamente

### 💻 **Passo 5: Implementação da Interface Principal**

Como você já tem uma interface bonita funcionando, vamos **integrar Web3 gradualmente** mantendo seu design atual:

#### 📁 **Atualizar `app/page.tsx` - Integração Completa**

```typescript
// app/page.tsx - Página principal com integração Web3

"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { AlertCircle, CheckCircle2, ListTodo, Loader, Coins, PlusCircle, CheckSquare, Wallet, RefreshCw } from "lucide-react"

// 🔧 Imports Web3 SIMPLIFICADOS
import { useConnect, useDisconnect, useChainId } from 'wagmi'
import { useWeb3Status, useContractBalance, useTaskMetrics } from '@/hooks/useTaskManager'
import { CreateTaskModal } from '@/components/CreateTaskModal'
import { TaskItem } from '@/components/TaskItem'
import { sepolia } from 'wagmi/chains'

export default function Web3TodoPage() {
  const [showCreateModal, setShowCreateModal] = useState(false)
  
  // 🔗 Hooks Web3 ULTRA-SIMPLIFICADOS
  const { connectors, connect } = useConnect()
  const { disconnect } = useDisconnect()
  const { isConnected, shortAddress } = useWeb3Status()
  const { refetchBalance } = useContractBalance()
  const chainId = useChainId()
  
  // 🚀 UM ÚNICO HOOK para tudo: métricas + tarefas + dados
  const {
    total,
    concluidas, 
    pendentes,
    weiInStake,
    tasks,
    isLoading: loadingTasks,
    refetch: refetchTasks
  } = useTaskMetrics()
  
  // Verificar se está na rede correta
  const isCorrectNetwork = chainId === sepolia.id
  const networkName = chainId === sepolia.id ? 'Sepolia' : `Rede ${chainId}`

  const handleConnectWallet = () => {
    if (isConnected) {
      disconnect()
    } else {
      const metamask = connectors.find(c => c.name === 'MetaMask')
      if (metamask) connect({ connector: metamask })
    }
  }

  const handleRefresh = async () => {
    await Promise.all([refetchTasks(), refetchBalance()])
  }

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <main className="container mx-auto p-4 sm:p-6 lg:p-8">
          {/* Cabeçalho */}
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
            {!isConnected && (
              <Alert
                variant="destructive"
                className="mt-4 border-yellow-500/50 text-yellow-700 [&>svg]:text-yellow-700"
              >
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Atenção</AlertTitle>
                <AlertDescription>Conecte sua carteira para gerenciar suas tarefas na blockchain.</AlertDescription>
              </Alert>
            )}
            {isConnected && !isCorrectNetwork && (
              <Alert
                variant="destructive"
                className="mt-4 border-red-500/50 text-red-700 [&>svg]:text-red-700"
              >
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Rede Incorreta</AlertTitle>
                <AlertDescription>
                  Você está conectado à rede {networkName}. Por favor, mude para a rede Sepolia para usar este DApp.
                </AlertDescription>
              </Alert>
            )}

          </header>

          {/* Seção de Métricas */}
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

          {/* Seção de Tarefas */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">Tarefas</h2>
              <div className="flex gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      disabled={!isConnected || loadingTasks} 
                      variant="outline"
                      onClick={handleRefresh}
                      className="border-violet-300 text-violet-600 hover:bg-violet-50"
                    >
                      <RefreshCw className={`mr-2 h-4 w-4 ${loadingTasks ? 'animate-spin' : ''}`} />
                      Atualizar
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{!isConnected ? "Conecte sua carteira" : "Atualizar lista de tarefas"}</p>
                  </TooltipContent>
                </Tooltip>
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="inline-block">
                      <Button 
                        disabled={!isConnected} 
                        className="bg-violet-600 hover:bg-violet-700 disabled:opacity-50"
                        onClick={() => setShowCreateModal(true)}
                      >
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Nova Tarefa
                      </Button>
                    </div>
                  </TooltipTrigger>
                  {!isConnected && (
                    <TooltipContent>
                      <p>Conecte sua carteira para criar tarefas.</p>
                    </TooltipContent>
                  )}
                </Tooltip>
              </div>
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
                    onTaskUpdate={refetchTasks}
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

// Componente para os cards de métrica
function MetricCard({ 
  title, 
  value, 
  icon, 
  tooltip 
}: { 
  title: string; 
  value: string | number; 
  icon: React.ReactNode;
  tooltip?: string;
}) {
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
        <TooltipTrigger asChild>
          {content}
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    )
  }

  return content
}
```

#### 📁 **Criar `components/CreateTaskModal.tsx`**

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

export function CreateTaskModal({ open, onClose }: CreateTaskModalProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [deadline, setDeadline] = useState('')
  const [stakeAmount, setStakeAmount] = useState('0.001')
  
  const { createTask, isPending } = useCreateTask()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
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

  // Gera data mínima (hoje + 1 hora)
  const minDateTime = new Date(Date.now() + 60 * 60 * 1000).toISOString().slice(0, 16)

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>🎯 Nova Tarefa na Blockchain</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
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
          
          <div className="space-y-2">
            <Label htmlFor="description">Descrição</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descreva o que precisa ser feito..."
              rows={3}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="deadline">Prazo Final</Label>
            <Input
              id="deadline"
              type="datetime-local"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              min={minDateTime}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="stake">Valor do Stake (ETH)</Label>
            <Input
              id="stake"
              type="number"
              step="0.001"
              min="0.001"
              value={stakeAmount}
              onChange={(e) => setStakeAmount(e.target.value)}
              placeholder="0.001"
              required
            />
            <p className="text-xs text-gray-500">
              💡 Mínimo: 0.001 ETH • Você recupera se completar no prazo!
            </p>
          </div>
          
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
        </form>
      </DialogContent>
    </Dialog>
  )
}
```

### ⚡ **Passo 7: Testar e Configurar a Integração**

#### 🔧 **7.1 Atualizar Configurações**

**📁 Atualizar `lib/web3.ts` com seus dados reais:**

```typescript
// lib/web3.ts - Configure com seus dados

// 🔑 Substitua pelas suas chaves reais
const projectId = 'SUA_WALLETCONNECT_KEY_AQUI'  // De https://cloud.walletconnect.com
const alchemyApiKey = 'SUA_ALCHEMY_KEY_AQUI'    // De https://alchemy.com

// 📍 Substitua pelo endereço do seu contrato deployado
export const CONTRACT_ADDRESS = '0xSEU_ENDERECO_DEPLOYADO_AQUI'
```

#### 🧪 **7.2 Testar Localmente**

**1. 🚀 Iniciar o servidor:**
```bash
pnpm dev
```

**2. 🌐 Abrir http://localhost:3000**

**3. ✅ Fluxo de teste:**
1. **Conectar carteira**: Clique em "Conectar Carteira" → MetaMask aparece
2. **Ver dados atualizados**: Dashboard mostra saldo e endereço
3. **Criar tarefa**: Clique "Nova Tarefa" → Preenche formulário → Assina transação
4. **Ver tarefa na lista**: Tarefa aparece automaticamente após confirmação
5. **Completar tarefa**: Clique no ✅ → Assina transação → Status atualiza

#### 🔍 **7.3 Debug e Troubleshooting**

**🚨 Problemas comuns e soluções:**

**1. "MetaMask não aparece"**
```typescript
// Verifique se MetaMask está instalado
console.log('MetaMask instalado:', typeof window.ethereum !== 'undefined')
```

**2. "Erro ao conectar"**
```typescript
// Verifique configuração wagmi
console.log('Configuração wagmi:', config)
console.log('Conectores disponíveis:', connectors)
```

**3. "Transações falham"**
```typescript
// Debug de transações
console.log('Endereço do contrato:', CONTRACT_ADDRESS)
console.log('Rede conectada:', await provider.getNetwork())
```

**4. "Dados não atualizam"**
```typescript
// Verifique hooks wagmi
console.log('Dados das tarefas:', taskIds)
console.log('Loading:', isLoading)
console.log('Erro:', error)
```

## 🔗 **Passo a Passo: Integrando Frontend com Smart Contract**

Agora que seu contrato está deployado, vamos conectar o frontend com a blockchain. Siga esta sequência **exata**:

### 📋 **Sequência de Integração (IMPORTANTE: Siga esta ordem!)**

**1. 📝 Copiar dados do contrato deployado**
**2. ⚙️ Configurar arquivo web3.ts**  
**3. 🎣 Criar hooks customizados**
**4. 💻 Atualizar página principal**
**5. 🧪 Testar integração**

---

### 🎯 **Passo 1: Copiando ABI e Endereço do Contrato**

#### **📋 O que é ABI e por que precisamos?**

**Analogia**: ABI é como um **"cardápio de restaurante"** que lista todos os pratos (funções) disponíveis e seus ingredientes (parâmetros).

- **🤔 Sem ABI**: É como tentar pedir comida sem ver o cardápio - você não sabe o que está disponível
- **✅ Com ABI**: Você sabe exatamente quais funções pode chamar e como chamar

#### **📁 1.1 Obter ABI do Contrato Compilado**

**Onde encontrar**: Após compilar com Foundry, o ABI fica em:
```
smartcontract/out/TaskManager.sol/TaskManager.json
```

**📋 Como extrair o ABI:**

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

#### **📍 1.2 Obter Endereço do Contrato**

**De onde vem**: Quando você fez o deploy, apareceu algo como:
```
TaskManager deployed at: 0xb17d39826a1b83f7685de1ebc924b3185b677383
```

**📋 Como confirmar se está correto:**
- Acesse: https://sepolia.etherscan.io/address/SEU_ENDERECO
- Se mostrar seu contrato = está certo ✅

---

### ⚙️ **Passo 2: Configurando `lib/web3.ts`**

Este arquivo é a **"central de conexão"** do seu DApp:

```typescript
// lib/web3.ts - "Central de Conexão" do seu DApp

import { createConfig, http } from 'wagmi'
import { sepolia } from 'wagmi/chains'
import { metaMask } from 'wagmi/connectors'

// 🌐 Configuração principal
export const config = createConfig({
  chains: [sepolia],                                    // 🌍 Qual blockchain usar
  connectors: [metaMask()],                            // 🔌 Quais carteiras aceitar
  transports: {
    [sepolia.id]: http('https://sepolia.infura.io/v3/SUA_INFURA_KEY')  // 🛣️ Como conectar
  },
})

// 📍 COLE AQUI: Endereço do seu contrato deployado
export const CONTRACT_ADDRESS = '0xSEU_ENDERECO_DEPLOYADO_AQUI'

// 📋 COLE AQUI: ABI do seu contrato (copiado do arquivo .json)
export const CONTRACT_ABI = [
  // Cole aqui todo o array ABI que você copiou do arquivo TaskManager.json
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

**🤔 O que cada parte faz:**

- **`config`**: "Receita" de como conectar na blockchain
- **`CONTRACT_ADDRESS`**: "Endereço" onde seu contrato mora na blockchain
- **`CONTRACT_ABI`**: "Manual de instruções" de todas as funções disponíveis
- **`as const`**: Diz ao TypeScript "estes dados nunca mudam"

---

### 🎣 **Passo 3: Entendendo os Hooks Customizados**

#### **🤔 Por que usar Hooks?**

**Analogia**: Hooks são como **"funcionários especializados"** numa empresa:

- **👔 Gerente de Vendas** (useCreateTask): Só cuida de criar tarefas
- **📊 Analista de Dados** (useTaskMetrics): Só cuida de calcular estatísticas
- **🔍 Pesquisador** (useAllUserTasks): Só cuida de buscar dados
- **🔗 Recepcionista** (useWeb3Status): Só cuida de saber quem está logado

**✅ Vantagens dos Hooks:**
- **Reutilizável**: Usa o mesmo hook em vários componentes
- **Organizado**: Cada hook tem uma responsabilidade específica
- **Automático**: Atualiza dados automaticamente quando necessário
- **Limpo**: Componente fica simples, lógica fica nos hooks

### 📁 **Anatomia do `hooks/useTaskManager.ts` - Explicação Detalhada**

Vamos dissecar cada hook do nosso arquivo como um **manual técnico**:

#### 🚀 **Hook 1: useAllUserTasks() - O "Caçador de Dados"**

```typescript
export function useAllUserTasks() {
  const { address } = useAccount()
  return useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getUserTasksWithData',
    args: address ? [address] : undefined,
    query: { enabled: !!address }
  })
}
```

**📖 Explicação linha por linha:**

```typescript
const { address } = useAccount()
```
- **O que faz**: Pega o endereço da carteira conectada
- **Analogia**: Como perguntar "Qual é seu CPF?" para identificar a pessoa
- **Resultado**: `address = "0x1a2b3c4d..."` ou `undefined` se não conectado

```typescript
return useReadContract({
```
- **O que faz**: Chama uma função do smart contract que **só lê dados** (não gasta gas)
- **Analogia**: Como "consultar saldo no banco" - só olha, não mexe

```typescript
address: CONTRACT_ADDRESS,
abi: CONTRACT_ABI,
functionName: 'getUserTasksWithData',
```
- **address**: "Onde" está o contrato (endereço na blockchain)
- **abi**: "Manual de instruções" para falar com o contrato
- **functionName**: "Qual função" queremos chamar no contrato

```typescript
args: address ? [address] : undefined,
```
- **O que faz**: Passa o endereço da carteira como parâmetro
- **Analogia**: Como dizer "mostre as tarefas do CPF 123.456.789-00"
- **Se não conectado**: Não passa nenhum parâmetro

```typescript
query: { enabled: !!address }
```
- **O que faz**: Só executa a busca se tiver carteira conectada
- **`!!address`**: Converte para true/false (double negation)
- **Analogia**: "Só procure tarefas se a pessoa se identificou"

#### 📊 **Hook 2: useTaskMetrics() - O "Calculadora Inteligente"**

```typescript
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
    weiInStake: totalStake / 1e18,
    tasks: allTasks,
    isLoading: false,
    error,
    refetch
  }
}
```

**📖 Explicação detalhada:**

**🔍 Primeira parte - Buscar dados:**
```typescript
const { data: allTasks, isLoading, error, refetch } = useAllUserTasks()
```
- **data: allTasks**: Renomeia `data` para `allTasks` para ficar mais claro
- **isLoading**: `true` = ainda buscando dados, `false` = terminou
- **error**: Se deu erro, contém detalhes do erro
- **refetch**: Função para "buscar novamente" quando quiser atualizar

**🔄 Estados de carregamento:**
```typescript
if (isLoading || !allTasks) {
  return { total: 0, ..., isLoading: true }
}
```
- **Por que verificar**: Evita erros quando dados ainda não chegaram
- **Analogia**: Como dizer "ainda estou contando, aguarde..." numa votação
- **Retorna zeros**: Para não quebrar a interface

**🎯 Verificação de dados vazios:**
```typescript
if (!Array.isArray(allTasks) || allTasks.length === 0) {
  return { total: 0, ..., tasks: [] }
}
```
- **Array.isArray()**: Confirma que é realmente uma lista
- **length === 0**: Confirma que a lista não está vazia
- **Analogia**: Como conferir se a gaveta está vazia antes de contar objetos

**🧮 Cálculo das métricas:**
```typescript
let concluidas = 0
let totalStake = 0

allTasks.forEach((task: any) => {
  if (task.status) {          // Se tarefa foi concluída
    concluidas++
  } else {                    // Se ainda está pendente
    totalStake += Number(task.stakeAmount)  // Soma valor apostado
  }
})
```
- **forEach**: Percorre cada tarefa da lista
- **task.status**: `true` = concluída, `false` = pendente
- **task.stakeAmount**: Valor apostado na tarefa (em wei)
- **Number()**: Converte de string para número

**📊 Retorno final:**
```typescript
return {
  total: allTasks.length,                    // Quantidade total
  concluidas,                                // Quantidade concluídas
  pendentes: allTasks.length - concluidas,   // Total - concluídas = pendentes
  weiInStake: totalStake / 1e18,            // Converte wei para ETH
  tasks: allTasks,                          // Dados completos
  isLoading: false,                         // Não está mais carregando
  error,                                    // Erro, se houver
  refetch                                   // Função para atualizar
}
```

#### ✍️ **Hook 3: useCreateTask() - O "Construtor de Tarefas"**

```typescript
export function useCreateTask() {
  const { writeContract, isPending, error } = useWriteContract()
  
  const createTask = async (title: string, description: string, deadline: Date, stakeAmount: string = '0.001') => {
    const deadlineTimestamp = Math.floor(deadline.getTime() / 1000)
    await writeContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: 'createTask',
      args: [title, description, BigInt(deadlineTimestamp)],
      value: parseEther(stakeAmount),
    })
  }
  
  return { createTask, isPending, error }
}
```

**📖 Explicação detalhada:**

**🔧 Configuração inicial:**
```typescript
const { writeContract, isPending, error } = useWriteContract()
```
- **writeContract**: Função que envia transações para blockchain
- **isPending**: `true` = transação sendo processada
- **error**: Detalhes de erro, se houver

**📝 Função de criação:**
```typescript
const createTask = async (title, description, deadline, stakeAmount = '0.001') => {
```
- **async**: Função assíncrona (demora um tempo para completar)
- **Parâmetros**: Dados necessários para criar a tarefa
- **stakeAmount = '0.001'**: Valor padrão se não informado

**🗓️ Conversão de data:**
```typescript
const deadlineTimestamp = Math.floor(deadline.getTime() / 1000)
```
- **deadline.getTime()**: Converte data para milissegundos
- **/ 1000**: Blockchain usa segundos, não milissegundos
- **Math.floor()**: Remove decimais para ficar número inteiro

**💰 Conversão de valor:**
```typescript
value: parseEther(stakeAmount),
```
- **parseEther('0.001')**: Converte "0.001 ETH" para "1000000000000000 wei"
- **Por que**: Blockchain trabalha com wei (menor unidade)

#### ✅ **Hook 4: useCompleteTask() - O "Finalizador"**

```typescript
export function useCompleteTask() {
  const { writeContract, isPending, error } = useWriteContract()
  
  const completeTask = async (taskId: number) => {
    await writeContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: 'completeTask',
      args: [BigInt(taskId)],
    })
  }
  
  return { completeTask, isPending, error }
}
```

**📖 Explicação detalhada:**

**🎯 Função simples e direta:**
- **Parâmetro**: Só precisa do ID da tarefa
- **BigInt(taskId)**: Converte número JavaScript para formato blockchain
- **Sem value**: Não envia ETH junto (apenas executa)

#### 🔗 **Hook 5: useWeb3Status() - O "Vigia da Conexão"**

```typescript
export function useWeb3Status() {
  const { address, isConnected } = useAccount()
  return {
    address,
    isConnected,
    shortAddress: address ? `${address.slice(0, 6)}...${address.slice(-4)}` : null
  }
}
```

**📖 Explicação detalhada:**

**📍 Formatação de endereço:**
```typescript
shortAddress: address ? `${address.slice(0, 6)}...${address.slice(-4)}` : null
```
- **address.slice(0, 6)**: Primeiros 6 caracteres "0x1a2b"
- **address.slice(-4)**: Últimos 4 caracteres "c4d5"
- **Resultado**: "0x1a2b...c4d5" (mais fácil de ler)

---

### 💻 **Passo 4: Entendendo a Página Principal (page.tsx)**

Agora vamos dissecar o código da página principal para entender como tudo se conecta:

#### **📋 Estrutura Geral do Componente**

```typescript
export default function Web3TodoPage() {
  const [showCreateModal, setShowCreateModal] = useState(false)
  
  // 🔗 Hooks Web3 ULTRA-SIMPLIFICADOS
  const { connectors, connect } = useConnect()
  const { disconnect } = useDisconnect()
  const { isConnected, shortAddress } = useWeb3Status()
  const { refetchBalance } = useContractBalance()
  const chainId = useChainId()
  
  // 🚀 UM ÚNICO HOOK para tudo: métricas + tarefas + dados
  const {
    total, concluidas, pendentes, weiInStake, tasks,
    isLoading: loadingTasks, refetch: refetchTasks
  } = useTaskMetrics()
}
```

**📖 Explicação detalhada dos hooks:**

#### **🔌 Hooks de Conexão**

```typescript
const { connectors, connect } = useConnect()
const { disconnect } = useDisconnect()
```
- **connectors**: Lista de carteiras disponíveis (MetaMask, WalletConnect, etc.)
- **connect()**: Função para conectar uma carteira específica
- **disconnect()**: Função para desconectar a carteira atual

#### **🌐 Hook de Verificação de Rede**

```typescript
const chainId = useChainId()
const isCorrectNetwork = chainId === sepolia.id
const networkName = chainId === sepolia.id ? 'Sepolia' : `Rede ${chainId}`
```
- **chainId**: ID numérico da rede atual (Sepolia = 11155111)
- **isCorrectNetwork**: `true` se está na Sepolia, `false` se não
- **networkName**: Nome amigável da rede para exibir na interface

#### **🎯 Hook Central - useTaskMetrics()**

```typescript
const {
  total, concluidas, pendentes, weiInStake, tasks,
  isLoading: loadingTasks, refetch: refetchTasks
} = useTaskMetrics()
```

**🚀 Este é o hook MAIS IMPORTANTE! Ele faz TUDO:**

- **total**: Quantidade total de tarefas
- **concluidas**: Quantidade de tarefas concluídas
- **pendentes**: Quantidade de tarefas pendentes  
- **weiInStake**: Valor total apostado em ETH
- **tasks**: Array com dados completos de todas as tarefas
- **loadingTasks**: `true` = carregando dados da blockchain
- **refetchTasks**: Função para buscar dados novamente

#### **🔄 Função de Conectar/Desconectar Carteira**

```typescript
const handleConnectWallet = () => {
  if (isConnected) {
    disconnect()
  } else {
    const metamask = connectors.find(c => c.name === 'MetaMask')
    if (metamask) connect({ connector: metamask })
  }
}
```

**📖 Passo a passo:**

1. **Verifica se já está conectado**: `if (isConnected)`
2. **Se conectado**: Chama `disconnect()` para desconectar
3. **Se não conectado**: Procura MetaMask na lista de conectores
4. **Se encontrou MetaMask**: Chama `connect()` para conectar

#### **🔄 Função de Atualizar Dados**

```typescript
const handleRefresh = async () => {
  await Promise.all([refetchTasks(), refetchBalance()])
}
```

**📖 O que faz:**
- **refetchTasks()**: Busca tarefas novamente na blockchain
- **refetchBalance()**: Atualiza saldo do contrato
- **Promise.all()**: Executa ambas ao mesmo tempo (mais rápido)
- **async/await**: Aguarda terminar antes de continuar

#### **🎨 Estrutura Visual da Interface**

```typescript
return (
  <TooltipProvider>
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        {/* 🎯 CABEÇALHO */}
        <header className="mb-8">
          {/* Título + Botão de conectar */}
        </header>

        {/* 📊 SEÇÃO DE MÉTRICAS */}
        <section className="mb-10">
          {/* 4 cards com estatísticas */}
        </section>

        {/* 📋 SEÇÃO DE TAREFAS */}
        <section>
          {/* Lista de tarefas + botão nova tarefa */}
        </section>
      </main>
    </div>
  </TooltipProvider>
)
```

#### **⚡ Renderização Condicional Inteligente**

**🔍 Para o carregamento:**
```typescript
{loadingTasks && isConnected ? (
  <div className="text-center p-8">
    <Loader className="animate-spin h-8 w-8 mx-auto mb-4" />
    <p>Carregando tarefas da blockchain...</p>
  </div>
) : /* ... outras condições */ }
```

**📝 Para lista vazia:**
```typescript
(!tasks || tasks.length === 0) && isConnected ? (
  <div className="text-center p-8">
    <p className="text-gray-500">Você ainda não tem tarefas. Crie sua primeira!</p>
  </div>
) : /* ... outras condições */
```

**📋 Para lista de tarefas:**
```typescript
isConnected && tasks ? (
  tasks.map((task: any) => (
    <TaskItem 
      key={Number(task.id)} 
      task={task}
      isConnected={isConnected}
      onTaskUpdate={refetchTasks}
    />
  ))
) : null
```

**🚫 Para usuário desconectado:**
```typescript
{!isConnected && (
  <div className="text-center p-8">
    <AlertCircle className="h-12 w-12 mx-auto mb-4 text-gray-400" />
    <p className="text-gray-500">Conecte sua carteira para ver suas tarefas</p>
  </div>
)}
```

#### **🔄 Por que o wagmi otimiza automaticamente**

**🧠 Otimizações automáticas do wagmi:**
- **Cache automático**: Não refaz chamadas desnecessárias  
- **Invalidação inteligente**: Só atualiza quando blockchain muda
- **Batching**: Agrupa múltiplas atualizações em uma só
- **Background refetch**: Atualiza dados quando necessário

#### **📊 Fluxo Completo de Dados:**

```
👤 USUÁRIO conecta carteira
    ↓
🎣 useTaskMetrics() → useAllUserTasks() 
    ↓
📡 Chama getUserTasksWithData() na blockchain
    ↓
🏪 Smart Contract retorna dados completos
    ↓
🧮 useTaskMetrics() calcula estatísticas
    ↓
💻 Componente renderiza interface
    ↓
👤 USUÁRIO vê: total, concluídas, pendentes, lista de tarefas

👤 USUÁRIO cria nova tarefa
    ↓
⚡ Transação é minerada na blockchain
    ↓
📡 wagmi detecta mudança automaticamente
    ↓
🔄 useTaskMetrics() busca dados atualizados
    ↓
💻 Interface atualiza sozinha! ✨
```

#### **🎨 Componente MetricCard**

```typescript
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

  // Se tem tooltip, envolve com Tooltip
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

**📖 Características do MetricCard:**
- **Reutilizável**: Usado para todos os 4 cards de métricas
- **Hover effect**: Sombra aparece quando passa mouse
- **Tooltip opcional**: Mostra explicação se fornecida
- **Layout flexível**: Ícone à direita, texto à esquerda

---

### 🧩 **Passo 6: Componentes Auxiliares**

#### **📝 TaskItem Component**

O `TaskItem` é responsável por exibir cada tarefa individual:

```typescript
<TaskItem 
  key={Number(task.id)} 
  task={task}                    // Dados completos da tarefa
  isConnected={isConnected}      // Se carteira está conectada
  onTaskUpdate={refetchTasks}    // Callback para atualizar lista
/>
```

**🔗 Props explicadas:**
- **task**: Objeto com todos os dados da tarefa (id, title, description, status, etc.)
- **isConnected**: Permite/bloqueia ações baseadas na conexão
- **onTaskUpdate**: Função chamada após completar tarefa (atualiza a lista)

#### **📝 CreateTaskModal Component**

Modal para criar novas tarefas:

```typescript
<CreateTaskModal 
  open={showCreateModal}                    // Se modal está aberto
  onClose={() => setShowCreateModal(false)} // Função para fechar
/>
```

**🎯 Funcionalidades:**
- **Formulário controlado**: Todos inputs são controlados por estado
- **Validação**: Impede envio com dados inválidos
- **Loading state**: Mostra "Criando..." durante transação
- **Auto-reset**: Limpa formulário após sucesso

---

### 🧪 **Passo 6: Testando a Integração**

#### **📋 Checklist de Teste Essencial**

**🔌 Conectividade:**
- [ ] Botão "Conectar Carteira" funciona
- [ ] MetaMask abre e solicita conexão
- [ ] Endereço aparece no cabeçalho
- [ ] Indicador mostra rede "Sepolia"

**📊 Funcionalidades:**
- [ ] Modal "Nova Tarefa" abre
- [ ] Transações são assinadas no MetaMask
- [ ] Lista de tarefas atualiza automaticamente
- [ ] Botão "Atualizar" funciona

#### **🚨 Problemas Comuns**

**❌ "Contract not found"**
- Verifique `CONTRACT_ADDRESS` no `lib/web3.ts`
- Confirme no Etherscan: https://sepolia.etherscan.io/address/SEU_ENDERECO

**❌ "Wrong network"**
- MetaMask deve estar conectado à rede Sepolia
- Chain ID deve ser 11155111

**❌ "Insufficient funds"**
- Use faucet Sepolia: https://sepoliafaucet.com/

---

### 🚀 **Passo 7: Deploy e Produção**

#### **📦 Build da Aplicação**

```bash
# Verificar se tudo compila
pnpm build

# Testar build localmente
pnpm start
```

#### **🌐 Deploy no Vercel**

```bash
# Conectar repositório ao Vercel
# Configurar variáveis de ambiente:
# - NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID
# - NEXT_PUBLIC_ALCHEMY_API_KEY
```

#### **⚙️ Variáveis de Ambiente**

```env
# .env.local (para produção)
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=seu_project_id
NEXT_PUBLIC_ALCHEMY_API_KEY=sua_alchemy_key
```

**🔑 Por que NEXT_PUBLIC_:**
- Variáveis com `NEXT_PUBLIC_` ficam disponíveis no browser
- Necessário para bibliotecas Web3 funcionarem no frontend

---

### 🎯 **Resumo Final: O que Conquistamos**

**✅ Sistema Completo Funcionando:**

1. **🔌 Conexão**: MetaMask conecta no nosso site
2. **📝 Criação**: Usuário cria tarefas que vão para blockchain
3. **📊 Visualização**: Dados atualizados em tempo real
4. **✅ Interação**: Completar tarefas com transações reais
5. **💰 Stakes**: Sistema financeiro com ETH real (testnet)
6. **🔄 Sincronização**: Interface atualiza automaticamente
7. **🛡️ Validação**: Verificação de rede e estados

**🧩 Arquitetura Final Integrada:**

```
👤 USUÁRIO
    ↓ clica "Criar Tarefa"
💻 COMPONENTE CreateTaskModal
    ↓ chama useCreateTask()
🎣 HOOK useCreateTask  
    ↓ usa writeContract()
⚡ VIEM + WAGMI
    ↓ traduz e envia para blockchain
🦊 METAMASK
    ↓ usuário assina transação
🌐 SEPOLIA BLOCKCHAIN
    ↓ executa createTask() no smart contract
📡 EVENTO TaskCreated
    ↓ wagmi detecta automaticamente
🔄 CACHE INVALIDATION
    ↓ useTaskMetrics() busca dados novos
📊 MÉTRICAS RECALCULADAS
    ↓ componente re-renderiza
💻 INTERFACE ATUALIZADA
    ↓ nova tarefa aparece na lista
👤 USUÁRIO vê resultado instantâneo! ✨
```

**🎯 Funcionalidades Implementadas:**

- ✅ **Conexão de Carteira**: MetaMask, WalletConnect
- ✅ **Verificação de Rede**: Força uso da Sepolia
- ✅ **Gestão de Estado**: Cache inteligente com wagmi
- ✅ **Transações**: Criar e completar tarefas
- ✅ **Métricas Tempo Real**: Estatísticas automáticas
- ✅ **Interface Responsiva**: Funciona em mobile/desktop
- ✅ **Loading States**: Feedback visual durante operações
- ✅ **Error Handling**: Tratamento de erros de rede
- ✅ **Tooltips Informativos**: Explicações contextuais
- ✅ **Sistema de Refresh**: Atualização manual quando necessário

**🚀 Seu app agora é um DApp completo!**

- ✅ **D**ecentralized: Roda na blockchain Ethereum
- ✅ **A**pplication: Interface moderna e intuitiva  
- ✅ **P**rotocol: Smart contract com regras automáticas

**🎓 Conhecimentos Adquiridos:**

- 🔧 **Integração Web3**: Como conectar React com blockchain
- 🎣 **Hooks Customizados**: Organização e reutilização de lógica
- ⚡ **Otimização**: Cache automático e performance
- 🔄 **Estado Reativo**: Atualizações automáticas de dados
- 🛡️ **Validações**: Verificação de rede e estados
- 🎨 **UX Web3**: Experiência de usuário em DApps
- 📡 **Comunicação Blockchain**: Leitura e escrita de contratos

---

## 🎉 **Conclusão da Aula 3**

**🏆 Parabéns! Você construiu um DApp completo do zero!**

**✅ Jornada Conquistada:**

1. **🏗️ Smart Contract**: Criou e deployou na blockchain Sepolia
2. **🎣 Hooks Organizados**: Desenvolveu lógica Web3 reutilizável
3. **🔗 Configuração Web3**: Conectou frontend com blockchain via wagmi
4. **💻 Interface Integrada**: Implementou UI moderna com funcionalidades Web3
5. **⚡ Performance Otimizada**: Cache automático e atualizações em tempo real
6. **🧪 Sistema Testado**: Validou todas as funcionalidades essenciais

**🧩 Stack Tecnológica Dominada:**
- **Frontend**: Next.js 15 + TypeScript + Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI + Lucide Icons
- **Web3**: wagmi + viem + TanStack Query
- **Blockchain**: Ethereum Sepolia + Alchemy/Infura
- **Smart Contract**: Solidity + Foundry
- **Carteira**: MetaMask + WalletConnect

**🚀 Próximos Passos:**
- Deploy em produção no Vercel
- Migrar para mainnet Ethereum
- Adicionar novas funcionalidades (editár tarefas, categorias, etc.)
- Implementar temas dark/light
- Adicionar notificações push

**🎓 Você agora domina:**
- 🎣 **Hooks Customizados**: Organização e reutilização de lógica Web3
- 🔧 **Configuração Wagmi**: Setup completo de provedores e conexões
- ⚡ **Performance Web3**: Cache automático e otimizações
- 💻 **Integração Frontend**: React + TypeScript + Blockchain
- 🧪 **Testes e Debug**: Validação de funcionalidades Web3
