import React from 'react';
import { useTranslation } from 'react-i18next';

interface WithdrawModalProps {
    open: boolean;
    onClose: () => void;
    onWithdraw: () => void;
    stakedAmount: number | string;
}

const Withdraw: React.FC<WithdrawModalProps> = ({ open, onClose, onWithdraw, stakedAmount }) => {
    const { t } = useTranslation();

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#a58608bd] bg-opacity-60">
            <div className="relative bg-neutral-900 rounded-2xl p-8 min-w-[350px] text-white shadow-2xl w-full max-w-sm animate__animated animate__fadeInDown animate__2s flex flex-col items-center">
                <button
                    className="absolute top-4 right-4 text-white text-2xl hover:text-yellow-400 transition-colors cursor-pointer"
                    onClick={onClose}
                    aria-label="Close"
                >
                    ×
                </button>
                <h2 className="text-center text-xl font-bold mb-6">{t('modal.widthdraw.title')}</h2>
                <div className="flex flex-col items-center mb-8 w-full">
                    <span className="text-sm text-neutral-300 mb-1">{t('modal.widthdraw.description')}</span>
                    <span className="text-3xl font-bold text-yellow-400 mb-1">{stakedAmount}</span>
                    <span className="text-xs font-semibold text-yellow-400">BTCBULL</span>
                </div>
                <div className="flex gap-4 w-full">
                    <button
                        className="flex-1 bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold py-2 rounded-full text-lg shadow-lg transition-colors hover:bg-yellow-400 hover:text-black"
                        onClick={onClose}
                    >
                        {t('modal.widthdraw.cancel')}
                    </button>
                    <button
                        className="flex-1 bg-yellow-400 text-black font-bold py-2 rounded-full text-lg shadow-lg transition-colors hover:bg-yellow-500"
                        onClick={onWithdraw}
                    >
                        {t('modal.widthdraw.widthdraw')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Withdraw;
