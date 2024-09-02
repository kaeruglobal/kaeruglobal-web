import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBannerTitle from "../components/Common/PageBannerTitle";
import MainContent from "../components/Team/MainContent";
import Footer from "../components/Layouts/Footer";

const Team = () => {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        pageTitle="Team"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Team"
        imgClass="/images/page-title-bg.png"
      />
 
      <MainContent />

      <Footer />
    </>
  );
};

export default Team;
