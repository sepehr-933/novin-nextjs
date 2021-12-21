import React from 'react';
import Specialist from "../../Components/layout/Mobile/Specialist";
import ImageBox from "../../Components/shared/ImageBox";
import support from "../../public/Assets/png/icon support.png";
import MainLessons from "../../Components/layout/Mobile/MainLessons";
import Consult from "../../Components/layout/Mobile/Consult";
import Comments from "../../Components/layout/Mobile/Comments";

const Mobile = () => {
    return (
        <div className="mt-80">
            <Specialist />
            <div className="rounded-full bg-primary p-4 w-max mr-8 mb-40 mobile:-mt-16">
                <ImageBox src={support} alt="support" classes="w-12 h-12"/>
            </div>
            <MainLessons />
            <Consult />
            <Comments />
        </div>
    );
};

export default Mobile;