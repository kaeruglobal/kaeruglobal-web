import React from "react"; 
import Navbar from "../components/Layouts/Navbar";
import PageBannerTitle from "../components/Common/PageBannerTitle";
import FaqContent from "../components/Faq/FaqContent";
import FooterTwo from "../components/Layouts/FooterTwo";

const Faq = () => {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        pageTitle="Frequently Asked Questions"
        homePageUrl="/"
        homePageText="Home"
        activePageText="FAQ"
        imgClass="/images/page-title-bg.png"
      />

      <FaqContent />

      <FooterTwo />
    </>
  );
};

export default Faq;
