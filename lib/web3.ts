// lib/web3.ts - Nossa "Central de Conexões"

// 📦 Importa as ferramentas necessárias
import { createConfig, http } from 'wagmi'
import { sepolia } from 'wagmi/chains'
import { metaMask, walletConnect } from 'wagmi/connectors'

// 🔑 Configurações para funcionamento imediato
// 💡 Usando providers públicos para teste - funciona sem chaves
const projectId = 'fb02dapp' // ID único para este projeto

// ⚙️ Configuração principal - nossa "receita de conexão"
export const config = createConfig({
  // 🌐 Em qual blockchain vamos trabalhar
  chains: [sepolia],
  
  // 🔌 Quais carteiras podem conectar
  connectors: [
    metaMask(),                     // MetaMask (mais popular)
    walletConnect({ 
      projectId,                    // ID do projeto
      metadata: {
        name: 'FB02 TODO DApp',
        description: 'Gerencie tarefas na blockchain',
        url: 'http://localhost:3000',
        icons: ['https://via.placeholder.com/96x96.png?text=TODO']
      }
    }),
  ],
  
  // 🌍 Como conectar na internet da blockchain - provider confiável
  transports: {
    // 🆓 RPC público gratuito e confiável
    [sepolia.id]: http(process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL)
  },
})

// 📍 Endereço do nosso smart contract (deployado com sucesso!)
// ✅ ATUALIZADO: Contrato TaskManager na rede Sepolia
export const CONTRACT_ADDRESS = '0xa4545d4bF47D46d5AE101C02eE670aE0052d94Bb' as `0x${string}`

// 📋 ABI - "Manual de instruções" do contrato
export const CONTRACT_ABI = [
    {
        "type": "function",
        "name": "MINIMUM_STAKE",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
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
    },
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
    {
        "type": "function",
        "name": "getContractBalance",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getTask",
        "inputs": [
            {
                "name": "_id",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct TaskManager.Task",
                "components": [
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
                    {
                        "name": "description",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "createdAt",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "deadline",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "status",
                        "type": "bool",
                        "internalType": "bool"
                    },
                    {
                        "name": "creator",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "stakeAmount",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "stakeReturned",
                        "type": "bool",
                        "internalType": "bool"
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getTaskCount",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getUserTasks",
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
                "type": "uint256[]",
                "internalType": "uint256[]"
            }
        ],
        "stateMutability": "view"
    },
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
                "type": "tuple[]",
                "internalType": "struct TaskManager.Task[]",
                "components": [
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
                    {
                        "name": "description",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "createdAt",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "deadline",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "status",
                        "type": "bool",
                        "internalType": "bool"
                    },
                    {
                        "name": "creator",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "stakeAmount",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "stakeReturned",
                        "type": "bool",
                        "internalType": "bool"
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "isTaskOverdue",
        "inputs": [
            {
                "name": "_id",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "taskCount",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "tasks",
        "inputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
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
            {
                "name": "description",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "createdAt",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "deadline",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "status",
                "type": "bool",
                "internalType": "bool"
            },
            {
                "name": "creator",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "stakeAmount",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "stakeReturned",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "userTasks",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "event",
        "name": "StakeLost",
        "inputs": [
            {
                "name": "id",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "stakeAmount",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "TaskCompleted",
        "inputs": [
            {
                "name": "id",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "stakeReturned",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
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
] as const