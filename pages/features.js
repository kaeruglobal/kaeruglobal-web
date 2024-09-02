import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBannerTitle from "../components/Common/PageBannerTitle";
import Features from "../components/Home/Features";
import Funfacts from "../components/Home/Funfacts";
import Subscribe from "../components/Home/Subscribe";
import Footer from "../components/Layouts/Footer";

const FeaturesPage = () => {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        pageTitle="Features"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Features"
        imgClass="/images/page-title-bg.png"
      />

      <Features />

      <Funfacts />

      <Subscribe />

      <Footer />
    </>
  );
};

export default FeaturesPage;
