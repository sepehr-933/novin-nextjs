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
import {QueryClientProvider, QueryClient} from "react-query";
import {Provider} from "react-redux";
import store from "../store";
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const bgPng = (router.pathname === '/' || router.pathname === '/git') ? background : mobileBackground;
    const client = new QueryClient();
  return (
      <QueryClientProvider client={client}>
          <Provider store={store}>
              <div>
                  <Header background={bgPng} />
                  <Component {...pageProps} />
                  <Footer />
              </div>
          </Provider>
      </QueryClientProvider>
      )
}

export default MyApp
