import React,{useState, useEffect} from 'react';
import logo from "../../../public/Assets/png/logo.png";
import mobile from '../../../public/Assets/png/icon mobile.png';
import atsign from '../../../public/Assets/png/@.png'
import Buttonx from "../../shared/Button";
import FooterBg from '../../../public/Assets/png/bg footer.png'
//social icons
import whatsapp from '../../../public/Assets/png/whatsapp.png'
import telegram from '../../../public/Assets/png/telegram.png'
import twitter from '../../../public/Assets/png/twitter.png'
import linkedin from '../../../public/Assets/png/linkedin.png'
import instagram from '../../../public/Assets/png/insta.png'
import ImageBox from "../../shared/ImageBox";
import Background from "../../shared/ImageBox/Background";

const Footer = () => {
    const [windowSize, setWindowSize] = useState();
    useEffect(() => {
        setWindowSize(window.innerWidth);
    });
    return (
        <div className="px-20 pb-20 footer-padding relative overflow-hidden">
            <Background src={FooterBg} alt="footer" classes="absolute left-0 footer-bg"/>
            <div className="container-large">
                <div className="flex items-center mb-8">
                    <ImageBox src={logo} alt="logo" classes="w-12 ml-4"/>
                    <h1 className="text-primary text-4xl font-bold">
                        آموزش
                    </h1>
                    <h1 className="text-secondary ml-auto text-4xl font-bold">
                        نوین
                    </h1>
                </div>
                <p className="text-primary mb-24 font-bold text-2xl">
                    از قدیمی‌ترین وب‌سایت‌های یادگیری آنلاین است که توانسته طی بیش از ده سال فعالیت خود بالغ بر ۱۳۰۰۰ ساعت آموزش ویدیویی در قالب فراتر از ۲۰۰۰ع
                    عنوان علمی، مهارتی و کاربردی را منتشر کند و به بزرگترین پلتفرم آموزشی ایران مبدل شود.
                </p>
                <div className='flex mobile:flex-row flex-col items-center mb-20'>
                    <div className=" mobile:-translate-x-11 flex mb-8 mobile:mb-0">
                        <div className="bg-light__gray2 translate-y-1 -translate-x-14 h-max p-2 rounded-xl footer-icon__mobile">
                            <ImageBox src={mobile} alt="mobile" classes="w-7 "/>
                        </div>
                        <input style={{borderRadius:"0 8px 8px 0"}} className="pr-20 py-5 pl-60 footer-input" placeholder="شماره موبایل شما"/>
                    </div>
                    <div className=""></div>
                    <div className="flex mb-8 mobile:mb-0">
                        <div className="bg-light__gray2 translate-y-1 -translate-x-14 h-max px-2 rounded-xl footer-icon__atsign">
                            <ImageBox src={atsign} alt="atsign" classes="w-6"/>
                        </div>
                        <input style={{borderRadius:"0 0 0 0"}} className="footer-input py-5 pr-20 pl-60" placeholder="ایمیل شما"/>
                    </div>
                    <Buttonx classes={`rounded-tr-xl rounded-br-xl mobile:rounded-tr-none mobile:rounded-br-none w-max`}>
                        عضویت در خبرنامه
                    </Buttonx>
                </div>
                <div className="flex justify-between mobile:flex-row flex-col items-center">
                    <div className="footer-links mb-8 mobile:mb-0">
                        <h2 className="text-primary mb-8 font-bold text-3xl">
                            لینک های مفید
                        </h2>
                            <ul className="grid grid-cols-2 gap-x-12 gap-y-6 list-disc text-2xl font-bold">
                                <li className="text-primary footer-list">
                                    مقالات
                                </li>
                                <li className="text-primary footer-list">
                                    تماس با ما
                                </li>
                                <li className="text-primary footer-list">
                                    وبلاگ
                                </li>
                                <li className="text-primary footer-list">
                                    درباره ما
                                </li>
                                <li className="text-primary footer-list">
                                    همکاری با ما
                                </li>
                                <li className="text-primary footer-list">
                                    نمونه کارهای دانشجویان
                                </li>
                            </ul>
                    </div>
                    <div className="footer-social">
                        <h2 className="text-primary mb-12 text-3xl font-bold">
                            با ما همراه باشید...
                        </h2>
                        <div className="flex">
                            <ImageBox src={whatsapp} alt="whatsapp" classes="w-12 ml-8 "/>
                            <ImageBox src={linkedin} alt="linkedin" classes="w-12 ml-8 "/>
                            <ImageBox src={telegram} alt="telegram" classes="w-12 ml-8 "/>
                            <ImageBox src={twitter} alt="twitter" classes="w-12 ml-8 "/>
                            <ImageBox src={instagram} alt="instagram" classes="w-12 ml-8 "/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;