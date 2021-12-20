import '../styles/gobal.scss';
import 'tailwindcss/tailwind.css';
import React from "react";
import {useRouter} from "next/router";
import Header from "../Components/layout/Header";
import background from '../public/Assets/png/bg header.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Components/layout/Footer";
import mobileBackground from '../public/Assets/png-mob/bg.png';

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const bgPng = router.pathname === '/' ? background : mobileBackground;
  return (
      <div>
          <Header background={bgPng} />
        <Component {...pageProps} />
        <Footer />
      </div>
      )
}

export default MyApp
