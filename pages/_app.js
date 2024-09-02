import React from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import '../styles/boxicons.min.css';
import '../styles/flaticon.css';
import '../styles/fontawesome.min.css';
import '../styles/progresscircle.min.css';
import '../styles/flaticon.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-tabs/style/react-tabs.css';
import "swiper/css";
import "swiper/css/bundle";
 
// Global Style
import "../styles/style.css";
import "../styles/responsive.css";

// For RTL style just comment out the rtl.css
// import '../styles/rtl.css';

import Head from "next/head";
import GoTop from "../components/Layouts/GoTop";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          Opstar - React Nextjs IT Startup & Tech Services Template
        </title>
      </Head>

      <Component {...pageProps} />

      <GoTop />
    </>
  );
}

export default MyApp;
