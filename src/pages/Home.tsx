import HomeBackgroundImage from "../assets/landing/main-bg.webp";
import EffectImage from "../assets/landing/feature-eclipse.png"
import BackgroundBanner from "../assets/landing/banner-bg.png"
import BackgroundBannerMobile from "../assets/landing/banner-bg-mob.png"
import { useEffect, useState } from "react";
import Hero from "../components/home/Hero";
import Roadmap from "../components/home/Roadmap";
import WhyBestWallet from "../components/home/WhyBestWallet";
import Presale from "../components/home/Presale";
import Tokenomics from "../components/home/Tokenomics";
import BitCoinNews from "../components/home/BitCoinNews";
import FAQ from "../components/home/FAQ";
import TrustWidget from "../components/home/TrustWidget";
import TrustnetScore from "../components/home/TrustnetScore";

const Home = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="w-full min-h-screen bg-no-repeat relative  overflow-hidden">
            <div className="w-full min-h-screen flex justify-center items-center bg-cover  xl:bg-[center_-600px] lg:bg-[center_-0px] bg-center" style={{ backgroundImage: `url(${isMobile ? HomeBackgroundImage : HomeBackgroundImage})` }}>
                <div className={`${isMobile ? "w-full" : "w-[80%]"} h-screen absolute top-0 left-0 z-10`}>
                    <img src={isMobile ? BackgroundBannerMobile : BackgroundBanner} alt="Background Banner" className="absolute bottom-0 left-0 w-full h-full object-center" />
                </div>
                <div className="w-full absolute top-20 left-0">
                    <img src={EffectImage} alt="Effect" className="w-full h-full object-center" />
                </div>
                <Hero />
            </div>
            <div className="w-full h-full flex justify-center items-center mt-0">
                <Roadmap />
            </div>
            <div className="w-full h-full flex justify-center items-center mt-0">
                <WhyBestWallet />
            </div>
            <div className="w-full h-full flex justify-center items-center mt-0">
                <Presale />
            </div>
            <div className="w-full h-full flex justify-center items-center mt-0 bg-[#000000]">
                <TrustWidget />
            </div>
            <div className="w-full h-full flex justify-center items-center mt-0 bg-[#000000]  px-2">
                <TrustnetScore score={90} />
            </div>
            <div className="w-full h-full flex justify-center items-center mt-0">
                <Tokenomics />
            </div>
            <div className="w-full h-full flex justify-center items-center mt-0">
                <BitCoinNews />
            </div>
            <div className="w-full h-full flex justify-center items-center mt-0">
                <FAQ />
            </div>
        </div>
    )
}

export default Home;
