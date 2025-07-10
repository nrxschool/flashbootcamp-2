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
