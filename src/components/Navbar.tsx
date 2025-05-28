import { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import ButtonOutline from "../assets/landing/btn-outline.svg";
import ButtonBG from "../assets/landing/btn-bg.svg";
import Telegram from "../assets/landing/telegram.svg";
import Twitter from "../assets/landing/twitter.svg";

import Arabic from "../assets/flags/ar.svg";
import Bulgarian from "../assets/flags/bg.svg";
import English from "../assets/flags/uk.svg";
import Chinese from "../assets/flags/cn.svg";
import Czech from "../assets/flags/cz.svg";
import Dutch from "../assets/flags/nl.svg";
import Finnish from "../assets/flags/fi.svg";
import French from "../assets/flags/fr.svg";
import German from "../assets/flags/de.svg";
import Greek from "../assets/flags/el.svg";
import Hungarian from "../assets/flags/hu.svg";
import Indonesian from "../assets/flags/id.svg";
import Italian from "../assets/flags/it.svg";
import Japanese from "../assets/flags/jp.svg";
import Korean from "../assets/flags/kr.svg";
import Polish from "../assets/flags/pl.svg";
import Portuguese from "../assets/flags/pt.svg";
import Romanian from "../assets/flags/ro.svg";
import Russian from "../assets/flags/ru.svg";
import Slovak from "../assets/flags/sk.svg";
import Spanish from "../assets/flags/es.svg";
import Swedish from "../assets/flags/sv.svg";
import Thai from "../assets/flags/th.svg";
import Turkish from "../assets/flags/tr.svg";
import Vietnamese from "../assets/flags/vn.svg";
import BuyNowModal from "./modal/BuyNow";
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import NeedWallet from "./modal/NeedWallet";
import { useWallet } from "../context/walletContext";

import { useDisconnect } from 'wagmi'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isBuyNowModalOpen, setIsBuyNowModalOpen] = useState(false);
    const [lang, setLang] = useState("en");
    const [isNeedWalletOpen, setIsNeedWalletOpen] = useState(false);

    const location = useLocation();
    const { t, i18n } = useTranslation();

    const { disconnect } = useDisconnect();
    // const { data: ensName } = useEnsName({ address });
    // const { data: ensAvatar } = useEnsAvatar({ name: ensName! });

    const { isWalletConnected, disconnectWallet } = useWallet();

    useEffect(() => {
        const pathLang = location.pathname.split('/')[1];
        if (pathLang && pathLang !== lang) {
            setLang(pathLang);
            i18n.changeLanguage(pathLang);
        }
    }, [location.pathname]);

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            setTimeout(() => {
                const el = document.querySelector(hash);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }, 100);
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        {
            title: t('navbar.stack'),
            path: `/${lang}/dashboard`
        },
        {
            title: t('navbar.about'),
            path: location.pathname.includes("/dashboard") ? `/${lang}/#about` : `/${lang}#about`
        },
        {
            title: t('navbar.how to buy'),
            path: location.pathname.includes("/dashboard") ? `/${lang}/#presale` : `/${lang}#presale`
        },
        {
            title: t('navbar.tokenomics'),
            path: location.pathname.includes("/dashboard") ? `/${lang}/#tokenomics` : `/${lang}#tokenomics`
        },
        {
            title: t('navbar.faq'),
            path: location.pathname.includes("/dashboard") ? `/${lang}/#faq` : `/${lang}#faq`
        }
    ]

    const [isShowLanguage, setIsShowLanguage] = useState(false);

    const languageData = [
        { label: "Arabic", code: "ar", flag: Arabic },
        { label: "Bulgarian", code: "bg", flag: Bulgarian },
        { label: "English", code: "en", flag: English },
        { label: "Chinese (simplified)", code: "cn", flag: Chinese },
        { label: "Chinese (traditional)", code: "tw", flag: Chinese },
        { label: "Czech", code: "cz", flag: Czech },
        { label: "Dutch", code: "nl", flag: Dutch },
        { label: "Finnish", code: "fi", flag: Finnish },
        { label: "French", code: "fr", flag: French },
        { label: "German", code: "de", flag: German },
        { label: "Greek", code: "el", flag: Greek },
        { label: "Hungarian", code: "hu", flag: Hungarian },
        { label: "Indonesian", code: "id", flag: Indonesian },
        { label: "Italian", code: "it", flag: Italian },
        { label: "Japanese", code: "jp", flag: Japanese },
        { label: "Korean", code: "kr", flag: Korean },
        { label: "Polish", code: "pl", flag: Polish },
        { label: "Portuguese", code: "pt", flag: Portuguese },
        { label: "Romanian", code: "ro", flag: Romanian },
        { label: "Russian", code: "ru", flag: Russian },
        { label: "Slovak", code: "sk", flag: Slovak },
        { label: "Spanish", code: "es", flag: Spanish },
        { label: "Swedish", code: "sv", flag: Swedish },
        { label: "Thai", code: "th", flag: Thai },
        { label: "Turkish", code: "tr", flag: Turkish },
        { label: "Vietnamese", code: "vn", flag: Vietnamese },
    ];

    const handleChangeLanguage = (value: string) => {
        // Update the language state and i18n
        setLang(value);
        i18n.changeLanguage(value);

        // Get the current path without the language prefix
        const currentPath = location.pathname;
        const pathWithoutLang = currentPath.split('/').slice(2).join('/');

        // Use history.pushState to update URL without page reload
        const newPath = pathWithoutLang ? `/${value}/${pathWithoutLang}` : `/${value}`;
        window.history.pushState({}, '', newPath);
    }

    const handleConnectWallet = () => {
        if (isWalletConnected) {
            disconnectWallet();
            disconnect();
        } else {
            setIsBuyNowModalOpen(true);
        }
    }

    return (
        <div className={`w-full h-[65px] fixed top-0 left-0 transition-colors duration-150 z-[9999] ${isScrolled ? 'bg-[#161616]' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto w-full h-full flex items-center justify-between px-4">
                <div className="flex items-center gap-6">
                    <a href="/"><img src={Logo} alt="Logo" className="w-14 h-14" /></a>
                    <div className="hidden xl:flex gap-4 items-center">
                        {navItems.map((item) => (
                            <a
                                key={item.title}
                                href={item.path}
                                className="text-white text-center font-xs text-xs rounded-full border-2 border-[#FFC700] py-[7px] w-auto px-4 bg-[#221d10] cursor-pointer transition duration-300 hover:text-[#FFC700]"
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="hidden xl:flex items-center gap-4">
                    <a href="https://drive.google.com/file/d/1hIc95kANq-kcejWV6KvGPbHBFrlpO60W/view?usp=sharing" target="_blank" className="relative flex justify-center items-center text-base font-[600] text-[#FFC700] rounded-full w-[140px] cursor-pointer transition duration-300 tracking-wider">
                        <img src={ButtonOutline} alt="Button Outline" className="w-full absolute" />
                        {t("navbar.whitepaper")}
                    </a>
                    <button
                        className="relative flex justify-center items-center text-base font-[600] text-[#161616] rounded-full w-[140px] cursor-pointer transition duration-300 tracking-wider"
                        onClick={handleConnectWallet}>

                        <img src={ButtonBG} alt="Button BG" className="w-full absolute z-0" />
                        <span className="relative z-10">{isWalletConnected ? "Disconnect" : t("navbar.buynow")}</span>
                    </button>
                    <button className="flex justify-center items-center py-[5px] gap-2 px-4 border-2 border-[#FFC700] bg-[#221d10] rounded-full text-white font-[600] cursor-pointer text-xs relative" onClick={() => setIsShowLanguage(!isShowLanguage)}>
                        {lang.toUpperCase()}
                        <svg width="25" height="13" viewBox="0 0 25 13" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: "14px", height: "22px" }}>
                            <path d="M23.2647 0.291485L12.4989 10.6523L1.73306 0.291485C1.54072 0.105981 1.2825 0.00212646 1.01361 0.00212646C0.744727 0.00212646 0.48651 0.105981 0.294168 0.291485C0.201033 0.381577 0.127042 0.48911 0.0765298 0.607788C0.0260178 0.726466 0 0.853902 0 0.982632C0 1.11136 0.0260178 1.2388 0.0765298 1.35748C0.127042 1.47615 0.201033 1.58369 0.294168 1.67378L11.7471 12.6981C11.9483 12.8917 12.218 13 12.4989 13C12.7798 13 13.0495 12.8917 13.2507 12.6981L24.7036 1.67591C24.7974 1.58575 24.872 1.47795 24.9229 1.35888C24.9738 1.23981 25 1.11187 25 0.982632C25 0.85339 24.9738 0.725457 24.9229 0.606386C24.872 0.487314 24.7974 0.379517 24.7036 0.289357C24.5113 0.103853 24.2531 0 23.9842 0C23.7153 0 23.4571 0.103853 23.2647 0.289357V0.291485Z" fill="#FFC700" _ngcontent-ng-c2742102330=""></path>
                        </svg>
                        <div className={`absolute top-[40px] right-0 w-[240px] max-h-[270px] overflow-y-auto p-0 bg-[#161616] border-2 border-[rgba(128,128,128,0.11)] ${isShowLanguage ? 'block' : 'hidden'}`}>
                            <div className="flex flex-col gap-2 w-full px-2">
                                {
                                    languageData.map((item) => (
                                        <div key={item.code} className="w-full flex justify-start items-center gap-2 py-1" onClick={() => handleChangeLanguage(item.code)}>
                                            <img src={item.flag} alt={item.label} className="rounded-full border-2 border-white min-w-[25px] h-[25px] w-[25px] overflow-hidden object-cover" />
                                            <span className="text-white text-lg font-[400]">{item.label}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </button>
                    <a href="https://t.me/BTC_Bull_Token" target="_blank" rel="noopener noreferrer">
                        <img src={Telegram} alt="Telegram" />
                    </a>
                    <a href="https://x.com/BTCBULL_TOKEN" target="_blank" rel="noopener noreferrer">
                        <img src={Twitter} alt="Twitter" />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="xl:hidden flex text-white border border-[#FFC700] rounded-lg p-[6px]"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        color="#FFC700"
                    >
                        {isMobileMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`xl:hidden fixed top-[65px] h-screen left-0 w-full px-4 bg-[#1f1f1f] transition-all duration-300 ease-in-out transform ${isMobileMenuOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-full'}`}>
                <div className="flex flex-col items-center py-4 space-y-4">
                    {navItems.map((item) => (
                        <a
                            key={item.title}
                            href={item.path}
                            className={`w-full text-white text-start text-lg font-[500] border-b py-2 hover:bg-[#FFC700] hover:text-[#161616] transition duration-300 px-2 ${item.title === "Staking" ? "active" : ""}`}
                        >
                            {item.title}
                        </a>
                    ))}
                    <div className="flex gap-4 mt-2">
                        <a href="">
                            <img src={Telegram} alt="Telegram" className="w-8 h-8" />
                        </a>
                        <a href="">
                            <img src={Twitter} alt="Twitter" className="w-8 h-8" />
                        </a>
                    </div>
                    <button className="w-full flex justify-between items-center py-3 gap-2 px-4 border-1 border-[#FFC700] bg-[#221d10] rounded-full text-white font-[600] cursor-pointer text-xs relative" onClick={() => setIsShowLanguage(!isShowLanguage)}>
                        EN
                        <svg width="25" height="13" viewBox="0 0 25 13" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: "14px", height: "22px" }}>
                            <path d="M23.2647 0.291485L12.4989 10.6523L1.73306 0.291485C1.54072 0.105981 1.2825 0.00212646 1.01361 0.00212646C0.744727 0.00212646 0.48651 0.105981 0.294168 0.291485C0.201033 0.381577 0.127042 0.48911 0.0765298 0.607788C0.0260178 0.726466 0 0.853902 0 0.982632C0 1.11136 0.0260178 1.2388 0.0765298 1.35748C0.127042 1.47615 0.201033 1.58369 0.294168 1.67378L11.7471 12.6981C11.9483 12.8917 12.218 13 12.4989 13C12.7798 13 13.0495 12.8917 13.2507 12.6981L24.7036 1.67591C24.7974 1.58575 24.872 1.47795 24.9229 1.35888C24.9738 1.23981 25 1.11187 25 0.982632C25 0.85339 24.9738 0.725457 24.9229 0.606386C24.872 0.487314 24.7974 0.379517 24.7036 0.289357C24.5113 0.103853 24.2531 0 23.9842 0C23.7153 0 23.4571 0.103853 23.2647 0.289357V0.291485Z" fill="#FFC700" _ngcontent-ng-c2742102330=""></path>
                        </svg>
                        <div className={`absolute top-[50px] right-0 w-full max-h-[270px] z-50 overflow-y-auto p-0 bg-[#161616] border-2 border-[rgba(128,128,128,0.11)] ${isShowLanguage ? 'block' : 'hidden'}`}>
                            <div className="flex flex-col gap-2 w-full px-2">
                                {
                                    languageData.map((item) => (
                                        <div key={item.code} className="w-full flex justify-start items-center gap-2 py-1" onClick={() => handleChangeLanguage(item.code)}>
                                            <img src={item.flag} alt={item.label} className="rounded-full border-2 border-white min-w-[25px] h-[25px] w-[25px] overflow-hidden object-cover" />
                                            <span className="text-white text-lg font-[400]">{item.label}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </button>
                    <div className="flex flex-col items-center gap-4 mt-4 w-full">
                        <a
                            href="https://dexscreener.com/solana/221d10"
                            className="relative flex justify-center items-center text-sm font-[600] text-[#161616] rounded-md w-full cursor-pointer transition duration-300 tracking-wider bg-[#FFC700] py-[10px]"
                        >
                            <span className="relative z-10">Buy Now</span>
                        </a>

                    </div>
                </div>
            </div>

            <BuyNowModal open={isBuyNowModalOpen} onClose={() => setIsBuyNowModalOpen(false)} setNeedWallet={setIsNeedWalletOpen} />
            <NeedWallet open={isNeedWalletOpen} onClose={() => setIsNeedWalletOpen(false)} />

        </div>
    );
};

export default Navbar;