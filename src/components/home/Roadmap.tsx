import LineImage from "../../assets/roadmap/line.png";
import LineImageMobile from "../../assets/roadmap/roadmap-mobile-line.svg";
import Icon from "../../assets/roadmap/icon.svg";
import LoadMapGraphArrow from "../../assets/roadmap/roadmap-graph-arrow.webp";
import TokenomicsBull from "../../assets/roadmap/tokenomics-bull.webp";
import RoadmapChart from "../../assets/roadmap/roadmap-graph.png";
import RoadmapChartMobile from "../../assets/roadmap/chart-mob.png";
import { useEffect, useState } from "react";
import RoadmapDrop1 from "../../assets/roadmap/roadmap-drop-1.svg";
import RoadmapDrop3 from "../../assets/roadmap/roadmap-drop-3.svg";
import { useTranslation } from "react-i18next";

const Roadmap = () => {

    const { t } = useTranslation();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize(); // Check initial size
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="w-full flex flex-col justify-center items-center relative bg-[#050d13]">
            <div className="lg:block hidden absolute inset-0 bg-[#050d13] z-0 mt-0"></div>
            <svg className="lg:block hidden w-full h-[100px] z-10 absolute -top-[100px]" viewBox="0 0 120 150" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="triangle-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#050d13" />
                        <stop offset="100%" stopColor="#050d13" />
                    </linearGradient>
                </defs>
                <polygon points="0,150 120,150 120,0" fill="#050d13" stroke="url(#triangle-gradient)" strokeWidth="1" />
            </svg>
            <img src={LineImage} alt="" className="w-full z-10 lg:block hidden absolute -top-52" />
            <img src={RoadmapDrop1} alt="" className="z-10 lg:block hidden absolute top-16 left-0" />
            <img src={RoadmapDrop3} alt="" className="z-10 lg:block hidden absolute top-72 right-0" />
            <img src={LineImageMobile} alt="" className="w-full lg:hidden block absolute md:-top-14 -top-8 z-[9999]" />

            <div className="w-full lg:w-[1067px] sm:w-[500px] z-50 flex flex-col items-center] lg:mt-40 md:mt-80 sm:mt-96 mt-40 relative sm:px-0 px-6">
                <img src={TokenomicsBull} alt="" className="w-[350px] object-contain border lg:hidden sm:block hidden absolute left-0 sm:-top-[340px] sm:left-20 -top-56 z-0" />
                <div className="w-full flex flex-col bg-[#1f1f1f] sm:px-[55px] px-4 py-[15px] mx-auto border-[7px] border-[#FFC700] rounded-[35px] relative">
                    <div className="relative z-10">
                        <h1 className="uppercase md:text-[37px] text-[27px] font-[900] custom-font2 w-full text-center">
                            <span className="text-[#FFC700]">BTC Bull Token</span> <span className="text-[#ffffff]">{t('roadmap.title')}</span>
                        </h1>
                        <p className="text-[#ffffff] text-[18px] italic w-full">
                            {t('roadmap.description')}
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-[1067px] z-10 flex md:flex-row flex-col items-center gap-4 mt-14 px-2">
                <div className="flex flex-col gap-6 justify-center border-red-500 md:w-[38%] sm:w-[70%] w-full min-h-[400px] md:pl-[70px] sm:pl-24 pl-8 bg-[url('./assets/roadmap/roadmap-project-bg.webp')] bg-[length:100%_100%] bg-transparent border-0">
                    <h3 className="text-white text-[20px] font-bold">{t('roadmap.milestone.title')}</h3>
                    <div className="w-full flex flex-col gap-3">
                        <div className="w-full flex gap-2 items-center">
                            <span className="w-3 h-3 bg-[#ffe500] rounded-full"></span>
                            <span className="italic"><span className="text-white">BTC $100K -</span> <span className="text-[#FFC700]">{t('roadmap.milestone.first')}</span></span>
                        </div>
                        <div className="w-full flex gap-2 items-center">
                            <span className="w-3 h-3 bg-[#FFC700] rounded-full"></span>
                            <span className="italic text-white">BTC $125K -  {t('roadmap.milestone.second')}</span>
                        </div>
                        <div className="w-full flex gap-2 justify-start items-center">
                            <img src={Icon} className="w-5 h-5 -ml-1" alt="" />
                            <span className="italic -ml-1"><span className="text-white">BTC $150K -</span> <span className="text-[#FFC700]">{t('roadmap.milestone.third')}</span></span>
                        </div>
                        <div className="w-full flex gap-2 items-center">
                            <span className="w-3 h-3 bg-[#FFC700] rounded-full"></span>
                            <span className="italic text-white">BTC $175K - {t('roadmap.milestone.forth')}</span>
                        </div>
                        <div className="w-full flex gap-2 justify-start items-center">
                            <img src={Icon} className="w-5 h-5 -ml-1" alt="" />
                            <span className="italic -ml-1"><span className="text-white">BTC $200K -</span> <span className="text-[#FFC700]">{t('roadmap.milestone.fifth')}</span></span>
                        </div>
                        <div className="w-full flex gap-2 items-center">
                            <span className="w-3 h-3 bg-[#FFC700] rounded-full"></span>
                            <span className="italic text-white">BTC $225K - {t('roadmap.milestone.six')}</span>
                        </div>
                        <div className="w-full flex gap-2 justify-start items-center">
                            <img src={Icon} className="w-5 h-5 -ml-1" alt="" />
                            <span className="italic -ml-1"><span className="text-white">BTC $250K -</span> <span className="text-[#FFC700]">{t('roadmap.milestone.seven')}</span></span>
                        </div>
                    </div>
                </div>
                <div className="p-5 md:border-[7px] md:border-[#FFC700] rounded-[50px] sm:w-[62%] w-full relative h-[360px] bg-no-repeat bg-right bg-cover"
                    style={{
                        backgroundImage: `url(${isMobile ? RoadmapChartMobile : RoadmapChart})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        height: isMobile ? '360px' : '360px'
                    }}
                >
                    <img src={LoadMapGraphArrow} alt="" className="absolute bottom-0 w-[200px] -top-[260px] -right-[120px] lg:block hidden" />
                </div>
                <div className="h-[360px] flex-col justify-around md:block hidden">
                    <p className="h-[12.5%] flex justify-start items-center text-white text-sm font-bold">$250K</p>
                    <p className="h-[12.5%] flex justify-start items-center text-white text-sm font-bold">$225K</p>
                    <p className="h-[12.5%] flex justify-start items-center text-white text-sm font-bold">$200K</p>
                    <p className="h-[12.5%] flex justify-start items-center text-white text-sm font-bold">$175K</p>
                    <p className="h-[12.5%] flex justify-start items-center text-white text-sm font-bold">$150K</p>
                    <p className="h-[12.5%] flex justify-start items-center text-white text-sm font-bold">$150K</p>
                    <p className="h-[12.5%] flex justify-start items-center text-white text-sm font-bold">$150K</p>
                    <p className="h-[12.5%] flex justify-start items-center text-white text-sm font-bold">$150K</p>
                </div>
            </div>
        </div>
    )
}

export default Roadmap;