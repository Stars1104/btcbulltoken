import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import SwiperImage from "../../assets/bitcoinnews/swiper1.jpg";
import SwiperImage3 from "../../assets/bitcoinnews/swiper3.jpg";
import SwiperImage4 from "../../assets/bitcoinnews/swiper4.jpg";
import SwiperImage5 from "../../assets/bitcoinnews/swiper5.jpg";
import SwiperImage6 from "../../assets/bitcoinnews/swiper6.jpg";
import SwiperImage7 from "../../assets/bitcoinnews/swiper7.jpg";
import SwiperImage8 from "../../assets/bitcoinnews/swiper8.jpg";
import SwiperImage9 from "../../assets/bitcoinnews/swiper9.jpg";
import SwiperImage10 from "../../assets/bitcoinnews/swiper10.jpg";
import SwiperImage11 from "../../assets/bitcoinnews/swiper11.jpg";
import SwiperImage12 from "../../assets/bitcoinnews/swiper12.jpg";
import SwiperImage13 from "../../assets/bitcoinnews/swiper13.jpg";
import SwiperImage14 from "../../assets/bitcoinnews/swiper14.jpg";
import SwiperImage16 from "../../assets/bitcoinnews/swiper14.jpg";
import SwiperImage17 from "../../assets/bitcoinnews/swiper17.jpg";
import SwiperImage19 from "../../assets/bitcoinnews/swiper19.jpg";
import SwiperImage20 from "../../assets/bitcoinnews/swiper20.png";
import { useTranslation } from 'react-i18next';

const BitCoinNews = () => {

    const { t } = useTranslation();

    const news = [
        {
            title: "Can Bitcoin Price Sustain Its Bullish Momentum? Analyst Identifies Local Top At $113K | Bitcoinist.com",
            content: "The Bitcoin price performance has been outstanding over the past week, achieving a new all-time high. In the late hours of Thursday, May 22, the premier",
            image: SwiperImage,
            date: "Sun, 25 May 2025 05:00:05 GMT",
            url: "http://bitcoinist.com/bitcoin-price-sustain-this-bullish-momentum-analyst/?_gl=1*zd012r*_gcl_au*OTY0NTY3MjM4LjE3NDgxNjEyNDI."
        },
        {
            title: "Crypto investor accused of torturing man in bid to steal Bitcoin password",
            content: "John Woeltz is alleged to have bound and beaten an Italian man while holding him captive in a New York apartment",
            image: "/",
            date: "Sun, 25 May 2025 04:37:00 GMT",
            url: "https://www.telegraph.co.uk/us/news/2025/05/25/cryptocurrency-investor-kidnap-torture-bitcoin-password/"
        },
        {
            title: "New peak: Bitcoin tops $111K, becomes fourth-most valuable asset",
            content: "Bitcoin hits a new all-time high of $111,861, driven by institutional demand, miner sell-offs, and market volatility amid growing global financial uncertainty.",
            image: SwiperImage3,
            date: "Thu, 22 May 2025 15:42:12 GMT",
            url: "https://coinnews.com/news/bitcoin/bitcoin-breaks-records-surging-past-111k-amid-market-uncertainty/"
        },
        {
            title: "Crypto rally: Bitcoin hits new high on macro shift",
            content: "Bitcoin hits a record $109K as ETF inflows surge and trade tensions ease, signalling renewed institutional interest and strong macro-driven momentum.",
            image: SwiperImage4,
            date: "Wed, 21 May 2025 16:06:56 GMT",
            url: "http://bitcoinist.com/bitcoin-price-sustain-this-bullish-momentum-analyst/?_gl=1*zd012r*_gcl_au*OTY0NTY3MjM4LjE3NDgxNjEyNDI."
        },
        {
            title: "Bitcoin overtakes Alphabet, becoming 6th largest asset globally",
            content: "Bitcoin surpasses Alphabet in global rankings with a $2T market cap, driven by ETF inflows, rising fees, and growing institutional interest.",
            image: SwiperImage5,
            date: "Mon, 19 May 2025 12:18:11 GMT",
            url: "https://coinnews.com/news/bitcoin/bitcoin-overtakes-alphabet-as-market-cap-soars-past-2-trillion/"
        },
        {
            title: "Novogratz: Bitcoin Breakout To $130,000 Imminent",
            content: "Bitcoin's recovery to six-figure territory has put the current price at the $107,000 mark in sharp focus—and for Galaxy Digital's Mike Novogratz, a breakout could ignite a fresh wave of price discovery. After a week of closes above $100,000, Bitcoin appears to be building the structural momentum necessary to break higher, according to Galaxy Digital",
            image: SwiperImage6,
            date: "Fri, 16 May 2025 14:03:08 GMT",
            url: "https://coinnews.com/news/bitcoin/novogratz-bitcoin-breakout-to-130000-imminent/"
        },
        {
            title: "Bitcoin crosses $104K, Ethereum breakout could trigger altcoin surge ",
            content: "Bitcoin surges past $100K as US-UK trade deal fuels investor optimism; Ethereum spikes 22% after Pectra upgrade, driving renewed crypto market momentum.",
            image: SwiperImage7,
            date: "Tue, 13 May 2025 15:24:15 GMT",
            url: "https://coinnews.com/news/bitcoin/bitcoin-reclaims-104k-as-altcoins-stir-and-market-indicators-flash-bullish/"
        },
        {
            title: "Bitcoin crosses $100K, ETH leads altcoin surge",
            content: "Bitcoin surges past $100K as US-UK trade deal fuels investor optimism; Ethereum spikes 22% after Pectra upgrade, driving renewed crypto market momentum.",
            image: SwiperImage8,
            date: "Fri, 09 May 2025 13:55:35 GMT",
            url: "https://coinnews.com/news/bitcoin/bitcoin-price-surges-above-100k-as-markets-react-to-us-uk-trade-deal-and-ethereum-spikes/"
        },
        {
            title: "Can Bitcoin overcome resistance and hit a new all-time high?",
            content: "Bitcoin targets $100K as 2025 price forecasts hit $500K. Discover what top analysts cite as key drivers behind BTC's bullish momentum.",
            image: SwiperImage9,
            date: "Fri, 02 May 2025 11:32:17 GMT",
            url: "https://coinnews.com/news/bitcoin/how-high-will-bitcoin-go-in-2025-analysts-weigh-in/"
        },
        {
            title: "Is Bitcoin market entering a new phase of long-term growth?",
            content: "Bitcoin volatility hits 563-day low as ETF inflows surge. Experts predict price may reach $1M by 2028 amid rising institutional interest and on-chain signals.",
            image: SwiperImage10,
            date: "Wed, 30 Apr 2025 12:52:25 GMT",
            url: "https://coinnews.com/news/bitcoin/bitcoin-shows-market-maturity-as-price-volatility-hits-record-low/"
        },
        {
            title: "How is Bitcoin mining moving toward sustainability with 52.4% renewable energy? ",
            content: "Discover how Bitcoin mining is becoming more sustainable with 52.4 % of its energy sourced from renewables, reducing its carbon footprint & environmental impact.",
            image: SwiperImage11,
            date: "Tue, 29 Apr 2025 14:21:55 GMT",
            url: "https://coinnews.com/news/bitcoin/bitcoin-minings-shift-towards-sustainability-a-new-report-highlights-key-developments/"
        },
        {
            title: "Can institutional demand propel Bitcoin to a new all-time high? ",
            content: "Bitcoin price surges toward $100K as institutional investors drive the $BTC rally. Will Bitcoin's momentum continue as retail interest declines?",
            image: SwiperImage12,
            date: "Mon, 28 Apr 2025 11:36:29 GMT",
            url: "https://coinnews.com/news/bitcoin/why-is-retail-interest-in-bitcoin-declining-despite-its-price-surge/"
        },
        {
            title: "Pakistan allocates 2,000MW power for Bitcoin mining and AI centers",
            content: "Pakistan reserves 2,000MW of surplus power for Bitcoin mining and AI centers, offering tax incentives to lure global investors and support its digital economy.",
            image: SwiperImage13,
            date: "Fri, 25 Apr 2025 12:00:00 GMT",
            url: "https://www.tradingview.com/news/cointelegraph:30c67bd18094b:0-pakistan-allocates-2-000mw-power-for-bitcoin-mining-and-ai-centers/"
        },
        {
            title: "Pakistan allocates 2,000MW power for Bitcoin mining and AI centers",
            content: "Pakistan reserves 2,000MW of surplus power for Bitcoin mining and AI centers, offering tax incentives to lure global investors and support its digital economy.",
            image: SwiperImage14,
            date: "Sun, 25 May 2025 09:48:23 GMT",
            url: "https://cointelegraph.com/news/pakistan-allocates-2000mw-bitcoin-mining-ai-centers?_gl=1%2a1nhpi0%2a_gcl_au%2aOTY0NTY3MjM4LjE3NDgxNjEyNDI."
        },
        {
            title: "Bitcoin trader swaps $1.25B long for short as BTC price slides under $108K",
            content: "Key points:Bitcoin BINANCE:BTCUSD failed to maintain $108,000 into the May 25 weekly close as price action struggled to shake off new US trade war woes.Trump hot air blamed as Bitcoin halts price discoveryData from Cointelegraph Markets Pro and TradingView showed BINANCE:BTCUSD staying near multi…",
            image: SwiperImage13,
            date: "Sun, 25 May 2025 09:11:55 GMT",
            url: "https://www.tradingview.com/news/cointelegraph:951f1eb26094b:0-bitcoin-trader-swaps-1-25b-long-for-short-as-btc-price-slides-under-108k/"
        },
        {
            title: "Pakistan Allocates 2,000-MW Capacity to Power Bitcoin Mining",
            content: "Pakistan has allocated 2,000 megawatts of electricity in the first phase of a national push to support Bitcoin mining and AI data centers, as the country moves to legalize cryptocurrency and attract foreign investments.",
            image: SwiperImage16,
            date: "Sun, 25 May 2025 08:49:20 GMT",
            url: "https://www.bloomberg.com/news/articles/2025-05-25/pakistan-allocates-2-000-mw-capacity-to-power-bitcoin-mining"
        },
        {
            title: "Pakistan allocates 2,000 megawatts of electricity to bitcoin mining, AI data centres",
            content: "ISLAMABAD (Reuters) -Pakistan will allocate 2,000 megawatts (MW) of electricity in the first phase of a national initiative to power bitcoin mining and AI data centres, its finance ministry said on Sunday.  The allocation is part of Islamabad's plans to use its surplus electricity to bitcoin mining and AI data centres.",
            image: SwiperImage17,
            date: "Sun, 25 May 2025 08:31:12 GMT",
            url: "https://finance.yahoo.com/news/pakistan-allocates-2-000-megawatts-083112676.html"
        },
        {
            title: "Bitcoin Profit-Taking Remains Healthy – Data Shows No Signs Of Overheating",
            content: "Bitcoin is wrapping up the week with strength, trading above the $105,000 mark after a sharp rally that pushed prices to a new all-time high near $112,000. The move reignited bullish momentum across the market, with traders and analysts now turning their focus to what could be the next phase of thi…",
            image: SwiperImage13,
            date: "Sun, 25 May 2025 08:30:45 GMT",
            url: "https://www.tradingview.com/news/newsbtc:bbbca8a71094b:0-bitcoin-profit-taking-remains-healthy-data-shows-no-signs-of-overheating/"
        },
        {
            title: "Govt allocates 2,000MW for Bitcoin mining and AI data centres",
            content: "PCC CEO Bilal Bin Saqib says country can become global crypto and AI powerhouse.",
            image: SwiperImage19,
            date: "Sun, 25 May 2025 08:12:25 GMT",
            url: "https://www.dawn.com/news/1913238"
        },
        {
            title: "Bitcoin Aims For $110,000 Before A Major Options Expiration",
            content: "Bitcoin is walking a tightrope between bulls and bears. If $110,000 gives way, it's champagne; otherwise, the options expire, along with the illusions.",
            image: SwiperImage20,
            date: "Sun, 25 May 2025 07:18:00 GMT",
            url: "https://www.cointribune.com/en/bitcoin-aims-for-110000-before-a-major-options-expiration/"
        }
    ]

    return (
        <div className="w-full flex flex-col justify-center items-center bg-[#010101]">
            <div className="w-full flex flex-col justify-center items-center pt-20">
                <h1 className="uppercase md:text-[40px] text-[27px] font-[900] custom-font2 w-full text-center">
                    <span className="text-[#FFC700]">{t('bullish.title.first')}</span> <span className="text-[#ffffff]">{t('bullish.title.second')}</span>
                </h1>
            </div>
            <div className='w-full flex justify-center items-center mt-8 md:mt-12 pb-12 md:pb-24 px-2 md:px-4'>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    centeredSlides={true}
                    grabCursor={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 1.5,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 80,
                        },
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    loop={true}
                    initialSlide={0}
                    className="w-full relative"
                >
                    {news.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="h-[400px] md:h-[520px] bg-[#161616] p-[12px] md:p-[15px] border-[2px] border-[#ffd926] shadow-[0_0_20px_5px_#ffd72677] rounded-[15px] md:rounded-[20px] mx-auto max-w-[95%] md:max-w-none">
                                <div className="flex flex-col gap-2 md:gap-4 h-full overflow-y-auto custom-scrollbar">
                                    <h3 className="text-[#ffffff] font-bold text-base md:text-lg mb-2">{item.title}</h3>
                                    {item.image && item.image !== "/" && (
                                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="block hover:opacity-90 transition-opacity">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-48 md:h-64 object-cover rounded-[10px]"
                                                loading="lazy"
                                            />
                                        </a>
                                    )}
                                    <p className="text-gray-300 text-sm md:text-base">{item.content}</p>
                                    <div className="mt-auto flex gap-2 items-center">
                                        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: "13px", height: "13px" }}>
                                            <path d="M11.5 1.25H10.25V1C10.25 0.801088 10.171 0.610322 10.0303 0.46967C9.88968 0.329018 9.69891 0.25 9.5 0.25C9.30109 0.25 9.11032 0.329018 8.96967 0.46967C8.82902 0.610322 8.75 0.801088 8.75 1V1.25H4.25V1C4.25 0.801088 4.17098 0.610322 4.03033 0.46967C3.88968 0.329018 3.69891 0.25 3.5 0.25C3.30109 0.25 3.11032 0.329018 2.96967 0.46967C2.82902 0.610322 2.75 0.801088 2.75 1V1.25H1.5C1.16848 1.25 0.850537 1.3817 0.616117 1.61612C0.381696 1.85054 0.25 2.16848 0.25 2.5V12.5C0.25 12.8315 0.381696 13.1495 0.616117 13.3839C0.850537 13.6183 1.16848 13.75 1.5 13.75H11.5C11.8315 13.75 12.1495 13.6183 12.3839 13.3839C12.6183 13.1495 12.75 12.8315 12.75 12.5V2.5C12.75 2.16848 12.6183 1.85054 12.3839 1.61612C12.1495 1.3817 11.8315 1.25 11.5 1.25ZM2.75 2.75C2.75 2.94891 2.82902 3.13968 2.96967 3.28033C3.11032 3.42098 3.30109 3.5 3.5 3.5C3.69891 3.5 3.88968 3.42098 4.03033 3.28033C4.17098 3.13968 4.25 2.94891 4.25 2.75H8.75C8.75 2.94891 8.82902 3.13968 8.96967 3.28033C9.11032 3.42098 9.30109 3.5 9.5 3.5C9.69891 3.5 9.88968 3.42098 10.0303 3.28033C10.171 3.13968 10.25 2.94891 10.25 2.75H11.25V4.25H1.75V2.75H2.75ZM1.75 12.25V5.75H11.25V12.25H1.75Z" fill="#9B9CA1"></path>
                                        </svg>
                                        <p className="text-white text-sm md:text-base">{item.date}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default BitCoinNews;