import React from 'react';
import ImageBox from "../../Components/shared/ImageBox";
import img from "../../public/Assets/png-mob/IMAGE 00.png";
import support from "../../public/Assets/png/icon support.png";
import hat from "../../public/Assets/png-concepts/icon 01.png";
import icon2 from "../../public/Assets/png-concepts/icon 02.png";
import icon3 from "../../public/Assets/png-concepts/icon 03.png";
import icon4 from "../../public/Assets/png-concepts/icon 04.png";
import SlideShow from "../../Components/layout/Concepts/SlideShow";
import Consult from "../../Components/layout/Concepts/Consult";
import Comments from "../../Components/layout/Concepts/Comments";

const Concepts = () => {
    return (
        <div className="mt-32">
            <div className="container-large px-8 grid mobile:grid-cols-3 grid-cols-1 mb-12">
                <ImageBox src={img} classes="w-full mobile:col-start-1 p-24 mobile:p-0 mobile:col-end-3" alt="illustration"/>
                <div className="mobile:col-start-3 mobile:col-end-4 pt-24">
                    <h1 className="font-bold text-4xl mb-12">
                        مفاهیم اصلی برنامه‌نویسی
                    </h1>
                    <p className="text-3xl leading-10 font-bold">
                        ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                    </p>
                </div>
            </div>
            <div className="rounded-full bg-primary p-4 w-max mr-8 mb-16">
                <ImageBox src={support} alt="support" classes="w-12 h-12"/>
            </div>
            <div className="container-large px-8 grid grid-cols-2 mobile:grid-cols-4 gap-12">
                <div className="normal-shadow py-6 rounded-xl flex flex-col justify-center items-center">
                    <ImageBox src={hat} alt="hat" classes="w-1/2 mb-4"/>
                    <p className="text-l font-bold mb-4">
                        تعداد دانشجویان دوره
                    </p>
                    <h2 className="text-4xl font-bold">
                        25 هزار نفر
                    </h2>
                </div>
                <div className="normal-shadow py-6 rounded-xl flex flex-col justify-center items-center">
                    <ImageBox src={icon2} alt="icon" classes="w-1/2 mb-4"/>
                    <p className="text-l font-bold mb-4">
                        حداقل زمان اتمام دوره
                    </p>
                    <h2 className="text-4xl font-bold">
                        5 ماه
                    </h2>
                </div>
                <div className="normal-shadow py-6 rounded-xl flex flex-col justify-center items-center">
                    <ImageBox src={icon3} alt="icon" classes="w-1/2 mb-4"/>
                    <p className="text-l font-bold mb-4">
                        تعداد پکیج‌های اصلی
                    </p>
                    <h2 className="text-4xl font-bold">
                        25 پکیج
                    </h2>
                </div>
                <div className="normal-shadow py-6 rounded-xl flex flex-col justify-center items-center">
                    <ImageBox src={icon4} alt="icon" classes="w-1/2 mb-4"/>
                    <p className="text-l font-bold mb-4">
                        تعداد آزمون‌های اصلی
                    </p>
                    <h2 className="text-4xl font-bold">
                        5 آزمون
                    </h2>
                </div>
            </div>
            <SlideShow />
            <Consult />
            <Comments />
        </div>
    );
};

export default Concepts;