
import { useReadContract, useWriteContract, useAccount } from 'wagmi'
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '@/lib/web3'
import { parseEther } from 'viem'

// 🎣 Hook: Buscar minhas tarefas
export function useMyTasks() {
  const { address } = useAccount()
  
  return useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getUserTasks',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address, // Só busca se usuário conectado
    }
  })
}

// 🔍 Hook: Buscar dados de uma tarefa específica
export function useTask(taskId: number | undefined) {
  return useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getTask',
    args: taskId ? [BigInt(taskId)] : undefined,
    query: {
      enabled: !!taskId, // Só busca se taskId existir
    }
  })
}

// 📊 Hook: Buscar total de tarefas no sistema
export function useTotalTasks() {
  return useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getTaskCount',
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

// 🎣 Hook: Buscar uma tarefa específica por ID
export function useTaskData(taskId: number | undefined) {
  return useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getTask',
    args: taskId ? [BigInt(taskId)] : undefined,
    query: {
      enabled: !!taskId,
    }
  })
}

// 🎣 Hook: Buscar tarefas com dados completos (versão funcional)
export function useTasksWithData() {
  const { data: taskIds, isLoading: loadingIds } = useMyTasks()
  
  // Debug: Mostrar IDs das tarefas
  console.log('🔍 Task IDs:', taskIds, 'Loading:', loadingIds)
  
  // Se ainda está carregando IDs ou não há IDs
  if (loadingIds || !taskIds) {
    return {
      tasks: [],
      isLoading: true,
      taskIds: []
    }
  }

  // Se não há tarefas, retorna vazio
  if (!Array.isArray(taskIds) || taskIds.length === 0) {
    return {
      tasks: [],
      isLoading: false,
      taskIds: []
    }
  }

  // Para cada ID, vamos precisar buscar os dados da tarefa
  // Como não podemos usar hooks dinamicamente, retornamos os IDs para o componente processar
  return {
    tasks: [], // Será preenchido pelo componente
    isLoading: false,
    taskIds: taskIds
  }
}

// 💰 Hook: Buscar balance do contrato
export function useContractBalance() {
  const { data: balance, isLoading: balanceLoading } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getContractBalance',
  })
  
  console.log('🔍 Balance:', balance, 'Loading:', balanceLoading)
  
  return {
    balance,
    balanceLoading,
    balanceInEth: balance ? Number(balance) / 1e18 : 0
  }
}


