import React, {useEffect, useState} from 'react';
import Slider from "react-slick";
import Cardxx from "./Cardxx";
import img1 from '../../../public/Assets/png-concepts/photo.png';
import img2 from '../../../public/Assets/png-concepts/Group 114.png';
import img3 from '../../../public/Assets/png-concepts/Group 115.png';
import ImageBox from "../../shared/ImageBox";
import arrow from "../../../public/Assets/png/icons8-collapse-arrow-25.png";

const SlideShow = () => {
            const [windowSize, setWindowSize] = useState();
            const slidesToShow = windowSize > 800 ? 3 : 2
            //hypothetical api
            const courses = [
                {courseName: 'گیت مقدماتی', professor : 'دکتر علیرضا مولایی', time : '۱۹ : ۵۳ : ۰۰ ', price : '45,000 تومان', image : img1},
                {courseName: 'اصول طراحی ریسپانسیوی', professor : 'دکتر علیرضا مولایی', time : '۱۹ : ۵۳ : ۰۰ ', price : '45,000 تومان', image : img3},
                {courseName: 'مفاهیم برنامه نویسی', professor : 'دکتر علیرضا مولایی', time : '۱۹ : ۵۳ : ۰۰ ', price : '45,000 تومان', image: img2},
                {courseName: 'اصول طراحی ریسپانسیو', professor : 'دکتر علیرضا مولایی', time : '۱۹ : ۵۳ : ۰۰ ', price : '45,000 تومان', image : img3},
            ];
            const centerCourse = [...courses].reverse()
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
                    باید همشو یاد بگیری
                </h1>
                <div className="mb-36">
                    <Slider {...settings}>
                        {
                            courses.map((course, i) => {
                                return (
                                    <Cardxx key={course.courseName} courseName={course.courseName} image={course.image} price={course.price} time={course.time} professor={course.professor}/>
                                )
                            })
                        }
                    </Slider>
                </div>
                <h1 className="text-5xl font-bold mb-12">
                    فقط یکیشو باید یاد بگیری
                </h1>
                <div className="mb-36">
                    <Slider {...settings}>
                        {
                            centerCourse.map((course, i) => {
                                return (
                                    <Cardxx key={course.courseName} courseName={course.courseName} image={course.image} price={course.price} time={course.time} professor={course.professor}/>
                                )
                            })
                        }
                    </Slider>
                </div>
                <h1 className="text-5xl font-bold mb-12">
                    پکیح های اختیاری
                </h1>
                <div className="mb-36">
                    <Slider {...settings}>
                        {
                            courses.map((course, i) => {
                                return (
                                    <Cardxx key={course.courseName} courseName={course.courseName} image={course.image} price={course.price} time={course.time} professor={course.professor}/>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
            );
};

export default SlideShow;
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
            style={{ ...style, ...arrowStyles, transform:"translate(-0.8rem,-2.8rem)"}}
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
            style={{ ...style,...arrowStyles,transform:"translate(1.2rem,-2.8rem)",zIndex:"3" }}
            onClick={onClick}
        >
            <ImageBox src={arrow} alt="arrow" classes="-rotate-90 "/>
        </div>
    );
}