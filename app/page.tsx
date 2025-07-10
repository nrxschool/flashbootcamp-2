"use client"

import type React from "react"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { AlertCircle, CheckCircle2, ListTodo, Loader, Coins, PlusCircle, CheckSquare, Wallet } from "lucide-react"

// Tipagem para as tarefas
type Task = {
  id: number
  name: string
  description: string
  status: "Pendente" | "Concluído"
  creationDate: string
  completionDate: string | null
  wei: number
}

// Dados de exemplo
const initialTasks: Task[] = [
  {
    id: 1,
    name: "Configurar ambiente de desenvolvimento",
    description: "Instalar Hardhat, Ethers.js e conectar ao provedor local.",
    status: "Concluído",
    creationDate: "2025-07-01",
    completionDate: "2025-07-02",
    wei: 5000,
  },
  {
    id: 2,
    name: "Desenvolver Smart Contract de Tarefas",
    description: "Criar as funções para adicionar, listar e completar tarefas no Solidity.",
    status: "Pendente",
    creationDate: "2025-07-03",
    completionDate: null,
    wei: 15000,
  },
  {
    id: 3,
    name: "Criar testes unitários para o contrato",
    description: "Usar o Waffle e o Chai para garantir a robustez do contrato.",
    status: "Pendente",
    creationDate: "2025-07-05",
    completionDate: null,
    wei: 10000,
  },
]

export default function Web3TodoPage() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const [isConnected, setIsConnected] = useState(false)

  const handleConnectWallet = () => {
    setIsConnected(!isConnected)
  }

  const handleCompleteTask = (taskId: number) => {
    if (!isConnected) return
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: "Concluído",
              completionDate: new Date().toISOString().split("T")[0],
            }
          : task,
      ),
    )
  }

  const metrics = useMemo(() => {
    const total = tasks.length
    const concluidas = tasks.filter((t) => t.status === "Concluído").length
    const pendentes = total - concluidas
    const weiInStake = tasks.filter((t) => t.status === "Pendente").reduce((sum, task) => sum + task.wei, 0)
    return { total, concluidas, pendentes, weiInStake }
  }, [tasks])

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <main className="container mx-auto p-4 sm:p-6 lg:p-8">
          {/* Cabeçalho */}
          <header className="mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <h1 className="text-3xl font-bold text-gray-800">WEB3 TODO</h1>
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
          </header>

          {/* Seção de Métricas */}
          <section className="mb-10">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <MetricCard
                title="Total de Tarefas"
                value={metrics.total}
                icon={<ListTodo className="h-6 w-6 text-violet-500" />}
              />
              <MetricCard
                title="Tarefas Concluídas"
                value={metrics.concluidas}
                icon={<CheckCircle2 className="h-6 w-6 text-cyan-500" />}
              />
              <MetricCard
                title="Tarefas Pendentes"
                value={metrics.pendentes}
                icon={<Loader className="h-6 w-6 text-yellow-500" />}
              />
              <MetricCard
                title="Wei em Stake"
                value={metrics.weiInStake.toLocaleString("pt-BR")}
                icon={<Coins className="h-6 w-6 text-indigo-500" />}
              />
            </div>
          </section>

          {/* Seção de Tarefas */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">Tarefas</h2>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="inline-block">
                    <Button disabled={!isConnected} className="bg-violet-600 hover:bg-violet-700 disabled:opacity-50">
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
            <div className="space-y-4">
              {tasks.map((task) => (
                <TaskCard key={task.id} task={task} onComplete={handleCompleteTask} isConnected={isConnected} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </TooltipProvider>
  )
}

// Componente para os cards de métrica
function MetricCard({ title, value, icon }: { title: string; value: string | number; icon: React.ReactNode }) {
  return (
    <Card className="transition-shadow duration-300 hover:shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  )
}

// Componente para os cards de tarefa
function TaskCard({
  task,
  onComplete,
  isConnected,
}: { task: Task; onComplete: (id: number) => void; isConnected: boolean }) {
  const isCompleted = task.status === "Concluído"
  return (
    <Card className={`transition-all duration-300 ${isCompleted ? "bg-gray-100/80 border-gray-200" : "bg-white"}`}>
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className={`text-lg font-semibold ${isCompleted ? "text-gray-500 line-through" : "text-gray-900"}`}>
                {task.name}
              </h3>
              <Badge
                variant={isCompleted ? "default" : "secondary"}
                className={`text-xs font-medium ${
                  isCompleted
                    ? "bg-cyan-100 text-cyan-800 border-cyan-200"
                    : "bg-yellow-100 text-yellow-800 border-yellow-200"
                }`}
              >
                {task.status}
              </Badge>
            </div>
            <p className={`text-sm text-gray-600 ${isCompleted ? "text-gray-500" : ""}`}>{task.description}</p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
              <span>Criado em: {new Date(task.creationDate).toLocaleDateString("pt-BR")}</span>
              {task.completionDate && (
                <span>Concluído em: {new Date(task.completionDate).toLocaleDateString("pt-BR")}</span>
              )}
              <span className="flex items-center gap-1">
                <Coins className="h-3 w-3" /> {task.wei.toLocaleString("pt-BR")} Wei
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
                    onClick={() => onComplete(task.id)}
                    disabled={!isConnected}
                    aria-label="Concluir Tarefa"
                    className="border-violet-300 text-violet-600 hover:bg-violet-50 hover:text-violet-700 disabled:opacity-50"
                  >
                    <CheckSquare className="h-5 w-5" />
                  </Button>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{isConnected ? "Concluir Tarefa" : "Conecte a carteira para concluir"}</p>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
