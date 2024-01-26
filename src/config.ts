import { QueryClient } from '@tanstack/react-query'
import { http, createConfig } from 'wagmi'
import { mainnet, goerli, sepolia } from 'wagmi/chains'

export const wagmiConfig = createConfig({
  chains: [mainnet, goerli, sepolia],
  transports: {
    [mainnet.id]: http(),
    [goerli.id]: http(),
    [sepolia.id]: http(),
  },
})

export const queryClient = new QueryClient() 