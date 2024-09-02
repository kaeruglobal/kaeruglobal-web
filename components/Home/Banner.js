import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <>
      <div className="main-banner">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="main-banner-content">
                    <span
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                    >
                      Artificial Intelligence (AI)
                    </span>
                    <h1
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="1200"
                    >
                      Work smarter, together.
                    </h1>
                    <p
                      data-aos="fade-up"
                      data-aos-delay="300"
                      data-aos-duration="1200"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>

                    <Link
                      href="/contact"
                      className="btn btn-primary"
                      data-aos="fade-up"
                      data-aos-delay="400"
                      data-aos-duration="1200"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div
                    className="main-banner-image"
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="1200"
                  >
                    <img src="/images/banner-img1.png" alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="banner-shape">
          <img src="/images/white-shape.png" alt="image" />
        </div>
        <div className="shape1">
          <img src="/images/shape/2.png" alt="image" />
        </div>
        <div className="shape2">
          <img src="/images/shape/3.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default Banner;
