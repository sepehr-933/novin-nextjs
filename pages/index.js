import React,{useState} from 'react';
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


const Home = () => {
    //fetching data
       const {data,isLoading} = useQuery('users',() =>
           fetch('https://jsonplaceholder.typicode.com/users').then(res =>
               res.json()
       ));
    console.log(data);
    //testing redux
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    //state
    const [amount,setAmount] = useState(count);
    //handling change
    const handleChange = e => {
        setAmount(e.target.value);
    }
    return (
        <div className=" mt-72 ">
                <Path />
            <div className="rounded-full bg-primary p-4 w-max mr-8 mb-16">
                <ImageBox src={support} alt="support" classes="w-12 h-12"/>
            </div>
                <Ways />
            <Consult />
                <Comments />
            {
                isLoading ? <div>loading...</div>
                    :
                    <div className="container-large">
                        {data.map(user => {
                            return (
                                <div className="font-bold text-primary text-3xl mb-8">
                                    {user.username}
                                </div>
                            );
                        })}
                    </div>
            }

            <div className="container-large flex py-64 flex-col text-secondary items-center justify-center bg-light__gray rounded-2xl">
                <h2 className="font-bold text-3xl mb-8">
                    count : {count}
                </h2>
                <div className="flex">
                    <div className="w-max mx-4" onClick={()=> dispatch(plus({count} , {payload:2}))}>
                        <Buttonx>
                            increase
                        </Buttonx>
                    </div>
                    <div className="w-max" onClick={()=> dispatch(minus())}>
                        <Buttonx>
                            decrease
                        </Buttonx>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;