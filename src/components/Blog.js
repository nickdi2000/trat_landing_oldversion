import React from "react";
import blogimg1 from "../img/blog/blog-1.jpg";
import blogimg2 from "../img/blog/blog-2.jpg";
import blogimg3 from "../img/blog/blog-3.jpg";
import {Link} from "react-router-dom";
const Blog = () => {
  return (
    <>
      <div
        id="apork-latest-blog-area"
        className="apork-latest-blog-area wow fadeInUp"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 mx-auto">
              <div className="section-title text-center mb-80">
                <h2>Latest News</h2>
                <p>
                  Lorem ipsum dolor sit amt, consectet adop adipisicing elit,
                  sed do eiusmod more incididunt ugt labore.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="single-blog-wraper mb-30">
                <div className="blog-img-wraper">
                  <img src={blogimg1} alt="blogimg" />
                  <div className="blog-datetime">15 Dec, 2020</div>
                </div>
                <div className="blog-content-wrap">
                  <Link to="#">Leverage agile frameworks to provide a robust</Link>
                  <p>
                    industry. Lorem Ipsum has been the industry standard dummy
                    text ever since the 1500 an unknown printer took a
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="single-blog-wraper mb-30">
                <div className="blog-img-wraper">
                  <img src={blogimg2} alt="blogimg" />
                  <div className="blog-datetime">30 Jan, 2012</div>
                </div>
                <div className="blog-content-wrap">
                  <Link to="#">
                    Coding bridges the universal divide. It is the one
                  </Link>
                  <p>
                    industry. Lorem Ipsum has been the industry standard dummy
                    text ever since the 1500 an unknown printer took a
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="single-blog-wraper mb-30">
                <div className="blog-img-wraper">
                  <img src={blogimg3} alt="blogimg" />
                  <div className="blog-datetime">21 Mar, 1968</div>
                </div>
                <div className="blog-content-wrap">
                  <Link to="#">
                    Connects different and countries trying times natio
                  </Link>
                  <p>
                    industry. Lorem Ipsum has been the industry standard dummy
                    text ever since the 1500 an unknown printer took a
                  </p>
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
