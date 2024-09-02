import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBannerTitle from "../../../components/Common/PageBannerTitle";
import FooterTwo from "../../../components/Layouts/FooterTwo";
import MainContent from "../../../components/SingleServices/MainContent";

const SingleServices = () => {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        pageTitle="Image Processing"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Image Processing"
        imgClass="/images/page-title-bg.png"
      />

      <MainContent />

      <FooterTwo />
    </>
  );
};

export default SingleServices;
