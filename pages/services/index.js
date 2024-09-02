import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBannerTitle from "../../components/Common/PageBannerTitle";
import FooterTwo from "../../components/Layouts/FooterTwo";
import MainContent from "../../components/Services/MainContent";

const Services = () => {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        pageTitle="Services"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services"
        imgClass="/images/page-title-bg.png"
      />
 
      <MainContent />

      <FooterTwo />
    </>
  );
};

export default Services;
