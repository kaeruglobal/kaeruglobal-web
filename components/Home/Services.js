import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="services-area ptb-110 bg-fafafa pb-0">
        <div className="container">
          <div className="section-title">
            <h2>See wide range of our services</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <div className="single-services-box">
                <div className="icon">
                  <img src="/images/services/plug.png" alt="image" />
                </div>
                <h3>
                  <Link href="/services/details">Machine Learning</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <div className="single-services-box">
                <div className="icon">
                  <img src="/images/services/plug.png" alt="image" />
                </div>
                <h3>
                  <Link href="/services/details">Robotics And Drones</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <div className="single-services-box">
                <div className="icon">
                  <img src="/images/services/sensor.png" alt="image" />
                </div>
                <h3>
                  <Link href="/services/details">Image Processing</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
            >
              <div className="single-services-box">
                <div className="icon">
                  <img src="/images/services/database.png" alt="image" />
                </div>
                <h3>
                  <Link href="/services/details">AI For Cloud Services</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1200"
            >
              <div className="single-services-box">
                <div className="icon">
                  <img
                    src="/images/services/augmented-reality.png"
                    alt="image"
                  />
                </div>
                <h3>
                  <Link href="/services/details">Virtual Reality</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1200"
            >
              <div className="single-services-box">
                <div className="icon">
                  <img src="/images/services/deep.png" alt="image" />
                </div>
                <h3>
                  <Link href="/services/details">Deep Learning</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="services-shape">
          <img src="/images/services-shape.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default Services;
