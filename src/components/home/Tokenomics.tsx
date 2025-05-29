import { useState } from "react";
import TokenomicTemplate from "../../assets/tokenomics/tokenomic-template.svg"
import TokenomicTemplate1 from "../../assets/tokenomics/tokenomic-template1.svg"
import TokenomicsDrop1 from "../../assets/tokenomics/tokenomics-right-drop.svg";
import { useTranslation } from "react-i18next";

const Tokenomics = () => {

    const [isCopied, setIsCopied] = useState(false);
    const { t } = useTranslation();

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    };

    return (
        <div id="tokenomics" className="w-full flex flex-col justify-center items-center bg-[#010101] relative">
            <img src={TokenomicsDrop1} alt="" className="absolute -left-32 top-[65%] -translate-y-[65%] w-64 lg:block hidden" style={{ zIndex: 1 }} />
            <img src={TokenomicsDrop1} alt="" className="absolute -right-12 top-[40%] -translate-y-[65%] w-64 lg:block hidden" style={{ zIndex: 1 }} />
            <div className="max-w-7xl w-full flex flex-col justify-center items-center px-2">
                <div className="w-full flex flex-col justify-center items-center pt-20">
                    <h1 className="uppercase md:text-[40px] text-[27px] font-[900] custom-font2 w-full text-center">
                        <span className="text-[#FFC700]">BTC Bull</span> <span className="text-[#ffffff]">{t('tokenomics.title')}</span>
                    </h1>
                    <div className="flex flex-col gap-4 justify-beetween items-center relative rounded-[50px] border-[7px] border-[#FFC700] bg-[#030102] max-w-[1056px] w-full px-4 pt-8">
                        <div className="grid  md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-2 w-full">
                            <div className="w-full flex flex-col justify-center items-center">
                                <div className="relative">
                                    <img src={TokenomicTemplate} alt="" className="w-24" />
                                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-sm">15%</span>
                                </div>
                                <div className="w-full flex flex-col justify-center items-center">
                                    <div className="w-[2px] h-6 bg-[#FFC700]"></div>
                                    <div className="w-[10px] h-[10px] rounded-full border-2 border-[#FFC700]"></div>
                                    <p className="mt-2 font-bold text-white text-lg">{t('tokenomics.bullfund.bull')}</p>
                                    <p className="  font-bold text-white text-lg">{t('tokenomics.bullfund.fund')}</p>
                                </div>
                            </div>
                            <div className="w-full flex flex-col justify-center items-center">
                                <div className="relative">
                                    <img src={TokenomicTemplate} alt="" className="w-24" />
                                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-sm">15%</span>
                                </div>
                                <div className="w-full flex flex-col justify-center items-center">
                                    <div className="w-[2px] h-6 bg-[#FFC700]"></div>
                                    <div className="w-[10px] h-[10px] rounded-full border-2 border-[#FFC700]"></div>
                                    <p className="mt-2 font-bold text-white text-lg">{t('tokenomics.milestoneburnfund.milestone')}</p>
                                    <p className="  font-bold text-white text-lg">{t('tokenomics.milestoneburnfund.burnfund')}</p>
                                </div>
                            </div>
                            <div className="w-full flex flex-col justify-center items-center">
                                <div className="relative">
                                    <img src={TokenomicTemplate} alt="" className="w-24" />
                                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-sm">10%</span>
                                </div>
                                <div className="w-full flex flex-col justify-center items-center">
                                    <div className="w-[2px] h-6 bg-[#FFC700]"></div>
                                    <div className="w-[10px] h-[10px] rounded-full border-2 border-[#FFC700]"></div>
                                    <p className="mt-2 font-bold text-white text-lg">{t('tokenomics.btcbullairdrop.btcbull')}</p>
                                    <p className="  font-bold text-white text-lg">{t('tokenomics.btcbullairdrop.airdrop')}</p>
                                </div>
                            </div>
                            <div className="w-full flex flex-col justify-center items-center">
                                <div className="relative">
                                    <img src={TokenomicTemplate} alt="" className="w-24" />
                                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-sm">10%</span>
                                </div>
                                <div className="w-full flex flex-col justify-center items-center">
                                    <div className="w-[2px] h-6 bg-[#FFC700]"></div>
                                    <div className="w-[10px] h-[10px] rounded-full border-2 border-[#FFC700]"></div>
                                    <p className="mt-2 font-bold text-white text-lg">{t('tokenomics.staking.staking')}</p>
                                    <p className="  font-bold text-white text-lg">{t('tokenomics.staking.distribution')}</p>
                                </div>
                            </div>
                            <div className="w-full flex flex-col justify-center items-center">
                                <div className="relative">
                                    <img src={TokenomicTemplate} alt="" className="w-24" />
                                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-sm">10%</span>
                                </div>
                                <div className="w-full flex flex-col justify-center items-center">
                                    <div className="w-[2px] h-6 bg-[#FFC700]"></div>
                                    <div className="w-[10px] h-[10px] rounded-full border-2 border-[#FFC700]"></div>
                                    <p className="mt-2 font-bold text-white text-lg">{t('tokenomics.exchange.exchange')}</p>
                                    <p className="  font-bold text-white text-lg">{t('tokenomics.exchange.liquidify')}</p>
                                </div>
                            </div>
                            <div className="w-full flex flex-col justify-center items-center">
                                <div className="relative">
                                    <img src={TokenomicTemplate1} alt="" className="w-24" />
                                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-sm">40%</span>
                                </div>
                                <div className="w-full flex flex-col justify-center items-center">
                                    <div className="w-[2px] h-6 bg-[#FFC700]"></div>
                                    <div className="w-[10px] h-[10px] rounded-full border-2 border-[#FFC700]"></div>
                                    <p className="mt-2 font-bold text-white text-lg">{t('tokenomics.marketing.pr')}</p>
                                    <p className="  font-bold text-white text-lg">{t('tokenomics.marketing.marketing')}</p>
                                </div>
                            </div>
                        </div>
                        <h1 className="uppercase md:text-[40px] text-[27px] font-[900] custom-font2 w-full text-center">
                            <span className="text-[#ffffff]">{t('tokenomics.totalsupply')}</span> <span className="text-[#FFC700]">21,000,000,000</span>
                        </h1>
                        <button className="rounded-[48px] border border-[rgba(255,199,0,0.5)] bg-[#ffc7001a] py-[10px] px-4 max-w-[600px] flex md:flex-row flex-col w-full justify-center items-center gap-2 my-[20px] mx-auto mb-[30px] text-[#FFC700]">
                            <p className="font-bold md:text-auto text-[10px]">{t('tokenomics.tokenaddress')}</p>
                            <p className="font-bold md:text-auto text-[10px]">0xc3f822e94c321dD3Ee53ca46B78098ea79b7ec8d</p>
                            <div onClick={() => copyToClipboard("0xc3f822e94c321dD3Ee53ca46B78098ea79b7ec8d")} className="cursor-pointer">
                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg" _ngcontent-ng-c1619907212="" aria-hidden="true" style={{ width: "20px", height: "20px" }}>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.18495 1.0032e-06H8.22345H9.82345H9.86195C10.389 -1.89968e-05 10.8439 -2.8966e-05 11.2184 0.030571C11.6138 0.062871 12.007 0.134191 12.3854 0.326981C12.9499 0.614601 13.4088 1.07355 13.6964 1.63803C13.8892 2.01641 13.9605 2.40963 13.9928 2.80498C14.0234 3.17955 14.0234 3.63431 14.0234 4.16145V4.2V5.8V5.8385C14.0234 6.3656 14.0234 6.8205 13.9928 7.195C13.9605 7.5904 13.8892 7.9836 13.6964 8.362C13.4088 8.9265 12.9499 9.3854 12.3854 9.673C12.007 9.8658 11.6138 9.9371 11.2184 9.9694C10.8826 9.9969 10.4824 9.9997 10.0234 10C10.0231 10.459 10.0203 10.8592 9.99285 11.195C9.96055 11.5904 9.88925 11.9836 9.69645 12.362C9.40885 12.9265 8.94995 13.3854 8.38545 13.673C8.00705 13.8658 7.61385 13.9371 7.21845 13.9694C6.84395 14 6.38915 14 5.86195 14H5.82345H4.22344H4.18492C3.65778 14 3.20299 14 2.82842 13.9694C2.43307 13.9371 2.03985 13.8658 1.66147 13.673C1.09699 13.3854 0.638038 12.9265 0.350417 12.362C0.157627 11.9836 0.0863079 11.5904 0.0540079 11.195C0.0234079 10.8205 0.0234279 10.3657 0.0234379 9.8386V9.8V8.2V8.1615C0.0234279 7.6344 0.0234079 7.1795 0.0540079 6.805C0.0863079 6.4096 0.157627 6.0164 0.350417 5.638C0.638038 5.0735 1.09699 4.6146 1.66147 4.32698C2.03985 4.13419 2.43307 4.06287 2.82842 4.03057C3.1642 4.00314 3.56443 4.00031 4.02347 4.00003C4.02375 3.54099 4.02658 3.14076 4.05401 2.80498C4.08631 2.40963 4.15763 2.01641 4.35043 1.63803C4.63805 1.07355 5.09695 0.614601 5.66145 0.326981C6.03985 0.134191 6.43305 0.062871 6.82845 0.030571C7.20295 -2.8966e-05 7.65785 -1.89968e-05 8.18495 1.0032e-06ZM6.02355 4.00003C6.48255 4.00031 6.88275 4.00314 7.21845 4.03057C7.61385 4.06287 8.00705 4.13419 8.38545 4.32698C8.94995 4.6146 9.40885 5.0735 9.69645 5.638C9.88925 6.0164 9.96055 6.4096 9.99285 6.805C10.0203 7.1407 10.0231 7.5409 10.0234 7.9999C10.4885 7.9995 10.8064 7.9964 11.0556 7.9761C11.3272 7.9539 11.4279 7.9162 11.4774 7.891C11.6655 7.7951 11.8185 7.6422 11.9144 7.454C11.9396 7.4046 11.9773 7.3038 11.9995 7.0322C12.0226 6.7488 12.0234 6.3766 12.0234 5.8V4.2C12.0234 3.62345 12.0226 3.25118 11.9995 2.96784C11.9773 2.69618 11.9396 2.59546 11.9144 2.54601C11.8185 2.35785 11.6655 2.20487 11.4774 2.109C11.4279 2.0838 11.3272 2.04613 11.0556 2.02393C10.7722 2.00078 10.3999 2 9.82345 2H8.22345C7.64685 2 7.27465 2.00078 6.99125 2.02393C6.71965 2.04613 6.61885 2.0838 6.56945 2.109C6.38125 2.20487 6.22835 2.35785 6.13245 2.54601C6.10725 2.59546 6.06955 2.69618 6.04735 2.96784C6.02705 3.21699 6.02395 3.53491 6.02355 4.00003ZM2.56945 6.109C2.6189 6.0838 2.71962 6.0461 2.99128 6.0239C3.27462 6.0008 3.64689 6 4.22344 6H5.82345C6.39995 6 6.77225 6.0008 7.05565 6.0239C7.32725 6.0461 7.42795 6.0838 7.47745 6.109C7.66555 6.2049 7.81855 6.3579 7.91445 6.546C7.93965 6.5955 7.97735 6.6962 7.99955 6.9678C8.02265 7.2512 8.02345 7.6235 8.02345 8.2V9.8C8.02345 10.3766 8.02265 10.7488 7.99955 11.0322C7.97735 11.3038 7.93965 11.4046 7.91445 11.454C7.81855 11.6422 7.66555 11.7951 7.47745 11.891C7.42795 11.9162 7.32725 11.9539 7.05565 11.9761C6.77225 11.9992 6.39995 12 5.82345 12H4.22344C3.64689 12 3.27462 11.9992 2.99128 11.9761C2.71962 11.9539 2.6189 11.9162 2.56945 11.891C2.38129 11.7951 2.22831 11.6422 2.13244 11.454C2.10724 11.4046 2.06957 11.3038 2.04737 11.0322C2.02422 10.7488 2.02344 10.3766 2.02344 9.8V8.2C2.02344 7.6235 2.02422 7.2512 2.04737 6.9678C2.06957 6.6962 2.10724 6.5955 2.13244 6.546C2.22831 6.3579 2.38129 6.2049 2.56945 6.109Z" fill="#FFC700" _ngcontent-ng-c1619907212=""></path>
                                </svg>
                            </div>
                        </button>
                        <span className={`${isCopied ? "block" : "hidden"} text-green-600 text-lg font-medium pb-4`}>{t('tokenomics.copied')}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tokenomics;