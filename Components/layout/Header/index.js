import React,{useState,useEffect} from 'react';
import logo from '../../../public/Assets/png/logo.png'
import Buttonx from "../../shared/Button";
import search from '../../../public/Assets/png/icon search.png';
import Animated from "react-mount-animation";
import ImageBox from "../../shared/ImageBox";
import Background from "../../shared/ImageBox/Background";

const Header = ({background}) => {
    const [showMenu, setShowMenu] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const menuItems = [
        {item: "صفحه اصلی"},
        {item: "همکاری با ما"},
        {item: "دانشجویان برتر"},
        {item: "ارتباظ با ما"},
        {item: "درباره ما"},
    ];
    const handleClick = idx => {
        setActiveIndex(idx);
        console.log('ss');
    }
    useEffect(() => {
        document.body.addEventListener('click', () => {
            setShowMenu(false);
        })
    })
    const onHandleClick = (e) => {
        e.stopPropagation();
        setShowMenu(!showMenu);
    }
    return (
        <div
            style={{backgroundImage:"url('../../../public/Assets/png/bg header.png')"}}
            className="container-large pt-16 px-8  bg[url('../../../public/Assets/png/bg header.png')]"
        >
            <Animated.div
                show={showMenu}
                mountAnim={` 
                 0% {opacity: 0}
                 100% {opacity: 1}
               `}
                unmountAnim={`
                    0% {opacity: 1}
                    100% {opacity: 0}
                `}
                unmountDelay={0.3}
                style={{backgroundColor:"rgba(0,0,0,0.6)",zIndex:"20"}}
                className="fixed top-0 left-0 w-full h-full block"></Animated.div>

            {/*responsive part*/}
            <Animated.div
                onClick={(e) => e.stopPropagation()}
                className="flex items-center flex-col p-8 w-3/4 bg-white fixed top-36 left-0 h-full z-40 mobile:hidden"
                show={showMenu}
                mountAnim={` 
                 0% {width: 0}
                 80% {width: 80%}
                 100% {width: 70%}
               `}
                unmountAnim={`
                 0% {left:0}
                 100% {left:-500px}
                `}
                time={0.6}
                delay={0.3}
            >
                <div className="flex mb-12">
                    <p className="text-2xl cursor-pointer font-bold text-primary ml-4">
                        ورود
                    </p>
                    <span className="bg-primary w-px h-8 block"></span>
                    <p className="cursor-pointer text-2xl font-bold text-primary mr-4">
                        ثبت نام
                    </p>
                </div>

                {
                    menuItems.map((items, i) => {
                        return (
                            <div onClick={() => {handleClick(i)}}>
                                <Buttonx classes="ml-8 mb-12" text={i !== activeIndex ? true : false}  key={items.item}>
                                    {items.item}
                                </Buttonx>
                            </div>
                        )
                    })
                }
                <div className="flex mr-24">
                    <ImageBox src={search} alt="search" classes="bg-primary rounded-tr-xl w-12 rounded-br-xl "/>
                    <input placeholder="چی میخوای یاد بگیری..." className="focus:outline-none"/>
                </div>
            </Animated.div>

            <div className="rounded-full bg-white w-24 h-24 block normal-shadow fixed top-6 left-12 z-20 flex items-center mobile:hidden">
                <div onClick={(e) => onHandleClick(e)}
                     className={`${showMenu ? 'ham-menu2 flex mobile:hidden' : 'ham-menu flex mobile:hidden'}`}
                ></div>
            </div>
            {/*responsive part*/}
            {/*desktop*/}
            {/*background image*/}
             <Background src={background} alt="header background" classes="top-0 left-0 w-5/4 header-res"/>

            <div className="flex  mb-12">
                <ImageBox src={logo} alt="logo" classes="w-12 mr-lf-xs"/>
                <h1 className="header-heading text-primary font-bold text-4xl">
                    آموزش
                </h1>
                <h1 className="header-heading text-secondary font-bold text-4xl ml-auto">
                    نوین
                </h1>
                <div className="hidden mobile:flex">
                    <p className="text-2xl cursor-pointer font-bold text-primary ml-4">
                        ورود
                    </p>
                    <span className="bg-primary w-px h-8 block"></span>
                    <p className="cursor-pointer text-2xl font-bold text-primary mr-4">
                        ثبت نام
                    </p>
                </div>
            </div>
            <div className="hidden mobile:flex justify-between items-center ">
                {
                    menuItems.map((items, i) => {
                        return (
                            <div onClick={() => {handleClick(i)}}>
                                <Buttonx classes="ml-8" text={i !== activeIndex ? true : false}  key={items.item}>
                                    {items.item}
                                </Buttonx>
                            </div>
                        )
                    })
                }
                <ImageBox src={search} alt="search" classes="bg-primary rounded-tr-xl rounded-br-xl mr-auto w-12 p-1"/>
                <input placeholder="چی میخوای یاد بگیری..." className="px-8 focus:outline-none py-4 rounded-tl-xl rounded-bl-xl bg-white"/>
            </div>
        </div>
    );
};
export default Header;