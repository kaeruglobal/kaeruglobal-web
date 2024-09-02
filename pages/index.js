import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Banner from "../components/Home/Banner";
import Partner from "../components/Home/Partner";
import Featured from "../components/Home/Featured";
import Features from "../components/Home/Features";
import Funfacts from "../components/Home/Funfacts";
import Services from "../components/Home/Services";
import Feedback from "../components/Home/Feedback";
import Service from "../components/Home/Service";
import Blog from "../components/Home/Blog";
import Subscribe from "../components/Home/Subscribe";
import Footer from "../components/Layouts/Footer";

const IndexPage = () => {
  return (
    <>
      <Navbar />

      <Banner />

      <Partner />

      <Featured />

      <Features />

      <Funfacts />

      <Services />

      <Feedback />

      <Service />

      <Blog />

      <Subscribe />

      <Footer />
    </>
  );
};

export default IndexPage;
