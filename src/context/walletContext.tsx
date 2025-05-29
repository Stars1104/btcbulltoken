import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import USDT_ABI from '../contract/usdt_abi.json'
import USDC_ABI from '../contract/usdc_abi.json'
import Web3 from 'web3';
// import { ethers, Contract } from 'ethers';
import axios from "axios"
import { USDTADDRESS, USDCADDRESS, BULLTOKENADDRESS } from '../contract';

interface WalletContextType {
    isWalletConnected: boolean;
    walletAddress: any;
    connectWallet: () => Promise<void>;
    disconnectWallet: () => void;
    saveWalletBalance: (ETHBalance: number, USDCBalance: number) => void;
    getWalletBalance: () => { ethBalance: number, USDCBalance: number };
    currentETHPrice: (price: number) => void;
    getETHPrice: () => number;
    usdtContract: any;
    usdcContract: any;
    web3: any;
    bullTokenPrice: number;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

interface WalletProviderProps {
    children: ReactNode;
}

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
    const [isWalletConnected, setisWalletConnected] = useState<boolean>(false);
    const [walletAddress, setWalletAddress] = useState<`0x${string}` | null>(null);
    const [ethBalance, setEthBalance] = useState<number>(0);
    const [USDCBalance, setUSDCBalance] = useState<number>(0);
    const [ethPrice, setEthPrice] = useState<number>(0);

    const [usdtContract, setUSDTContract] = useState<any>()
    const [usdcContract, setUSDContract] = useState<any>()
    const [web3, setWeb3] = useState<any>()
    const [bullTokenPrice, setBullTokenPrice] = useState<number>(0)
    // Initialize web3
    useEffect(() => {
        if (typeof window !== 'undefined' && window.ethereum) {
            const _web3 = new Web3(window.ethereum);
            setWeb3(_web3);
        }
    }, []);

    // Check if wallet is already connected on component mount
    useEffect(() => {
        checkWalletConnection();
    }, []);

    const checkWalletConnection = async () => {
        if (typeof window.ethereum !== 'undefined') {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_accounts' });

                if (accounts.length > 0) {
                    setWalletAddress(accounts[0]);
                    setisWalletConnected(true);
                }
            } catch (error) {
                console.error('Error checking wallet connection:', error);
            }
        }
    };

    const connectWallet = async () => {
        if (typeof window.ethereum !== 'undefined') {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

                if (accounts.length > 0) {
                    setWalletAddress(accounts[0]);
                    setisWalletConnected(true);
                }
            } catch (error) {
                console.error('Error connecting wallet:', error);
                throw error;
            }
        } else {
            throw new Error('Please install MetaMask or another Web3 wallet');
        }
    };

    const disconnectWallet = () => {
        setWalletAddress(null);
        setisWalletConnected(false);
    };

    //Save Wallet Address
    const saveWalletBalance = (ETHBalance: number, USDCBalance: number) => {

        const ethBalance = localStorage.getItem("ethAddress");
        const usdcBalance = localStorage.getItem("USDCAddress");

        if (ethBalance && usdcBalance) {
            setEthBalance(ETHBalance);
            setUSDCBalance(USDCBalance);

            localStorage.removeItem("ethAddress");
            localStorage.removeItem("USDCAddress");

            localStorage.setItem("ethAddress", ETHBalance.toString());
            localStorage.setItem("USDCAddress", USDCBalance.toString());
        } else {
            setEthBalance(ETHBalance);
            setUSDCBalance(USDCBalance);
            localStorage.setItem("ethAddress", ETHBalance.toString());
            localStorage.setItem("USDCAddress", USDCBalance.toString());
        }
    }

    //Get Wallet Address
    const getWalletBalance = () => {
        return {
            ethBalance,
            USDCBalance
        }
    }

    const currentETHPrice = (price: number) => {
        setEthPrice(price);
    }

    const getETHPrice = () => {
        return ethPrice;
    }

    useEffect(() => {
        const ethBalance = localStorage.getItem("ethAddress");
        const usdcBalance = localStorage.getItem("USDCAddress");

        if (ethBalance && usdcBalance) {
            setEthBalance(Number(ethBalance));
            setUSDCBalance(Number(usdcBalance));
        }
    }, []);


    const init = async () => {
        if (typeof window.ethereum !== 'undefined' && web3) {

            const _usdtContract = await new web3.eth.Contract(
                USDT_ABI,
                USDTADDRESS
            )
            setUSDTContract(_usdtContract)

            const _usdcContract = await new web3.eth.Contract(
                USDC_ABI,
                USDCADDRESS
            )

            setUSDContract(_usdcContract)

            window.ethereum.on('accountsChanged', (accounts: `0x${string}`[]) => {
                if (accounts.length > 0) {
                    setWalletAddress(accounts[0]);
                    setisWalletConnected(true);
                } else {
                    setWalletAddress(null);
                    setisWalletConnected(false);
                }
            });

            return () => {
                window.ethereum.removeListener('accountsChanged', () => { });
            };
        }
    }


    const getBullTokenPrice = async () => {
        try {
            const result = await axios.get(`https://api.dexscreener.com/token-pairs/v1/ethereum/${BULLTOKENADDRESS}`)
            if (result.data[0]?.priceUsd) {
                console.log("result => ", result.data[0]?.priceUsd)
                setBullTokenPrice(Number(result.data[0]?.priceUsd))
            }
        } catch (error) {
            console.error("Error fetching Bull Token price:", error)
        }
    }

    // Timer effect for Bull Token price
    useEffect(() => {
        // Initial fetch
        getBullTokenPrice()

        // Set up interval to fetch every second
        const intervalId = setInterval(() => {
            getBullTokenPrice()
        }, 1000)

        // Cleanup function to clear interval when component unmounts
        return () => {
            clearInterval(intervalId)
        }
    }, []) // Empty dependency array means this effect runs once on mount

    // Listen for account changes
    useEffect(() => {
        if (web3) {
            init()
        }
    }, [web3]);

    const value = {
        isWalletConnected,
        walletAddress,
        connectWallet,
        disconnectWallet,
        saveWalletBalance,
        getWalletBalance,
        currentETHPrice,
        getETHPrice,
        usdtContract,
        usdcContract,
        web3,
        bullTokenPrice
    };

    return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>;
};

export const useWallet = () => {
    const context = useContext(WalletContext);
    if (context === undefined) {
        throw new Error('useWallet must be used within a WalletProvider');
    }
    return context;
};
