import React from 'react';
//images
import img1 from '../../../../public/Assets/png-mob/IMAGE 01.png';
import img2 from '../../../../public/Assets/png-mob/IMAGE 02.png';
import img3 from '../../../../public/Assets/png-mob/IMAGE 03.png';
import img4 from '../../../../public/Assets/png-mob/IMAGE 04.png';
import img5 from '../../../../public/Assets/png-mob/IMAGE 05.png';
import ImageBox from "../../../shared/ImageBox";
//icons
import icon1 from '../../../../public/Assets/png-mob/Document Align Right.png';
import icon2 from '../../../../public/Assets/png-mob/Education icon.png';
import icon3 from '../../../../public/Assets/png-mob/Office Bag.png';
import icon4 from '../../../../public/Assets/png-mob/Square.png';
import icon5 from '../../../../public/Assets/png-mob/Time icon.png';
//progress
import progress1 from  '../../../../public/Assets/png-mob/1.png';
import progress2 from  '../../../../public/Assets/png-mob/2.png';
import progress3 from  '../../../../public/Assets/png-mob/3.png';
import progress4 from  '../../../../public/Assets/png-mob/4.png';
import progress5 from  '../../../../public/Assets/png-mob/5.png';
//lines
import line1 from '../../../../public/Assets/png-mob/LINE 1.png';
import line2 from '../../../../public/Assets/png-mob/LINE 2.png';
import line3 from '../../../../public/Assets/png-mob/LINE 3.png';
import line4 from '../../../../public/Assets/png-mob/LINE 4.png';
import line5 from '../../../../public/Assets/png-mob/LINE 5.png';
//background
import bgCurve from '../../../../public/Assets/png-mob/bg curve.png';

import Buttonx from "../../../shared/Button";

const MainLessons = () => {
    return (
        <div className="container-large mb-64 px-24">
            <div className="normal-shadow mb-24 mobile:mb-60 rounded-3xl relative bg-white grid gap-24 grid-cols-1 mobile:grid-cols-3 mobile:pr-32 p-8">
                <ImageBox src={progress1} alt="progress" classes="absolute top-1/2 right-0 w-28 -translate-y-1/2 translate-x-1/2"/>
                <ImageBox src={line1} alt="line1" classes="hidden mobile:block absolute -bottom-[28rem] translate-x-12 w-[107%]"/>
                <ImageBox src={img1} alt="baby" classes="mobile:col-start-1 flex  justify-center mobile:col-end-2"/>
                <div className="mobile:col-start-2 mobile:col-end-4 px-8">
                    <h1 className="font-bold text-4xl mb-12 flex">
                        مفاهیم
                        <p className="text-secondary">
                            اصلی
                        </p>
                        برنامه نویسی
                    </h1>
                    <div className="flex justify-between">
                        <div className="">
                            <div className="flex items-start">
                                <ImageBox src={icon2} alt="education" classes="w-6 ml-4"/>
                                <div className="font-bold mb-6">
                                    <p className="text-xl mb-2">
                                        تعداد دانشجویان دوره
                                    </p>
                                    <p className="text-2xl">
                                        32 هزار نفر
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <ImageBox src={icon5} alt="education" classes="w-6 ml-4"/>
                                <div className="font-bold mb-6">
                                    <p className="text-xl mb-2">
                                        حداقل زمان اتمام دوره
                                    </p>
                                    <p className="text-2xl">
                                        10 ماه
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <ImageBox src={icon1} alt="education" classes="w-6 ml-4"/>
                                <div className="font-bold mb-6">
                                    <p className="text-xl mb-2">
                                        تعداد آزمون های اصلی
                                    </p>
                                    <p className="text-2xl">
                                        4 آزمون
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex items-start">
                                <ImageBox src={icon3} alt="education" classes="w-6 ml-4"/>
                                <div className="font-bold mb-6">
                                    <p className="text-xl mb-2">
                                        تعداد شرکت های آماده قرارداد
                                    </p>
                                    <p className="text-2xl">
                                        24 شرکت
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <ImageBox src={icon4} alt="education" classes="w-6 ml-4"/>
                                <div className="font-bold mb-6">
                                    <p className="text-xl mb-2">
                                        تعداد پکیج های اصلی
                                    </p>
                                    <p className="text-2xl">
                                        17 پکیج
                                    </p>
                                </div>
                            </div>
                            <Buttonx>
                                مشاهده سر فصل‌ها
                            </Buttonx>
                        </div>
                    </div>
                </div>
            </div>
            {/*card2*/}
            <div className="normal-shadow mb-24 mobile:mb-60 rounded-3xl relative bg-white grid gap-24 grid-cols-1 mobile:grid-cols-3 mobile:pr-32 p-8">
                <ImageBox src={progress2} alt="progress" classes="absolute top-1/2 left-0 w-28 -translate-y-1/2 -translate-x-1/2"/>
                <ImageBox src={line2} alt="line1" classes="hidden mobile:block absolute -bottom-[28rem] translate-x-12 w-[107%]"/>
                <div className="mobile:col-start-2 mobile:col-end-4 px-8">
                    <h1 className="font-bold text-4xl mb-12 flex">
                        مفاهیم
                        <p className="text-secondary">
                            اصلی
                        </p>
                        برنامه نویسی
                    </h1>
                    <div className="flex justify-between">
                        <div className="">
                            <div className="flex items-start">
                                <ImageBox src={icon2} alt="education" classes="w-6 ml-4"/>
                                <div className="font-bold mb-6">
                                    <p className="text-xl mb-2">
                                        تعداد دانشجویان دوره
                                    </p>
                                    <p className="text-2xl">
                                        32 هزار نفر
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <ImageBox src={icon5} alt="education" classes="w-6 ml-4"/>
                                <div className="font-bold mb-6">
                                    <p className="text-xl mb-2">
                                        حداقل زمان اتمام دوره
                                    </p>
                                    <p className="text-2xl">
                                        10 ماه
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <ImageBox src={icon1} alt="education" classes="w-6 ml-4"/>
                                <div className="font-bold mb-6">
                                    <p className="text-xl mb-2">
                                        تعداد آزمون های اصلی
                                    </p>
                                    <p className="text-2xl">
                                        4 آزمون
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex items-start">
                                <ImageBox src={icon3} alt="education" classes="w-6 ml-4"/>
                                <div className="font-bold mb-6">
                                    <p className="text-xl mb-2">
                                        تعداد شرکت های آماده قرارداد
                                    </p>
                                    <p className="text-2xl">
                                        24 شرکت
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <ImageBox src={icon4} alt="education" classes="w-6 ml-4"/>
                                <div className="font-bold mb-6">
                                    <p className="text-xl mb-2">
                                        تعداد پکیج های اصلی
                                    </p>
                                    <p className="text-2xl">
                                        17 پکیج
                                    </p>
                                </div>
                            </div>
                            <Buttonx>
                                مشاهده سر فصل‌ها
                            </Buttonx>
                        </div>
                    </div>
                </div>
                <ImageBox src={img2} alt="baby" classes="mobile:col-start-1 flex  justify-center mobile:col-end-2 ml-8"/>
            </div>
            {/*card3*/}
            <div className="normal-shadow mb-24 mobile:mb-60 rounded-3xl relative bg-white grid gap-24 grid-cols-1 mobile:grid-cols-3 mobile:pr-32 p-8">
                <ImageBox src={progress3} alt="progress" classes="absolute top-1/2 right-0 w-28 -translate-y-1/2 translate-x-1/2"/>
                <ImageBox src={line3} alt="line1" classes="hidden mobile:block absolute -bottom-[28rem] translate-x-12 w-[107%]"/>
                <ImageBox src={img3} alt="baby" classes="mobile:col-start-1 flex  justify-center mobile:col-end-2"/>
                <div className="mobile:col-start-2 mobile:col-end-4 px-8">
                    <h1 className="font-bold text-4xl mb-12 flex">
                        مفاهیم
                        <p className="text-secondary">
                            اصلی
                        </p>
                        برنامه نویسی
                    </h1>
                    <div className="flex justify-between">
                        <div className="">
                            <div className="flex items-start">
                                <ImageBox src={icon2} alt="education" classes="w-6 ml-4"/>
                                <div className="font-bold mb-6">
                                    <p className="text-xl mb-2">
                                        تعداد دانشجویان دوره
                                    </p>
                                    <p className="text-2xl">
                                        32 هزار نفر
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <ImageBox src={icon5} alt="education" classes="w-6 ml-4"/>
                                <div className="font-bold mb-6">
                                    <p className="text-xl mb-2">
                                        حداقل زمان اتمام دوره
                                    </p>
                                    <p className="text-2xl">
                                        10 ماه
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <ImageBox src={icon1} alt="education" classes="w-6 ml-4"/>
                                <div className="font-bold mb-6">
                                    <p className="text-xl mb-2">
                                        تعداد آزمون های اصلی
                                    </p>
                                    <p className="text-2xl">
                                        4 آزمون
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex items-start">
                                <ImageBox src={icon3} alt="education" classes="w-6 ml-4"/>
                                <div className="font-bold mb-6">
                                    <p className="text-xl mb-2">
                                        تعداد شرکت های آماده قرارداد
                                    </p>
                                    <p className="text-2xl">
                                        24 شرکت
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <ImageBox src={icon4} alt="education" classes="w-6 ml-4"/>
                                <div className="font-bold mb-6">
                                    <p className="text-xl mb-2">
                                        تعداد پکیج های اصلی
                                    </p>
                                    <p className="text-2xl">
                                        17 پکیج
                                    </p>
                                </div>
                            </div>
                            <Buttonx>
                                مشاهده سر فصل‌ها
                            </Buttonx>
                        </div>
                    </div>
                </div>
            </div>
            {/*card4*/}
            <div className="normal-shadow mb-24 mobile:mb-60 rounded-3xl relative bg-white grid gap-24 grid-cols-1 mobile:grid-cols-3 mobile:pr-32 p-8">
                <ImageBox src={progress4} alt="progress" classes="hidden mobile:block absolute top-1/2 left-0 w-28 -translate-y-1/2 -translate-x-1/2"/>
                <ImageBox src={line4} alt="line1" classes="absolute -bottom-[28rem] translate-x-12 w-[107%]"/>
                <div className="mobile:col-start-2 mobile:col-end-4 px-8">
                    <h1 className="font-bold text-4xl mb-12 flex">
                        مفاهیم
                        <p className="text-secondary">
                            اصلی
                        </p>
                        برنامه نویسی
                    </h1>
                    <div className="flex justify-between">
                        <div className="">
                            <div className="flex items-start">
                                <ImageBox src={icon2} alt="education" classes="w-6 ml-4"/>
                                <div className="font-bold mb-6">
                                    <p className="text-xl mb-2">
                                        تعداد دانشجویان دوره
                                    </p>
                                    <p className="text-2xl">
                                        32 هزار نفر
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <ImageBox src={icon5} alt="education" classes="w-6 ml-4"/>
                                <div className="font-bold mb-6">
                                    <p className="text-xl mb-2">
                                        حداقل زمان اتمام دوره
                                    </p>
                                    <p className="text-2xl">
                                        10 ماه
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <ImageBox src={icon1} alt="education" classes="w-6 ml-4"/>
                                <div className="font-bold mb-6">
                                    <p className="text-xl mb-2">
                                        تعداد آزمون های اصلی
                                    </p>
                                    <p className="text-2xl">
                                        4 آزمون
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex items-start">
                                <ImageBox src={icon3} alt="education" classes="w-6 ml-4"/>
                                <div className="font-bold mb-6">
                                    <p className="text-xl mb-2">
                                        تعداد شرکت های آماده قرارداد
                                    </p>
                                    <p className="text-2xl">
                                        24 شرکت
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <ImageBox src={icon4} alt="education" classes="w-6 ml-4"/>
                                <div className="font-bold mb-6">
                                    <p className="text-xl mb-2">
                                        تعداد پکیج های اصلی
                                    </p>
                                    <p className="text-2xl">
                                        17 پکیج
                                    </p>
                                </div>
                            </div>
                            <Buttonx>
                                مشاهده سر فصل‌ها
                            </Buttonx>
                        </div>
                    </div>
                </div>
                <ImageBox src={img4} alt="baby" classes="mobile:col-start-1 flex  justify-center mobile:col-end-2 ml-8"/>
            </div>
            {/*card5*/}
            <div className="normal-shadow mb-24 mobile:mb-60 rounded-3xl relative bg-white grid gap-24 grid-cols-1 mobile:grid-cols-3 mobile:pr-32 p-8">
                <ImageBox src={progress5} alt="progress" classes="absolute top-1/2 right-0 w-28 -translate-y-1/2 translate-x-1/2"/>
                <ImageBox src={line5} alt="line1" classes="hidden mobile:block absolute -bottom-[25rem] translate-x-12 w-[107%]"/>
                <ImageBox src={img5} alt="baby" classes="mobile:col-start-1 flex  justify-center mobile:col-end-2"/>
                <div className="mobile:col-start-2 mobile:col-end-4 px-8">
                    <h1 className="font-bold text-4xl mb-12 flex">
                        مفاهیم
                        <p className="text-secondary">
                            اصلی
                        </p>
                        برنامه نویسی
                    </h1>
                    <div className="flex justify-between">
                        <div className="">
                            <div className="flex items-start">
                                <ImageBox src={icon2} alt="education" classes="w-6 ml-4"/>
                                <div className="font-bold mb-6">
                                    <p className="text-xl mb-2">
                                        تعداد دانشجویان دوره
                                    </p>
                                    <p className="text-2xl">
                                        32 هزار نفر
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <ImageBox src={icon5} alt="education" classes="w-6 ml-4"/>
                                <div className="font-bold mb-6">
                                    <p className="text-xl mb-2">
                                        حداقل زمان اتمام دوره
                                    </p>
                                    <p className="text-2xl">
                                        10 ماه
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <ImageBox src={icon1} alt="education" classes="w-6 ml-4"/>
                                <div className="font-bold mb-6">
                                    <p className="text-xl mb-2">
                                        تعداد آزمون های اصلی
                                    </p>
                                    <p className="text-2xl">
                                        4 آزمون
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex items-start">
                                <ImageBox src={icon3} alt="education" classes="w-6 ml-4"/>
                                <div className="font-bold mb-6">
                                    <p className="text-xl mb-2">
                                        تعداد شرکت های آماده قرارداد
                                    </p>
                                    <p className="text-2xl">
                                        24 شرکت
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <ImageBox src={icon4} alt="education" classes="w-6 ml-4"/>
                                <div className="font-bold mb-6">
                                    <p className="text-xl mb-2">
                                        تعداد پکیج های اصلی
                                    </p>
                                    <p className="text-2xl">
                                        17 پکیج
                                    </p>
                                </div>
                            </div>
                            <Buttonx>
                                مشاهده سر فصل‌ها
                            </Buttonx>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{direction:"ltr"}} className="relative">
                <ImageBox src={bgCurve} alt="bgCurve" classes="-z-10 absolute w-[24rem] left-0 "/>
                <h1 className="font-bold pt-24 mb-8 text-6xl z-10 flex">
                    <h1 className="text-secondary mr-2">
                        keep
                    </h1>
                    <h1 className="text-primary">
                        learning
                    </h1>
                </h1>
                <h1 className="font-bold text-6xl z-10">
                    به یادگیری ادامه دهید
                </h1>
            </div>
        </div>
    );
};

export default MainLessons;