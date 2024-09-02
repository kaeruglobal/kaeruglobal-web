import React from "react";
import Link from "next/link";

const Blog = () => {
  return (
    <>
      <div className="blog-area ptb-110 bg-f9f9f9">
        <div className="container">
          <div className="section-title">
            <h2>Our recent story</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href="/blog/details">
                    <img src="/images/blog/1.jpg" alt="image" />
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <Link href="#">Admin</Link>
                      </li>
                      <li>August 15, 2024</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="/blog/details">
                      Making Peace With The Feast Or Famine Of Freelancing
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>

                  <Link href="/blog/details" className="read-more-btn">
                    Read More <i className="flaticon-add-1"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href="/blog/details">
                    <img src="/images/blog/2.jpg" alt="image" />
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <Link href="#">Admin</Link>
                      </li>
                      <li>August 18, 2024</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="/blog/details">
                      I Used The Web For A Day On A 50 MB Budget
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>

                  <Link href="/blog/details" className="read-more-btn">
                    Read More <i className="flaticon-add-1"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href="/blog/details">
                    <img src="/images/blog/3.jpg" alt="image" />
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <Link href="#">Admin</Link>
                      </li>
                      <li>August 15, 2024</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="/blog/details">
                      Here are the 5 most telling signs of micromanagement
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>

                  <Link href="/blog/details" className="read-more-btn">
                    Read More <i className="flaticon-add-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
