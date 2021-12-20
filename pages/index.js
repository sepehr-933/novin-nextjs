import React from 'react';
import Path from "../Components/layout/Home/Path";
import support from "../../../novin/src/Assets/png/icon support.png";
import ImageBox from "../Components/shared/ImageBox";
import Ways from "../Components/layout/Home/Ways";
import Consult from "../Components/layout/Home/Consult";
import Comments from "../Components/layout/Home/Comments";

const Home = () => {
    return (
        <div className=" mt-72 ">

                <Path />
            <div className="rounded-full bg-primary p-4 w-max mr-8 mb-16">
                <ImageBox src={support} alt="support" classes="w-12 h-12"/>
            </div>
                <Ways />
            <Consult />
                <Comments />
        </div>
    );
};

export default Home;