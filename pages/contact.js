import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBannerTitle from "../components/Common/PageBannerTitle";
import FooterTwo from "../components/Layouts/FooterTwo";
import ContactForm from "../components/Contact/ContactForm";

const Contact = () => {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        pageTitle="Contact"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact"
        imgClass="/images/page-title-bg.png"
      />

      <div className="contact-area ptb-110">
        <div className="container">
          <div className="section-title">
            <span>Contact Us</span>
            <h2>Drop us Message for any Query</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-4 col-md-4">
              <div className="contact-image">
                <img src="/images/contact.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-8 col-md-8">
              {/* ContactForm */}
              <ContactForm />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="bx bx-envelope"></i>
                </div>

                <h3>Email Here</h3>
                <p>
                  <a href="mailto:admin@opstar.com">admin@opstar.com</a>
                </p>
                <p>
                  <a href="mailto:info@opstar.com">info@opstar.com</a>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="bx bx-map"></i>
                </div>

                <h3>Location Here</h3>
                <p>
                  2750 Quadra Street Victoria, <br /> New York, Canada
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="bx bx-phone-call"></i>
                </div>

                <h3>Call Here</h3>
                <p>
                  <a href="tel:1234567890">+123 456 7890</a>
                </p>
                <p>
                  <a href="tel:2414524526">+241 452 4526</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterTwo />
    </>
  );
};

export default Contact;
