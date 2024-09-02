import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBannerTitle from "../components/Common/PageBannerTitle";
import FooterTwo from "../components/Layouts/FooterTwo";
import CheckoutForm from "../components/Checkout/CheckoutForm";

const Checkout = () => {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        pageTitle="Checkout"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Checkout"
        imgClass="/images/page-title-bg.png"
      />

      <CheckoutForm />

      <FooterTwo />
    </>
  );
};

export default Checkout;
