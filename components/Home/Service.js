import React from "react";
import Link from "next/link";

const Service = () => {
  return (
    <>
      <div className="serve-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Industries We Serve</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-md-4 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="50"
              data-aos-duration="1200"
            >
              <div className="single-serve-box">
                <i className="flaticon-factory"></i>
                <h3>Manufacturing</h3>
                <Link href="/services/details/"></Link>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-4 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <div className="single-serve-box">
                <i className="flaticon-hospital"></i>
                <h3>Healthcare</h3>
                <Link href="/services/details/"></Link>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-4 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="150"
              data-aos-duration="1200"
            >
              <div className="single-serve-box">
                <i className="flaticon-tracking"></i>
                <h3>Automobile</h3>
                <Link href="/services/details/"></Link>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-4 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <div className="single-serve-box">
                <i className="flaticon-money-bag"></i>
                <h3>Banking</h3>
                <Link href="/services/details/"></Link>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-4 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="250"
              data-aos-duration="1200"
            >
              <div className="single-serve-box">
                <i className="flaticon-house"></i>
                <h3>Real Estate</h3>
                <Link href="/services/details/"></Link>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-4 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <div className="single-serve-box">
                <i className="flaticon-box"></i>
                <h3>Logistics</h3>
                <Link href="/services/details/"></Link>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-4 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="350"
              data-aos-duration="1200"
            >
              <div className="single-serve-box">
                <i className="flaticon-insurance"></i>
                <h3>Insurance</h3>
                <Link href="/services/details/"></Link>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-4 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="400"
              data-aos-duration="1200"
            >
              <div className="single-serve-box">
                <i className="flaticon-bitcoin"></i>
                <h3>Capital Markets</h3>
                <Link href="/services/details/"></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
