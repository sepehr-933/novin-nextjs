import React from 'react';
import image from '../../../../public/Assets/png/IMAGE 2.png';
import counter from '../../../../public/Assets/png/icon user.png';
import phone from '../../../../public/Assets/png/icon phone.png';
import Buttonx from "../../../shared/Button";
import ImageBox from "../../../shared/ImageBox";
import {useForm} from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";

const Consult = () => {
    //handling form
    const schema = yup.object({
        name : yup.string().required(),
        phone : yup.number().required(),
    }).required();
    const {register,handleSubmit,formState : {errors}} = useForm({
        resolver : yupResolver(schema)
    });
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className="bg-light__gray ">
            <div className="container-large py-32 grid grid-cols-1 mobile:grid-cols-2 gap-24 ">
                <ImageBox src={image} alt="thinking boy" classes="  "/>
                <div className="flex items-center flex-col justify-center mobile:block">
                    <h1 className="text-5xl font-bold mb-20">
                        به مشاوره نیاز داری ؟
                    </h1>
                    <p className="text-3xl font-bold mb-28">
                        <p>فرم زیر رو پر کن،</p>
                        <p>کارشناسانمون در اسرع وقت باهات تماس میگیرند.</p>
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex mb-4  translate-x-12">
                            <div className="bg-light__gray2  rounded-xl px-3 py-1 h-max consult-icon">
                                <ImageBox src={counter} alt="counter" classes="w-7 "/>
                            </div>
                            <input {...register("name")} placeholder="نام و نام خانوادگی" className="py-6 pl-24 consult-input border-solid border-dark__gray mobile:w-1/2 border-2 pr-20 rounded-xl "/>
                        </div>
                        <p className="text-l mb-4 text-secondary">{errors?.name?.message}</p>
                        <div className="flex  mb-4 translate-x-12">
                            <div className="bg-light__gray2 rounded-xl px-3 py-2 h-max consult-icon">
                                <ImageBox src={phone} alt="counter" classes="w-7 "/>
                            </div>
                            <input {...register("phone")} placeholder="شماره تلفن" className="py-6 pl-24 consult-input border-solid border-dark__gray mobile:w-1/2 border-2 pr-20 rounded-xl "/>
                        </div>
                        <p className="text-l mb-4 text-secondary">{errors?.phone?.message}</p>
                        <Buttonx type="submit" classes="consult-button w-4/5 mobile:w-1/2 -translate-x-1">
                            ارسال
                        </Buttonx>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Consult;