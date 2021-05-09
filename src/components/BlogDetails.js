import React from "react";
import blogimg4 from "../img/blog/blog-4.jpg";
import blogimg1 from "../img/blog/blog-1.jpg";
import blogimg3 from "../img/blog/blog-3.jpg";
import blogcom1 from "../img/blog/comments1.png";
import blogcom2 from "../img/blog/comments2.png";
import blogauthor from "../img/blog/blog-author.png";
import wdg1 from "../img/wdg/wdg-img-1.jpg";
import wdg2 from "../img/wdg/wdg-img-2.jpg";
import wdg3 from "../img/wdg/wdg-img-3.jpg";
import { Link } from "react-router-dom";
const BlogDetails = () => {
  return (
    <>
      <div
        id="apork-latest-blog-area"
        className="apork-latest-blog-area mt-110 mb-110"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 wow fadeInUp">
              <div className="blog-details-wraper">
                <div className="blog-details-img">
                  <img src={blogimg4} alt="img4" />
                </div>
                <div className="blog-details-content">
                  <p className="mt-30">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when this
                    looking at its layout. The point of using Lorem Ipsum is
                    that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it
                    look like readable English. Many desktop publishing packages
                    and web page editors now use Lorem Ipsum as their default
                    model text, and a search for 'lorem ipsum' will uncover many
                    web sites still in their infancy. Various versions have
                    evolved over the years
                  </p>

                  <blockquote className="block-quote">
                    <p>
                      industry.has been the industry's standard dummy text ever
                      since the 1500s, when an unk nown printer took a galley of
                      type and and scrales, but also the leap into unchang ed
                    </p>
                  </blockquote>

                  <p className="mb-30">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when this
                    looking at its layout. The point of using Lorem Ipsum is
                    that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it
                    look like readable English. Many desktop publishing packages
                    and web page editors now use Lorem Ipsum as their default
                    model text, and a search for 'lorem ipsum' will uncover many
                    web sites still in their infancy. Various versions have
                    evolved over the years
                  </p>
                  <p>
                    content here', making it look like readable English. Many
                    desktop publishing packages and web page editors now use
                    Lorem Ipsum as their default model text, and a search for
                    'lorem ipsum' will uncover many web sites still in their
                    infancy. Various versions have evolved over the years
                  </p>
                </div>
              </div>
              <div className="blog-share-comments-area">
                <div className="blog-share-icon">
                  <span>Share : </span>
                  <ul className="share-icon-list">
                    <li>
                      <Link to="#">
                        <i className="fa fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <ul className="blog-comments-count float-right">
                  <li>
                    <i className="fa fa-comment-o"></i> 3 Comment
                  </li>
                </ul>
              </div>
              <div className="blog-author-area">
                <div className="blog-author-img">
                  <img src={blogauthor} alt="author" className="img-fluid" />
                </div>
                <div className="blog-author-content">
                  <div className="author-desig">
                    <h3>Apork App</h3>
                  </div>
                  <p>
                    content here', making it look like readable English. Many
                    desktop publishing packages and web page editors now use
                    Lorem Ipsum their default text, and a search
                  </p>
                </div>
              </div>
              <div className="related-post-area">
                <div className="post-heading">
                  <h3>related post</h3>
                </div>
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="single-blog-wraper">
                      <div className="blog-img-wraper">
                        <img src={blogimg1} alt="" />
                        <div className="blog-datetime">15 Dec, 2020</div>
                      </div>
                      <div className="blog-content-wrap">
                        <Link to="#">
                          Leverage agile frameworks to provide a robust
                        </Link>
                        <p>
                          industry. Lorem Ipsum has been the industry standard
                          dummy text ever since the 1500 an unknown printer took
                          a
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="single-blog-wraper">
                      <div className="blog-img-wraper">
                        <img src={blogimg3} alt="img" />
                        <div className="blog-datetime">21 Mar, 1968</div>
                      </div>
                      <div className="blog-content-wrap">
                        <Link to="#">
                          Connects different and countries trying times natio
                        </Link>
                        <p>
                          industry. Lorem Ipsum has been the industry standard
                          dummy text ever since the 1500 an unknown printer took
                          a
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="recent-comments-area mt-50">
                <div className="post-heading">
                  <h3>recent comments</h3>
                </div>
                <div className="latest-comments">
                  <ul>
                    <li>
                      <div className="comments-box">
                        <div className="comments-avatar">
                          <img src={blogcom1} alt="img" />
                        </div>
                        <div className="comments-text">
                          <div className="avatar-name-date">
                            <h5>Apork App</h5>
                            <span>Dec 08 2022</span>
                          </div>
                          <p>
                            industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since t he 1500s, when an
                            unknown printer took a galley of type and
                          </p>{" "}
                          <Link to="#">Reply</Link>
                        </div>
                      </div>
                      <ul className="comments-reply">
                        <li>
                          <div className="comments-box">
                            <div className="comments-avatar">
                              <img src={blogcom2} alt="img" />
                            </div>
                            <div className="comments-text">
                              <div className="avatar-name-date">
                                <h5>Worker Man</h5>
                                <span>Jan 11 2019</span>
                              </div>
                              <p>
                                industry. Lorem Ipsum has been the industry's
                                dard dummy text ever since t he 1500s, when
                              </p>{" "}
                              <Link to="#">
                                Reply <i className="fa fa-long-arrow-right"></i>
                              </Link>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="comments-box">
                        <div className="comments-avatar">
                          <img src={blogcom1} alt="img" />
                        </div>
                        <div className="comments-text">
                          <div className="avatar-name-date">
                            <h5>Apork App</h5>
                            <span>Dec 08 2022</span>
                          </div>
                          <p>
                            industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since t he 1500s, when an
                            unknown printer took a galley of type and
                          </p>{" "}
                          <Link to="#">Reply</Link>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="post-comments-form-area">
                <div className="post-heading">
                  <h3>leave a comment</h3>
                </div>
                <form className="post-comments-form">
                  <div className="row">
                    <div className="col-xl-12">
                      <textarea
                        name="comments"
                        className="form-control"
                        cols="30"
                        rows="10"
                        placeholder="Your Comments"
                      ></textarea>
                    </div>
                    <div className="col-xl-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name *"
                      />
                    </div>
                    <div className="col-xl-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="E-mail *"
                      />
                    </div>
                    <div className="col-xl-12">
                      <button className="btn btn-type-6" type="submit">
                        Post Comments
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
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

export default BlogDetails;
