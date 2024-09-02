import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const Feedback = () => {
  return (
    <>
      <div className="feedback-area">
        <div className="container">
          <div className="section-title">
            <h2>Trusted by over 250,000 business owners</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination]}
            className="feedback-slides"
          >
            <SwiperSlide>
              <div className="single-feedback-item">
                <div className="feedback-desc">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo.
                  </p>
                </div>

                <div className="client-info">
                  <img src="/images/author1.jpg" alt="image" />
                  <h3>David Luis</h3>
                  <span>Founder & CEO</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-feedback-item">
                <div className="feedback-desc">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo.
                  </p>
                </div>

                <div className="client-info">
                  <img src="/images/author2.jpg" alt="image" />
                  <h3>Steven Smith</h3>
                  <span>Developer</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-feedback-item">
                <div className="feedback-desc">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo.
                  </p>
                </div>

                <div className="client-info">
                  <img src="/images/author3.jpg" alt="image" />
                  <h3>Sarah Lucy</h3>
                  <span>Designer</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-feedback-item">
                <div className="feedback-desc">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo.
                  </p>
                </div>

                <div className="client-info">
                  <img src="/images/author4.jpg" alt="image" />
                  <h3>James Anderson</h3>
                  <span>Manager</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="feedback-shape">
          <img src="/images/white-shape2.png" alt="image" />
        </div>
        <div className="shape-rectangle">
          <img src="/images/1.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default Feedback;
