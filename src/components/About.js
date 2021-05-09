import React from "react";
import abouticon from "../img/about/about-icon-1.png";
import about1 from "../img/about/about-1.png";
import {Link} from "react-router-dom";
const About = () => {
  return (
    <>
      <div id="apork-about-area" className="apork-about-area mt-230">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 mx-auto">
              <div className="section-title text-center mb-80">
                <h2>About The App</h2>
                <p>
                  Lorem ipsum dolor sit amt, consectet adop adipisicing elit,
                  sed do eiusmod more incididunt ugt labore.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 wow fadeInLeft">
              <div className="about-img">
                <img src={about1} alt="about-1" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 wow fadeInRight">
              <div className="about-content mt-110 mb-90">
                <img src={abouticon} alt="" />
                <h3>
                  Simple And Easy Way To Learn About Your Main Business Throw
                  Our <span>Apork App!</span>
                </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever when an unknown printer took a galley
                  of
                </p>
                <Link to="" className="btn btn-type-2 mt-30">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
