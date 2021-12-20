import React from 'react';
import Image from "next/image";

const Background = ({src, classes, alt,style}) => {
    return (
        <div className={`${classes} absolute -z-10`}>
            <Image objectFit="cover" src={src} alt={alt} className={`${classes} -z-10 w-full h-full`}/>
        </div>
    );
};

export default Background;