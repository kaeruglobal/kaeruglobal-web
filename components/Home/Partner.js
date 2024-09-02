import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Partner = () => {
  return (
    <>
      <div className="partner-area">
        <div className="container">
          <Swiper
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 6,
              },
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
            }}
            modules={[Autoplay]}
            className="partner-slides"
          >
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="#" target="_blank">
                  <img src="/images/partner/1.png" alt="image" />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-partner-item">
                <a href="#" target="_blank">
                  <img src="/images/partner/2.png" alt="image" />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-partner-item">
                <a href="#" target="_blank">
                  <img src="/images/partner/1.png" alt="image" />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-partner-item">
                <a href="#" target="_blank">
                  <img src="/images/partner/3.png" alt="image" />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-partner-item">
                <a href="#" target="_blank">
                  <img src="/images/partner/4.png" alt="image" />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-partner-item">
                <a href="#" target="_blank">
                  <img src="/images/partner/5.png" alt="image" />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Partner;
