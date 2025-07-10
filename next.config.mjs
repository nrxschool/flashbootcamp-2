/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    // Configuração para resolver módulos opcionais do WalletConnect
    config.resolve.fallback = {
      ...config.resolve.fallback,
      "pino-pretty": false,
      "lokijs": false,
      "encoding": false,
    }
    
    // Ignorar avisos específicos para módulos opcionais
    config.ignoreWarnings = [
      /Critical dependency: the request of a dependency is an expression/,
      /Module not found: Can't resolve 'pino-pretty'/,
      /Module not found: Can't resolve 'lokijs'/,
      /Module not found: Can't resolve 'encoding'/,
    ]
    
    return config
  },
}

export default nextConfig