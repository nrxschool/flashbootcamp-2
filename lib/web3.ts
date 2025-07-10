// lib/web3.ts - Nossa "Central de Conexões"

// 📦 Importa as ferramentas necessárias
import { createConfig, http } from 'wagmi'
import { sepolia } from 'wagmi/chains'
import { metaMask, walletConnect } from 'wagmi/connectors'

// 🔑 Configurações (substitua pelos seus valores)
const projectId = 'SEU_WALLETCONNECT_PROJECT_ID' // De https://cloud.walletconnect.com
const alchemyApiKey = 'SUA_ALCHEMY_API_KEY'      // De https://alchemy.com

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

// 📍 Endereço do nosso smart contract (copie do deploy)
export const CONTRACT_ADDRESS = '0xSEU_ENDERECO_DO_CONTRATO_AQUI'

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
  
  // ✅ Função: completeTask (marcar como concluída)
  {
    "inputs": [
      { "internalType": "uint256", "name": "_taskId", "type": "uint256" }
    ],
    "name": "completeTask",
    "outputs": [],
    "stateMutability": "nonpayable", // ← Só executa, não recebe ETH
    "type": "function"
  },
  
  // 👀 Função: getMyTasks (buscar minhas tarefas)
  {
    "inputs": [],
    "name": "getMyTasks",
    "outputs": [
      { "internalType": "uint256[]", "name": "", "type": "uint256[]" }
    ],
    "stateMutability": "view",  // ← Só lê, não modifica nada
    "type": "function"
  },
  
  // 🔍 Função: tasks (buscar uma tarefa específica)
  {
    "inputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "name": "tasks",
    "outputs": [
      { "internalType": "uint256", "name": "id", "type": "uint256" },
      { "internalType": "string", "name": "title", "type": "string" },
      { "internalType": "string", "name": "description", "type": "string" },
      { "internalType": "uint256", "name": "createdAt", "type": "uint256" },
      { "internalType": "uint256", "name": "deadline", "type": "uint256" },
      { "internalType": "bool", "name": "isCompleted", "type": "bool" },
      { "internalType": "address", "name": "creator", "type": "address" },
      { "internalType": "uint256", "name": "stake", "type": "uint256" },
      { "internalType": "bool", "name": "stakeProcessed", "type": "bool" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  
  // 🔢 Função: totalTasks (total de tarefas criadas)
  {
    "inputs": [],
    "name": "totalTasks",
    "outputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  }
] as const