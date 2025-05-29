import React from 'react';
import BestWalletIcon from '../../assets/bestwallet.png'
import { useTranslation } from 'react-i18next';
import { useConnect } from "wagmi"
import { useWallet } from "../../context/walletContext";

declare global {
    interface Window {
        ethereum?: any;
    }
}

const walletOptions = [
    {
        name: 'Best Wallet',
        icon: BestWalletIcon,
    },
    {
        name: 'Wallet Connect',
        icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" _ngcontent-ng-c1167250153="" aria-hidden="true" style={{ width: '32px', height: '32px' }}>
            <path fillRule="evenodd" clipRule="evenodd" d="M16 0C24.8375 0 32 7.1625 32 16C32 24.8375 24.8375 32 16 32C7.1625 32 0 24.8375 0 16C0 7.1625 7.1625 0 16 0Z" fill="url(#paint0_radial_2444_15655)" _ngcontent-ng-c1167250153=""></path>
            <path d="M10.1687 12.3563C13.3875 9.2126 18.6125 9.2126 21.8312 12.3563L22.2187 12.7376C22.3812 12.8938 22.3812 13.1501 22.2187 13.3063L20.8937 14.6001C20.8125 14.6813 20.6812 14.6813 20.6 14.6001L20.0687 14.0813C17.8187 11.8876 14.1812 11.8876 11.9312 14.0813L11.3625 14.6376C11.2812 14.7188 11.15 14.7188 11.0687 14.6376L9.7437 13.3438C9.5812 13.1876 9.5812 12.9313 9.7437 12.7751L10.1687 12.3563ZM24.575 15.0313L25.7562 16.1813C25.9187 16.3376 25.9187 16.5938 25.7562 16.7501L20.4375 21.9438C20.275 22.1001 20.0125 22.1001 19.8562 21.9438L16.0812 18.2563C16.0437 18.2188 15.975 18.2188 15.9375 18.2563L12.1625 21.9438C12 22.1001 11.7375 22.1001 11.5812 21.9438L6.2437 16.7501C6.0812 16.5938 6.0812 16.3376 6.2437 16.1813L7.42495 15.0313C7.58745 14.8751 7.84995 14.8751 8.0062 15.0313L11.7812 18.7188C11.8187 18.7563 11.8875 18.7563 11.925 18.7188L15.7 15.0313C15.8625 14.8751 16.125 14.8751 16.2812 15.0313L20.0562 18.7188C20.0937 18.7563 20.1625 18.7563 20.2 18.7188L23.975 15.0313C24.15 14.8751 24.4125 14.8751 24.575 15.0313Z" fill="white" _ngcontent-ng-c1167250153=""></path>
            <defs _ngcontent-ng-c1167250153="">
                <radialGradient id="paint0_radial_2444_15655" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9.91821e-05 16.0005) scale(32)" _ngcontent-ng-c1167250153="">
                    <stop stopColor="#5D9DF6" _ngcontent-ng-c1167250153=""></stop>
                    <stop offset="1" stopColor="#006FFF" _ngcontent-ng-c1167250153=""></stop>
                </radialGradient>
            </defs>
        </svg>, // Replace with actual icon
    },
    {
        name: 'MetaMask',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="212" height="189" viewBox="0 0 212 189" id="metamask" _ngcontent-ng-c1167250153="" aria-hidden="true" style={{ width: '32px', height: '32px' }}><g fill="none" fillRule="evenodd" _ngcontent-ng-c1167250153=""><polygon fill="#CDBDB2" points="60.75 173.25 88.313 180.563 88.313 171 90.563 168.75 106.313 168.75 106.313 180 106.313 187.875 89.438 187.875 68.625 178.875" _ngcontent-ng-c1167250153=""></polygon>
            <polygon fill="#CDBDB2" points="105.75 173.25 132.75 180.563 132.75 171 135 168.75 150.75 168.75 150.75 180 150.75 187.875 133.875 187.875 113.063 178.875" transform="matrix(-1 0 0 1 256.5 0)" _ngcontent-ng-c1167250153=""></polygon><polygon fill="#393939" points="90.563 152.438 88.313 171 91.125 168.75 120.375 168.75 123.75 171 121.5 152.438 117 149.625 94.5 150.188" _ngcontent-ng-c1167250153=""></polygon><polygon fill="#F89C35" points="75.375 27 88.875 58.5 95.063 150.188 117 150.188 123.75 58.5 136.125 27" _ngcontent-ng-c1167250153=""></polygon><polygon fill="#F89D35" points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813" _ngcontent-ng-c1167250153=""></polygon><polygon fill="#D87C30" points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375" _ngcontent-ng-c1167250153=""></polygon><polygon fill="#EA8D3A" points="46.125 101.813 65.25 119.813 65.25 137.813" _ngcontent-ng-c1167250153=""></polygon>
            <polygon fill="#F89D35" points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375" _ngcontent-ng-c1167250153=""></polygon>
            <polygon fill="#EB8F35" points="65.25 138.375 60.75 173.25 90.563 152.438" _ngcontent-ng-c1167250153=""></polygon>
            <polygon fill="#EA8E3A" points="92.25 102.375 95.063 150.188 86.625 125.719" _ngcontent-ng-c1167250153=""></polygon>
            <polygon fill="#D87C30" points="39.375 138.938 65.25 138.375 60.75 173.25" _ngcontent-ng-c1167250153=""></polygon>
            <polygon fill="#EB8F35" points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75" _ngcontent-ng-c1167250153=""></polygon>
            <polygon fill="#E8821E" points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938" _ngcontent-ng-c1167250153=""></polygon>
            <polygon fill="#DFCEC3" points="60.75 173.25 90.563 152.438 88.313 170.438 88.313 180.563 68.063 176.625" _ngcontent-ng-c1167250153=""></polygon>
            <polygon fill="#DFCEC3" points="121.5 173.25 150.75 152.438 148.5 170.438 148.5 180.563 128.25 176.625" transform="matrix(-1 0 0 1 272.25 0)" _ngcontent-ng-c1167250153=""></polygon>
            <polygon fill="#393939" points="70.313 112.5 64.125 125.438 86.063 119.813" transform="matrix(-1 0 0 1 150.188 0)" _ngcontent-ng-c1167250153=""></polygon>
            <polygon fill="#E88F35" points="12.375 .563 88.875 58.5 75.938 27" _ngcontent-ng-c1167250153=""></polygon>
            <path fill="#8E5A30" d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z" _ngcontent-ng-c1167250153=""></path><g transform="matrix(-1 0 0 1 211.5 0)" _ngcontent-ng-c1167250153=""><polygon fill="#F89D35" points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813" _ngcontent-ng-c1167250153=""></polygon><polygon fill="#D87C30" points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375" _ngcontent-ng-c1167250153=""></polygon><polygon fill="#EA8D3A" points="46.125 101.813 65.25 119.813 65.25 137.813" _ngcontent-ng-c1167250153=""></polygon><polygon fill="#F89D35" points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375" _ngcontent-ng-c1167250153=""></polygon><polygon fill="#EB8F35" points="65.25 138.375 60.75 173.25 90 153" _ngcontent-ng-c1167250153=""></polygon><polygon fill="#EA8E3A" points="92.25 102.375 95.063 150.188 86.625 125.719" _ngcontent-ng-c1167250153=""></polygon><polygon fill="#D87C30" points="39.375 138.938 65.25 138.375 60.75 173.25" _ngcontent-ng-c1167250153=""></polygon><polygon fill="#EB8F35" points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75" _ngcontent-ng-c1167250153=""></polygon><polygon fill="#E8821E" points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938" _ngcontent-ng-c1167250153=""></polygon><polygon fill="#393939" points="70.313 112.5 64.125 125.438 86.063 119.813" transform="matrix(-1 0 0 1 150.188 0)" _ngcontent-ng-c1167250153=""></polygon><polygon fill="#E88F35" points="12.375 .563 88.875 58.5 75.938 27" _ngcontent-ng-c1167250153=""></polygon><path fill="#8E5A30" d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z" _ngcontent-ng-c1167250153=""></path></g></g></svg>,
    },
    {
        name: 'Coinbase Wallet',
        icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 2500 2500" style={{ width: '32px', height: '32px' }} xmlSpace="preserve" aria-hidden="true">
            <style>
                {`
                    .st0{fill:none}
                    .st1{fill:#FFFFFF}
                    .st2{fill:#0052FF}
                `}
            </style>
            <g id="Layer_x0020_1" _ngcontent-ng-c1167250153="">
                <rect y="0" className="st0" width="2500" height="2500" _ngcontent-ng-c1167250153=""></rect>
                <g id="_1556951675616" _ngcontent-ng-c1167250153="">
                    <g id="Layer_x0020_1_0" _ngcontent-ng-c1167250153="">
                        <rect y="0" className="st0" width="2500" height="2500" _ngcontent-ng-c1167250153=""></rect>
                        <g id="_1842137537696" _ngcontent-ng-c1167250153="">
                            <path className="st1" d="M1250,0L1250,0c690.2,0,1250,559.8,1250,1250l0,0c0,690.2-559.8,1250-1250,1250l0,0      C559.8,2500,0,1940.2,0,1250l0,0C0,559.8,559.8,0,1250,0z" _ngcontent-ng-c1167250153=""></path>
                            <path className="st2" d="M1250.4,1689.5c-242.8,0-439.4-196.7-439.4-439.5s196.7-439.4,439.4-439.4c217.5,0,398.1,158.6,432.9,366.2      H2126c-37.4-451.2-414.9-805.7-875.6-805.7c-485.2,0-878.9,393.7-878.9,878.9s393.7,878.9,878.9,878.9      c460.7,0,838.3-354.5,875.6-805.7h-443.1C1648.1,1530.9,1467.9,1689.5,1250.4,1689.5L1250.4,1689.5z" _ngcontent-ng-c1167250153=""></path>
                        </g>
                    </g>
                </g>
            </g>
        </svg>,
    },
];

interface BuyNowModalProps {
    open: boolean;
    onClose: () => void;
    setNeedWallet?: (value: boolean) => void;
}

const BuyNowModal: React.FC<BuyNowModalProps> = ({ open, onClose, setNeedWallet }) => {
    const { t } = useTranslation();
    const { connect, connectors } = useConnect();
    const { connectWallet } = useWallet();

    if (!open) return null;

    const handleNeedWallet = () => {
        setNeedWallet && setNeedWallet(true);
        onClose();
    }

    const handleWallet = (wallet: string) => {
        if (wallet === "MetaMask") {
            connect({ connector: connectors[2] });
            connectWallet();
            setTimeout(() => {
                onClose();
            }, 2000);
        }
    }

    return (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#a58608bd] bg-opacity-60">
            <div className="relative bg-neutral-900 rounded-2xl p-8 min-w-[350px] text-white shadow-2xl w-full max-w-sm animate__animated animate__fadeInDown animate__2s">
                <button
                    className="absolute top-4 right-4 text-white text-2xl hover:text-yellow-400 transition-colors cursor-pointer"
                    onClick={onClose}
                    aria-label="Close"
                >
                    ×
                </button>
                <h2 className="text-center text-xl font-bold mb-2">{t('modal.walletmodal.title')}</h2>
                <p className="text-center mb-5 text-sm text-neutral-200">
                    {t('modal.walletmodal.description.start')}
                    <a
                        href="https://bestwallet.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:no-underline"
                    >
                        {t('modal.walletmodal.description.bestwallet.text')}
                    </a>{' '}
                    {t('modal.walletmodal.description.end')}
                </p>
                <div className="flex flex-col gap-3 mb-4">
                    {walletOptions.map((wallet) => (
                        <button
                            onClick={() => handleWallet(wallet.name)}
                            key={wallet.name}
                            className="flex items-center justify-between bg-yellow-400 cursor-pointer text-neutral-900 font-semibold rounded-lg px-4 py-3 w-full hover:bg-yellow-300 transition-colors"
                        >
                            <span>{wallet.name}</span>
                            {typeof wallet.icon === 'string' ? (
                                <img src={wallet.icon} alt={wallet.name} className="w-[33px] h-[33px] ml-3" />
                            ) : (
                                wallet.icon
                            )}
                        </button>
                    ))}
                </div>
                <div className="flex items-center mt-4 w-full border py-4 border-white/20 rounded-md justify-center cursor-pointer" onClick={handleNeedWallet}>
                    <svg aria-hidden="true" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '20px', height: '19px', marginRight: '5px' }}>
                        <path d="M1.57568 4.60616C1.57568 2.69827 3.12234 1.15161 5.03023 1.15161H15.3939C17.3018 1.15161 18.8484 2.69826 18.8484 4.60616V10.3637C18.8484 12.2716 17.3018 13.8183 15.3939 13.8183H5.03023C3.12234 13.8183 1.57568 12.2716 1.57568 10.3637V4.60616Z" stroke="currentColor" strokeWidth="2" _ngcontent-ng-c1167250153=""></path>
                        <path d="M1 4.79293C1 2.435 3.31004 0.770014 5.54697 1.51566L12.4561 3.81869C13.8667 4.2889 14.8182 5.60901 14.8182 7.09596V13.6313C14.8182 15.9892 12.5081 17.6542 10.2712 16.9086L3.36212 14.6056C1.95149 14.1353 1 12.8152 1 11.3283V4.79293Z" fill="white" stroke="currentColor" strokeWidth="2" _ngcontent-ng-c1167250153=""></path><circle cx="10.3863" cy="10.1894" r="1.32574" fill="currentColor" _ngcontent-ng-c1167250153=""></circle>
                    </svg>
                    <label htmlFor="noWallet" className="text-sm">{t('modal.walletmodal.button')}</label>
                </div>
            </div>
        </div>
    );
};

export default BuyNowModal;
