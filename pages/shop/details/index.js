import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBannerTitle from "../../../components/Common/PageBannerTitle";
import RelatedProducts from "../../../components/SingleProduct/RelatedProducts";
import MainContent from "../../../components/SingleProduct/MainContent";
import Footer from "../../../components/Layouts/Footer";

const SingleProduct = () => {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        pageTitle="Single Product"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Single Product"
        imgClass="/images/page-title-bg.png"
      />
 
      <section className="product-details-area ptb-110">
        {/* MainContent */}
        <MainContent />

        {/* RelatedProducts */}
        <RelatedProducts />
      </section>

      <Footer />
    </>
  );
};

export default SingleProduct;
