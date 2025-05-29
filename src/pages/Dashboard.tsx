import { useEffect, useState } from "react";
import DashboardBackgroundImage from "../assets/faq/faq-bg.png";
import BackgroundBannerMobile from "../assets/landing/banner-bg-mob.png";
import BackgroundBanner from "../assets/landing/banner-bg.png";
import InforIcon from "../assets/hero/info.svg"
import { FaArrowRight } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import type { TooltipProps } from 'recharts';
import Logo from "../assets/logo.png"
import BuyNowModal from "../components/modal/BuyNow";
import WithdrawModal from "../components/modal/Withdraw";
import Notice from "../components/modal/Notice";

import TermofService from "../assets/documents/Terms-Conditions-BTCBULL.pdf"
import Cookies from "../assets/documents/Cookies-BTCBULL.pdf"
import PrivacyPolicy from "../assets/documents/PRIVACYDOC-BTCBULL.pdf"
import { useTranslation } from "react-i18next";
import NeedWallet from "../components/modal/NeedWallet";

const Dashboard = () => {

    const [isMobile, setIsMobile] = useState(false);
    const [open, setOpen] = useState(false);
    const [withdrawOpen, setWithdrawOpen] = useState(false);
    const [noticeOpen, setNoticeOpen] = useState(false);
    const [noticeContent, setNoticeContent] = useState("");
    const { t } = useTranslation();
    const [isNeedWalletOpen, setIsNeedWalletOpen] = useState(false);

    // Supply data for the chart
    const supplyData = [
        { month: 'Feb-2025', supply: 18987500000 },
        { month: 'Mar-2025', supply: 19075000000 },
        { month: 'Apr-2025', supply: 19162500000 },
        { month: 'May-2025', supply: 19250000000 },
        { month: 'Jun-2025', supply: 19337500000 },
        { month: 'Jul-2025', supply: 19425000000 },
        { month: 'Aug-2025', supply: 19512500000 },
        { month: 'Sep-2025', supply: 19600000000 },
        { month: 'Oct-2025', supply: 19687500000 },
        { month: 'Nov-2025', supply: 19775000000 },
        { month: 'Dec-2025', supply: 19862500000 },
        { month: 'Jan-2026', supply: 19950000000 },
        { month: 'Feb-2026', supply: 20037500000 },
        { month: 'Mar-2026', supply: 20125000000 },
        { month: 'Apr-2026', supply: 20212500000 },
        { month: 'May-2026', supply: 20300000000 },
        { month: 'Jun-2026', supply: 20387500000 },
        { month: 'Jul-2026', supply: 20475000000 },
        { month: 'Aug-2026', supply: 20562500000 },
        { month: 'Sep-2026', supply: 20650000000 },
        { month: 'Oct-2026', supply: 20737500000 },
        { month: 'Nov-2026', supply: 20825000000 },
        { month: 'Dec-2026', supply: 20912500000 },
        { month: 'Jan-2027', supply: 21000000000 },
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Custom axis formatter
    const formatYAxis = (value: number) => {
        return `${(value / 1000000000).toFixed(0)}B`;
    };

    // Custom tooltip component
    const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
        if (active && payload && payload.length) {
            const month = payload[0].payload && (payload[0].payload as any).month;
            const value = payload[0].value;
            return (
                <div style={{ background: '#000', border: '2px solid #fff', color: '#fff', padding: '5px 10px', borderRadius: 6, textAlign: 'center', fontSize: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.25)' }}>
                    <div style={{ fontSize: 10, marginBottom: 4 }}>{month}</div>
                    <div style={{ fontSize: 12 }}>{value?.toLocaleString()}</div>
                </div>
            );
        }
        return null;
    };

    const handleNoticeOpen = (content: string) => {
        setNoticeOpen(true);
        setNoticeContent(content);
    }

    return (
        <div className="w-full min-h-screen bg-no-repeat relative  overflow-hidden">
            <div className="w-full min-h-[1350px] xl:bg-[center_-900px] bg-no-repeat bg-cover flex relative flex-col justify-start items-center bg-[#010101]" style={{ backgroundImage: `url(${isMobile ? DashboardBackgroundImage : DashboardBackgroundImage})` }}>
                <div className={`${isMobile ? "w-full" : "w-[80%]"} h-screen absolute top-0 left-0 z-10`}>
                    <img src={isMobile ? BackgroundBannerMobile : BackgroundBanner} alt="Background Banner" className="absolute bottom-0 left-0 w-full h-full object-center" />
                </div>
                <div className="max-w-7xl w-full flex flex-col justify-center items-start mt-36px-2 gap-14 mt-36 z-50">
                    <div className="md:w-[50%] w-full flex flex-col gap-4">
                        <h1 className="w-full uppercase md:text-[45px] text-[27px] font-[900] custom-font2 md:text-start text-center">
                            <span className="text-[#ffffff]">{t('staking.title')}</span>
                        </h1>
                        <span className="text-white text-lg md:text-start text-center">{t('staking.description')}</span>
                    </div>
                    <div className="w-full grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-3 px-2">
                        <div className="flex flex-col justify-between items-start p-5 border-[3px] border-[#FFC700] rounded-[16px] bg-[#000000a8] text-white w-full mx-auto gap-2">
                            <div className="w-full flex flex-col justify-center items-start gap-2">
                                <span className="text-lg uppercase">{t('staking.tokenstaked.token.first')} <br /> {t('staking.tokenstaked.token.second')}</span>
                                <span className="font-bold">0 BTCBULL</span>
                            </div>
                            <div className="w-full flex flex-col justify-center items-start gap-2">
                                <span className="text-lg uppercase">{t('staking.tokenstaked.available.first')} <br /> {t('staking.tokenstaked.available.second')}</span>
                                <span className="font-bold">0 BTCBULL</span>
                            </div>
                            <button className="bg-[#1f1f1f] text-[#ffffff] border-3 border-[#FFC700] w-full cursor-pointer py-2 rounded-full mt-4" onClick={() => setOpen(true)}>{t('staking.tokenstaked.button')}</button>
                        </div>
                        <div className="flex flex-col justify-between items-start p-5 border-[3px] border-[#FFC700] rounded-[16px] bg-[#000000a8] text-white w-full mx-auto gap-2">
                            <div className="w-full flex flex-col justify-center items-start gap-2">
                                <span className="text-lg uppercase flex w-full justify-between items-center">
                                    {t('staking.poor.yourpoor')}
                                    <img src={InforIcon} alt="" className="cursor-pointer" onClick={() => handleNoticeOpen(t('modal.info.third'))} />
                                </span>
                                <span className="font-bold">0</span>
                            </div>
                            <div className="w-full flex flex-col justify-center items-start gap-2">
                                <span className="text-lg uppercase">{t('staking.poor.totalpool')}</span>
                                <span className="font-bold">1,625,536,174 BTCBULL</span>
                            </div>
                            <button className="bg-[#1f1f1f] text-[#ffffff] border-3 border-[#FFC700] w-full cursor-pointer py-2 rounded-full mt-4" onClick={() => setWithdrawOpen(true)}>{t('staking.poor.button')}</button>
                        </div>
                        <div className="flex flex-col justify-start items-start p-5 border-[3px] border-[#FFC700] rounded-[16px] bg-[#000000a8] text-white w-full mx-auto gap-2">
                            <div className="w-full flex flex-col justify-center items-start gap-2">
                                <span className="text-lg uppercase">{t('staking.estimate.title.first')} <br /> {t('staking.estimate.title.second')}</span>
                            </div>
                            <div className="w-full flex flex-col justify-center items-start gap-2">
                                <span className="text-lg uppercase relative">65%
                                    <p className="absolute top-0 -right-6 font-bold text-xs lowercase">p/a</p>
                                </span>
                                <span className="text-xs flex items-center gap-1"> <FaArrowRight className="rotate-180" /> {t('estimate.list.first')}</span>
                                <span className="text-xs flex items-center gap-1"> <FaArrowRight className="rotate-180" />{t('estimate.list.second')}</span>
                                <span className="text-xs flex items-center gap-1"> <FaArrowRight className="rotate-180" />{t('estimate.list.third')}</span>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-start p-5 border-[3px] border-[#FFC700] rounded-[16px] bg-[#000000a8] text-white w-full mx-auto gap-2">
                            <div className="w-full flex flex-col justify-center items-start gap-2">
                                <span className="text-lg uppercase">{t('staking.rewards.title')}</span>
                                <span className="font-bold">0 BTCBULL</span>
                            </div>
                            <div className="w-full flex flex-col justify-center items-start gap-2">
                                <span className="text-lg uppercase relative">399.54
                                    <p className="absolute top-0 -right-20 font-bold text-xs lowercase">{t('staking.rewards.toptext')}</p>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between items-start p-5 border-[3px] border-[#FFC700] rounded-[16px] bg-[#000000a8] text-white w-full mx-auto gap-2">
                            <div className="w-full flex flex-col justify-center items-start gap-2">
                                <span className="text-lg uppercase">{t('staking.rewards.title')}</span>
                                <span className="font-bold">0 BTCBULL</span>
                            </div>
                            <button className="bg-[#1f1f1f] text-[#ffffff] border-3 border-[#FFC700] w-full cursor-pointer py-2 rounded-full mt-4" onClick={() => handleNoticeOpen(t('modal.info.fourth'))}>{t('staking.totlarewards.button')}</button>
                        </div>
                    </div>
                    <div className="w-full flex lg:justify-between justify-center md:flex-row flex-col items-center px-4">
                        <div className="lg:w-[75%] w-full border-[3px] border-[#FFC700] bg-[#000000a8] rounded-[20px] min-h-[450px] md:px-4 py-6">
                            <div className="w-full flex flex-col justify-center items-start gap-2 px-2">
                                <span className="uppercase text-lg text-white">{t('staking.totalsupply')}</span>
                            </div>
                            <div className="w-full h-[400px] mt-4 relative">
                                <span className="text-white absolute left-0 top-1/2 -translate-y-1/2 rotate-270">Sunday</span>
                                <span className="text-white absolute bottom-0 left-1/2 -translate-y-1/2">Months</span>
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        data={supplyData}
                                        margin={{
                                            top: 20,
                                            right: 30,
                                            left: 20,
                                            bottom: 60,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                                        <XAxis
                                            dataKey="month"
                                            angle={-60}
                                            textAnchor="end"
                                            height={60}
                                            tick={{ fill: '#fff' }}
                                        />
                                        <YAxis
                                            tickFormatter={formatYAxis}
                                            tick={{ fill: '#fff' }}
                                            domain={[0, 20000000000]}
                                            ticks={[0, 5000000000, 10000000000, 15000000000, 20000000000]}
                                        />
                                        <Tooltip
                                            content={CustomTooltip}
                                            cursor={{ fill: 'rgba(255,255,255,0.1)' }}
                                        />
                                        <Bar
                                            dataKey="supply"
                                            radius={[4, 4, 0, 0]}
                                        >
                                            {supplyData.map((entry, index) => (
                                                <Cell
                                                    key={`cell-${index}`}
                                                    fill={entry.month === 'May-2025' ? '#FFC700' : '#fff'}
                                                />
                                            ))}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        <div className="w-[25%] justify-center items-center lg:flex hidden">
                            <img src={Logo} alt="" className="w-52 h-52 object-contain" />
                        </div>
                    </div>
                </div>
                <div className="max-w-5xl w-full h-[300px] bg-transparent flex flex-col justify-center items-center gap-8 px-2 md:mt-0 mt-20">
                    <img src={Logo} alt="" className="w-[84px] h-[84px]" />
                    <div className="flex md:gap-10 gap-2 justify-center items-center">
                        <a href={TermofService} target="_blank" className="text-white underline hover:no-underline cursor-pointer">{t('footer.terms')}</a>
                        <a href={Cookies} target="_blank" className="text-white underline hover:no-underline cursor-pointer">{t('footer.cookies')}</a>
                        <a href={PrivacyPolicy} target="_blank" className="text-white underline hover:no-underline cursor-pointer">{t('footer.privacy')}</a>
                    </div>
                    <p className="text-white text-sm text-center">{t('footer.description')}</p>
                </div>

                <BuyNowModal open={open} onClose={() => setOpen(false)} setNeedWallet={setIsNeedWalletOpen} />
                <WithdrawModal open={withdrawOpen} onClose={() => setWithdrawOpen(false)} onWithdraw={() => { }} stakedAmount={0} />
                <Notice open={noticeOpen} onClose={() => setNoticeOpen(false)} content={noticeContent} />
                <NeedWallet open={isNeedWalletOpen} onClose={() => setIsNeedWalletOpen(false)} />
            </div>
        </div>
    )
}

export default Dashboard;