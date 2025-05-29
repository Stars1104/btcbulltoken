import PresaleBackground from "../../assets/presale/presale-bg.webp";
import StepBoxImage from "../../assets/presale/step-box.svg";
import LineImage from "../../assets/presale/line.svg";
import LineImage2 from "../../assets/presale/line1.svg";
import LineImage3 from "../../assets/presale/line2.svg";
import LineImage4 from "../../assets/presale/line3.svg";
import LineImage5 from "../../assets/presale/line4.svg";
import BTCBullIcon from "../../assets/presale/btc-bull-icon.svg";
import { useTranslation } from "react-i18next";

const Presale = () => {
    const { t } = useTranslation();
    return (
        <div id="presale" className="w-full flex min-h-[900px] flex-col justify-center items-center bg-cover bg-no-repeat bg-center relative bg-[#050d13] z-[999] py-10 md:py-0" style={{ backgroundImage: `url(${PresaleBackground})` }}>
            <div className="max-w-7xl w-full flex flex-col justify-center items-center px-4 md:px-2">
                <h1 className="uppercase md:text-[40px] text-[24px] font-[900] custom-font2 w-full text-center">
                    <span className="text-[#FFC700]">How To Buy </span> <span className="text-[#ffffff]">BTC's Best Crypto Presale</span>
                </h1>

                <div className="w-full flex justify-center xl:items-start items-center xl:flex-row flex-col xl:mt-32 mt-12 xl:gap-0 gap-8 px-2">
                    <div className="xl:w-[25%] lg:w-[35%] md:w-[60%] w-[85%] xl:rotate-[-10deg] rotate-[-2deg] relative z-50">
                        <img src={StepBoxImage} alt="" className="w-full" />
                        <img src={LineImage} alt="" className="absolute bottom-20 left-2 xl:block hidden" />
                        <img src={BTCBullIcon} alt="" className="absolute top-3 right-6" />
                        <div className="xl:w-[90%] w-full h-full p-4 gap-2 flex flex-col justify-center items-start absolute bottom-0 left-2 text-white">
                            <span className="text-[#FFC700] uppercase custom-font2 text-[18px] md:text-[20px] text-shadow-xl">{t('presale.title.step.step1.first')}</span>
                            <span className="text-xs md:text-sm italic">
                                {t('presale.title.step.step1.description1')} <a href="" className="text-[#FFC700] cursor-pointer">{t('presale.title.step.step1.walletLink')}</a>. {t('presale.title.step.step1.description2')}
                            </span>
                        </div>
                    </div>
                    <div className="xl:w-[25%] lg:w-[35%] md:w-[60%] w-[85%] xl:rotate-[10deg] rotate-[2deg] xl:mt-[220px] mt-4 relative">
                        <img src={StepBoxImage} alt="" className="w-full" />
                        <img src={LineImage2} alt="" className="absolute bottom-14 -left-40 -z-10 xl:block hidden" />
                        <img src={BTCBullIcon} alt="" className="absolute top-3 right-6" />
                        <div className="xl:w-[90%] w-full h-full p-4 gap-2 flex flex-col justify-center items-start absolute bottom-0 left-2 text-white">
                            <span className="text-[#FFC700] uppercase custom-font2 text-[18px] md:text-[20px] text-shadow-xl">{t('presale.title.step.step2.first')}</span>
                            <span className="text-xs md:text-sm italic">
                                {t('presale.title.step.step2.description1')} <a href="" className="text-[#FFC700] cursor-pointer">{t('presale.title.step.step2.walletLink')}</a> {t('presale.title.step.step2.description2')}
                            </span>
                        </div>
                    </div>
                    <div className="xl:w-[25%] lg:w-[35%] md:w-[60%] w-[85%] xl:rotate-[10deg] rotate-[2deg] relative z-50 xl:-left-4 mt-4">
                        <img src={StepBoxImage} alt="" className="w-full" />
                        <img src={LineImage3} alt="" className="absolute -bottom-[230px] -rotate-3 left-8 z-10 xl:block hidden" />
                        <img src={BTCBullIcon} alt="" className="absolute top-3 right-6" />
                        <div className="xl:w-[90%] w-full h-full p-4 gap-2 flex flex-col justify-center items-start absolute bottom-0 left-2 text-white">
                            <span className="text-[#FFC700] uppercase custom-font2 text-[18px] md:text-[20px] text-shadow-xl">{t('presale.title.step.step3.first')}</span>
                            <span className="text-xs md:text-sm italic">{t('presale.title.step.step3.description1')}</span>
                        </div>
                    </div>
                    <div className="xl:w-[25%] lg:w-[35%] md:w-[60%] w-[85%] xl:rotate-[-10deg] rotate-[-2deg] xl:mt-[270px] mt-4 relative">
                        <img src={StepBoxImage} alt="" className="w-full" />
                        <img src={LineImage4} alt="" className="absolute -top-[280px] rotate-[20deg] -left-20 z-10 xl:block hidden" />
                        <img src={LineImage5} alt="" className="absolute -bottom-12 -right-48 z-10 xl:block hidden" />
                        <img src={BTCBullIcon} alt="" className="absolute top-3 right-6" />
                        <div className="xl:w-[90%] w-full h-full p-4 gap-2 flex flex-col justify-center items-start absolute bottom-0 left-2 text-white">
                            <span className="text-[#FFC700] uppercase custom-font2 text-[18px] md:text-[20px] text-shadow-xl">{t('presale.title.step.step4.first')}</span>
                            <span className="text-xs md:text-sm italic">{t('presale.title.step.step4.description1')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Presale;