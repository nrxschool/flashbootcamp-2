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