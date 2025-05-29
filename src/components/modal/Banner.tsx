import React from 'react';

interface BannerProps {
    isOpen: boolean;
    onClose: () => void;
}

const Banner: React.FC<BannerProps> = ({ isOpen, onClose }) => {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#13010107] bg-opacity-60">
            <div className="relative bg-white/30 backdrop-blur supports-backdrop-blur:bg-white/95  rounded-2xl p-8 min-w-[350px] text-white shadow-2xl w-full max-w-5xl animate__animated animate__fadeInDown animate__2s">
                <button
                    className="absolute top-4 right-4 text-white text-3xl cursor-pointer"
                    onClick={onClose}
                    aria-label="Close"
                >
                    <span className='text-black text-4xl font-bold hover:text-yellow-400 transition-colors p-4'>×</span>
                </button>
                <div className="flex flex-col items-center justify-center w-full gap-8">
                    <div className='w-full flex flex-col justify-center items-start custom-font uppercase tracking-[1.5px] md:tracking-[2.4px] leading-tight'>
                        <div className='w-full flex justify-start items-center'>
                            <h1 className="text-[#ff0000] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[90px] flex">300%</h1>
                            <h1 className="text-[#f7ef22] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[70px] flex ml-3">guaranteed</h1>
                        </div>
                        <div className='w-full flex justify-end items-center'>
                            <h1 className="text-[#f7ef22] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[90px] flex">ROI</h1>
                            <h1 className="text-[#ffc700] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[70px] flex ml-3">on pre-sale!</h1>
                        </div>
                    </div>

                    <div className='w-full flex flex-col justify-center items-start custom-font uppercase tracking-[1.5px] md:tracking-[2.4px] leading-tight'>
                        <div className='w-full flex justify-start items-center'>
                            <h1 className="text-[#ffc700] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[70px] flex">Be careful</h1>
                            <h1 className="text-[#ffc700] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[60px] flex ml-3">about <p className='text-[#000000] ml-3 custome-font-scam'>scams!</p></h1>
                        </div>
                        <div className='w-full flex justify-end items-center'>
                            <h1 className="text-[#f7ef22] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] flex ml-3">The official URL is</h1>
                            <h1 className="text-[#ff0000] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] flex ml-3 custom-font-link cursor-pointer">[www.bullbtctoken.com]</h1>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;