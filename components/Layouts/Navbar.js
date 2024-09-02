import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  // Search Modal
  const [isActiveSearchModal, setActiveSearchModal] = useState("false");
  const handleToggleSearchModal = () => {
    setActiveSearchModal(!isActiveSearchModal);
  };

  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="evolta-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/" className="navbar-brand">
                <img src="/images/white-logo.png" alt="logo" />
              </Link>

              {/* Toggle navigation */}
              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      href="/"
                      className={`nav-link ${currentPath == "/" && "active"}`}
                    >
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="#" className="nav-link">
                      Pages <i className="fas fa-chevron-down"></i>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/about/"
                          className={`nav-link ${
                            currentPath == "/about/" && "active"
                          }`}
                        >
                          About Us
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/features/"
                          className={`nav-link ${
                            currentPath == "/features/" && "active"
                          }`}
                        >
                          Features
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/team"
                          className={`nav-link ${
                            currentPath == "/team/" && "active"
                          }`}
                        >
                          Team
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="#" className="nav-link">
                          Services
                        </Link>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/services"
                              className={`nav-link ${
                                currentPath == "/services/" && "active"
                              }`}
                            >
                              Services
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/services/details"
                              className={`nav-link ${
                                currentPath == "/services/details/" && "active"
                              }`}
                            >
                              Services Details
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link href="#" className="nav-link">
                          Shop
                        </Link>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/shop"
                              className={`nav-link ${
                                currentPath == "/shop/" && "active"
                              }`}
                            >
                              Shop
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/shop/details/"
                              className={`nav-link ${
                                currentPath == "/shop/details/" && "active"
                              }`}
                            >
                              Single Products
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/cart"
                              className={`nav-link ${
                                currentPath == "/cart/" && "active"
                              }`}
                            >
                              Cart
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/checkout"
                              className={`nav-link ${
                                currentPath == "/checkout/" && "active"
                              }`}
                            >
                              Checkout
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link href="#" className="nav-link">
                          Blog
                        </Link>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/blog"
                              className={`nav-link ${
                                currentPath == "/blog/" && "active"
                              }`}
                            >
                              Blog
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/blog/details"
                              className={`nav-link ${
                                currentPath == "/blog/details/" && "active"
                              }`}
                            >
                              Blog Details
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/404"
                          className={`nav-link ${
                            currentPath == "/404/" && "active"
                          }`}
                        >
                          404 Error
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/coming-soon"
                          className={`nav-link ${
                            currentPath == "/coming-soon/" && "active"
                          }`}
                        >
                          Coming Soon
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/faq"
                          className={`nav-link ${
                            currentPath == "/faq/" && "active"
                          }`}
                        >
                          FAQ
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="#" className="nav-link">
                      Services <i className="fas fa-chevron-down"></i>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/services"
                          className={`nav-link ${
                            currentPath == "/services/" && "active"
                          }`}
                        >
                          Services
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/services/details"
                          className={`nav-link ${
                            currentPath == "/services/details/" && "active"
                          }`}
                        >
                          Services Details
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="#" className="nav-link">
                      Shop <i className="fas fa-chevron-down"></i>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/shop"
                          className={`nav-link ${
                            currentPath == "/shop/" && "active"
                          }`}
                        >
                          Shop
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/shop/details/"
                          className={`nav-link ${
                            currentPath == "/shop/details/" && "active"
                          }`}
                        >
                          Single Products
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/cart"
                          className={`nav-link ${
                            currentPath == "/cart/" && "active"
                          }`}
                        >
                          Cart
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/checkout"
                          className={`nav-link ${
                            currentPath == "/checkout/" && "active"
                          }`}
                        >
                          Checkout
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="#" className="nav-link">
                      Blog <i className="fas fa-chevron-down"></i>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/blog"
                          className={`nav-link ${
                            currentPath == "/blog/" && "active"
                          }`}
                        >
                          Blog
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/blog/details"
                          className={`nav-link ${
                            currentPath == "/blog/details/" && "active"
                          }`}
                        >
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/features"
                      className={`nav-link ${
                        currentPath == "/features/" && "active"
                      }`}
                    >
                      Features
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/contact"
                      className={`nav-link ${
                        currentPath == "/contact/" && "active"
                      }`}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="others-options">
                <Link href="/cart" className="cart-btn">
                  <i className="flaticon-shopping-basket"></i>
                </Link>

                <div className="option-item">
                  <i
                    className="search-btn fas fa-search"
                    onClick={handleToggleSearchModal}
                  ></i>
                </div>

                <Link href="/contact" className="btn btn-primary">
                  Free Quote
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Search Form */}
      <div
        className={`search-overlay ${
          isActiveSearchModal ? "" : "search-overlay-active"
        }`}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>

            <div
              className="search-overlay-close"
              onClick={handleToggleSearchModal}
            >
              <span className="search-overlay-close-line"></span>
              <span className="search-overlay-close-line"></span>
            </div>

            <div className="search-overlay-form">
              <form>
                <input
                  type="text"
                  className="input-search"
                  placeholder="Search here..."
                />
                <button type="submit"> 
                  <i className='bx bx-search'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Search Form */}
    </>
  );
};

export default Navbar;
