// providers/Web3Provider.tsx - Provider Web3 isolado

'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from '@/lib/web3'
import { useState, ReactNode } from 'react'

interface Web3ProviderProps {
  children: ReactNode
}

export function Web3Provider({ children }: Web3ProviderProps) {
  // 🧠 Cria a "memória inteligente" (cache)
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        // ⚡ Configurações otimizadas para Web3
        refetchOnWindowFocus: false,
        retry: 1,
        staleTime: 1000 * 60 * 5, // 5 minutos
      },
    },
  }))

  return (
    {/* 🔧 WAGMI: Fornece conexão Web3 para todo o app */}
    <WagmiProvider config={config}>
      {/* 🗄️ QUERY: Gerencia cache e atualizações automáticas */}
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}