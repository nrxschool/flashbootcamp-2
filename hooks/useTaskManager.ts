
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
