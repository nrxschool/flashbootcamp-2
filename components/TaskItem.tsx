'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { CheckSquare, Loader, Coins } from 'lucide-react'
import { useTaskData, useCompleteTask } from '@/hooks/useTaskManager'

interface TaskItemProps {
  taskId: number
  isConnected: boolean
}

export function TaskItem({ taskId, isConnected }: TaskItemProps) {
  const { data: taskData, isLoading, error } = useTaskData(taskId)
  const { completeTask, isPending } = useCompleteTask()

  // Se está carregando
  if (isLoading) {
    return (
      <Card className="bg-gray-50">
        <CardContent className="p-4 sm:p-6">
          <div className="flex items-center gap-3">
            <Loader className="animate-spin h-5 w-5" />
            <span className="text-gray-500">Carregando tarefa...</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Se houve erro ou não há dados
  if (error || !taskData) {
    return (
      <Card className="bg-red-50 border-red-200">
        <CardContent className="p-4 sm:p-6">
          <span className="text-red-600">Erro ao carregar tarefa {taskId}</span>
        </CardContent>
      </Card>
    )
  }

  // Processar dados da tarefa
  const now = Math.floor(Date.now() / 1000)
  const isOverdue = now > Number(taskData.deadline) && !taskData.status
  const isCompleted = taskData.status
  const createdDate = new Date(Number(taskData.createdAt) * 1000)
  const deadlineDate = new Date(Number(taskData.deadline) * 1000)
  const stakeInEth = Number(taskData.stakeAmount) / 1e18

  const handleComplete = async () => {
    if (!isConnected) return
    
    try {
      await completeTask(taskId)
    } catch (error) {
      console.error('Erro ao completar tarefa:', error)
    }
  }

  return (
    <Card className={`transition-all duration-300 ${
      isCompleted ? "bg-gray-100/80 border-gray-200" : 
      isOverdue ? "bg-red-50/80 border-red-200" : "bg-white"
    }`}>
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className={`text-lg font-semibold ${
                isCompleted ? "text-gray-500 line-through" : "text-gray-900"
              }`}>
                {taskData.title}
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
            
            <p className={`text-sm text-gray-600 mb-3 ${
              isCompleted ? "text-gray-500" : ""
            }`}>
              {taskData.description}
            </p>
            
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
              <span>Criado: {createdDate.toLocaleDateString("pt-BR")}</span>
              <span>Prazo: {deadlineDate.toLocaleDateString("pt-BR")}</span>
              <span className="flex items-center gap-1">
                <Coins className="h-3 w-3" /> 
                {stakeInEth.toFixed(6)} ETH
              </span>
            </div>
          </div>
          
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
        </div>
      </CardContent>
    </Card>
  )
} 