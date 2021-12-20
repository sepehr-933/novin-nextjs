import '../styles/gobal.scss';
import 'tailwindcss/tailwind.css';
import React from "react";
import Header from "../Components/layout/Header";
import background from '../public/Assets/png/bg header.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Components/layout/Footer";

function MyApp({ Component, pageProps }) {
  return (
      <div>
          <Header background={background} />
        <Component {...pageProps} />
        <Footer />
      </div>
      )
}

export default MyApp
