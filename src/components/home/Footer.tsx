import Logo from "../../assets/logo.png"
import { useTranslation } from "react-i18next"

const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className="max-w-5xl w-full h-[300px] bg-transparent flex flex-col justify-center items-center absolute bottom-0 gap-8 px-2">
            <img src={Logo} alt="" className="w-[84px] h-[84px]" />
            <div className="flex md:gap-10 gap-2 justify-center items-center">
                <a href="https://drive.google.com/file/d/1OLW3b_uIyuWe17GrXTTGRL9Yc6qPNiC7/view?usp=sharing" target="_blank" className="text-white underline hover:no-underline cursor-pointer">{t('footer.terms')}</a>
                <a href="https://drive.google.com/file/d/1ZmGPtJCqv8oA8s8jAnziYkk_noD_62eh/view?usp=sharing" target="_blank" className="text-white underline hover:no-underline cursor-pointer">{t('footer.cookies')}</a>
                <a href="https://drive.google.com/file/d/15Y32Z0P0yIDeOs8xWiQnyQdABqSnMyW5/view?usp=sharing" target="_blank" className="text-white underline hover:no-underline cursor-pointer">{t('footer.privacy')}</a>
            </div>
            <p className="text-white text-sm text-center">{t('footer.description')}</p>
        </div>
    )
}

export default Footer;