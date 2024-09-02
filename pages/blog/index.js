import React from "react"; 
import Navbar from "../../components/Layouts/Navbar";
import PageBannerTitle from "../../components/Common/PageBannerTitle";
import BlogPost from "../../components/Blog/BlogPost";
import FooterTwo from "../../components/Layouts/FooterTwo";

const Blog = () => {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        pageTitle="Blog"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog"
        imgClass="/images/page-title-bg.png"
      />

      <BlogPost />

      <FooterTwo />
    </>
  );
};

export default Blog;
