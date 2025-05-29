import { http, createConfig } from 'wagmi'
import { base, mainnet, sepolia } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from "wagmi/connectors"

const projectId = '3a79bcd00dbc4d8d96894a1b45c941cf'

const mainnetRpc = `https://mainnet.infura.io/v3/${projectId}`

const baseRpc = 'https://mainnet.base.org'

const sepoliaRpc = `https://sepolia.infura.io/v3/${projectId}`

export const config = createConfig({
    chains: [mainnet, base, sepolia],
    connectors: [
        injected(),
        walletConnect({ projectId }),
        metaMask(),
        safe(),
    ],
    transports: {
        [mainnet.id]: http(mainnetRpc, {
            retryCount: 3,
            retryDelay: 1000,
            timeout: 10000,
        }),
        [base.id]: http(baseRpc, {
            retryCount: 3,
            retryDelay: 1000,
            timeout: 10000,
        }),
        [sepolia.id]: http(sepoliaRpc, {
            retryCount: 3,
            retryDelay: 1000,
            timeout: 10000,
        })
    },
    pollingInterval: 4000, // Poll every 4 seconds
})