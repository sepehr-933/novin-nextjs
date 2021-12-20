import React,{useState,useEffect} from 'react';
import Buttonx from "../../../shared/Button";
import confusedMan from '../../../../public/Assets/png/IMAGE 1.png'
import ImageBox from "../../../shared/ImageBox";


const Path = () => {
    const [windowSize, setWindowSize] = useState();
    useEffect(() => {
        setWindowSize(window.innerWidth);
    })
    return (
        <div className="path grid w-full grid-cols-1 mobile:grid-cols-2 gap-20 container-large px-8 mb-16">
            <div className="flex-col flex h-full mb-12">
                <h1 className="text-5xl font-bold mb-20">
                    مسیرتو مشخص کن
                </h1>
                <p className="text-3xl leading-10 mb-auto">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                    از صنعت چاپ و با استفاده از طراحان گرافیک است
                    چاپگرها و متون بلکه  یک روزنامه و مجله در ستون
                    و سطر آنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                    از صنعت چاپ و با استفاده از طراحان گرافیک است
                </p>
                <Buttonx classes={`${windowSize > 580 && "path-button"} mb-12 self-end`}>
                    مشاهده ویدئو
                </Buttonx>
            </div>
            <div className="path-image">
                <ImageBox src={confusedMan} alt="man" classes="w-full p-8 -z-10"/>
            </div>
        </div>
    );
};

export default Path;