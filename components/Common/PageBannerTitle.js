import React from "react";
import Link from "next/link";

const PageBannerTitle = ({
  pageTitle,
  homePageUrl,
  homePageText,
  activePageText,
  imgClass,
}) => {
  return (
    <>
      <div className="page-title-area" style={{ backgroundImage: `url(${imgClass})` }}>
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-content">
                <h2>{pageTitle}</h2>
                <ul>
                  <li>
                    <Link href={homePageUrl}>{homePageText}</Link>
                  </li>
                  <li className="active">{activePageText}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBannerTitle;
