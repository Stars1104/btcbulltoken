import Logo from "../../assets/logo.png"
import Trust from "../../assets/trust.png"
import CoinGecko from "../../assets/coingecko.png"
import { useTranslation } from "react-i18next"

const TrustWidget = () => {

    const { t } = useTranslation();

    return (
        <div className="w-full flex justify-center items-center py-6 md:py-12 bg-cover bg-no-repeat bg-center" >
            <div className="w-full max-w-5xl flex flex-col lg:flex-row justify-center items-center px-2 md:px-8 gap-8 lg:gap-4">
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-6 md:gap-12">
                    <div className="w-full flex justify-start items-center gap-4">
                        <img src={Logo} alt="Logo" className="w-10 h-10 md:w-14 md:h-14 object-cover" />
                        <h1 className="custom-font uppercase tracking-[2.4px] leading-none">
                            <span className="text-white text-[24px] md:text-[35px]">Bull Token</span>
                        </h1>
                    </div>
                    <h1 className="custom-font3 uppercase tracking-[2.4px] leading-none text-center lg:text-left">
                        <span className="text-[#f7ef22] text-[40px] md:text-[50px] lg:text-[75px]">{t('trust.title')}</span>
                    </h1>
                    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
                        <div className="w-full md:w-[60%] flex flex-col justify-center items-center md:items-start gap-2">
                            <h1 className="text-white text-[28px] md:text-[35px] uppercase font-bold">{t('trust.rated')}</h1>
                            <div className="flex justify-center md:justify-start items-center gap-4">
                                <img src={CoinGecko} alt="Logo" className="rounded-full w-10 h-10 md:w-14 md:h-14 object-cover" />
                                <h1 className="text-white text-[28px] md:text-[45px] font-bold">Coingecko</h1>
                            </div>
                        </div>
                        <div className="w-full md:w-[40%] flex justify-center items-center">
                            <img src={Trust} alt="" className="w-[50%] md:w-[70%]" />
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-start bg-[#000000d9] rounded-xl px-4 md:px-6 py-2 gap-4 border-4 md:border-6 border-[#FFC700]">
                    <h1 className="text-white text-[24px] md:text-[30px] font-bold">{t('trust.tokenscoretitle')}</h1>
                    <div className="flex justify-start items-center">
                        <span className="text-[40px] md:text-[50px] font-[900] leading-none text-green-500">10/10</span>
                    </div>
                    <div className="w-full flex flex-col justify-start items-start">
                        <div className="w-full flex justify-between items-center p-2 md:p-3 border-t border-t-white">
                            <h1 className="text-white text-[16px] md:text-[20px] font-bold">{t('trust.liquidity')}</h1>
                            <h1 className="text-white text-[16px] md:text-[20px] font-bold">3.0</h1>
                        </div>
                        <div className="w-full flex justify-between items-center p-2 md:p-3 border-t border-t-white">
                            <h1 className="text-white text-[16px] md:text-[20px] font-bold">{t('trust.scale')}</h1>
                            <h1 className="text-white text-[16px] md:text-[20px] font-bold">1.0</h1>
                        </div>
                        <div className="w-full flex justify-between items-center p-2 md:p-3 border-t border-t-white">
                            <h1 className="text-white text-[16px] md:text-[20px] font-bold">{t('trust.cybersecurity')}</h1>
                            <h1 className="text-white text-[16px] md:text-[20px] font-bold">0.5</h1>
                        </div>
                        <div className="w-full flex justify-between items-center p-2 md:p-3 border-t border-t-white">
                            <h1 className="text-white text-[16px] md:text-[20px] font-bold">{t('trust.apicoverage')}</h1>
                            <h1 className="text-white text-[16px] md:text-[20px] font-bold">0.5</h1>
                        </div>
                        <div className="w-full flex justify-between items-center p-2 md:p-3 border-t border-t-white">
                            <h1 className="text-white text-[16px] md:text-[20px] font-bold">{t('trust.team')}</h1>
                            <h1 className="text-white text-[16px] md:text-[20px] font-bold">2.0</h1>
                        </div>
                        <div className="w-full flex justify-between items-center p-2 md:p-3 border-t border-t-white">
                            <h1 className="text-white text-[16px] md:text-[20px] font-bold">{t('trust.incident')}</h1>
                            <h1 className="text-white text-[16px] md:text-[20px] font-bold">2.0</h1>
                        </div>
                        <div className="w-full flex justify-between items-center p-2 md:p-3 border-t border-t-white">
                            <h1 className="text-white text-[16px] md:text-[20px] font-bold">{t('trust.ror')}</h1>
                            <h1 className="text-white text-[16px] md:text-[20px] font-bold">1.0</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrustWidget;