import React from 'react';
import line from '../../../../public/Assets/png/lines.png';
import backend from '../../../../public/Assets/png/back end.png';
import frontend from '../../../../public/Assets/png/front end.png';
import mobile from '../../../../public/Assets/png/mobile.png';
import Buttonx from "../../../shared/Button";
import ImageBox from "../../../shared/ImageBox";

const Ways = () => {
  return (
      <div className="mb-72 container-large px-8">
          <h1 className="mx-auto w-max flex mb-8">
              <p className="text-secondary font-bold text-3xl ">
                  فقط
              </p>
              <p className="text-primary__dark font-bold text-3xl mr-bt-md">
                  یکی از مسیرهای زیر رو انتخاب کن
              </p>
          </h1>
          <div className="ways-lines mr-bt-md">
              <ImageBox src={line} alt="lines" classes="w-2/3 mx-auto hidden mobile:block"/>
          </div>
          <div className="grid grid-cols-1 mobile:grid-cols-3  gap-16">
              <div className="flex flex-col justify-between items-center  normal-shadow rounded-xl p-8">
                  <ImageBox src={backend} alt="backend" classes="w-4/5 " ImageClasses=""/>
                  <Buttonx>
                      متخصص backend شو
                  </Buttonx>
              </div>
              <div className="flex flex-col justify-between mobile:mobile-container items-center  normal-shadow rounded-xl py-8 px-16">
                  <ImageBox src={mobile} alt="backend" classes="ways-images-mob" ImageClasses=""/>
                  <Buttonx classes="buttonxxx">
                      متخصص mobile شو
                  </Buttonx>
              </div>
              <div className="flex flex-col items-center justify-between  normal-shadow rounded-xl p-8">
                  <ImageBox src={frontend} alt="backend" classes="w-4/5  " ImageClasses=""/>
                  <Buttonx>
                      متخصص frontend شو
                  </Buttonx>
              </div>
          </div>
      </div>
  );
};

export default Ways;