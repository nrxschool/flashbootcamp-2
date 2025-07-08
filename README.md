

## 🌐 Integração Frontend com Smart Contract (Sepolia)

### 🎯 **O que vamos fazer?**

Vamos conectar nosso frontend Next.js com o smart contract TaskManager que está rodando na rede Sepolia. É como conectar um site com uma API, mas a "API" é um smart contract na blockchain!

**💡 Analogia**: É como conectar um aplicativo móvel com um servidor, mas o servidor é descentralizado e roda na blockchain.

## 💰 **Sistema de Stake - Incentivo para Completar Tarefas**

### 🎯 **Como Funciona o TaskManager com Stake**

O **TaskManager** é um gerenciador de tarefas revolucionário que usa **blockchain** e **sistema de stake** para incentivar você a completar suas tarefas!

**🔑 Conceito Principal:**
- Ao criar uma tarefa, você **deposita ETH** como garantia (stake)
- Se **completar a tarefa no prazo**, recebe seu ETH de volta
- Se **não completar**, perde o stake (incentivo financeiro!)

**💡 Analogia**: É como fazer uma "aposta consigo mesmo" - você coloca dinheiro em jogo para se motivar a cumprir o que prometeu. Como uma academia que só devolve a mensalidade se você frequentar!

### 🏗️ **Arquitetura do Sistema**

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  🎯 Criar Tarefa │    │ 💰 Stake Locked │    │ ✅ Completar    │
│                 │    │                 │    │                 │
│ • Título        │───▶│ • ETH Depositado│───▶│ • ETH Devolvido │
│ • Descrição     │    │ • Prazo Ativo   │    │ • Tarefa Feita  │
│ • Prazo         │    │ • Incentivo $$$$ │    │ • Missão Cumprida│
│ • Stake (ETH)   │    │                 │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                              │
                              ▼
                       ⏰ **Prazo Vencido**
                              │
                              ▼
                    ┌─────────────────┐
                    │ 💸 Stake Perdido│
                    │                 │
                    │ • ETH Confiscado│
                    │ • Lição Aprendida│
                    │ • Próxima vez...│
                    └─────────────────┘
```

### 💎 **Vantagens do Sistema de Stake**

#### 🧠 **Psicológicas:**
- **Aversão à perda**: Humanos odeiam perder dinheiro
- **Compromisso financeiro**: Valor real em jogo  
- **Responsabilidade**: Você é o único responsável
- **Gamificação**: Transforma tarefas em desafios

#### 🔧 **Técnicas:**
- **Descentralizado**: Ninguém pode interferir
- **Transparente**: Tudo registrado na blockchain
- **Automático**: Smart contract executa as regras
- **Imutável**: Regras não podem ser alteradas

#### 💰 **Financeiras:**
- **Stake mínimo**: 0.0000001 ETH (baixo para testar)
- **Sem taxas ocultas**: O que você deposita é o que pode receber
- **Prova de comprometimento**: Valor real demonstra seriedade

### 📋 **Especificações Técnicas do Smart Contract**

#### 🏗️ **Estrutura da Tarefa:**
```solidity
struct Task {
    uint256 id;           // ID único da tarefa
    string title;         // Título da tarefa
    string description;   // Descrição detalhada  
    uint256 createdAt;    // Timestamp de criação
    uint256 completedAt;  // Timestamp de conclusão (0 se pendente)
    bool status;          // true = concluída, false = pendente
    address creator;      // Endereço de quem criou
    uint256 deadline;     // Prazo limite (timestamp)
}
```

#### 🔧 **Função Principal - Criar Tarefa:**
```solidity
function createTask(
    string memory _title, 
    string memory _description, 
    uint256 _deadline
) public payable {
    require(msg.value >= 0.0000001 ether, "Valor do stake deve ser maior que 0.0000001 ether");
    require(_deadline > block.timestamp, "Prazo de conclusao deve ser maior que a data atual");
    
    taskCount++;
    tasks[taskCount] = Task(taskCount, _title, _description, block.timestamp, 0, false, msg.sender, _deadline);
    
    emit TaskCreated(taskCount, _title, _description, block.timestamp, msg.sender);
}
```

**🤔 O que acontece aqui:**
1. **Validação do stake**: Mínimo de 0.0000001 ETH obrigatório
2. **Validação do prazo**: Deve ser no futuro
3. **Criação da tarefa**: Salva todos os dados na blockchain
4. **Lock do ETH**: Seu stake fica "preso" no contrato
5. **Evento emitido**: Para que o frontend saiba que foi criada

#### ✅ **Função - Completar Tarefa:**
```solidity
function completeTask(uint256 _id) public {
    Task storage task = tasks[_id];
    require(task.creator == msg.sender, "Voce nao e o criador da tarefa");
    require(!task.status, "Tarefa ja foi concluida");
    
    task.status = true;
    task.completedAt = block.timestamp;
    
    emit TaskCompleted(_id, block.timestamp);
}
```

**🤔 O que acontece aqui:**
1. **Verificação de propriedade**: Só quem criou pode completar
2. **Verificação de status**: Não pode completar tarefa já feita
3. **Marcação como concluída**: Atualiza status na blockchain
4. **Timestamp de conclusão**: Registra quando foi completada
5. **Evento emitido**: Para que o frontend atualize

### 🔄 **Fluxo Completo de uma Tarefa**

#### 1️⃣ **Criação (Frontend → Blockchain)**
```typescript
// Usuário no frontend
const createTask = async (title, description, deadline, stakeAmount) => {
  await taskManager.createTask(title, description, deadline, {
    value: parseEther(stakeAmount) // Converte ETH para Wei
  })
}
```

#### 2️⃣ **Acompanhamento (Blockchain → Frontend)**
```typescript
// Frontend monitora via hooks
const { data: task } = useReadContract({
  address: CONTRACT_ADDRESS,
  abi: CONTRACT_ABI,
  functionName: 'getTask',
  args: [taskId]
})
```

#### 3️⃣ **Conclusão (Frontend → Blockchain)**
```typescript
// Usuário completa a tarefa
const completeTask = async (taskId) => {
  await taskManager.completeTask(taskId)
  // Stake é devolvido automaticamente (versão futura)
}
```

### 🚨 **Regras Importantes do Sistema**

#### ✅ **Para Recuperar seu Stake:**
- ✅ Complete a tarefa **antes do prazo**
- ✅ Seja o **criador original** da tarefa
- ✅ Tarefa ainda deve estar **pendente**

#### ❌ **Quando Você Perde o Stake:**
- ❌ **Prazo vencido** sem completar
- ❌ **Não completar** a tarefa
- ❌ Tentar **trapacear** o sistema

#### 🔐 **Segurança Garantida:**
- 🔒 **Só você pode completar** suas tarefas
- 🔒 **Não pode completar duas vezes** a mesma tarefa  
- 🔒 **Prazo é imutável** após criação
- 🔒 **Stake fica seguro** no smart contract

### 🔥 **Por que usar Viem em vez de Ethers.js?**

**Viem** é a biblioteca mais moderna para interagir com Ethereum. Aqui estão as principais vantagens:

#### ⚡ **Performance**
- **Viem**: Até 5x mais rápido que ethers.js
- **Ethers**: Mais lento devido à arquitetura legada

#### 🛡️ **Segurança de Tipos**
- **Viem**: TypeScript nativo com tipos automáticos
- **Ethers**: Requer tipos manuais e pode ter erros

#### 📦 **Tamanho do Bundle**
- **Viem**: ~100kb (tree-shaking otimizado)
- **Ethers**: ~300kb+ (bundle maior)

#### 🎯 **API Moderna**
```typescript
// Viem (moderno)
const balance = await publicClient.getBalance({ address })
const formatted = formatEther(balance)

// Ethers (legado)
const balance = await provider.getBalance(address)
const formatted = ethers.utils.formatEther(balance)
```

#### 🔧 **Integração com Wagmi**
- **Viem**: Integração nativa perfeita
- **Ethers**: Requer adaptadores adicionais

**💡 Conclusão**: Viem é o futuro do desenvolvimento Web3 em TypeScript!

---

### 📋 **Pré-requisitos**

Antes de começar, certifique-se de ter:

1. ✅ **Smart contract deployado na Sepolia** (veja instruções no diretório `/smartcontract`)
2. ✅ **MetaMask instalado** com Sepolia configurada
3. ✅ **ETH de teste** na carteira Sepolia
4. ✅ **Endereço do contrato** anotado após deploy
5. ✅ **Node.js e pnpm** instalados

### 🚀 **Deploy do Smart Contract (Referência)**

Se você ainda não fez o deploy, siga estes passos no diretório `/smartcontract`:

```bash
# Navegar para o diretório do smart contract
cd smartcontract

# Instalar dependências (se necessário)
forge install

# Compilar o contrato
forge build

# Deploy na rede Sepolia (substitua pela sua chave privada e RPC)
forge script script/TaskManager.s.sol:TaskManagerScript --rpc-url $SEPOLIA_RPC_URL --private-key $PRIVATE_KEY --broadcast

# Verificar o contrato (opcional)
forge verify-contract <ENDERECO_DEPLOYADO> src/TaskManager.sol:TaskManager --chain sepolia
```

**📝 Anote o endereço do contrato** que aparecerá no console após o deploy!

**🔧 Exemplo de saída do deploy:**
```bash
== Logs ==
  TaskManager deployed to: 0x742d35Cc8A7EFB6b8F9F7e7c5A2C4D6E9F8G1H2I

ONCHAIN EXECUTION COMPLETE & SUCCESSFUL.
```

**📋 Configure no frontend:**
Após o deploy, você precisa atualizar o `CONTRACT_ADDRESS` no arquivo `lib/web3.ts`:

```typescript
// lib/web3.ts
export const CONTRACT_ADDRESS = '0x742d35Cc8A7EFB6b8F9F7e7c5A2C4D6E9F8G1H2I' // ← Seu endereço deployado
```

**🔗 Links úteis após deploy:**
- **Etherscan**: `https://sepolia.etherscan.io/address/SEU_ENDERECO_AQUI`
- **Interagir**: Use a aba "Write Contract" para testar
- **Verificar**: Veja transações na aba "Internal Txns"

### 📦 **Por que usar pnpm?**

**pnpm** é um gerenciador de pacotes moderno e eficiente. Principais vantagens:

#### ⚡ **Performance**
- **Instalação**: 2x mais rápido que npm
- **Resolução**: Cache inteligente de dependências
- **CI/CD**: Builds mais rápidos

#### 💾 **Espaço em Disco**
- **Economia**: Até 3x menos espaço usado
- **Deduplicação**: Compartilha pacotes entre projetos
- **Links simbólicos**: Evita duplicação desnecessária

#### 🔒 **Segurança**
- **Isolamento**: Dependências bem isoladas
- **Hoisting**: Controle mais rigoroso
- **Lock file**: Determinístico e confiável

#### 💡 **Compatibilidade**
```bash
# Se não tiver pnpm instalado:
npm install -g pnpm

# Verificar instalação:
pnpm --version
```

---

### 🔧 **Passo 1: Instalar Dependências Web3**

**🎯 O que vamos fazer neste passo:**
Vamos instalar as "ferramentas" (bibliotecas) que nosso site precisa para "conversar" com a blockchain. É como instalar aplicativos no seu celular - cada um tem uma função específica.

#### 1.1 Navegar para o projeto frontend

```bash
cd fb02
```

**🤔 O que isso faz?**
- Entra na pasta do nosso projeto Next.js
- É como abrir uma pasta no Windows/Mac
- Todos os próximos comandos serão executados dentro desta pasta

#### 1.2 Instalar bibliotecas necessárias

```bash
# Instalar viem (biblioteca moderna para interagir com Ethereum)
pnpm add viem

# Instalar wagmi + tanstack/react-query (bibliotecas modernas para Web3)
pnpm add wagmi @tanstack/react-query

# Instalar conectores de carteira
pnpm add @wagmi/connectors

# Instalar componentes para Web3
pnpm add @web3modal/wagmi @web3modal/siwe
```

**🤔 O que cada biblioteca faz? (Explicação para leigos)**

#### 📚 **viem** - O "Tradutor" da Blockchain
```
💭 Analogia: É como um tradutor que converte sua linguagem (JavaScript) 
   para a linguagem da blockchain (bytecode)

🔧 O que faz:
   - Envia transações para a blockchain
   - Lê informações dos smart contracts
   - Converte valores entre ETH e Wei
   - Valida endereços de carteira

📱 Como usar: viem.readContract(), viem.writeContract()
```

#### 🎣 **wagmi** - Os "Hooks Mágicos"
```
💭 Analogia: São como "ganchos" que pescam informações da blockchain 
   e trazem direto para seu site React

🔧 O que faz:
   - useAccount() - pesca informações da carteira conectada
   - useBalance() - pesca o saldo da carteira
   - useContract() - pesca dados do smart contract
   - useConnect() - conecta carteiras automaticamente

📱 Como usar: const { address } = useAccount()
```

#### 🗄️ **@tanstack/react-query** - O "Gerenciador de Cache"
```
💭 Analogia: É como a memória do seu celular que guarda apps abertos 
   para não precisar recarregar toda vez

🔧 O que faz:
   - Guarda dados da blockchain na memória
   - Atualiza automaticamente quando necessário
   - Evita requisições desnecessárias
   - Mostra loading/erro automaticamente

📱 Como usar: Funciona automaticamente com wagmi
```

#### 🔌 **@wagmi/connectors** - As "Tomadas" para Carteiras
```
💭 Analogia: São como diferentes tipos de tomadas (USB-C, Lightning) 
   cada carteira precisa de seu próprio "conector"

🔧 O que faz:
   - metaMask() - conecta com MetaMask
   - walletConnect() - conecta com 100+ carteiras mobile
   - coinbaseWallet() - conecta com Coinbase
   - injected() - conecta com qualquer carteira instalada

📱 Como usar: connectors: [metaMask(), walletConnect()]
```

#### 🎨 **@web3modal/wagmi** - A "Interface Bonita"
```
💭 Analogia: É como um tema bonito para WhatsApp - deixa a conexão 
   da carteira com visual profissional

🔧 O que faz:
   - Modal bonito para escolher carteira
   - Suporte a 100+ carteiras diferentes
   - QR Code para carteiras mobile
   - Interface responsiva e moderna

📱 Como usar: <Web3Modal /> - componente pronto
```

**📦 Resultado após instalação:**
Após rodar esses comandos, você terá um arquivo `package.json` atualizado com todas essas dependências. É como ter uma "lista de compras" confirmando que você tem todas as ferramentas necessárias.

---

### 🏗️ **Passo 2: Configurar Provedores Web3**

**🎯 O que vamos fazer neste passo:**
Vamos criar os "arquivos de configuração" que dizem para nosso site:
- Qual blockchain usar (Sepolia)
- Qual carteira pode conectar (MetaMask, WalletConnect)
- Onde está nosso smart contract
- Como se conectar na internet da blockchain

#### 2.1 Criar arquivo de configuração Web3

**📁 CRIAR PASTA E ARQUIVO:**
```
fb02/
└── lib/               ← 📁 CRIAR esta pasta (se não existir)
    └── web3.ts        ← 📄 CRIAR este arquivo
```

**🤔 Por que criar na pasta `lib`?**
- `lib` = biblioteca = lugar para códigos que são usados em vários lugares
- É como uma "gaveta de ferramentas" que qualquer parte do site pode usar
- Convenção padrão do Next.js para configurações

Crie o arquivo `lib/web3.ts`:

```typescript
// lib/web3.ts

// 📦 IMPORTS: Importando as ferramentas que vamos usar
import { createConfig, http } from 'wagmi'      // ← Criador de configuração + HTTP
import { sepolia } from 'wagmi/chains'          // ← Rede Sepolia (blockchain de teste)
import { metaMask, walletConnect } from 'wagmi/connectors' // ← Conectores de carteira

/* 
🤔 O que são esses imports?
   - createConfig: função que cria a "receita" de como conectar na blockchain
   - http: tipo de conexão de internet para falar com a blockchain
   - sepolia: informações da rede de teste Ethereum
   - metaMask, walletConnect: "plugues" para diferentes carteiras
*/

// 🔑 ID do WalletConnect (como um "RG" do seu app)
const projectId = 'SEU_PROJECT_ID_WALLETCONNECT' // Obtenha em https://cloud.walletconnect.com

/*
🤔 Para que serve o projectId?
   - É como um "CPF" do seu app no WalletConnect
   - Permite que carteiras mobile reconheçam seu app
   - Cadastre grátis em https://cloud.walletconnect.com
*/

// ⚙️ CONFIGURAÇÃO PRINCIPAL: A "receita" de como conectar
export const config = createConfig({
  
  // 🌐 REDES: Quais blockchains podemos usar
  chains: [sepolia],
  /*
  🤔 Por que só Sepolia?
     - É uma rede de TESTE (não custa dinheiro real)
     - Perfeita para aprender e testar
     - Funciona igual à rede principal (mainnet)
  */
  
  // 🔌 CONECTORES: Quais carteiras podem conectar
  connectors: [
    metaMask(),                           // ← Conecta com MetaMask
    walletConnect({ projectId }),         // ← Conecta com 100+ carteiras mobile
  ],
  /*
  🤔 O que são conectores?
     - São "adaptadores" para diferentes carteiras
     - MetaMask: mais popular no desktop
     - WalletConnect: padrão para carteiras mobile
     - Cada um tem seu jeito de "conversar"
  */
  
  // 🌍 TRANSPORTS: Como se conectar na internet da blockchain
  transports: {
    [sepolia.id]: http('https://eth-sepolia.g.alchemy.com/v2/SUA_API_KEY_AQUI'),
  },
  /*
  🤔 O que é transport?
     - É a "estrada" pela qual os dados trafegam
     - Alchemy é como um "provedor de internet" para blockchain
     - Cada rede precisa de sua própria "estrada"
  */
})

// 📍 ENDEREÇO DO CONTRATO: Onde nosso smart contract mora na blockchain
export const CONTRACT_ADDRESS = '0xSEU_ENDERECO_DO_CONTRATO_AQUI'
/*
🤔 O que é o endereço do contrato?
   - É como o "endereço residencial" do smart contract
   - Exemplo: 0x742d35Cc6Ef6AB1350FF789973824811877C40A0
   - Cada contrato tem um endereço único na blockchain
   - Você obtém esse endereço quando faz o deploy
*/

// 📋 ABI DO CONTRATO: "Manual de instruções" do smart contract
export const CONTRACT_ABI = [
  /*
  🤔 O que é ABI?
     - ABI = Application Binary Interface
     - É como um "manual de instruções" do contrato
     - Lista todas as funções disponíveis
     - Especifica que parâmetros cada função espera
     - É como a "API documentation" do contrato
  */
  
  // 📝 FUNÇÃO: createTask (criar nova tarefa com stake)
  {
    "inputs": [  // ← O que a função precisa receber
      { "internalType": "string", "name": "_title", "type": "string" },        // ← Título (texto)
      { "internalType": "string", "name": "_description", "type": "string" },  // ← Descrição (texto)
      { "internalType": "uint256", "name": "_deadline", "type": "uint256" }    // ← Prazo (timestamp)
    ],
    "name": "createTask",           // ← Nome da função
    "outputs": [],                  // ← O que a função retorna (nada neste caso)
    "stateMutability": "payable",   // ← IMPORTANTE: Pode receber ETH (stake obrigatório!)
    "type": "function"              // ← É uma função
  },
  
  // ✅ FUNÇÃO: completeTask (marcar tarefa como concluída)
  {
    "inputs": [
      { "internalType": "uint256", "name": "_id", "type": "uint256" }  // ← ID da tarefa (número)
    ],
    "name": "completeTask",
    "outputs": [],
    "stateMutability": "nonpayable",  // ← NÃO pode receber ETH
    "type": "function"
  },
  
  // 👀 FUNÇÃO: getTask (buscar uma tarefa específica)
  {
    "inputs": [
      { "internalType": "uint256", "name": "_id", "type": "uint256" }  // ← ID da tarefa
    ],
    "name": "getTask",
    "outputs": [  // ← O que a função retorna (uma tarefa completa)
      {
        "components": [  // ← Estrutura da tarefa
          { "internalType": "uint256", "name": "id", "type": "uint256" },           // ← ID
          { "internalType": "string", "name": "title", "type": "string" },          // ← Título
          { "internalType": "string", "name": "description", "type": "string" },    // ← Descrição
          { "internalType": "uint256", "name": "createdAt", "type": "uint256" },    // ← Data criação
          { "internalType": "uint256", "name": "completedAt", "type": "uint256" },  // ← Data conclusão
          { "internalType": "bool", "name": "status", "type": "bool" },             // ← Status (concluída?)
          { "internalType": "address", "name": "creator", "type": "address" },      // ← Criador
          { "internalType": "uint256", "name": "deadline", "type": "uint256" }      // ← Prazo limite
        ],
        "internalType": "struct TaskManager.Task",
        "name": "",
        "type": "tuple"  // ← Tupla = conjunto de dados
      }
    ],
    "stateMutability": "view",  // ← Só lê, não modifica nada
    "type": "function"
  },
  
  // 🔢 FUNÇÃO: getTaskCount (quantas tarefas existem)
  {
    "inputs": [],  // ← Não precisa de parâmetros
    "name": "getTaskCount",
    "outputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }  // ← Retorna um número
    ],
    "stateMutability": "view",
    "type": "function"
  },
  
  // 📡 EVENTOS: Para monitorar atividades do contrato
  {
    "anonymous": false,
    "inputs": [
      { "indexed": false, "internalType": "uint256", "name": "id", "type": "uint256" },
      { "indexed": false, "internalType": "string", "name": "title", "type": "string" },
      { "indexed": false, "internalType": "string", "name": "description", "type": "string" },
      { "indexed": false, "internalType": "uint256", "name": "createdAt", "type": "uint256" },
      { "indexed": false, "internalType": "address", "name": "creator", "type": "address" }
    ],
    "name": "TaskCreated",
    "type": "event"
  },
  
  {
    "anonymous": false,
    "inputs": [
      { "indexed": false, "internalType": "uint256", "name": "id", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "completedAt", "type": "uint256" }
    ],
    "name": "TaskCompleted",
    "type": "event"
  }
] as const

/*
🤔 Por que 'as const' no final?
   - Diz ao TypeScript que este array nunca vai mudar
   - Permite que o TypeScript "entenda" melhor o ABI
   - Gera tipos automáticos para as funções
   - Melhora a autocomplete no VS Code
*/
```

**🤔 O que é cada parte?**
- **`chains`**: Redes que vamos usar (Sepolia)
- **`connectors`**: Carteiras que podem conectar (MetaMask, WalletConnect)
- **`transports`**: Como conectar na blockchain (via Alchemy/Infura)
- **`CONTRACT_ADDRESS`**: Endereço do seu contrato deployado
- **`CONTRACT_ABI`**: "Manual de instruções" do contrato (quais funções existem)

**🚀 Vantagens da configuração com Viem:**
- **Type-safe**: Todos os tipos são automáticos
- **Tree-shaking**: Só importa o que usa
- **Performance**: Conexões otimizadas
- **Modern**: API limpa e intuitiva

#### 2.2 Criar Provider Web3 Isolado

**🎯 O que vamos fazer agora:**
Vamos criar um "envolvedor mágico" (Provider) que vai dar poderes Web3 para toda nossa aplicação. É como instalar WiFi na casa - uma vez instalado, todos os cômodos têm internet.

**📁 CRIAR PASTA E ARQUIVO:**
```
fb02/
├── lib/
│   └── web3.ts           ← ✅ Já criamos
└── providers/            ← 📁 CRIAR esta pasta
    └── Web3Provider.tsx  ← 📄 CRIAR este arquivo
```

**🤔 Por que criar na pasta `providers`?**
- `providers` = provedores = componentes que "proveem" funcionalidades
- São como "distribuidores de energia" para outros componentes
- Ficam no topo da hierarquia da aplicação
- Convenção padrão do React para esse tipo de componente

**Passo 1: Criar o componente provider**

Crie `providers/Web3Provider.tsx`:

```typescript
// providers/Web3Provider.tsx

// 🎯 DIRETIVA: Diz que este componente só roda no navegador (client)
'use client'

/*
🤔 Por que 'use client'?
   - Next.js por padrão roda componentes no servidor (SSR)
   - Web3 só funciona no navegador (precisa de MetaMask, window, etc.)
   - Esta linha diz: "só execute no client/navegador"
*/

// 📦 IMPORTS: Importando as ferramentas
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'  // ← Gerenciador de cache
import { WagmiProvider } from 'wagmi'                                     // ← Provider principal Web3
import { config } from '@/lib/web3'                                       // ← Nossa configuração
import { ReactNode, useState } from 'react'                               // ← Hooks do React

/*
🤔 O que cada import faz?
   - QueryClient: É como um "gerente de memória" que guarda dados da blockchain
   - WagmiProvider: É o "coração" que distribui poderes Web3 para toda a app
   - config: Nossa "receita" de configuração que criamos no arquivo anterior
   - ReactNode: Tipo do TypeScript para "qualquer coisa que pode ser renderizada"
   - useState: Hook para guardar estado no React
*/

// 🏷️ INTERFACE: Define o "contrato" de como usar este componente
interface Web3ProviderProps {
  children: ReactNode  // ← Qualquer componente filho que vai "dentro" deste provider
}

/*
🤔 Para que serve esta interface?
   - É como um "manual de instruções" do componente
   - Define que propriedades (props) o componente aceita
   - Ajuda o TypeScript a detectar erros
   - Melhora o autocomplete no VS Code
*/

// 🎬 COMPONENTE PRINCIPAL
export function Web3Provider({ children }: Web3ProviderProps) {
  
  // 🗄️ CONFIGURAR CACHE: O "gerente de memória" da aplicação
  const [queryClient] = useState(() => new QueryClient({
    /*
    🤔 Por que useState aqui?
       - QueryClient só deve ser criado UMA vez
       - useState com função garante que só cria na primeira renderização
       - É como ter uma "caixa de memória" que persiste
    */
    
    defaultOptions: {
      queries: {  // ← Configurações para BUSCAR dados (leitura)
        
        // 🔄 NÃO buscar dados quando usuário volta para a aba
        refetchOnWindowFocus: false,
        /*
        🤔 Por que false?
           - Blockchain não muda só porque você voltou para a aba
           - Evita requisições desnecessárias
           - Melhora performance
        */
        
        // 🔁 Tentar novamente até 3 vezes se der erro
        retry: 3,
        /*
        🤔 Por que retry?
           - Internet pode estar instável
           - RPC pode estar temporariamente fora
           - Blockchain pode estar congestionada
        */
        
        // ⏰ Dados são "frescos" por 5 minutos
        staleTime: 1000 * 60 * 5,  // 5 minutos em milissegundos
        /*
        🤔 O que é staleTime?
           - Tempo que considera os dados "frescos"
           - Dentro desse tempo, não busca novos dados
           - 5 min é bom para blockchain (blocos levam ~12s)
        */
        
        // 🗑️ Remove dados da memória após 10 minutos sem uso
        gcTime: 1000 * 60 * 10,  // 10 minutos
        /*
        🤔 O que é gcTime?
           - Garbage Collection Time = tempo para "jogar no lixo"
           - Libera memória de dados não usados
           - Evita que a aplicação consuma muita RAM
        */
      },
      
      mutations: {  // ← Configurações para MODIFICAR dados (escrita)
        // 🔁 Tentar novamente 1 vez se a transação falhar
        retry: 1,
        /*
        🤔 Por que só 1 retry para mutations?
           - Transações custam gas (dinheiro)
           - Melhor falhar rápido que gastar ETH à toa
           - Usuário pode tentar novamente manualmente
        */
      },
    },
  }))

  // 🎁 RENDERIZAR: Envolver os filhos com os "poderes mágicos"
  return (
    <WagmiProvider config={config}>
      {/* 
      🤔 O que faz WagmiProvider?
         - Distribui a configuração Web3 para toda a árvore de componentes
         - Permite que qualquer componente filho use hooks como useAccount()
         - É como "ligar a energia Web3" na casa inteira
      */}
      
      <QueryClientProvider client={queryClient}>
        {/* 
        🤔 O que faz QueryClientProvider?
           - Distribui o gerenciador de cache para toda a árvore
           - Permite que componentes usem react-query
           - É como "instalar o sistema de memória" na casa
        */}
        
        {children}
        {/* 
        🤔 O que são children?
           - Todos os componentes que estão "dentro" deste provider
           - Nossa página principal, componentes de tarefas, etc.
           - É como os "moradores da casa" que vão usar WiFi e energia
        */}
        
      </QueryClientProvider>
    </WagmiProvider>
  )
}

/*
🎯 RESUMO do que este componente faz:
   1. Configura um "gerente de memória" otimizado
   2. "Liga a energia Web3" para toda a aplicação  
   3. "Instala o sistema de cache" para performance
   4. Envolve todos os componentes filhos com esses poderes
   5. Permite que qualquer lugar da app use Web3

💡 ANALOGIA COMPLETA:
   - WagmiProvider = companhia elétrica (fornece energia Web3)
   - QueryClientProvider = sistema de encanamento (fornece cache/dados)
   - QueryClient = caixa d'água (armazena dados temporariamente)
   - children = todos os cômodos da casa (componentes da app)
*/
```

**Passo 2: Configurar o Layout principal**

**🎯 O que vamos fazer agora:**
Vamos modificar o "layout principal" da aplicação para usar nosso Provider Web3. O layout é como a "estrutura da casa" - define o que vai estar presente em todas as páginas.

**📁 MODIFICAR ARQUIVO EXISTENTE:**
```
fb02/
├── app/
│   └── layout.tsx        ← 📝 MODIFICAR este arquivo (já existe)
├── lib/
│   └── web3.ts           ← ✅ Já criamos
└── providers/
    └── Web3Provider.tsx  ← ✅ Já criamos
```

**🤔 O que é o `app/layout.tsx`?**
- É o "esqueleto" principal da aplicação Next.js
- Todo conteúdo da aplicação fica "dentro" dele
- É como a estrutura HTML básica (`<html>`, `<body>`, etc.)
- Roda em todas as páginas do site

Modifique `app/layout.tsx`:

```typescript
// app/layout.tsx

// 📦 IMPORTS: Importando tudo que precisamos
import { Web3Provider } from '@/providers/Web3Provider'    // ← Nosso provider Web3
import { Toaster } from '@/components/ui/toaster'         // ← Componente de notificações
import type { Metadata } from 'next'                      // ← Tipo para metadados SEO
import './globals.css'                                     // ← Estilos globais

/*
🤔 O que cada import faz?
   - Web3Provider: Nosso "distribuidor de energia Web3" que acabamos de criar
   - Toaster: Mostra notificações bonitas (sucesso, erro, etc.)
   - Metadata: Tipo do TypeScript para informações de SEO
   - globals.css: Arquivo com estilos que se aplicam ao site inteiro
*/

// 🏷️ METADADOS: Informações para SEO e redes sociais
export const metadata: Metadata = {
  title: 'TaskManager DApp',                                    // ← Nome na aba do navegador
  description: 'Gerencie suas tarefas na blockchain Ethereum (Sepolia)',  // ← Descrição no Google
  keywords: ['blockchain', 'ethereum', 'web3', 'dapp', 'task manager'],   // ← Palavras-chave SEO
  authors: [{ name: 'Seu Nome' }],                             // ← Autor do site
  viewport: 'width=device-width, initial-scale=1',             // ← Configuração mobile
}

/*
🤔 Para que servem os metadados?
   - title: Aparece na aba do navegador e nos resultados do Google
   - description: Aparece embaixo do título nos resultados de busca
   - keywords: Ajuda o Google a entender sobre o que é o site
   - authors: Identifica quem criou o site
   - viewport: Faz o site funcionar bem no celular
*/

// 🏠 LAYOUT PRINCIPAL: A "casa" onde tudo acontece
export default function RootLayout({
  children,  // ← Todas as páginas do site vão aparecer aqui
}: {
  children: React.ReactNode  // ← Tipo do TypeScript para "conteúdo React"
}) {
  /*
  🤔 O que são os children?
     - children = "filhos" = conteúdo que fica "dentro" do layout
     - Exemplo: página home, página sobre, etc.
     - É como os "móveis" que ficam dentro da "casa" (layout)
  */
  
  return (
    <html lang="pt-BR">
      {/* 
      🤔 Por que lang="pt-BR"?
         - Diz para o navegador que o site é em português brasileiro
         - Ajuda leitores de tela (acessibilidade)
         - Melhora SEO para buscas em português
      */}
      
      <body className="min-h-screen bg-background font-sans antialiased">
        {/* 
        🤔 O que fazem essas classes CSS?
           - min-h-screen: altura mínima = altura da tela inteira
           - bg-background: cor de fundo padrão do tema
           - font-sans: fonte sem serifa (Arial, Helvetica, etc.)
           - antialiased: deixa a fonte mais suave/bonita
        */}
        
        <Web3Provider>
          {/* 
          🤔 Por que envolver tudo com Web3Provider?
             - Agora QUALQUER componente dentro pode usar Web3
             - É como "ligar a energia Web3" na casa inteira
             - Permite usar hooks como useAccount(), useBalance(), etc.
          */}
          
          <main className="relative flex min-h-screen flex-col">
            {/* 
            🤔 O que fazem essas classes no main?
               - relative: posicionamento relativo (para elementos absolutos dentro)
               - flex: usa flexbox para layout
               - min-h-screen: altura mínima = tela inteira
               - flex-col: itens em coluna (um embaixo do outro)
            */}
            
            {children}
            {/* 
            🤔 Aqui é onde aparece o conteúdo das páginas!
               - Se estiver na página home, mostra o componente da home
               - Se estiver na página sobre, mostra o componente sobre
               - É o "espaço vazio" que vai ser preenchido
            */}
            
          </main>
          
          <Toaster />
          {/* 
          🤔 O que faz o Toaster?
             - Mostra notificações bonitas na tela
             - Exemplo: "Tarefa criada com sucesso!" (verde)
             - Exemplo: "Erro ao conectar carteira" (vermelho)
             - Fica sempre disponível em toda a aplicação
          */}
          
        </Web3Provider>
      </body>
    </html>
  )
}

/*
🎯 RESUMO do que este layout faz:
   1. Define a estrutura HTML básica (<html>, <body>)
   2. Configura metadados para SEO e redes sociais
   3. "Liga a energia Web3" em toda a aplicação
   4. Cria uma área principal flexível para o conteúdo
   5. Disponibiliza notificações em toda a aplicação

💡 ANALOGIA COMPLETA:
   - <html> = terreno onde a casa vai ser construída
   - <body> = fundação da casa
   - <Web3Provider> = sistema elétrico da casa
   - <main> = área principal/sala de estar
   - {children} = móveis que mudam conforme a ocasião
   - <Toaster> = sistema de interfone/notificações

🌟 RESULTADO:
   Agora sua aplicação tem "energia Web3" em todos os componentes!
   Qualquer lugar do site pode conectar carteira, ler blockchain, etc.
*/
```

**🚀 Vantagens desta abordagem:**
- ✅ **Separação de responsabilidades**: Layout cuida da estrutura, Provider cuida do Web3
- ✅ **SSR-friendly**: Provider só roda no cliente
- ✅ **Reutilizável**: Pode ser usado em outras partes da aplicação
- ✅ **Configurável**: Fácil de customizar queries e mutações
- ✅ **Performance**: Configurações otimizadas de cache
- ✅ **Type-safe**: TypeScript com props tipadas

#### 2.3 Providers Adicionais (Opcional)

Para projetos maiores, você pode criar providers específicos para diferentes funcionalidades:

**Theme Provider para dark/light mode:**

```typescript
// providers/ThemeProvider.tsx
'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
```

**Provider combinado:**

```typescript
// providers/AppProviders.tsx
'use client'

import { Web3Provider } from './Web3Provider'
import { ThemeProvider } from './ThemeProvider'
import { ReactNode } from 'react'

interface AppProvidersProps {
  children: ReactNode
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Web3Provider>
        {children}
      </Web3Provider>
    </ThemeProvider>
  )
}
```

**Layout final com providers combinados:**

```typescript
// app/layout.tsx
import { AppProviders } from '@/providers/AppProviders'
import { Toaster } from '@/components/ui/toaster'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TaskManager DApp',
  description: 'Gerencie suas tarefas na blockchain Ethereum (Sepolia)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <AppProviders>
          {children}
          <Toaster />
        </AppProviders>
      </body>
    </html>
  )
}
```

#### 2.4 Tratamento de Hidratação

**🎯 O que vamos fazer agora:**
Vamos resolver um problema técnico chamado "erro de hidratação". É quando o servidor (SSR) e o navegador (client) mostram coisas diferentes, causando bugs. Vamos criar componentes que "esperam" o navegador estar pronto.

**🤔 O que é hidratação?**
- **Server**: Next.js gera HTML no servidor (sem Web3)
- **Client**: Navegador "reidrata" com JavaScript (com Web3)
- **Problema**: Se forem diferentes, dá erro
- **Solução**: Aguardar o navegador estar pronto

**📁 CRIAR ARQUIVOS:**
```
fb02/
├── hooks/
│   ├── useTaskManager.ts  ← ✅ Já criamos
│   └── useIsMounted.ts    ← 📄 CRIAR este arquivo
└── components/
    └── ClientOnly.tsx     ← 📄 CRIAR este arquivo
```

**Passo 1: Criar hook para detectar se está no navegador**

Crie `hooks/useIsMounted.ts`:

```typescript
// hooks/useIsMounted.ts

// 🎯 DIRETIVA: Só roda no navegador
'use client'

/*
🤔 Por que 'use client'?
   - Este hook precisa de useEffect
   - useEffect só funciona no navegador
   - No servidor, sempre retorna false
*/

// 📦 IMPORTS
import { useEffect, useState } from 'react'

// 🕵️ HOOK: Detecta se estamos no navegador (client)
export function useIsMounted() {
  // 🔄 ESTADO: Começa como false (ainda não montou)
  const [isMounted, setIsMounted] = useState(false)
  
  /*
  🤔 Por que começar com false?
     - No servidor, nunca vai "montar" no navegador
     - Garante que servidor e cliente comecem iguais
     - Só muda para true quando chegar no navegador
  */

  // 🎬 EFEITO: Roda quando o componente "monta" no navegador
  useEffect(() => {
    setIsMounted(true)  // ← Agora sabemos que estamos no navegador!
  }, [])  // ← Array vazio = só roda uma vez, quando montar
  
  /*
  🤔 O que acontece aqui?
     1. Componente renderiza no servidor: isMounted = false
     2. HTML é enviado para o navegador: isMounted = false  
     3. React "hidrata" no navegador: useEffect roda
     4. setIsMounted(true) é executado
     5. Componente re-renderiza: isMounted = true
     6. Agora sabemos que estamos no navegador!
  */

  return isMounted  // ← Retorna true/false
}

/*
🎯 COMO USAR:

```typescript
function MeuComponente() {
  const isMounted = useIsMounted()
  
  if (!isMounted) {
    return <div>Carregando...</div>  // ← Mostra no servidor e primeira renderização
  }
  
  return <div>Agora estou no navegador!</div>  // ← Só mostra depois da hidratação
}
```

💡 ANALOGIA:
   - É como esperar a casa estar "pronta" antes de ligar os aparelhos
   - Servidor = construção da casa (estrutura básica)
   - Hidratação = ligação da energia elétrica
   - isMounted = sensor que detecta quando a energia chegou
*/
```

**Passo 2: Criar componente para renderização condicional**

Crie `components/ClientOnly.tsx`:

```typescript
// components/ClientOnly.tsx

// 🎯 DIRETIVA: Só roda no navegador  
'use client'

// 📦 IMPORTS
import { useIsMounted } from '@/hooks/useIsMounted'  // ← Nosso hook que acabamos de criar
import { ReactNode } from 'react'                   // ← Tipo para conteúdo React

/*
🤔 Para que serve este componente?
   - Envolve outros componentes que só devem aparecer no navegador
   - Evita erros de hidratação
   - Mostra um "loading" enquanto carrega
   - É como um "portão" que só abre quando tudo está pronto
*/

// 🏷️ INTERFACE: Define como usar este componente
interface ClientOnlyProps {
  children: ReactNode      // ← Conteúdo que só deve aparecer no cliente
  fallback?: ReactNode     // ← O que mostrar enquanto carrega (opcional)
}

/*
🤔 O que são essas props?
   - children: O que você quer mostrar só no navegador
   - fallback: O que mostrar enquanto espera (loading, skeleton, etc.)
   - O ? significa que fallback é opcional (pode não ter)
*/

// 🎬 COMPONENTE PRINCIPAL
export function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  // 🕵️ VERIFICAR: Estamos no navegador?
  const isMounted = useIsMounted()
  
  /*
  🤔 O que é isMounted?
     - true: estamos no navegador, pode mostrar Web3
     - false: ainda no servidor ou primeira renderização
  */

  // ⏳ SE NÃO MONTOU: Mostra fallback (loading)
  if (!isMounted) {
    return <>{fallback}</>
    /*
    🤔 O que acontece aqui?
       - <></> = React Fragment (não cria div extra)
       - fallback pode ser null, <div>Loading...</div>, etc.
       - Garante que servidor e primeira renderização sejam iguais
    */
  }

  // ✅ SE MONTOU: Mostra o conteúdo real
  return <>{children}</>
  /*
  🤔 O que acontece aqui?
     - Agora estamos no navegador
     - children pode usar Web3, MetaMask, etc.
     - Não vai dar erro de hidratação
  */
}

/*
🎯 COMO USAR:

```typescript
// ❌ PROBLEMA: Pode dar erro de hidratação
function ProblemaComponent() {
  const { address } = useAccount()  // ← Web3 só funciona no cliente
  return <div>{address}</div>       // ← Servidor: undefined, Cliente: 0x123...
}

// ✅ SOLUÇÃO: Envolver com ClientOnly
function SolucaoComponent() {
  return (
    <ClientOnly fallback={<div>Conectando...</div>}>
      <WalletInfo />
    </ClientOnly>
  )
}

function WalletInfo() {
  const { address } = useAccount()  // ← Agora é seguro usar Web3
  return <div>Conectado: {address}</div>
}
```

💡 ANALOGIA COMPLETA:
   - ClientOnly = portão eletrônico que só abre com energia
   - isMounted = sensor de energia
   - fallback = placa "aguarde, portão carregando"
   - children = o que fica do outro lado do portão
   - useAccount() = equipamento que precisa de energia para funcionar
*/
```

**Passo 3: Exemplo prático de uso**

Aqui está como usar na prática:

```typescript
// 📄 Exemplo: components/WalletConnection.tsx
'use client'

import { ClientOnly } from '@/components/ClientOnly'
import { useAccount } from 'wagmi'

// 🎬 COMPONENTE PRINCIPAL: Status da carteira
export function WalletStatus() {
  return (
    <ClientOnly fallback={<WalletStatusSkeleton />}>
      <WalletStatusInner />
    </ClientOnly>
  )
}

/*
🤔 Por que dividir em dois componentes?
   - WalletStatus: componente "wrapper" que cuida da hidratação
   - WalletStatusInner: componente que usa Web3 (só roda no cliente)
   - WalletStatusSkeleton: loading bonito enquanto carrega
*/

// 💀 SKELETON: Mostra enquanto carrega
function WalletStatusSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
      <div className="h-3 bg-gray-200 rounded w-32"></div>
    </div>
  )
}

/*
🤔 O que é um skeleton?
   - "Esqueleto" da interface que vai aparecer
   - Mostra retângulos cinzas no lugar do conteúdo
   - Dá sensação de que está carregando
   - Melhor UX que uma tela em branco
*/

// 📱 COMPONENTE INTERNO: Usa Web3 com segurança
function WalletStatusInner() {
  const { address, isConnected } = useAccount()
  
  /*
  🤔 Agora é seguro usar useAccount porque:
     - Só executa depois que isMounted = true
     - Significa que estamos no navegador
     - Web3 já está disponível
     - Não vai dar erro de hidratação
  */
  
  if (!isConnected) {
    return (
      <div className="text-gray-500">
        🔌 Carteira não conectada
      </div>
    )
  }
  
  return (
    <div className="text-green-600">
      ✅ Conectado: {address?.slice(0, 6)}...{address?.slice(-4)}
    </div>
  )
}

/*
🎯 FLUXO COMPLETO:

1. 🖥️  SERVIDOR: Renderiza WalletStatus
   - ClientOnly detecta que não está montado
   - Mostra WalletStatusSkeleton
   - HTML enviado: <div class="animate-pulse">...</div>

2. 🌐 NAVEGADOR: Recebe HTML
   - Mostra skeleton (igual ao servidor)
   - React começa hidratação
   - useIsMounted ainda é false

3. ⚡ HIDRATAÇÃO: useEffect executa
   - setIsMounted(true) é chamado
   - ClientOnly re-renderiza
   - Agora mostra WalletStatusInner

4. 🔌 WEB3: useAccount funciona
   - Web3 já está disponível
   - Mostra status real da carteira
   - Sem erros de hidratação!

💡 RESULTADO:
   - ✅ Sem erros de hidratação
   - ✅ Loading bonito
   - ✅ Web3 funciona perfeitamente
   - ✅ SEO-friendly (servidor renderiza algo)
*/
```

#### 2.5 Configuração de Variáveis de Ambiente

**🎯 O que vamos fazer agora:**
Vamos criar um arquivo secreto (`.env.local`) que guarda informações importantes como endereços de contratos, chaves de API, etc. É como ter um "cofre digital" onde guardamos senhas e configurações.

**🤔 O que são variáveis de ambiente?**
- **Definição**: Configurações que ficam fora do código
- **Objetivo**: Proteger informações sensíveis (chaves, senhas)
- **Vantagem**: Pode mudar sem alterar o código
- **Analogia**: Como ter um "arquivo de configurações" do Windows

**📁 CRIAR ARQUIVO:**
```
fb02/
├── .env.local          ← 📄 CRIAR este arquivo (na raiz do projeto)
├── .gitignore          ← 📝 VERIFICAR se .env.local está listado
├── hooks/
│   ├── useTaskManager.ts
│   └── useIsMounted.ts
└── components/
    └── ClientOnly.tsx
```

**🔒 Passo 1: Criar arquivo de variáveis**

Crie `.env.local` **na raiz do projeto** (fb02/.env.local):

```env
# 🌐 VARIÁVEIS PÚBLICAS (acessíveis no cliente e servidor)
# ⚠️  ATENÇÃO: Qualquer pessoa pode ver essas variáveis no navegador!

# 🔗 URL para conectar na blockchain Sepolia
NEXT_PUBLIC_SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/SUA_API_KEY_AQUI

# 📍 Endereço do seu smart contract na blockchain
NEXT_PUBLIC_CONTRACT_ADDRESS=0xSEU_ENDERECO_DO_CONTRATO_AQUI

# 🆔 ID do projeto WalletConnect (para carteiras mobile)
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=seu_project_id_aqui

# 🔐 VARIÁVEIS PRIVADAS (apenas no servidor - NUNCA vão para o navegador)
# ✅ SEGURO: Essas NÃO aparecem no código do navegador

# 🔑 Chave privada para scripts de deploy (MUITO SECRETO!)
PRIVATE_KEY=sua_chave_privada_sem_0x

# 🔍 Chave da API do Etherscan (para verificar contratos)
ETHERSCAN_API_KEY=sua_chave_etherscan_aqui
```

**🤔 Explicação detalhada de cada variável:**

### 🌐 **Variáveis Públicas (NEXT_PUBLIC_)**

#### `NEXT_PUBLIC_SEPOLIA_RPC_URL`
```
🎯 O que é: URL para "falar" com a blockchain Sepolia
📝 Exemplo: https://eth-sepolia.g.alchemy.com/v2/abc123
🔧 Como obter:
   1. Vá em https://alchemy.com
   2. Crie conta grátis
   3. Crie um app para "Ethereum Sepolia"
   4. Copie a HTTP URL

💡 Analogia: É como o "endereço IP" da blockchain Sepolia
```

#### `NEXT_PUBLIC_CONTRACT_ADDRESS`
```
🎯 O que é: Endereço onde seu smart contract "mora" na blockchain
📝 Exemplo: 0x742d35Cc6Ef6AB1350FF789973824811877C40A0
🔧 Como obter: Quando você faz deploy do contrato (seção anterior)

💡 Analogia: É como o "endereço residencial" do seu contrato
```

#### `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID`
```
🎯 O que é: ID que identifica seu app para carteiras mobile
📝 Exemplo: a1b2c3d4e5f6g7h8i9j0
🔧 Como obter:
   1. Vá em https://cloud.walletconnect.com
   2. Crie conta grátis
   3. Crie um novo projeto
   4. Copie o Project ID

💡 Analogia: É como o "CNPJ" do seu app para carteiras
```

### 🔐 **Variáveis Privadas (sem NEXT_PUBLIC_)**

#### `PRIVATE_KEY`
```
🎯 O que é: Chave privada da sua carteira (MUITO SECRETO!)
📝 Exemplo: abc123def456... (sem o prefixo 0x)
🔧 Como obter: Exportar do MetaMask (só para carteira de TESTE!)
⚠️  CUIDADO: NUNCA use chave privada da carteira principal!

💡 Analogia: É como a "chave do cofre" da sua carteira
```

#### `ETHERSCAN_API_KEY`
```
🎯 O que é: Chave para usar a API do Etherscan
📝 Exemplo: XYZ789ABC123
🔧 Como obter:
   1. Vá em https://etherscan.io
   2. Crie conta grátis
   3. Vá em API Keys
   4. Gere uma nova chave

💡 Analogia: É como uma "credencial" para acessar dados públicos
```

**🔒 Passo 2: Verificar .gitignore**

Antes de continuar, **MUITO IMPORTANTE** verificar se o arquivo `.env.local` NÃO vai ser enviado para o GitHub:

```bash
# Verificar se .env.local está no .gitignore
cat .gitignore | grep .env
```

Se não aparecer nada, adicione:

```bash
# Adicionar .env.local ao .gitignore
echo ".env.local" >> .gitignore
```

**🤔 Por que isso é crucial?**
- `.env.local` contém chaves privadas e secrets
- Se for para o GitHub, qualquer pessoa pode ver
- Pode roubar sua carteira ou acessar suas APIs
- **NUNCA** commite arquivos .env para repositórios públicos

**🔧 Passo 3: Atualizar configuração Web3**

Agora vamos modificar `lib/web3.ts` para usar as variáveis de ambiente:

```typescript
// lib/web3.ts

// 📦 IMPORTS (mesmo de antes)
import { createConfig, http } from 'wagmi'
import { sepolia } from 'wagmi/chains'
import { metaMask, walletConnect } from 'wagmi/connectors'

// 🔍 VALIDAR VARIÁVEIS: Verificar se todas estão presentes
const requiredEnvVars = {
  rpcUrl: process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL,
  contractAddress: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
  walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
}

/*
🤔 O que é process.env?
   - process.env = objeto que contém todas as variáveis de ambiente
   - Next.js automaticamente carrega o .env.local
   - NEXT_PUBLIC_ = disponível no cliente (navegador)
   - Sem NEXT_PUBLIC_ = só disponível no servidor
*/

// 🚨 VERIFICAÇÃO DE SEGURANÇA: Garantir que tudo está configurado
for (const [key, value] of Object.entries(requiredEnvVars)) {
  if (!value) {
    throw new Error(`❌ Variável de ambiente obrigatória não encontrada: ${key}`)
  }
}

/*
🤔 Por que essa verificação?
   - Se faltar alguma variável, o app quebra na hora
   - Dá erro claro sobre o que está faltando
   - Evita bugs misteriosos mais tarde
   - É como "teste de segurança" antes de usar
*/

// ⚙️ CONFIGURAÇÃO (agora usando variáveis de ambiente)
export const config = createConfig({
  chains: [sepolia],
  connectors: [
    metaMask(),
    walletConnect({
      projectId: requiredEnvVars.walletConnectProjectId!,  // ← Agora vem do .env
      metadata: {
        name: 'TaskManager DApp',
        description: 'Gerencie suas tarefas na blockchain Ethereum',
        url: typeof window !== 'undefined' ? window.location.origin : '',
        icons: ['https://avatars.githubusercontent.com/u/37784886'],
      },
    }),
  ],
  transports: {
    [sepolia.id]: http(requiredEnvVars.rpcUrl),  // ← Agora vem do .env
  },
  // 🔧 Configurações para SSR
  ssr: true,
})

/*
🤔 O que mudou aqui?
   - projectId: agora vem de requiredEnvVars.walletConnectProjectId
   - rpcUrl: agora vem de requiredEnvVars.rpcUrl
   - ! = diz ao TypeScript "confie em mim, não é undefined"
   - ssr: true = otimização para Server-Side Rendering
*/

// 📍 ENDEREÇO DO CONTRATO (agora vem do .env)
export const CONTRACT_ADDRESS = requiredEnvVars.contractAddress as `0x${string}`

/*
🤔 O que é esse 'as `0x${string}`'?
   - É uma "conversão de tipo" do TypeScript
   - Garante que o endereço tem formato correto (0x...)
   - Melhora autocomplete e detecção de erros
   - É como dizer "isso é um endereço Ethereum válido"
*/

// 📋 ABI DO CONTRATO (igual de antes, mas com comentários)
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
    "stateMutability": "payable",
    "type": "function"
  },
  // ✅ Função: completeTask (marcar como concluída)
  {
    "inputs": [
      { "internalType": "uint256", "name": "_id", "type": "uint256" }
    ],
    "name": "completeTask",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  // 👀 Função: getTask (buscar tarefa específica)
  {
    "inputs": [
      { "internalType": "uint256", "name": "_id", "type": "uint256" }
    ],
    "name": "getTask",
    "outputs": [
      {
        "components": [
          { "internalType": "uint256", "name": "id", "type": "uint256" },
          { "internalType": "string", "name": "title", "type": "string" },
          { "internalType": "string", "name": "description", "type": "string" },
          { "internalType": "uint256", "name": "createdAt", "type": "uint256" },
          { "internalType": "uint256", "name": "completedAt", "type": "uint256" },
          { "internalType": "bool", "name": "status", "type": "bool" },
          { "internalType": "address", "name": "creator", "type": "address" },
          { "internalType": "uint256", "name": "deadline", "type": "uint256" }
        ],
        "internalType": "struct TaskManager.Task",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  // 🔢 Função: getTaskCount (contar tarefas)
  {
    "inputs": [],
    "name": "getTaskCount",
    "outputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  }
] as const

/*
🎯 BENEFÍCIOS desta configuração:

✅ SEGURANÇA:
   - Chaves sensíveis fora do código
   - .env.local não vai para o GitHub
   - Validação automática de configurações

✅ FLEXIBILIDADE:
   - Pode mudar endereço do contrato sem tocar no código
   - Fácil trocar entre redes (Sepolia, Mainnet, etc.)
   - Configurações diferentes por ambiente

✅ COLABORAÇÃO:
   - Cada desenvolvedor tem seu próprio .env.local
   - Pode usar contratos e chaves diferentes
   - Não interfere no trabalho de outros

✅ DEPLOY:
   - No Vercel/Netlify, configura variáveis no painel
   - Não precisa alterar código para produção
   - Segurança máxima em produção

💡 ANALOGIA COMPLETA:
   - .env.local = cofre pessoal com suas chaves
   - lib/web3.ts = sistema que acessa o cofre
   - process.env = chave mestra do cofre
   - Validação = alarme se algo estiver faltando
*/
```

**📊 Tabela de Segurança das Variáveis**

| Tipo | Visibilidade | Exemplo | Quando usar | ⚠️ Cuidados |
|------|-------------|---------|-------------|-------------|
| **`NEXT_PUBLIC_`** | 🌐 Público (todos veem) | `NEXT_PUBLIC_CONTRACT_ADDRESS` | Endereços de contratos, URLs de API, IDs de projetos | Qualquer pessoa pode ver no navegador |
| **Privada** | 🔒 Privado (só servidor) | `PRIVATE_KEY`, `DATABASE_URL` | Chaves privadas, senhas de banco, secrets | NUNCA vão para o navegador |

### 🚨 **REGRAS DE OURO:**

```typescript
// ✅ CORRETO: Informações públicas
NEXT_PUBLIC_CONTRACT_ADDRESS=0x123...  // ← Todo mundo pode ver mesmo
NEXT_PUBLIC_API_URL=https://api.com    // ← URL pública, sem problema

// ❌ ERRADO: Informações sensíveis com NEXT_PUBLIC_
NEXT_PUBLIC_PRIVATE_KEY=abc123...      // ← NUNCA! Vaza sua carteira!
NEXT_PUBLIC_DATABASE_PASSWORD=secret   // ← NUNCA! Vaza seu banco!

// ✅ CORRETO: Informações sensíveis sem prefixo
PRIVATE_KEY=abc123...                  // ← Só no servidor
DATABASE_PASSWORD=secret               // ← Só no servidor
```

### 🧪 **Como testar se está funcionando:**

```typescript
// Adicione temporariamente no seu componente para testar:
console.log('🌐 Público (deve aparecer):', process.env.NEXT_PUBLIC_CONTRACT_ADDRESS)
console.log('🔒 Privado (deve ser undefined):', process.env.PRIVATE_KEY)

// Se a primeira linha mostrar o endereço = ✅ funcionando
// Se a segunda linha mostrar undefined = ✅ seguro
```

### 📝 **Arquivo .env.local completo de exemplo:**

```env
# ===================================
# 🌐 VARIÁVEIS PÚBLICAS (visíveis no navegador)
# ===================================

# Alchemy RPC URL - Sepolia Testnet
NEXT_PUBLIC_SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/abc123defg456

# Endereço do smart contract TaskManager
NEXT_PUBLIC_CONTRACT_ADDRESS=0x742d35Cc6Ef6AB1350FF789973824811877C40A0

# WalletConnect Project ID
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6

# ===================================
# 🔒 VARIÁVEIS PRIVADAS (só no servidor)
# ===================================

# Chave privada para deploy de contratos (SEM 0x no início)
PRIVATE_KEY=1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef

# API Key do Etherscan para verificação de contratos
ETHERSCAN_API_KEY=XYZ789ABC123DEF456GHI789JKL012MNO345

# ===================================
# 💡 DICAS DE SEGURANÇA
# ===================================
# 1. NUNCA commite este arquivo para o Git
# 2. Use carteira separada para desenvolvimento (não a principal)
# 3. Rotacione chaves regularmente
# 4. No deploy (Vercel/Netlify), configure as variáveis no painel admin
```

### 🎯 **Resultado Final:**

Agora seu projeto tem:
- ✅ **Configuração segura** com variáveis de ambiente
- ✅ **Validação automática** de configurações obrigatórias  
- ✅ **Flexibilidade** para diferentes ambientes
- ✅ **Segurança máxima** para informações sensíveis
- ✅ **Fácil colaboração** entre desenvolvedores

**🎉 Próximo passo:** Agora que a configuração Web3 está completa, vamos criar os componentes da interface!

---

### 🔌 **Passo 3: Criar Hook Personalizado para o Contrato**

**🎯 O que vamos fazer neste passo:**
Vamos criar um "hook personalizado" - uma função especial que vai ser nossa "interface" para conversar com o smart contract. É como criar um "controle remoto" para o nosso contrato na blockchain.

**🤔 O que é um hook no React?**
- Hook = função especial que começa com "use" (useTaskManager, useState, etc.)
- Permite reutilizar lógica entre componentes
- É como criar uma "ferramenta" que qualquer componente pode usar
- Exemplo: `const { conta, saldo } = useBanco()` - pega info do banco

#### 3.1 Criar hook para interagir com o contrato

**📁 CRIAR PASTA E ARQUIVO:**
```
fb02/
├── app/
│   └── layout.tsx        ← ✅ Já modificamos
├── hooks/                ← 📁 CRIAR esta pasta  
│   └── useTaskManager.ts ← 📄 CRIAR este arquivo
├── lib/
│   └── web3.ts           ← ✅ Já criamos
└── providers/
    └── Web3Provider.tsx  ← ✅ Já criamos
```

**🤔 Por que criar na pasta `hooks`?**
- `hooks` = ganchos = funções reutilizáveis para "pescar" dados
- Convenção do React para organizar hooks personalizados
- É como uma "caixa de ferramentas" de funções úteis
- Qualquer componente pode importar e usar

Crie o arquivo `hooks/useTaskManager.ts`:

```typescript
// hooks/useTaskManager.ts

// 📦 IMPORTS: Importando ferramentas do wagmi e nossa configuração
import { useWriteContract, useReadContract, useAccount } from 'wagmi'  // ← Hooks do wagmi
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '@/lib/web3'            // ← Nossa configuração
import { parseEther, formatEther } from 'viem'                         // ← Utilitários do viem

/*
🤔 O que cada import faz?
   - useWriteContract: Hook para ESCREVER na blockchain (criar/completar tarefa)
   - useReadContract: Hook para LER da blockchain (buscar tarefas)
   - useAccount: Hook para pegar info da carteira conectada
   - CONTRACT_ADDRESS: Endereço do nosso smart contract
   - CONTRACT_ABI: "Manual de instruções" do contrato
   - parseEther/formatEther: Conversores de ETH (não vamos usar aqui, mas é útil)
*/

// 🏷️ INTERFACE: Define como é uma tarefa no TypeScript
export interface Task {
  id: bigint         // ← ID da tarefa (BigInt porque vem da blockchain)
  title: string      // ← Título da tarefa
  description: string// ← Descrição da tarefa
  createdAt: bigint  // ← Timestamp de criação
  completedAt: bigint// ← Timestamp de conclusão
  status: boolean    // ← true = concluída, false = pendente
  creator: string    // ← Endereço de quem criou
  deadline: bigint   // ← Timestamp do prazo limite
}

/*
🤔 Por que BigInt e não number?
   - Blockchain usa números MUITO grandes (256 bits)
   - JavaScript number só vai até 53 bits
   - BigInt pode representar números infinitamente grandes
   - Exemplo: 1735689600n (o 'n' indica BigInt)
*/

// 🎣 HOOK PRINCIPAL: Nossa "caixa de ferramentas" para o TaskManager
export function useTaskManager() {
  
  // 👤 PEGAR INFO DA CARTEIRA CONECTADA
  const { address } = useAccount()
  /*
  🤔 O que é address?
     - Endereço da carteira conectada (0x123...)
     - undefined se não tem carteira conectada
     - É como o "CPF" da carteira na blockchain
  */
  
  // ✍️ HOOK PARA ESCREVER NA BLOCKCHAIN
  const { writeContract, isPending: isCreating } = useWriteContract()
  /*
  🤔 O que esses valores fazem?
     - writeContract: função para enviar transações
     - isPending: true enquanto transação está sendo processada
     - isCreating: renomeamos para ficar mais claro
  */

  // 📝 FUNÇÃO: Criar nova tarefa com stake obrigatório (integração com /smartcontract)
  const createTask = async (title: string, description: string, deadline: number, stakeAmount: string) => {
    // 🔒 VALIDAÇÃO: Verifica se tem carteira conectada
    if (!address) throw new Error('Carteira não conectada')
    /*
    🤔 Por que essa validação?
       - Só quem tem carteira pode criar tarefas
       - Evita erro confuso mais tarde
       - Dá mensagem clara para o usuário
    */
    
    // 💰 CONVERTER: ETH para Wei (unidade da blockchain)
    const stakeInWei = parseEther(stakeAmount)
    /*
    🤔 O que é Wei?
       - Menor unidade do Ethereum (como centavos para reais)
       - 1 ETH = 1,000,000,000,000,000,000 Wei
       - parseEther converte "0.0000001" → 100000000000n
    */
    
    // ✅ VALIDAÇÃO: Stake mínimo conforme contrato em /smartcontract
    const minimumStake = parseEther("0.0000001") // Mínimo exigido pelo TaskManager.sol
    if (stakeInWei < minimumStake) {
      throw new Error('Valor do stake deve ser maior que 0.0000001 ether')
    }
    /*
    🤔 Por que essa validação?
       - O smart contract em /smartcontract/src/TaskManager.sol exige stake >= 0.0000001 ETH
       - Validar no frontend evita transação desnecessária
       - Economiza gas fees do usuário
    */
    
    // ✅ VALIDAÇÃO: Deadline no futuro conforme contrato
    const currentTimestamp = Math.floor(Date.now() / 1000)
    if (deadline <= currentTimestamp) {
      throw new Error('Prazo de conclusao deve ser maior que a data atual')
    }
    /*
    🤔 Por que essa validação?
       - O smart contract verifica se _deadline > block.timestamp
       - Validar no frontend dá feedback imediato
       - Corresponde exatamente à validação do contrato
    */
    
    // 🚀 ENVIAR TRANSAÇÃO para a blockchain
    return writeContract({
      address: CONTRACT_ADDRESS,                    // ← Endereço do contrato deployado de /smartcontract
      abi: CONTRACT_ABI,                           // ← ABI correspondente ao TaskManager.sol
      functionName: 'createTask',                  // ← function createTask(string,string,uint256) payable
      args: [title, description, BigInt(deadline)], // ← _title, _description, _deadline
      value: stakeInWei,                           // ← msg.value (stake obrigatório!)
    })
    /*
    🤔 O que acontece aqui?
       1. Chama createTask(string,string,uint256) do /smartcontract/src/TaskManager.sol
       2. Passa título, descrição e deadline (timestamp) como parâmetros
       3. ENVIA ETH junto como msg.value (stake obrigatório)
       4. Smart contract executa as validações:
          - require(msg.value >= 0.0000001 ether, "Valor do stake deve ser maior que 0.0000001 ether")
          - require(_deadline > block.timestamp, "Prazo de conclusao deve ser maior que a data atual")
       5. Se válido, cria Task e emite evento TaskCreated
       6. MetaMask aparece pedindo confirmação da transação
       7. Retorna Promise que resolve quando transação for confirmada
    */
  }

  // ✅ FUNÇÃO: Marcar tarefa como concluída (integração com /smartcontract)
  const completeTask = async (taskId: number) => {
    if (!address) throw new Error('Carteira não conectada')
    
    return writeContract({
      address: CONTRACT_ADDRESS,                    // ← Endereço do contrato deployado de /smartcontract
      abi: CONTRACT_ABI,                           // ← ABI correspondente ao TaskManager.sol
      functionName: 'completeTask',                // ← function completeTask(uint256) public
      args: [BigInt(taskId)],                      // ← _id da tarefa
    })
    /*
    🤔 O que acontece aqui?
       1. Chama completeTask(uint256) do /smartcontract/src/TaskManager.sol
       2. Passa o ID da tarefa como parâmetro _id
       3. Smart contract executa as validações:
          - require(task.creator == msg.sender, "Voce nao e o criador da tarefa")
          - require(!task.status, "Tarefa ja foi concluida")
       4. Se válido, atualiza:
          - task.status = true
          - task.completedAt = block.timestamp
       5. Emite evento TaskCompleted(id, completedAt)
       6. ⚠️ IMPORTANTE: O stake NÃO é devolvido automaticamente nesta versão
    */
  }

  // 🔢 HOOK: Ler quantas tarefas existem no total (integração com /smartcontract)
  const { data: taskCount, refetch: refetchTaskCount } = useReadContract({
    address: CONTRACT_ADDRESS,                      // ← Endereço do contrato deployado
    abi: CONTRACT_ABI,                             // ← ABI do TaskManager.sol
    functionName: 'getTaskCount',                  // ← function getTaskCount() public view returns (uint256)
  })
  /*
  🤔 O que esse hook faz?
     - Chama getTaskCount() do /smartcontract/src/TaskManager.sol
     - Retorna o valor da variável pública taskCount
     - data: uint256 convertido para number no retorno
     - refetch: função para buscar novamente (útil após criar nova tarefa)
     - Atualiza automaticamente quando a blockchain muda
  */

  // 👀 FUNÇÃO: Buscar uma tarefa específica (integração com /smartcontract)
  const useTask = (taskId: number) => {
    return useReadContract({
      address: CONTRACT_ADDRESS,                    // ← Endereço do contrato deployado
      abi: CONTRACT_ABI,                           // ← ABI do TaskManager.sol
      functionName: 'getTask',                     // ← function getTask(uint256) public view returns (Task memory)
      args: [BigInt(taskId)],                      // ← _id da tarefa
      query: {
        enabled: taskId > 0,                       // ← Só busca se ID for válido (tarefas começam em 1)
      }
    })
  }
  /*
  🤔 O que retorna getTask?
     - Struct Task completa do /smartcontract/src/TaskManager.sol:
       [id, title, description, createdAt, completedAt, status, creator, deadline]
     - id: uint256 - ID único da tarefa
     - title: string - Título da tarefa
     - description: string - Descrição da tarefa
     - createdAt: uint256 - Timestamp de criação (block.timestamp)
     - completedAt: uint256 - Timestamp de conclusão (0 se pendente)
     - status: bool - true se concluída, false se pendente
     - creator: address - Endereço de quem criou
     - deadline: uint256 - Timestamp do prazo limite
  */

  // 📦 RETORNAR: Todas as ferramentas para usar nos componentes
  return {
    createTask,                                    // ← Função para criar tarefa
    completeTask,                                  // ← Função para completar tarefa
    taskCount: taskCount ? Number(taskCount) : 0,  // ← Número total (convertido para number)
    refetchTaskCount,                              // ← Função para recarregar contador
    useTask,                                       // ← Hook para buscar tarefa específica
    isCreating,                                    // ← true se está criando tarefa
    userAddress: address,                          // ← Endereço da carteira conectada
  }
}

/*
🎯 COMO USAR este hook nos componentes (ATUALIZADO com stake):

```typescript
function MeuComponente() {
  const { 
    createTask, 
    taskCount, 
    isCreating, 
    userAddress 
  } = useTaskManager()
  
  const handleCriarTarefa = async () => {
    try {
      // NOVO: Configuração conforme /smartcontract/src/TaskManager.sol
      const titulo = "Estudar Blockchain"
      const descricao = "Completar curso de Solidity e smart contracts"
      const prazo = Math.floor(Date.now() / 1000) + (7 * 24 * 60 * 60) // 7 dias a partir de agora
      const stake = "0.0000001" // Stake mínimo exigido pelo contrato
      
      // Chama função que interage com /smartcontract
      await createTask(titulo, descricao, prazo, stake)
      
      console.log("Tarefa criada com sucesso! ETH enviado como stake.")
    } catch (error) {
      console.error("Erro ao criar tarefa:", error.message)
      // Possíveis erros:
      // - "Valor do stake deve ser maior que 0.0000001 ether"
      // - "Prazo de conclusao deve ser maior que a data atual"
      // - "Carteira não conectada"
    }
  }
  
  return (
    <div>
      <p>Usuário: {userAddress}</p>
      <p>Total de tarefas: {taskCount}</p>
      <button onClick={handleCriarTarefa} disabled={isCreating}>
        {isCreating ? 'Criando tarefa (0.0000001 ETH)...' : 'Criar Tarefa com Stake'}
      </button>
      
      <div style={{marginTop: '10px', fontSize: '12px', color: 'orange'}}>
        ⚠️ Atenção: O stake NÃO será devolvido automaticamente nesta versão
      </div>
    </div>
  )
}
```

💡 ANALOGIA COMPLETA:
   - Hook = controle remoto universal
   - createTask = botão "gravar" com depósito de garantia
   - completeTask = botão "play" que marca como feito
   - taskCount = display que mostra quantos "programas" você tem
   - useTask = botão para sintonizar "programa" específico
   - isCreating = luzinha que pisca quando está gravando (e cobrando!)
   - stake = "ficha" que você coloca na máquina para jogar
*/
```

**🤔 Por que criar um hook personalizado?**
- Centraliza toda lógica do contrato
- Reutilizável em qualquer componente
- Facilita manutenção e testes
- Abstrai complexidade do Web3
- **Type-safe com Viem**: Tipos automáticos para todas as funções

### 🛠️ **Utilities Úteis do Viem**

Além das funções básicas, viem oferece muitas utilities:

```typescript
import { 
  parseEther,      // Converte ETH para Wei
  formatEther,     // Converte Wei para ETH
  parseUnits,      // Converte tokens para unidades
  formatUnits,     // Converte unidades para tokens
  isAddress,       // Valida se é endereço válido
  getAddress,      // Normaliza endereço (checksum)
  encodeAbiParameters, // Codifica parâmetros ABI
  decodeAbiParameters, // Decodifica parâmetros ABI
} from 'viem'

// Exemplos práticos:
const weiAmount = parseEther('1.5')        // 1.5 ETH em Wei
const ethAmount = formatEther(1500000000000000000n) // Wei para ETH
const isValidAddr = isAddress('0x123...')  // true/false
const checksumAddr = getAddress('0xabc...') // Endereço formatado
```

---

### 🎨 **Passo 4: Criar Componentes da Interface**

#### 4.1 Componente de Conexão de Carteira

Crie `components/WalletConnection.tsx`:

```typescript
// components/WalletConnection.tsx
'use client'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function WalletConnection() {
  const { address, isConnected, chain } = useAccount()
  const { connect, connectors, isPending } = useConnect()
  const { disconnect } = useDisconnect()

  if (isConnected && address) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>✅ Carteira Conectada</CardTitle>
          <CardDescription>
            Endereço: {address.slice(0, 6)}...{address.slice(-4)}
            <br />
            Rede: {chain?.name || 'Desconhecida'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={() => disconnect()} variant="outline">
            Desconectar
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>🔌 Conectar Carteira</CardTitle>
        <CardDescription>
          Conecte sua carteira para interagir com o contrato
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {connectors.map((connector) => (
          <Button
            key={connector.id}
            onClick={() => connect({ connector })}
            disabled={isPending}
            className="w-full"
          >
            {isPending ? 'Conectando...' : `Conectar ${connector.name}`}
          </Button>
        ))}
      </CardContent>
    </Card>
  )
}
```

#### 4.2 Componente para Criar Tarefas

Crie `components/CreateTask.tsx`:

```typescript
// components/CreateTask.tsx
'use client'

import { useState } from 'react'
import { useTaskManager } from '@/hooks/useTaskManager'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'

export function CreateTask() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [deadline, setDeadline] = useState('')
  
  const { createTask, isCreating, refetchTaskCount } = useTaskManager()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!title.trim() || !description.trim() || !deadline) {
      toast({
        title: "Erro",
        description: "Preencha todos os campos",
        variant: "destructive"
      })
      return
    }

    try {
      // Converter data para timestamp
      const deadlineTimestamp = Math.floor(new Date(deadline).getTime() / 1000)
      
      if (deadlineTimestamp <= Math.floor(Date.now() / 1000)) {
        toast({
          title: "Erro",
          description: "Prazo deve ser no futuro",
          variant: "destructive"
        })
        return
      }

      await createTask(title, description, deadlineTimestamp)
      
      toast({
        title: "Sucesso!",
        description: "Tarefa criada com sucesso",
      })

      // Limpar formulário
      setTitle('')
      setDescription('')
      setDeadline('')
      
      // Atualizar contador
      refetchTaskCount()
      
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.message || "Erro ao criar tarefa",
        variant: "destructive"
      })
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>➕ Criar Nova Tarefa</CardTitle>
        <CardDescription>
          Adicione uma nova tarefa na blockchain
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Título</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ex: Estudar Solidity"
              disabled={isCreating}
            />
          </div>
          
          <div>
            <Label htmlFor="description">Descrição</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Ex: Completar curso de smart contracts"
              disabled={isCreating}
            />
          </div>
          
          <div>
            <Label htmlFor="deadline">Prazo</Label>
            <Input
              id="deadline"
              type="datetime-local"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              disabled={isCreating}
            />
          </div>
          
          <Button type="submit" disabled={isCreating} className="w-full">
            {isCreating ? 'Criando...' : 'Criar Tarefa'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
```

#### 4.3 Componente para Listar Tarefas

Crie `components/TaskList.tsx`:

```typescript
// components/TaskList.tsx
'use client'

import { useTaskManager } from '@/hooks/useTaskManager'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useToast } from '@/hooks/use-toast'

export function TaskList() {
  const { taskCount, useTask, completeTask, userAddress } = useTaskManager()
  const { toast } = useToast()

  const handleCompleteTask = async (taskId: number) => {
    try {
      await completeTask(taskId)
      toast({
        title: "Sucesso!",
        description: "Tarefa marcada como concluída",
      })
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.message || "Erro ao completar tarefa",
        variant: "destructive"
      })
    }
  }

  const TaskItem = ({ taskId }: { taskId: number }) => {
    const { data: task, isLoading } = useTask(taskId)

    if (isLoading) {
      return (
        <Card>
          <CardContent className="p-4">
            <div className="animate-pulse">Carregando...</div>
          </CardContent>
        </Card>
      )
    }

    if (!task) return null

    const [id, title, description, createdAt, completedAt, status, creator, deadline] = task
    
    const isOwner = creator.toLowerCase() === userAddress?.toLowerCase()
    const isOverdue = !status && Number(deadline) < Math.floor(Date.now() / 1000)
    
    const formatDate = (timestamp: bigint) => {
      return new Date(Number(timestamp) * 1000).toLocaleString('pt-BR')
    }

    return (
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-lg">{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </div>
            <div className="flex gap-2">
              {status ? (
                <Badge variant="default">✅ Concluída</Badge>
              ) : isOverdue ? (
                <Badge variant="destructive">⏰ Atrasada</Badge>
              ) : (
                <Badge variant="secondary">⏳ Pendente</Badge>
              )}
              {isOwner && <Badge variant="outline">👤 Sua</Badge>}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>📅 Criada: {formatDate(createdAt)}</p>
            <p>⏰ Prazo: {formatDate(deadline)}</p>
            {status && <p>✅ Concluída: {formatDate(completedAt)}</p>}
            <p>👤 Criador: {creator.slice(0, 6)}...{creator.slice(-4)}</p>
          </div>
          
          {!status && isOwner && (
            <Button 
              onClick={() => handleCompleteTask(Number(id))}
              className="mt-4 w-full"
            >
              Marcar como Concluída
            </Button>
          )}
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">📋 Tarefas ({taskCount})</h2>
      </div>
      
      {taskCount === 0 ? (
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-muted-foreground">
              Nenhuma tarefa encontrada. Crie a primeira!
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {Array.from({ length: taskCount }, (_, i) => (
            <TaskItem key={i + 1} taskId={i + 1} />
          ))}
        </div>
      )}
    </div>
  )
}
```

---

### 🏠 **Passo 5: Criar Página Principal**

#### 5.1 Modificar a página principal

Edite `app/page.tsx`:

```typescript
// app/page.tsx
'use client'

import { WalletConnection } from '@/components/WalletConnection'
import { CreateTask } from '@/components/CreateTask'
import { TaskList } from '@/components/TaskList'
import { useAccount } from 'wagmi'
import { Toaster } from '@/components/ui/toaster'

export default function Home() {
  const { isConnected } = useAccount()

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">📝 TaskManager DApp</h1>
          <p className="text-muted-foreground">
            Gerencie suas tarefas na blockchain Ethereum (Sepolia)
          </p>
        </div>

        {/* Conexão da Carteira */}
        <WalletConnection />

        {/* Interface principal (só aparece se conectado) */}
        {isConnected ? (
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <CreateTask />
            </div>
            <div>
              <TaskList />
            </div>
          </div>
        ) : (
          <div className="text-center p-8">
            <p className="text-muted-foreground">
              Conecte sua carteira para começar a usar o TaskManager
            </p>
          </div>
        )}
      </div>
      
      <Toaster />
    </div>
  )
}
```

---

### 🚀 **Passo 6: Testar a Integração com Stake**

#### 6.1 Executar o projeto

```bash
pnpm run dev
```

#### 6.2 Testar o sistema de stake

**📋 Lista de testes essenciais:**

##### ✅ **Teste 1: Criar tarefa com stake**
1. Conecte a MetaMask na rede Sepolia
2. Verifique se tem pelo menos 0.001 ETH de teste
3. Preencha título: "Estudar Blockchain"
4. Preencha descrição: "Completar curso de Solidity em 7 dias"
5. Defina prazo: uma semana à frente
6. **Campo stake será adicionado no frontend**: mínimo 0.0000001 ETH
7. Clique "Criar Tarefa"
8. Confirme transação na MetaMask
9. **Resultado esperado**: Tarefa criada e ETH "preso" no contrato

##### ✅ **Teste 2: Completar tarefa no prazo**
1. Abra uma tarefa sua que ainda está pendente
2. Clique "Completar Tarefa"
3. Confirme transação na MetaMask
4. **Resultado esperado**: Tarefa marcada como concluída

##### ❌ **Teste 3: Tentar criar com stake insuficiente**
1. Tente criar tarefa com menos de 0.0000001 ETH
2. **Resultado esperado**: Erro "Valor do stake deve ser maior que 0.0000001 ether"

##### ❌ **Teste 4: Tentar criar com prazo no passado**
1. Tente criar tarefa com deadline ontem
2. **Resultado esperado**: Erro "Prazo de conclusao deve ser maior que a data atual"

##### ❌ **Teste 5: Tentar completar tarefa de outro usuário**
1. Use outra carteira/endereço
2. Tente completar tarefa de outro usuário
3. **Resultado esperado**: Erro "Voce nao e o criador da tarefa"

#### 6.2 Comandos úteis do pnpm

```bash
# Executar em desenvolvimento
pnpm run dev

# Build para produção
pnpm run build

# Executar versão de produção
pnpm run start

# Verificar lint
pnpm run lint

# Instalar dependência específica
pnpm add [package-name]

# Instalar dependência de desenvolvimento
pnpm add -D [package-name]

# Remover dependência
pnpm remove [package-name]

# Atualizar todas as dependências
pnpm update

# Limpar cache do pnpm
pnpm store prune
```

#### 6.3 Passos de teste

1. **Abrir o navegador** em `http://localhost:3000`
2. **Conectar MetaMask** (certifique-se de estar na rede Sepolia)
3. **Criar uma tarefa** preenchendo o formulário
4. **Confirmar transação** no MetaMask
5. **Aguardar confirmação** (pode levar 1-2 minutos)
6. **Ver a tarefa** aparecendo na lista
7. **Marcar como concluída** se for sua tarefa

---

### 🐛 **Passo 7: Possíveis Erros e Soluções**

#### ❌ **"User rejected the request"**
**Problema**: Usuário cancelou transação no MetaMask  
**Solução**: Tentar novamente e confirmar a transação

#### ❌ **"insufficient funds for gas"**
**Problema**: Não tem ETH suficiente para gas  
**Solução**: Conseguir mais ETH de teste no faucet

#### ❌ **"execution reverted"**
**Problema**: Erro no smart contract (ex: prazo no passado)  
**Solução**: Verificar dados enviados (prazo deve ser futuro)

#### ❌ **"ContractFunctionExecutionError"**
**Problema**: Erro na execução da função do contrato  
**Solução**: Verificar se o endereço do contrato está correto

#### ❌ **Página não carrega**
**Problema**: Erro de dependência ou configuração  
**Solução**: 
```bash
# Limpar cache e reinstalar
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

---

### 🎯 **Fluxo Completo Funcionando**

Quando tudo estiver funcionando, você terá:

1. **Frontend Next.js** rodando em React
2. **Conexão MetaMask** funcionando
3. **Smart Contract** na Sepolia respondendo
4. **Interface bonita** para criar/completar tarefas
5. **Dados em tempo real** da blockchain
6. **Transações confirmadas** aparecendo no Etherscan

---

### 🔧 **Customizações Avançadas**

#### Adicionar Loading States
```typescript
// No componente, adicionar estados de loading
const [isLoading, setIsLoading] = useState(false)

// Mostrar spinner durante transações
{isLoading && <Spinner />}
```

#### Adicionar Notifications Push
```typescript
// Usar react-hot-toast para notificações bonitas
import toast from 'react-hot-toast'

toast.success('Tarefa criada com sucesso!')
toast.error('Erro ao criar tarefa')
```

#### Adicionar Filtros
```typescript
// Filtrar tarefas por status
const [filter, setFilter] = useState('all') // 'pending', 'completed', 'all'
```

#### Validações com Viem
```typescript
import { isAddress, getAddress } from 'viem'

// Validar endereço antes de usar
const validateAddress = (addr: string) => {
  if (!isAddress(addr)) {
    throw new Error('Endereço inválido')
  }
  return getAddress(addr) // Retorna endereço com checksum
}
```

#### Monitorar Eventos do Contrato
```typescript
import { useWatchContractEvent } from 'wagmi'

// Escutar eventos de tarefas criadas
useWatchContractEvent({
  address: CONTRACT_ADDRESS,
  abi: CONTRACT_ABI,
  eventName: 'TaskCreated',
  onLogs(logs) {
    console.log('Nova tarefa criada!', logs)
    // Atualizar UI automaticamente
  },
})
```

#### Formatação de Dados Avançada
```typescript
import { formatEther, formatUnits } from 'viem'

// Formatar valores com precisão
const formatPrice = (value: bigint) => {
  return `${formatEther(value)} ETH`
}

// Formatar tokens ERC20 (ex: USDC com 6 decimais)
const formatToken = (value: bigint, decimals: number) => {
  return formatUnits(value, decimals)
}
```

---

### 🏆 **Parabéns!**

Agora você tem uma **DApp completa** funcionando com sistema de stake! 🎉

**O que você conseguiu:**
- ✅ Frontend moderno em Next.js + TypeScript
- ✅ Integração com MetaMask
- ✅ Smart contract com sistema de stake
- ✅ Validações de segurança (prazo, propriedade, stake mínimo)
- ✅ Interface bonita e responsiva
- ✅ Transações reais na blockchain com incentivos financeiros
- ✅ Dados descentralizados e imutáveis

### 🚨 **Limitação Atual do Sistema**

**⚠️ IMPORTANTE**: O smart contract atual tem uma limitação:

**❌ O que ainda não funciona:**
- **Devolução automática do stake**: Quando você completa uma tarefa, o ETH NÃO é devolvido automaticamente
- **Penalização por prazo**: Se a tarefa vencer o prazo, o stake fica "preso" no contrato
- **Recuperação de stake**: Não há função para resgatar o ETH após completar

**🔧 Por que isso acontece:**
```solidity
function completeTask(uint256 _id) public {
    // ... validações ...
    task.status = true;
    task.completedAt = block.timestamp;
    
    // ❌ FALTANDO: Lógica para devolver o stake
    // payable(msg.sender).transfer(stakeAmount);
    
    emit TaskCompleted(_id, block.timestamp);
}
```

**💡 Para implementar stake completo, seria necessário:**
1. **Salvar valor do stake** na struct Task
2. **Devolver ETH** quando completar tarefa
3. **Confiscar ETH** quando prazo vencer
4. **Função de resgate** para stakes perdidos

**🎯 Como usar o sistema atual:**
- ✅ **Use para aprender**: Perfeito para entender blockchain e stakes
- ✅ **Use valores baixos**: Apenas 0.0000001 ETH para testes
- ✅ **Entenda o conceito**: O ETH fica "preso" como demonstração
- ⚠️ **Não use valores altos**: O stake não será devolvido automaticamente

**Próximos passos sugeridos:**
1. **Evoluir o smart contract**: Implementar devolução de stake
2. **Deploy do frontend** na Vercel
3. **Adicionar dashboard**: Mostrar stakes ativos
4. **Implementar alertas**: Notificar prazos próximos
5. **Sistema de reputação**: Histórico de conclusões

### 🚀 **Dicas Avançadas com pnpm**

#### Workspace (para projetos monorepo)
Se você quiser conectar o frontend com o smartcontract em um único repositório:

```bash
# Criar pnpm-workspace.yaml na raiz
echo "packages:\n  - 'fb02'\n  - 'smartcontract'" > pnpm-workspace.yaml

# Instalar dependências de ambos os projetos
pnpm install -r

# Executar comandos em projetos específicos
pnpm --filter fb02 run dev
pnpm --filter smartcontract run build
```

#### Scripts globais úteis
Adicione no `package.json` principal:

```json
{
  "scripts": {
    "dev:frontend": "pnpm --filter fb02 run dev",
    "build:frontend": "pnpm --filter fb02 run build",
    "compile:contracts": "pnpm --filter smartcontract run build",
    "deploy:contracts": "pnpm --filter smartcontract run deploy"
  }
}
```

---

## 🔄 **Migração Ethers.js → Viem (Referência Rápida)**

Se você está vindo do ethers.js, aqui estão as principais diferenças:

### 📊 **Comparação Lado a Lado**

| Funcionalidade | Ethers.js | Viem |
|---|---|---|
| **Conectar Provider** | `new ethers.providers.JsonRpcProvider()` | `createPublicClient({ transport: http() })` |
| **Conectar Signer** | `provider.getSigner()` | `createWalletClient({ transport: custom() })` |
| **Ler Contrato** | `contract.methodName()` | `readContract({ abi, address, functionName })` |
| **Escrever Contrato** | `contract.methodName()` | `writeContract({ abi, address, functionName })` |
| **Converter ETH** | `ethers.utils.parseEther()` | `parseEther()` |
| **Formatar ETH** | `ethers.utils.formatEther()` | `formatEther()` |
| **Validar Endereço** | `ethers.utils.isAddress()` | `isAddress()` |
| **BigNumbers** | `ethers.BigNumber` | `bigint` nativo |
| **Gerenciador** | `npm install` | `pnpm add` |

### 🚀 **Vantagens da Stack Moderna**

#### Biblioteca (Ethers → Viem)
1. **Performance**: 5x mais rápido
2. **Bundle Size**: 3x menor
3. **TypeScript**: Tipos automáticos
4. **Tree Shaking**: Melhor otimização
5. **API**: Mais intuitiva e moderna
6. **Manutenção**: Ativo e bem mantido

#### Gerenciador (npm → pnpm)
1. **Velocidade**: 2x mais rápido
2. **Espaço**: 3x menos disco usado
3. **Segurança**: Melhor isolamento
4. **Monorepo**: Suporte nativo
5. **Cache**: Compartilhamento inteligente
6. **Determinístico**: Lock file confiável

### 💡 **Dicas de Migração Completa**

#### 📦 **Migração do Gerenciador de Pacotes**
```bash
# ❌ Projeto antigo (npm)
npm install ethers @ethersproject/providers
npm run dev

# ✅ Projeto moderno (pnpm)
pnpm add viem wagmi @tanstack/react-query
pnpm run dev
```

#### 💻 **Migração do Código**
```typescript
// ❌ Ethers.js (antigo)
import { ethers } from 'ethers'
const provider = new ethers.providers.JsonRpcProvider(rpcUrl)
const contract = new ethers.Contract(address, abi, provider)
const result = await contract.getTask(1)

// ✅ Viem + Wagmi (moderno)
import { useReadContract } from 'wagmi'
const { data: result } = useReadContract({
  address,
  abi,
  functionName: 'getTask',
  args: [1n],
})
```

#### 🏗️ **Estrutura de Projeto Recomendada**
```
projeto/
├── pnpm-workspace.yaml      # Configuração workspace
├── package.json             # Scripts globais
├── fb02/                    # Frontend Next.js
│   ├── package.json         # Dependências frontend
│   ├── lib/web3.ts         # Configuração viem/wagmi
│   └── hooks/useContract.ts # Hooks personalizados
└── smartcontract/           # Contratos Foundry
    ├── package.json         # Scripts de deploy
    ├── foundry.toml         # Configuração Foundry
    └── src/TaskManager.sol  # Smart contract
```

---

*Esta integração demonstra o poder das DApps modernas - interfaces bonitas conectadas à blockchain usando as melhores tecnologias disponíveis!*