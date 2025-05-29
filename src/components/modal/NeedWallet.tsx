import QRCode from '../../assets/qrcode.svg'
import NeedWalletImageDesktop from '../../assets/need_wallet_desktop.png'
import NeedWalletImageMobile from '../../assets//need_wallet_mobile.png'
import { useTranslation } from 'react-i18next';

interface NeedWalletProps {
    open: boolean;
    onClose: () => void;
}

const NeedWallet: React.FC<NeedWalletProps> = ({ open, onClose }) => {
    const { t } = useTranslation();

    if (!open) return null;
    return (
        <div className={`fixed inset-0 z-[99999] flex items-center justify-center bg-[#a58608bd] bg-opacity-60 px-4 ${open ? 'block' : 'hidden'}`}>
            <div className="relative bg-neutral-900 rounded-2xl p-5 pb-0 text-white shadow-2xl max-w-3xl w-full animate__animated animate__fadeInDown animate__2s  border-[3px] border-[#FFC700] flex flex-col md:flex-row items-center gap-8">
                {/* Close Button */}
                <button
                    className="absolute md:-top-6 md:-right-6 -top-6 -right-4 cursor-pointer rounded-full lex items-center justify-center text-2xl font-bold text-black transition-all duration-200"
                    onClick={onClose}
                >
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: '56px', height: '56px' }} className='hover:rotate-180 transition-all duration-500'>
                        <rect x="1.4" y="1.4" width="53.2" height="53.2" rx="26.6" fill="#F7EF22"></rect>
                        <rect x="1.4" y="1.4" width="53.2" height="53.2" rx="26.6" stroke="#010101" strokeWidth="2.8"></rect>
                        <path d="M35.636 20.3633L20.3633 35.636M20.3633 20.3633L35.636 35.636" stroke="#010101" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" _ngcontent-ng-c2746436187=""></path>
                    </svg>
                </button>
                <div className="w-full flex flex-col md:gap-8 gap-4 justify-start items-center">
                    <h1 className="custom-font2 uppercase tracking-[2.4px] leading-none mt-4">
                        <span className="text-white md:text-[40px] text-[25px]">{t('modal.needwallet.title')}</span>
                    </h1>
                    <div className="w-full justify-center items-center gap-4 md:hidden flex">
                        <div className="w-full flex flex-col justify-center items-center">
                            <p className='text-sm text-center font-bold'>{t('modal.needwallet.description.first')}</p>
                            <p className='text-sm text-center font-bold'>{t('modal.needwallet.description.second')}</p>
                            <p className='text-sm text-center font-bold'>{t('modal.needwallet.description.third')}</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center md:flex-row flex-col-reverse">
                        <div className="md:w-[60%] w-full flex flex-col justify-center items-center">
                            <div className="w-full justify-center items-center gap-4 md:flex hidden">
                                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: '150px', height: '150px' }}>
                                    <rect width="100" height="100" rx="29.2969" fill="#5860FF" _ngcontent-ng-c2746436187=""></rect>
                                    <path d="M20.9961 62.3796C20.9961 54.3742 20.9961 50.3715 22.6385 47.0782C23.3768 45.5979 24.3454 44.2443 25.5081 43.0679C28.0951 40.4504 31.8836 39.1586 39.4607 36.575L54.3761 31.4891C65.2326 27.7872 70.6608 25.9362 74.7101 28.0043C75.6616 28.4902 76.5352 29.1153 77.3022 29.859C80.5664 33.0242 80.5664 38.7594 80.5664 50.2297C80.5664 58.1719 80.5664 62.1429 78.734 65.316C78.2897 66.0852 77.7716 66.8093 77.1869 67.478C74.7751 70.2365 71.0165 71.5181 63.4993 74.0813L45.789 80.1202C36.2304 83.3796 31.4511 85.0092 27.7659 83.5425C23.0439 81.6632 20.9961 77.2949 20.9961 73.5352C20.9961 70.9961 20.9961 66.3183 20.9961 62.3796Z" fill="url(#paint0_linear_22_13305)" _ngcontent-ng-c2746436187=""></path>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M20.9961 43.4982C20.9961 37.0864 20.9961 31.8297 22.062 29.0938C23.0034 26.6775 24.5314 24.5335 26.5082 22.8551C28.7465 20.9546 31.7769 19.9084 37.8377 17.816L39.9268 17.0948C46.9649 14.665 50.4839 13.4501 53.309 13.9964C56.3664 14.5876 59.0168 16.4765 60.5734 19.1736C62.0117 21.6657 62.0117 27.3417 62.0117 34.7873C62.0117 40.6621 62.0117 43.5995 61.1142 46.1321C60.1384 48.8853 58.4105 51.3098 56.1264 53.1306C54.0254 54.8055 51.2488 55.764 45.6956 57.6811C45.6956 57.6811 36.1328 60.9482 30.1758 63.0299C24.2188 65.1115 20.9961 69.2871 20.9961 73.6304V43.4982Z" fill="white" _ngcontent-ng-c2746436187=""></path>
                                    <defs _ngcontent-ng-c2746436187="">
                                        <linearGradient id="paint0_linear_22_13305" x1="78.4668" y1="64.5996" x2="23.4292" y2="32.9729" gradientUnits="userSpaceOnUse" _ngcontent-ng-c2746436187="">
                                            <stop stopColor="white" _ngcontent-ng-c2746436187=""></stop>
                                            <stop offset="1" stopColor="white" stopOpacity="0.12" _ngcontent-ng-c2746436187=""></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="w-full flex flex-col justify-center items-start">
                                    <p>{t('modal.needwallet.description.first')}</p>
                                    <p>{t('modal.needwallet.description.second')}</p>
                                    <p>{t('modal.needwallet.description.third')}</p>
                                </div>
                            </div>
                            <div className="md:bg-[#eaecf033] rounded-l-[10px] relative p-[30px_25px] w-full text-white text-[14px] md:mt-8">
                                <div className="flex flex-col gap-4">
                                    <div className="flex gap-2 items-center">
                                        <div className="w-6 h-6 bg-black border-2 border-[#FFC700] rounded-full flex justify-center items-center">1</div>
                                        <span>{t('modal.needwallet.step1.first')}<br />{t('modal.needwallet.step1.second')}</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-6 h-6 bg-black border-2 border-[#FFC700] rounded-full flex justify-center items-center">2</div>
                                        <span>{t('modal.needwallet.step2')}</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-6 h-6 bg-black border-2 border-[#FFC700] rounded-full flex justify-center items-center">3</div>
                                        <span>{t('modal.needwallet.step3')}</span>
                                    </div>
                                    <a href='https://bestwallet.com/en/?referrer=singular_click_id%3Dab68253a-3931-4c0f-8e05-110052bb2bf5' target='_blank' rel='noopener noreferrer' className='bg-[#FFC700] text-black font-bold px-4 py-2 rounded-lg justify-center items-center md:hidden flex'>{t('modal.needwallet.button')}</a>
                                </div>
                                <div className='p-2 bg-white rounded-lg absolute top-1/2 -translate-y-1/2 right-4 md:block hidden'>
                                    <img src={QRCode} alt="" className='w-[100px] h-[100px]' />
                                </div>
                            </div>
                        </div>
                        <div className="md:w-[40%] w-full flex flex-col justify-center items-center">
                            <img src={NeedWalletImageDesktop} alt="" className='md:block hidden' />
                            <img src={NeedWalletImageMobile} alt="" className='md:hidden block w-[250px] h-[250px]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NeedWallet;