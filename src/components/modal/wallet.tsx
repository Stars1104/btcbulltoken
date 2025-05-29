import { useState, useEffect } from "react";
import type { Chain } from "../../utils/type";
import USDT from "../../assets/wallet/usdt.svg";
import Ethereum from "../../assets/wallet/ethereum.svg";
import BNB from "../../assets/wallet/bnb.svg";
import Tether from "../../assets/wallet/tether.svg"
// import { useBalance } from "wagmi";
import { useWallet } from "../../context/walletContext";

interface WalletModaProps {
    isOpen?: boolean;
    onClose?: () => void;
    setChain?: (chains: Chain) => void;
}

const paymentTabs = [
    { key: 'all', label: 'All' },
    { key: 'eth', label: 'ETH' },
    { key: 'bnb', label: 'BNB' },
];

const WalletModal: React.FC<WalletModaProps> = ({ isOpen, onClose, setChain }) => {
    const [selectedTab, setSelectedTab] = useState('eth');
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [retryCount, setRetryCount] = useState(0);
    const [chains, setChains] = useState<Chain[]>([]);

    const wallet = useWallet();
    // const walletUSDTBalance = useBalance({ address: wallet.walletAddress, token: "0x76cd02A254F471A764BA4b897e8C8F642af4D33C" });

    const ethereumBalance = wallet.getWalletBalance().ethBalance ?? null;
    const usdcBalance = wallet.getWalletBalance().USDCBalance ?? null;

    useEffect(() => {
        if (isOpen) {
            setShow(true);
            setError(null);
            setIsLoading(true);
            setRetryCount(0);
        }
    }, [isOpen]);

    const handleChainClick = (index: number) => {
        setChains(prevChains =>
            prevChains.map((chain, i) => ({
                ...chain,
                isActive: i === index && !chain.isDisible
            }))
        );
        setChain && setChain(chains[index]);
        handleClose();
    };

    useEffect(() => {
        setChains([
            {
                name: "Ethereum",
                icon: Ethereum,
                category: "eth",
                balance: Number((Number(ethereumBalance)).toFixed(4)) || 0,
                price: Number((Number((Number(ethereumBalance))) / wallet.getETHPrice()).toFixed(4)),
                isActive: true,
                isDisible: false
            },
            {
                name: "USDC",
                icon: USDT,
                category: "eth",
                balance: Number(usdcBalance) || 0,
                price: Number(usdcBalance) || 0,
                isActive: false,
                isDisible: false
            },
            {
                name: "Tether",
                icon: Tether,
                category: "eth",
                balance: 0,
                price: 0,
                isActive: false,
                isDisible: true
            },
            {
                name: "BNB",
                icon: BNB,
                category: "bnb",
                balance: 0,
                price: 0,
                isActive: false,
                isDisible: true
            },
            {
                name: "Tether",
                icon: Tether,
                category: "bnb",
                balance: 0,
                price: 0,
                isActive: false,
                isDisible: true
            },
            {
                name: "USDC",
                icon: USDT,
                category: "bnb",
                balance: 0,
                price: 0,
                isActive: false,
                isDisible: true
            },
        ])
    }, [ethereumBalance, usdcBalance])

    const handleClose = () => {
        setShow(false);
        onClose && onClose();
    };

    const handleRetry = () => {
        setError(null);
        setIsLoading(true);
        setRetryCount(prev => prev + 1);
        setSelectedTab(prev => prev);
    };

    // Only render if open or animating out
    if (!isOpen && !show) return null;

    return (
        <div
            className={`w-full h-full flex justify-center items-end absolute top-0 left-0 z-[9999] transition-all duration-300 `}
        >
            <div
                className={`
                    bg-neutral-900 rounded-2xl p-6 w-full text-white shadow-2xl relative
                    transform transition-all duration-300
                    h-[550px] max-h-[90vh]
                `}
            >
                <button
                    className="absolute top-4 right-4 text-white text-2xl hover:text-yellow-400 transition-colors cursor-pointer"
                    onClick={handleClose}
                    aria-label="Close"
                >
                    ×
                </button>
                <h2 className="text-center text-lg font-semibold mb-4">Choose Payment Method</h2>
                <div className="flex justify-between mb-4 gap-2">
                    {paymentTabs.map(tab => (
                        <button
                            key={tab.key}
                            className={`flex-1 py-2 rounded-md font-bold transition-colors cursor-pointer hover:opacity-80 ${selectedTab === tab.key ? 'bg-yellow-400 text-black' : 'bg-neutral-800 text-white'}`}
                            onClick={() => setSelectedTab(tab.key)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                <div className="flex flex-col gap-2 mb-4 overflow-y-auto" style={{ maxHeight: '300px' }}>
                    {error && (
                        <div className="text-center py-2 px-4 bg-red-900/50 rounded-lg">
                            <p className="text-red-400 mb-2">{error}</p>
                            <button
                                onClick={handleRetry}
                                className="text-yellow-400 hover:text-yellow-300 underline"
                                disabled={retryCount >= 3}
                            >
                                {retryCount >= 3 ? 'Max retries reached' : 'Retry Connection'}
                            </button>
                        </div>
                    )}
                    {isLoading && !error && chains.length === 0 && (
                        <div className="text-center text-neutral-400 py-4">Loading balances...</div>
                    )}
                    {
                        chains
                            .filter(chain => selectedTab === 'all' || chain.category === selectedTab)
                            .map((chain, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={`w-full border border-white/20 py-2 px-3 rounded-md flex justify-between items-center transition-all duration-300 ${!chain.isDisible && chain.isActive ? 'bg-[#ffc700] text-white' : ''} ${chain.isDisible ? 'opacity-50' : 'cursor-pointer'}`}
                                        onClick={() => !chain.isDisible && handleChainClick(index)}
                                    >
                                        <div className="flex items-center gap-2">
                                            <img src={chain.icon} alt="" className="w-10 h-10" />
                                            <div className="gap-1">
                                                <p className="text-sm font-bold font-[Ubuntu]">{chain.name}</p>
                                                <p className="text-xs font-bold font-[Ubuntu] uppercase">{chain.category}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <p className="text-sm font-bold font-[Ubuntu]">~${chain.balance}</p>
                                            <p className="text-xs font-bold font-[Ubuntu]">{chain.price}</p>
                                        </div>
                                    </div>
                                )
                            })
                    }
                </div>
                <div className="flex items-center my-4">
                    <div className="flex-1 h-px bg-neutral-700" />
                    <span className="mx-2 text-neutral-400 text-sm">Or</span>
                    <div className="flex-1 h-px bg-neutral-700" />
                </div>
                <button className="w-full bg-yellow-400 text-black font-bold py-3 rounded-md text-lg hover:bg-yellow-300 transition-colors cursor-pointer">BUY WITH CARD</button>
            </div>
        </div>
    );
}

export default WalletModal;