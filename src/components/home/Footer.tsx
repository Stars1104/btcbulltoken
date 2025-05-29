import Logo from "../../assets/logo.png"
import TermofService from "../../assets/documents/Terms-Conditions-BTCBULL.pdf"
import Cookies from "../../assets/documents/Cookies-BTCBULL.pdf"
import PrivacyPolicy from "../../assets/documents/PRIVACYDOC-BTCBULL.pdf"
import { useTranslation } from "react-i18next"

const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className="max-w-5xl w-full h-[300px] bg-transparent flex flex-col justify-center items-center absolute bottom-0 gap-8 px-2">
            <img src={Logo} alt="" className="w-[84px] h-[84px]" />
            <div className="flex md:gap-10 gap-2 justify-center items-center">
                <a href={TermofService} target="_blank" className="text-white underline hover:no-underline cursor-pointer">{t('footer.terms')}</a>
                <a href={Cookies} target="_blank" className="text-white underline hover:no-underline cursor-pointer">{t('footer.cookies')}</a>
                <a href={PrivacyPolicy} target="_blank" className="text-white underline hover:no-underline cursor-pointer">{t('footer.privacy')}</a>
            </div>
            <p className="text-white text-sm text-center">{t('footer.description')}</p>
        </div>
    )
}

export default Footer;