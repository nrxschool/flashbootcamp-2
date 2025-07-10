
import { useReadContract, useWriteContract, useAccount } from 'wagmi'
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '@/lib/web3'
import { parseEther } from 'viem'

export function useMyTasks() {
  const { address } = useAccount()
  return useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getUserTasks',
    args: address ? [address] : undefined,
    query: { enabled: !!address }
  })
}

export function useTaskData(taskId: number | undefined) {
  return useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getTask',
    args: taskId ? [BigInt(taskId)] : undefined,
    query: { enabled: !!taskId }
  })
}

export function useCreateTask() {
  const { writeContract, isPending, error } = useWriteContract()
  
  const createTask = async (
    title: string, 
    description: string, 
    deadline: Date,
    stakeAmount: string = '0.001'
  ) => {
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

export function useWeb3Status() {
  const { address, isConnected } = useAccount()
  return {
    address,
    isConnected,
    shortAddress: address ? `${address.slice(0, 6)}...${address.slice(-4)}` : null
  }
}

export function useTasksWithData() {
  const { data: taskIds, isLoading, refetch } = useMyTasks()
  return {
    taskIds: taskIds || [],
    isLoading,
    refetch
  }
}

export function useContractBalance() {
  const { data: balance, isLoading: balanceLoading, refetch: refetchBalance } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getContractBalance',
  })
  
  return {
    balance,
    balanceLoading,
    balanceInEth: balance ? Number(balance) / 1e18 : 0,
    refetchBalance
  }
}

// Hook para métricas reais da blockchain
export function useRealTaskMetrics() {
  const { taskIds } = useTasksWithData()
  
  // Buscar dados das primeiras 5 tarefas (limitação do React)
  const task1 = useTaskData(taskIds[0] ? Number(taskIds[0]) : undefined)
  const task2 = useTaskData(taskIds[1] ? Number(taskIds[1]) : undefined) 
  const task3 = useTaskData(taskIds[2] ? Number(taskIds[2]) : undefined)
  const task4 = useTaskData(taskIds[3] ? Number(taskIds[3]) : undefined)
  const task5 = useTaskData(taskIds[4] ? Number(taskIds[4]) : undefined)

  const tasks = [task1.data, task2.data, task3.data, task4.data, task5.data]
    .filter(Boolean)

  let concluidas = 0
  let totalStake = 0

  tasks.forEach((task: any) => {
    if (task.status) {
      concluidas++
    } else {
      totalStake += Number(task.stakeAmount)
    }
  })

  return {
    total: taskIds.length,
    concluidas,
    pendentes: taskIds.length - concluidas,
    weiInStake: totalStake / 1e18
  }
}
