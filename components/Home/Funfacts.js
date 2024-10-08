import React from "react";

const Funfacts = () => {
  return (
    <>
      <div className="funfacts-area ptb-110">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-6 col-lg-3 col-md-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <div className="single-funfacts">
                <div className="circlechart" data-percentage="60">
                  <svg
                    className="circle-chart"
                    viewBox="0 0 33.83098862 33.83098862"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="circle-chart__background"
                      cx="16.9"
                      cy="16.9"
                      r="15.9"
                    ></circle>
                    <circle
                      className="circle-chart__circle success-stroke"
                      strokeDasharray="60,100"
                      cx="16.9"
                      cy="16.9"
                      r="15.9"
                    ></circle>
                    <g className="circle-chart__info">
                      <text className="circle-chart__percent" x="17.9" y="17.1">
                        60%
                      </text>
                    </g>
                  </svg>
                </div>

                <span>Design</span>
                <h3>Codes</h3>
              </div>
            </div>

            <div
              className="col-6 col-lg-3 col-md-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <div className="single-funfacts">
                <div className="circlechart" data-percentage="75">
                  <svg
                    className="circle-chart"
                    viewBox="0 0 33.83098862 33.83098862"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="circle-chart__background"
                      cx="16.9"
                      cy="16.9"
                      r="15.9"
                    ></circle>
                    <circle
                      className="circle-chart__circle success-stroke"
                      strokeDasharray="75,100"
                      cx="16.9"
                      cy="16.9"
                      r="15.9"
                    ></circle>
                    <g className="circle-chart__info">
                      <text className="circle-chart__percent" x="17.9" y="17.1">
                        75%
                      </text>
                    </g>
                  </svg>
                </div>
                <span>Our happy</span>
                <h3>Clients</h3>
              </div>
            </div>

            <div
              className="col-6 col-lg-3 col-md-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <div className="single-funfacts">
                <div className="circlechart" data-percentage="85">
                  <svg
                    className="circle-chart"
                    viewBox="0 0 33.83098862 33.83098862"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="circle-chart__background"
                      cx="16.9"
                      cy="16.9"
                      r="15.9"
                    ></circle>
                    <circle
                      className="circle-chart__circle success-stroke"
                      strokeDasharray="85,100"
                      cx="16.9"
                      cy="16.9"
                      r="15.9"
                    ></circle>
                    <g className="circle-chart__info">
                      <text className="circle-chart__percent" x="17.9" y="17.1">
                        85%
                      </text>
                    </g>
                  </svg>
                </div>
                <span>Projects</span>
                <h3>Design</h3>
              </div>
            </div>

            <div
              className="col-6 col-lg-3 col-md-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
            >
              <div className="single-funfacts">
                <div className="circlechart" data-percentage="95">
                  <svg
                    className="circle-chart"
                    viewBox="0 0 33.83098862 33.83098862"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="circle-chart__background"
                      cx="16.9"
                      cy="16.9"
                      r="15.9"
                    ></circle>
                    <circle
                      className="circle-chart__circle success-stroke"
                      strokeDasharray="95,100"
                      cx="16.9"
                      cy="16.9"
                      r="15.9"
                    ></circle>
                    <g className="circle-chart__info">
                      <text className="circle-chart__percent" x="17.9" y="17.1">
                        95%
                      </text>
                    </g>
                  </svg>
                </div>
                <span>Completed</span>
                <h3>Projects</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funfacts;
