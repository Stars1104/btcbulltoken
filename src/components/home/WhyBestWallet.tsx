import WhyBestWalletBackground from "../../assets/whybestwallet/bullish-desig-bg.png";
import BitCoinIcon from "../../assets/whybestwallet/bitcoin-icon.svg";
import AboutBull from "../../assets/hero/about-bull.webp";
import BullishMobileGraphic from "../../assets/whybestwallet/bullish-mobile-graphic.webp";
import RoadmapDrop2 from "../../assets/roadmap/roadmap-drop-2.svg";
import { useTranslation } from "react-i18next";

const WhyBestWallet = () => {

    const { t } = useTranslation();

    return (
        <div className="w-full flex flex-col justify-center items-center relative bg-[#050d13] md:py-8 py-20">
            <img src={RoadmapDrop2} alt="" className="absolute left-0 top-[65%] -translate-y-[65%] w-20 lg:block hidden" style={{ zIndex: 1 }} />
            <div className="max-w-7xl w-full min-h-[800px] flex flex-col justify-start items-start px-2 relative">
                <img src={WhyBestWalletBackground} alt="" className="absolute inset-0 w-full h-full object-contain md:block hidden" style={{ zIndex: 0 }} />
                <img src={AboutBull} alt="" className="block md:hidden" style={{ zIndex: 1 }} />

                <div className="md:w-[35%] w-full flex flex-col justify-center md:items-start items-center z-50 md:mt-52">
                    <h1 className="uppercase md:text-[28px] text-[27px] font-[900] custom-font2 w-full md:text-start text-center">
                        <span className="text-[#FFC700]">{t('bestwallet.title.first')}</span> <span className="text-[#ffffff]">{t('bestwallet.title.second')}!</span>
                    </h1>
                    <p className="text-[#ffffff] text-[20px] italic w-full mt-6 text-center">
                        {t('bestwallet.description')}
                    </p>
                    <a href="#faq" className="bg-[#1f1f1f] text-[#ffffff] border-3 border-[#FFC700] px-16 cursor-pointer py-2 rounded-full mt-4 font-bold">{t('bestwallet.findoutbutton')}</a>
                </div>

                <img src={BullishMobileGraphic} alt="" className="block md:hidden mt-4" style={{ zIndex: 1 }} />

                <div className="md:w-[50%] w-full flex flex-col justify-center items-start z-50 mt-4">
                    <h1 className="uppercase md:text-[28px] text-[27px] font-[900] custom-font2 w-full md:text-start text-center">
                        <span className="text-[#ffffff]">{t('bestwallet.why')}</span>
                        <a className="text-[#5960ff] ml-1 cursor-pointer underline hover:no-underline" href="https://bestwallet.com/en/?_gl=1%2Ax9ledr%2A_gcl_au%2AOTY0NTY3MjM4LjE3NDgxNjEyNDI." target="_blank" rel="noopener noreferrer">Best Wallet?</a>
                    </h1>
                    <p className="text-[#ffffff] text-[20px] italic w-full mt-6 text-center">
                        {t('bestwallet.description1')}
                    </p>
                </div>

                <a className="absolute md:bottom-0 -bottom-20 left-[60%] transform -translate-x-1/2" href="https://bestwallet.com/en/?_gl=1%2Ax9ledr%2A_gcl_au%2AOTY0NTY3MjM4LjE3NDgxNjEyNDI." target="_blank" rel="noopener noreferrer"><img src={BitCoinIcon} alt="" /></a>
            </div>
        </div>
    )
}

export default WhyBestWallet;