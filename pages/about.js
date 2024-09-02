import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBannerTitle from "../components/Common/PageBannerTitle";
import MainContent from "../components/About/MainContent";
import Features from "../components/Home/Features";
import Funfacts from "../components/Home/Funfacts";
import Team from "../components/About/Team";
import Feedback from "../components/Home/Feedback";
import Subscribe from "../components/Home/Subscribe";
import Footer from "../components/Layouts/Footer";

const About = () => {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        pageTitle="About"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About"
        imgClass="/images/page-title-bg.png"
      />

      <MainContent />

      <Features />

      <Funfacts />

      <Team />

      <Feedback />

      <Subscribe />

      <Footer />
    </>
  );
};

export default About;
