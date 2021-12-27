import React from "react";
import ImageBox from "../../Components/shared/ImageBox";
import laptop from '../../public/Assets/png-concepts/laptop.png'
import Buttonx from "../../Components/shared/Button";
import img1 from '../../public/Assets/png-concepts/Group 116.png';
import img2 from '../../public/Assets/png-concepts/Group 117.png';
import img3 from '../../public/Assets/png-concepts/Group 118.png';
import img4 from '../../public/Assets/png-concepts/Group 119.png';
import user from '../../public/Assets/png-concepts/Group 120.png';
import Consult from "../../Components/layout/Home/Consult";
import icon1 from '../../public/Assets/png-concepts/ic download.png';
import icon2 from '../../public/Assets/png-concepts/ic lock.png';
import Accordion from "../../Components/shared/Accordion";
import Comments from "../../Components/layout/Home/Comments";

const StarterGit = () => {
    const api = [
        {name:'نصب گیت', time:'20:57', icon: icon1},
        {name:'مقدمات گیت', time:'20:57', icon: icon2},
    ];
    return (
        <div className="mt-64">
            <div className="container-large">
                <div className="grid grid-cols-2 items-center gap-8 px-8 mb-32">
                    <div className="rounded-xl flex flex-col">
                        <h1 className="text-6xl font-bold mb-20" >
                            گیت مقدماتی
                        </h1>
                        <div className="flex justify-between items-center bg-super__light p-4 rounded-t-xl">
                            <p className="font-bold text-xl">
                                تعداد دانشجویان
                            </p>
                            <p className="text-xl font-bold">
                                  ۲۱,۶۴۴ نفر
                            </p>
                        </div>
                        <div className="flex justify-between items-center bg-light__gray p-4">
                            <p className="font-bold text-xl">
                                مدت زمان
                            </p>
                            <p className="text-xl font-bold">
                                  ۱۹ ساعت و ۵۳ دقیقه
                            </p>
                        </div>
                        <div className="flex justify-between items-center bg-super__light p-4">
                            <p className="font-bold text-xl">
                                تعداد ویدیوها
                            </p>
                            <p className="text-xl font-bold">
                                  ۱۳ ویدیو
                            </p>
                        </div>
                        <div className="flex justify-between items-center bg-light__gray p-4 rounded-b-xl mb-12">
                            <p className="font-bold text-xl">
                                قیمت
                            </p>
                            <p className="text-xl font-bold">
                                45,000 تومان
                            </p>
                        </div>
                        <Buttonx classes="mt-12">
                            افزودن به سبد خرید
                        </Buttonx>
                    </div>
                    <ImageBox src={laptop} alt="monitor" classes="" />
                </div>
                <div className="px-8">
                    <h2 className="font-bold text-5xl mb-8">
                        درباره دوره
                    </h2>
                    <p className="leading-[3rem] font-bold text-2xl mb-28">
                        لورم ایپسوم متن ساختگی با  تولید سادگی  نامفهوم از  صنعت چاپ و با استفاده  از  طراحان  گرافیک است  چاپگرها و متون بلکه
                        یک روزنامه  و  مجله در ستون و  سطر آنچنان که لازم  است و برای  شرایط  فعلی تکنولوژی  مورد  نیاز  و کاربردهای متنوع با هدف
                        بهبود لورم ایپسوم متن ساختگی  با  تولید سادگی نامفهوم  از صنعت چاپ و با استفاده از  طراحان گرافیک است چاپگرها و متون
                        بلکه یک روزنامه  و مجله در ستون و  سطر آنچنان که لازم است و  برای  شرایط فعلی  تکنولوژی مورد  نیاز   و  کاربردهای  متنوع  با
                        هدف بهبود لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ی
                        لورم ایپسوم متن ساختگی با  تولید سادگی  نامفهوم از  صنعت چاپ و با استفاده  از  طراحان  گرافیک است  چاپگرها و متون بلکه
                        یک روزنامه  و  مجله در ستون و  سطر آنچنان که لازم  است و برای  شرایط  فعلی تکنولوژی  مورد  نیاز  و کاربردهای متنوع با هدف
                        بهبود لورم ایپسوم متن ساختگی  با  تولید سادگی نامفهوم  از صنعت چاپ و با استفاده از  طراحان گرافیک است چاپگرها و متون
                        بلکه یک روزنامه  و مجله در ستون و  سطر آنچنان که لازم است و  برای  شرایط فعلی  تکنولوژی مورد  نیاز   و  کاربردهای  متنوع  با
                        هدف بهبود لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ی
                    </p>
                </div>
            </div>
            <div className="container-large mb-64 grid grid-cols-2 px-8 mobile:grid-cols-4 gap-12">
                <div className="normal-shadow pt-0 pb-12 rounded-xl flex flex-col justify-center items-center">
                    <ImageBox src={img1} alt="hat" classes="w-3/4 mb-4"/>
                    <p className="text-l font-bold mb-4">
                        تعداد دانشجویان دوره
                    </p>
                    <h2 className="text-4xl font-bold">
                        25 هزار نفر
                    </h2>
                </div>
                <div className="normal-shadow pt-0 pb-12 rounded-xl flex flex-col justify-center items-center">
                    <ImageBox src={img2} alt="icon" classes="w-3/4 mb-4"/>
                    <p className="text-l font-bold mb-4">
                        حداقل زمان اتمام دوره
                    </p>
                    <h2 className="text-4xl font-bold">
                        5 ماه
                    </h2>
                </div>
                <div className="normal-shadow pt-0 pb-12 rounded-xl flex flex-col justify-center items-center">
                    <ImageBox src={img3} alt="icon" classes="w-3/4 mb-4"/>
                    <p className="text-l font-bold mb-4">
                        تعداد پکیج‌های اصلی
                    </p>
                    <h2 className="text-4xl font-bold">
                        25 پکیج
                    </h2>
                </div>
                <div className="normal-shadow pt-0 pb-12 rounded-xl flex flex-col justify-center items-center">
                    <ImageBox src={img4} alt="icon" classes="w-3/4 mb-4"/>
                    <p className="text-l font-bold mb-4">
                        تعداد آزمون‌های اصلی
                    </p>
                    <h2 className="text-4xl font-bold">
                        5 آزمون
                    </h2>
                </div>
            </div>
            <div className="container-large px-8 mb-44 flex flex-col">
                <div className="flex items-center mb-8">
                    <ImageBox src={user} alt="user" classes="ml-8"/>
                    <div className="">
                        <h3 className="text-xl mb-4 font-bold">
                            مدرس
                        </h3>
                        <h2 className="mobile:text-5xl text-3xl font-bold mb-8">
                            دکتر علیرضا مولایی
                        </h2>
                        <p className="text-secondary text-xl border-b border-secondary w-max">
                            نمایش رزومه
                        </p>
                    </div>
                </div>
                    <p className="text-2xl mb-8 font-bold leading-[3rem]">
                        لورم ایپسوم متن ساختگی با  تولید سادگی  نامفهوم از  صنعت چاپ و با استفاده  از  طراحان  گرافیک است  چاپگرها و متون بلکه
                        یک روزنامه  و  مجله در ستون و  سطر آنچنان که لازم  است و برای  شرایط  فعلی تکنولوژی  مورد  نیاز  و کاربردهای متنوع با هدف
                        بهبود لورم ایپسوم متن ساختگی  با  تولید سادگی نامفهوم  از صنعت چاپ و با استفاده از  طراحان گرافیک است چاپگرها و متون
                        بلکه یک روزنامه  و مجله در ستون و  سطر آنچنان که لازم است و  برای  شرایط فعلی  تکنولوژی مورد  نیاز   و  کاربردهای  متنوع  با
                        هدف بهبود و با استفاده از  طراحان گرافیک است.
                    </p>
                    <Buttonx classes="self-end">
                        مشاهده ویدئو >
                    </Buttonx>
            </div>
            <Consult />
            <div className="container-large px-8 mt-32">
                <h2 className="text-5xl font-bold mb-12">
                    سرفصل های دوره
                </h2>
                <div className="flex items-center mb-8">
                    <div className="rounded-full bg-primary p-3 text-white w-16 text-2xl h-16 ml-4 flex items-center justify-center w-max">1</div>
                    <Accordion sessionNumbers='2جلسه' topic="مقدمات گیت و نصب آن" sessions={api}/>
                </div>
                <div className="flex items-center mb-8">
                    <div className="rounded-full bg-primary p-3 text-white w-16 text-2xl h-16 ml-4 flex items-center justify-center w-max">2</div>
                    <Accordion sessionNumbers='6جلسه' topic="اولین اینیت و اولین کامیت" sessions={api}/>
                </div>
                <div className="flex items-center">
                    <div className="rounded-full bg-primary p-3 text-white w-16 text-2xl h-16 ml-4 flex items-center justify-center w-max">3</div>
                    <Accordion sessionNumbers='5جلسه' topic="آشنایی با شاخه ها یا همان برنچ ها" sessions={api}/>
                </div>
            </div>
            <Comments />
        </div>
    );
};

export default StarterGit;