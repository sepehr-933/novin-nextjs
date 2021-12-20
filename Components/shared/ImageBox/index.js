import React from 'react';
import Image from "next/image";

const ImageBox = ({classes,ImageClasses,src,alt,styles}) => {
    return (
        <div style={styles} className={`${classes}`}>
            <Image src={src} alt={alt} className={`${ImageClasses}`}/>
        </div>
    );
};

export default ImageBox;