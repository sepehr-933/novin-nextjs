import React from 'react';
import ImageBox from "../../shared/ImageBox";
import user from '../../../public/Assets/png-concepts/ic User.png';
import clock from '../../../public/Assets/png-concepts/ic Time.png';
import arrow from '../../../public/Assets/png-concepts/Group 1005.png';

const Cardxx = ({courseName, professor, time,image,price}) => {
    return (
        <div style={{direction:"rtl"}} className="normal-shadow rounded-xl my-4 mx-8">
            <ImageBox src={image} alt="course" classes="w-full"/>
            <div className="p-4">
                <h2 className="font-bold text-xl mobile:text-3xl mb-8">
                    {courseName}
                </h2>
                <div className="flex items-center mb-4">
                    <ImageBox src={user} alt="user" classes="w-8 ml-2" />
                    <p className="text-l font-bold">
                        {professor}
                    </p>
                </div>
                <div className="flex items-center">
                    <ImageBox src={clock} alt="time" classes="w-8 ml-2" />
                    <p className="text-l font-bold">
                        {time}
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-between border-t border-dark__gray m-4 py-4">
                <p className="text-2xl font-bold">
                    {price}
                </p>
                <ImageBox src={arrow} alt="left arrow" classes="w-1/5"/>
            </div>
        </div>
    );
};

export default Cardxx;