import React,{useState,useEffect} from 'react';
import Path from "../Components/layout/Home/Path";
import support from "../public/Assets/png/icon support.png";
import ImageBox from "../Components/shared/ImageBox";
import Ways from "../Components/layout/Home/Ways";
import Consult from "../Components/layout/Home/Consult";
import Comments from "../Components/layout/Home/Comments";
import {useQuery} from "react-query";
import {useDispatch,useSelector} from "react-redux";
import {selectCount} from "../store/selectors";
import Buttonx from "../Components/shared/Button";
import {minus,plus} from "../store/reducers/counter";
import {fetchUsers} from "../store/reducers/users";
import {fetchUser} from "../store/reducers/getUserById";
import counter from "../public/Assets/png/icon user.png";
import phone from "../public/Assets/png/icon phone.png";
import {useForm} from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import {useMutation} from "react-query";
import {postForm,getForm} from "../gate";
import { toast , ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from "axios";


const Home = () => {
    //form handling
    const schema = yup.object({
        name : yup.string().required(),
        phone : yup.number().required(),
        email : yup.string().email().required(),
        address : yup.string().required(),
        postalCode : yup.string(),
    })
    const {register,handleSubmit,formState : {errors}} = useForm({
        resolver : yupResolver(schema)
    });
    const mutation = useMutation(data => {
        return postForm(data);
    });
    const onSubmit = data => {
        mutation.mutate(data);
    };
    //making the request
    useEffect(() => {
        dispatch(fetchUsers());
    },[]);
    //testing redux
    const count = useSelector(state => state?.counter?.count);
    const usersData = useSelector(state => state?.users?.users);
    const pickedUser = useSelector(state => state?.user?.user);
    const dispatch = useDispatch();
    //handling network errors

    //state
    const [amount,setAmount] = useState(count);
    //handling change
    const handleChange = e => {
        setAmount(e.target.value);
    }
    //handling click
    const handleClick = (id) => {
        dispatch(fetchUser({id}));
    };
    //getting form
    return  (
        <div className=" mt-72 ">
                <Path />
            <div className="rounded-full bg-primary p-4 w-max mr-8 mb-16">
                <ImageBox src={support} alt="support" classes="w-12 h-12"/>
            </div>
                <Ways />
            <Consult />
                <Comments />
                    {/*<div className="container-large">*/}
                    {/*    <div className="w-max mx-auto text-primary text-3xl font-bold">*/}
                    {/*        pick a user*/}
                    {/*    </div>*/}
                        {/*<div className="flex justify between">*/}
                        {/*    <div className="flex flex-col">*/}
                        {/*        {usersData && usersData.map(user => {*/}
                        {/*            return (*/}
                        {/*                <div*/}
                        {/*                    key={user.id}*/}
                        {/*                    onClick={() => handleClick(user.id)}*/}
                        {/*                    className="font-bold cursor-pointer text-primary text-3xl mb-8"*/}
                        {/*                >*/}
                        {/*                    {user.username}*/}
                        {/*                </div>*/}
                        {/*            );*/}
                        {/*        })}*/}
                        {/*    </div>*/}
                        {/*    <div className="flex flex-col">*/}
                        {/*        {pickedUser && pickedUser.map(user => {*/}
                        {/*            return (*/}
                        {/*                <div className="font-bold cursor-pointer text-primary text-3xl mb-8">*/}
                        {/*                    {user.username}*/}
                        {/*                </div>*/}
                        {/*            );*/}
                        {/*        })}*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                    {/*</div>*/}


            {/*<div className="container-large flex py-64 flex-col text-secondary items-center justify-center bg-light__gray rounded-2xl">*/}
            {/*    <h2 className="font-bold text-3xl mb-8">*/}
            {/*        count : {count}*/}
            {/*    </h2>*/}
            {/*    <div className="flex">*/}
            {/*        <div className="w-max mx-4" onClick={()=> dispatch(plus(amount))}>*/}
            {/*            <Buttonx>*/}
            {/*                increase*/}
            {/*            </Buttonx>*/}
            {/*        </div>*/}
            {/*        <div className="w-max ml-4" onClick={()=> dispatch(minus(amount))}>*/}
            {/*            <Buttonx>*/}
            {/*                decrease*/}
            {/*            </Buttonx>*/}
            {/*        </div>*/}
            {/*        <input*/}
            {/*            className="p-4 rounded-xl normal-shadow"*/}
            {/*            placeholder="amount to add or decrease"*/}
            {/*            value={amount}*/}
            {/*            onChange={(e) => handleChange(e)}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*</div>*/}
            <ToastContainer />
            {/*<form onSubmit={handleSubmit(onSubmit)} className="py-16 container-large w-max mx-auto">*/}
            {/*    <div className="flex mb-4  translate-x-12">*/}
            {/*        <div className="bg-light__gray2  rounded-xl px-3 py-1 h-max consult-icon">*/}
            {/*            <ImageBox src={counter} alt="counter" classes="w-7 "/>*/}
            {/*        </div>*/}
            {/*        <input {...register("name")} placeholder="نام و نام خانوادگی" className="py-6 pl-24 consult-input border-solid border-dark__gray w-full border-2 pr-20 rounded-xl "/>*/}
            {/*    </div>*/}
            {/*    <p className="text-l mb-4 text-secondary">{errors?.name?.message}</p>*/}

            {/*    <div className="flex  mb-4 translate-x-12">*/}
            {/*        <div className="bg-light__gray2 rounded-xl px-3 py-2 h-max consult-icon">*/}
            {/*            <ImageBox src={phone} alt="counter" classes="w-7 "/>*/}
            {/*        </div>*/}
            {/*        <input {...register("phone")} placeholder="شماره تلفن" className="py-6 pl-24 consult-input border-solid border-dark__gray w-full border-2 pr-20 rounded-xl "/>*/}
            {/*    </div>*/}
            {/*    <p className="text-l mb-4 text-secondary">{errors?.phone?.message}</p>*/}

            {/*    <div className="flex  mb-4 translate-x-12">*/}
            {/*        <div className="bg-light__gray2 rounded-xl px-3 py-2 h-max consult-icon">*/}
            {/*            <ImageBox src={phone} alt="counter" classes="w-7 "/>*/}
            {/*        </div>*/}
            {/*        <input {...register("email")} placeholder="ایمیل"  className="py-6 pl-24 consult-input border-solid border-dark__gray w-full border-2 pr-20 rounded-xl "/>*/}
            {/*    </div>*/}
            {/*    <p className="text-l mb-4 text-secondary">{errors?.email?.message}</p>*/}

            {/*    <div className="flex  mb-4 translate-x-12">*/}
            {/*        <div className="bg-light__gray2 rounded-xl px-3 py-2 h-max consult-icon">*/}
            {/*            <ImageBox src={phone} alt="counter" classes="w-7 "/>*/}
            {/*        </div>*/}
            {/*        <input {...register("postalCode")} placeholder="کد پستی"  className="py-6 pl-24 consult-input border-solid border-dark__gray w-full border-2 pr-20 rounded-xl "/>*/}
            {/*    </div>*/}
            {/*    <p className="text-l mb-4 text-secondary">{errors?.postalCode?.message}</p>*/}

            {/*    <div className="flex  mb-4 translate-x-12">*/}
            {/*        <div className="bg-light__gray2 rounded-xl px-3 py-2 h-max consult-icon">*/}
            {/*            <ImageBox src={phone} alt="counter" classes="w-7 "/>*/}
            {/*        </div>*/}
            {/*        <input {...register("address")} placeholder="آدرس"  className="py-6 pl-24 consult-input border-solid border-dark__gray w-full border-2 pr-20 rounded-xl "/>*/}
            {/*    </div>*/}
            {/*    <p className="text-l mb-4 text-secondary">{errors?.address?.message}</p>*/}

            {/*    <Buttonx type="submit" classes="consult-button w-3/4 -translate-x-1">*/}
            {/*        ارسال*/}
            {/*    </Buttonx>*/}
            {/*</form>*/}
        </div>
    );
};

export default Home;