import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBannerTitle from "../components/Common/PageBannerTitle";
import FooterTwo from "../components/Layouts/FooterTwo";
import CartContent from "../components/Cart/CartContent";

const Cart = () => {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        pageTitle="Cart"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Cart"
        imgClass="/images/page-title-bg.png"
      />

      <CartContent />

      <FooterTwo />
    </>
  );
};

export default Cart;
