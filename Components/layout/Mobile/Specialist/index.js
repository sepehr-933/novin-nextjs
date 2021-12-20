import React from 'react';
import ImageBox from "../../../shared/ImageBox";
import img from '../../../../public/Assets/png-mob/IMAGE 00.png';

const Specialist = () => {
    return (
        <div className="container-large grid mobile:grid-cols-3 grid-cols-1 px-24">
            <ImageBox src={img} classes="w-full mobile:col-start-1 p-24 mobile:p-0 mobile:col-end-3" alt="illustration"/>
            <div className="mobile:col-start-3 mobile:col-end-4">
                <h1 className="font-bold text-5xl mb-12">
                    متخصص موبایل شو
                </h1>
                <p className="text-3xl leading-10 font-bold">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                </p>
            </div>
        </div>
    );
};

export default Specialist;