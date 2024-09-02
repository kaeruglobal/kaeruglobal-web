import React from "react";
import Link from "next/link";

const Featured = () => {
  return (
    <>
      <div className="featured-solutions-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Our featured solutions</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <div className="single-featured-solutions">
                <img src="/images/solutions/1.png" alt="image" />

                <h3>Departments</h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel adipiscing aliqua.
                </p>
                <Link href="/services/details" className="read-more-btn">
                  Read More <i className="flaticon-add"></i>
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <div className="single-featured-solutions">
                <img src="/images/solutions/2.png" alt="image" />

                <h3>Industries</h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel adipiscing aliqua.
                </p>
                <Link href="/services/details" className="read-more-btn">
                  Read More <i className="flaticon-add"></i>
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <div className="single-featured-solutions">
                <img src="/images/solutions/3.png" alt="image" />

                <h3>Technology</h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel adipiscing aliqua.
                </p>
                <Link href="/services/details" className="read-more-btn">
                  Read More <i className="flaticon-add"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
