import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBannerTitle from "../../../components/Common/PageBannerTitle";
import BlogDetailsContent from "../../../components/Blog/BlogDetailsContent";
import FooterTwo from "../../../components/Layouts/FooterTwo";

const BlogDetails = () => {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        pageTitle="Blog Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Details"
        imgClass="/images/page-title-bg.png"
      />

      <BlogDetailsContent />

      <FooterTwo />
    </>
  );
};

export default BlogDetails;
