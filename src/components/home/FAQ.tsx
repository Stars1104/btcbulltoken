import FAQBackground from "../../assets/faq/faq-bg.png";
import FAQImage from "../../assets/faq/grey-bottom-border.svg";
import ArrowDown from "../../assets/faq/angle-down.svg";
import { useState, useRef, useEffect } from "react";
import "./FAQ.css";
import Footer from "./Footer";
import { useTranslation } from 'react-i18next';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [closingIndex, setClosingIndex] = useState<number | null>(null);
    const animationTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
    const { t } = useTranslation();

    const faq = [
        {
            title: t('faq.faq1.title'),
            content: <p className="text-white text-base">{t('faq.faq1.description')}</p>
        },
        {
            title: t('faq.faq2.title'),
            content: <p className="text-white text-base">{t('faq.faq2.description')}</p>
        },
        {
            title: t('faq.faq3.title'),
            content: <p className="text-white text-base">{t('faq.faq3.description')}</p>
        },
        {
            title: t('faq.faq4.title'),
            content: <p className="text-white text-base">{t('faq.faq4.description')}</p>
        },
        {
            title: t('faq.faq5.title'),
            content: <p className="text-white text-base">
                {t('faq.faq5.description.text')}{' '}
                <a href={t('faq.faq5.description.twitter.link')} className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">
                    {t('faq.faq5.description.twitter.text')}
                </a>{' '}
                {t('faq.faq5.description.and')}{' '}
                <a href={t('faq.faq5.description.telegram.link')} className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">
                    {t('faq.faq5.description.telegram.text')}
                </a>{' '}
                {t('faq.faq5.description.end')}
            </p>
        },
        {
            title: t('faq.faq6.title'),
            content: <p className="text-white text-base">{t('faq.faq6.description.text')}{' '}
                <a href={t('faq.faq6.description.web3link.link')} className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">
                    {t('faq.faq6.description.web3link.text')}
                </a>{' '}
                {t('faq.faq6.description.end')}
            </p>
        },
        {
            title: t('faq.faq7.title'),
            content: <p className="text-white text-base">{t('faq.faq7.description.title')}{' '}
                <a href={t('faq.faq7.description.web3link.link')} className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">
                    {t('faq.faq7.description.web3link.text')}
                </a>{' '}
                {t('faq.faq7.description.center')}{' '}
                <a href={t('faq.faq7.description.bestwallet.link')} className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">
                    {t('faq.faq7.description.bestwallet.text')}
                </a>{' '}
                {t('faq.faq7.description.end')}
            </p>
        }
    ]

    const toggleFAQ = (index: number) => {
        if (openIndex === index) {
            // Start closing animation
            setClosingIndex(index);
            // Wait for animation to complete before actually closing
            animationTimeoutRef.current = setTimeout(() => {
                setOpenIndex(null);
                setClosingIndex(null);
            }, 400); // Match this with CSS animation duration
        } else {
            // Clear any existing timeout
            if (animationTimeoutRef.current) {
                clearTimeout(animationTimeoutRef.current);
            }
            setClosingIndex(null);
            setOpenIndex(index);
        }
    };

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (animationTimeoutRef.current) {
                clearTimeout(animationTimeoutRef.current);
            }
        };
    }, []);

    return (
        <div id="faq" className="w-full min-h-[1350px] xl:bg-[center_-1200px] bg-no-repeat bg-cover flex relative flex-col justify-start items-center bg-[#010101]" style={{ backgroundImage: `url(${FAQBackground})` }}>
            <img src={FAQImage} alt="" className="w-full object-contain absolute -top-4 md:block hidden" />
            <div className="max-w-5xl w-full flex flex-col justify-center items-center mt-0 md:mt-36 px-4 md:px-0">
                <h1 className="uppercase md:text-[40px] text-[27px] font-[900] custom-font2 w-full text-center">
                    <span className="text-[#FFC700]">BTC Bull {t('faq.title.first')}</span> <span className="text-[#ffffff]">{t('faq.title.second')}</span>
                </h1>
                <div className="w-full flex flex-col justify-center items-center mt-8 md:mt-12 gap-4 md:gap-6">
                    {faq.map((item, index) => (
                        <div key={index} className="w-full flex flex-col justify-center items-center">
                            <div
                                onClick={() => toggleFAQ(index)}
                                className="bg-black border-[2px] border-[#FFC700] text-[#1f1f1f] p-4 md:p-5 rounded-[30px] md:rounded-[60px] w-full flex justify-between items-center cursor-pointer transition-colors"
                            >
                                <p className="text-white text-base md:text-lg font-bold pr-4">{item.title}</p>
                                <img
                                    src={ArrowDown}
                                    alt=""
                                    className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                />
                            </div>
                            {(openIndex === index || closingIndex === index) && (
                                <div
                                    className={`w-[95%] md:w-[85%] text-[#fffffcc] font-normal bg-black border-[2px] border-[#FFC700] rounded-b-[16px] pt-4 pb-4 px-4 border-t-0 text-left text-sm md:text-base faq-content ${closingIndex === index ? 'closing' : ''}`}
                                >
                                    {item.content}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FAQ;