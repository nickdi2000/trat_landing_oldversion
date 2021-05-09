import React from "react";
import blogimg4 from "../img/blog/blog-4.jpg";
import blogimg5 from "../img/blog/blog-5.jpg";
import blogimg6 from "../img/blog/blog-6.jpg";
import wdg1 from "../img/wdg/wdg-img-1.jpg";
import wdg2 from "../img/wdg/wdg-img-2.jpg";
import wdg3 from "../img/wdg/wdg-img-3.jpg";
import { Link } from "react-router-dom";
const BlogList = () => {
  return (
    <>
      <div
        id="apork-latest-blog-area"
        className="apork-latest-blog-area mt-110 mb-110"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-12">
              <div className="single-blog-wraper mb-30 wow fadeInUp">
                <div className="blog-img-wraper">
                  <img src={blogimg4} alt="img4" />
                  <div className="blog-datetime">15 Dec, 2020</div>
                </div>
                <div className="blog-content-wrap">
                  <Link to="#">
                    Leverage agile frameworks the printing and industry for
                    Ipsum has been to provide a robust
                  </Link>
                  <p>
                    simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry standard dummy text ever
                    since the 1500s, when an unknown pair printer took a galley
                    of type and scrambled it to make a type
                  </p>
                </div>
              </div>

              <div className="single-blog-wraper mb-30 wow fadeInUp">
                <div className="blog-img-wraper">
                  <img src={blogimg5} alt="img5" />
                  <div className="blog-datetime">30 Jan, 2012</div>
                </div>
                <div className="blog-content-wrap">
                  <Link to="#">
                    Coding bridges the universal divide. It is the one printing
                    and industry for Ipsum has
                  </Link>
                  <p>
                    simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry standard dummy text ever
                    since the 1500s, when an unknown pair printer took a galley
                    of type and scrambled it to make a type
                  </p>
                </div>
              </div>

              <div className="single-blog-wraper wow fadeInUp">
                <div className="blog-img-wraper">
                  <img src={blogimg6} alt="img6" />
                  <div className="blog-datetime">21 Mar, 1968</div>
                </div>
                <div className="blog-content-wrap">
                  <Link to="#">
                    Connects different and countries trying times natio the
                    divide. It is the one printing and
                  </Link>
                  <p>
                    simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry standard dummy text ever
                    since the 1500s, when an unknown pair printer took a galley
                    of type and scrambled it to make a type
                  </p>
                </div>
              </div>

              <div className="apork-pagination mt-30">
                <nav className="pagination">
                  <div className="nav-links">
                    <span aria-current="page" className="page-numbers current">
                      1
                    </span>
                    <Link className="page-numbers" to="#">
                      2
                    </Link>
                    <Link className="next page-numbers" to="#">
                      <i className="fa fa-long-arrow-right"></i>
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 wow fadeInUp">
              <div className="single-sid-wdg sm-mt-30">
                <form action="#" className="wdg-search-form">
                  <input type="text" placeholder="type to search here..." />
                  <button className="submit-btn" type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>
              <div className="single-sid-wdg">
                <h4 className="sid-wdg-title">Post Archive</h4>
                <ul className="wdg-post-archive">
                  <li>
                    <Link to="#">
                      jun 2016<span>(11)</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      aug 2017<span>(02)</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      sep 2018<span>(13)</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      dec 2019<span>(444)</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="single-sid-wdg">
                <h4 className="sid-wdg-title">Latest Post</h4>
                <div className="sid-wdg-post">
                  <div className="single-wdg-post">
                    <div className="wdg-post-img">
                      <Link to="#">
                        <img
                          src={wdg1}
                          alt="blog thumbnail"
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <div className="wdg-post-content">
                      <h5>
                        <Link to="#">
                          Leverage agile frameworks to provide a robust
                        </Link>
                      </h5>
                      <span>May 03, 2019</span>
                    </div>
                  </div>

                  <div className="single-wdg-post">
                    <div className="wdg-post-img">
                      <Link to="#">
                        <img
                          src={wdg2}
                          alt="blog thumbnail"
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <div className="wdg-post-content">
                      <h5>
                        <Link to="#">
                          Coding bridges the universal divide. It is the one
                        </Link>
                      </h5>
                      <span>Jun 08, 2019</span>
                    </div>
                  </div>

                  <div className="single-wdg-post">
                    <div className="wdg-post-img">
                      <Link to="#">
                        <img
                          src={wdg3}
                          alt="blog thumbnail"
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <div className="wdg-post-content">
                      <h5>
                        <Link to="#">
                          Connects different and countries trying times natio
                        </Link>
                      </h5>
                      <span>Aug 11, 2022</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="single-sid-wdg">
                <h4 className="sid-wdg-title">Post Tags</h4>
                <ul className="list-inline tag-list">
                  <li>
                    <Link to="#">awesome</Link>
                  </li>
                  <li>
                    <Link to="#">beautiful</Link>
                  </li>
                  <li>
                    <Link to="#">flat design</Link>
                  </li>
                  <li>
                    <Link to="#">ios</Link>
                  </li>
                  <li>
                    <Link to="#">themforest</Link>
                  </li>
                  <li>
                    <Link to="#">mass</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogList;
