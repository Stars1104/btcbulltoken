import InfoIcon from '../../assets/hero/info.svg';
import React from 'react';

interface WarningProps {
    open: boolean;
    content?: string;
    onClose: () => void;
    onTryAgain: (isTryagain: boolean) => void;
}

const Warning: React.FC<WarningProps> = ({ open, content, onClose, onTryAgain }) => {

    if (!open) return null;

    const handleTryAgain = () => {
        onTryAgain(true);
        onClose();
    }
    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-60  ${open ? 'block' : 'hidden'}`}>
            <div className="relative bg-neutral-900 rounded-2xl p-8 min-w-[350px] text-white shadow-2xl w-full max-w-sm animate__animated animate__bounceIn animate animate__1s flex flex-col items-center">
                <button
                    className="absolute top-4 right-4 text-white text-2xl hover:text-yellow-400 transition-colors cursor-pointer"
                    onClick={onClose}
                    aria-label="Close"
                >
                    ×
                </button>
                <div className="flex flex-col items-center justify-center w-full">
                    <div className="bg-[#2a3a4e] rounded-full w-20 h-20 flex items-center justify-center mb-4 border-4 border-[#3b4b5e]">
                        <img src={InfoIcon} alt="Info" className="w-12 h-12" />
                    </div>
                    <p className="text-center text-base font-medium mb-8 mt-2 px-2">
                        {content}
                    </p>
                    <button
                        className="bg-[#b91c1c] hover:bg-[#d32f2f] text-white font-bold py-2 px-8 rounded-full text-lg shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#b91c1c] focus:ring-opacity-50"
                        onClick={handleTryAgain}
                    >
                        Try again
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Warning;