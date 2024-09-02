import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBannerTitle from "../../components/Common/PageBannerTitle";
import Footer from "../../components/Layouts/Footer";
import ProductContent from "../../components/Shop/ProductContent";

const Shop = () => {
  return (
      <>
        <Navbar />

        <PageBannerTitle
          pageTitle="Shop"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Shop"
          imgClass="/images/page-title-bg.png"
        />
 
        <ProductContent />

        <Footer />
      </>
    )
}

export default Shop;
