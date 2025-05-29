import React, { useEffect } from 'react';

interface Loading {
    openModal: boolean;
    onClose: () => void;
    setWarning: (value: boolean) => void;
}

const Loading: React.FC<Loading> = ({ openModal, onClose, setWarning }) => {

    if (!openModal) return null;

    useEffect(() => {
        setTimeout(() => {
            onClose();
            setWarning(true);
        }, 5000);
    }, [onClose])

    return (
        <div className="fixed inset-0 z-[99999999] flex items-center justify-center bg-[#a58608bd] bg-opacity-60">
            <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-[#FFC700]" />
        </div>
    );
};

export default Loading;