import React,{useState,useEffect} from 'react';
import Slider from "react-slick";
import Cardx from "./Cardx";
import arrow from '../../../../public/Assets/png/icons8-collapse-arrow-25.png'
import ImageBox from "../../../shared/ImageBox";

const Comments = () => {
    const [windowSize, setWindowSize] = useState();
    const slidesToShow = windowSize > 800 ? 3 : 2
    //hypothetical api
    const users = [
        {name:"علی تقوی", grade:"دانشجوی برتر متخصص موبایل شو", comment:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه  یک روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"},
        {name:"مصطفی مرادی", grade:"دانشجوی برتر متخصص موبایل شو", comment:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه  یک روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"},
        {name:"سهراب داوودی", grade:"دانشجوی برتر متخصص موبایل شو", comment:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه  یک روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"},
        {name:"میثم ابراهیمی", grade:"دانشجوی برتر متخصص موبایل شو", comment:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه  یک روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"},
    ];
    const companies = [
        {name:"برترینها", grade:"فعال در حوزه خبر", comment:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه  یک روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"},
        {name:"نوآوران", grade:"فعال در حوزه برنامه نویسی وب", comment:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه  یک روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"},
        {name:"موبایل سازان", grade:"فعال در حوزه تعمیرات موبایل", comment:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه  یک روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"},
        {name:"صفاهان گستر", grade:"قعال در حوزه طراحی گرافیک", comment:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه  یک روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"},
    ];
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        rtl:true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    useEffect(() => {
        setWindowSize(window.innerWidth);
    },[windowSize]);
    return (
        <div className="mb-32 px-12 mt-60 container-large">
            <h1 className="text-5xl font-bold mb-12">
                نظرات دانشجویان برتر
            </h1>
            <p className="text-3xl mb-24 font-bold">
                تا کنون ۲۵,۵۸۲ نفر از آموزش های ما  استفاده کرده اند .
            </p>
            <div className="mb-36">
                <Slider {...settings}>
                    {
                        users.map((user, i) => {
                            return (
                                <Cardx username={user.name} key={i} userGrade={user.grade}>
                                    {user.comment}
                                </Cardx>
                            )
                        })
                    }
                </Slider>
            </div>
            <h1 className="text-5xl font-bold mb-12">
                نظرات شرکت‌ها درباره دانشجویان ما
            </h1>
            <p className="text-3xl mb-24 font-bold">
                تا کنون ۲۵,۵۸۲ نفر از دانشجویان ما در شرکت های داخلی و خارجی مشغول به کار شده اند.
            </p>
            <div className="mr-bt-lg">
                <Slider {...settings}>
                    {
                        companies.map((user, i) => {
                            return (
                                <Cardx username={user.name} key={i} userGrade={user.grade}>
                                    {user.comment}
                                </Cardx>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    );
};
export default Comments;
const arrowStyles = {
    display: "block",
    background: "#ff7840",
    padding:"1rem",
    width:"max-content",
    height:"max-content",
    borderRadius:"50%",
    opacity:"1"
};

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, ...arrowStyles, transform:"translate(-1.2rem,-2.8rem)"}}
            onClick={onClick}
        >
            <ImageBox src={arrow} alt="arrow" classes="rotate-90"/>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style,...arrowStyles,transform:"translate(1.6rem,-2.8rem)",zIndex:"3" }}
            onClick={onClick}
        >
            <ImageBox src={arrow} alt="arrow" classes="-rotate-90 "/>
        </div>
    );
}
