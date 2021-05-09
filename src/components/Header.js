import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import brand from "../img/logo-1.png";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  const classadd = () => {
    document.querySelector("#search-btn");
    document.querySelector(".search-form-area").classList.add("active");
  };

  const classdelet = () => {
    document.querySelector("#close-btn");
    document.querySelector(".search-form-area").classList.remove("active");
  };

  return (
    <>
      <header>
        <div className={scroll ? "header-area sticky" : "header-area"}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar navbar-expand-xl navbar-light main-menu">
                  <Link
                    className="navbar-brand"
                    to={`${process.env.PUBLIC_URL + "/"}`}
                  >
                    <img src={brand} alt="brandimg" />
                  </Link>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item active">
                        <Link
                          className="nav-link"
                          to={`${process.env.PUBLIC_URL + "/"}`}
                        >
                          home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={`${process.env.PUBLIC_URL + "/about"}`}
                        >
                          About
                        </Link>
                      </li>
                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link dropdown-toggle"
                          to="#"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Pages
                        </Link>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <Link
                            className="dropdown-item"
                            to={`${process.env.PUBLIC_URL + "/pricing"}`}
                          >
                            Pricing
                          </Link>
                          <div className="dropdown-divider"></div>
                          <Link
                            className="dropdown-item"
                            to={`${process.env.PUBLIC_URL + "/error"}`}
                          >
                            Error
                          </Link>
                        </div>
                      </li>

                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={`${process.env.PUBLIC_URL + "/features"}`}
                        >
                          Features
                        </Link>
                      </li>

                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link dropdown-toggle"
                          to="#"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Blog
                        </Link>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <Link
                            className="dropdown-item"
                            to={`${process.env.PUBLIC_URL + "/blog-list"}`}
                          >
                            Blog List
                          </Link>
                          <div className="dropdown-divider"></div>
                          <Link
                            className="dropdown-item"
                            to={`${process.env.PUBLIC_URL + "/blog-grid"}`}
                          >
                            blog grid
                          </Link>
                          <div className="dropdown-divider"></div>
                          <Link
                            className="dropdown-item"
                            to={`${process.env.PUBLIC_URL + "/blog-details"}`}
                          >
                            blog details
                          </Link>
                        </div>
                      </li>

                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={`${process.env.PUBLIC_URL + "/contact"}`}
                        >
                          Contact
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          id="search-btn"
                          className="nav-link"
                          to="#"
                          onClick={classadd}
                        >
                          <i className="fa fa-search"></i>
                        </Link>
                      </li>
                      <li className="header-top-btn nav-item">
                        <Link to="#" className="btn btn-type-1">
                          download <i className="fa fa-download"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="search-form-area" id="search-overlay">
          <div className="search-form-centered">
            <div id="search-box">
              <i
                id="close-btn"
                className="fa fa-times fa-2x"
                onClick={classdelet}
              />
              <form className="search-form">
                <input
                  className="form-control"
                  placeholder="Type your text"
                  type="text"
                />
                <button type="submit">
                  <span>Search</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default withRouter(Header);
