import React from "react"; 

const MainContent = () => {
  return (
    <>
      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-image">
              <img src="/images/3.png" alt="image" />
            </div>

            <div className="services-details-desc">
              <h3>Incredible Infrastructure</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy.
              </p>

              <ul className="features-list">
                <li>
                  <i className="bx bx-check-double"></i> Recommender Systems
                </li>
                <li>
                  <i className="bx bx-check-double"></i> Demand Prediction
                </li>
                <li>
                  <i className="bx bx-check-double"></i> Omnichannel Analytics
                </li>
                <li>
                  <i className="bx bx-check-double"></i> Lead Generation
                </li>
                <li>
                  <i className="bx bx-check-double"></i> Sales Prediction
                </li>
              </ul>
            </div>
          </div>

          <div className="services-details-overview">
            <div className="services-details-desc">
              <h3>Information Retrieval</h3>
              <p>
                Took a galley of type and scrambled it to make a type specimen
                book. survived not only five centuries, but also the leap into
                electronic remaining. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry’s standard dummy text ever since the 1500s, when an
                unknown printer when an unknown.
              </p>
              <p>
                Took a galley of type and scrambled it to make a type specimen
                book. survived not only five centuries, but also the leap into
                electronic remaining. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry’s standard dummy text ever since the 1500s, when an
                unknown printer when an unknown.
              </p>
            </div>

            <div className="services-details-image">
              <img src="/images/services-details/1.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
