import React from 'react'

const Buttonx = ({children, text,classes,type}) => {
    return (
      <button
          type={type}
          style={{background:text && "transparent", color:text && "#063bbc"}} className={`${classes} py-4 px-8 bg-primary text-white text-2xl cursor-pointer border-none rounded-xl transition-all duration-300 hover:bg-primary__light`}>
          {children}
      </button>
  );
};
export default Buttonx;