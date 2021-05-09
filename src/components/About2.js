import React from "react";
import aboutimg1 from "../img/about/about-1.png";
import aboutimg2 from "../img/about/about-icon-1.png";
const About2 = () => {
  return (
    <>
      <div id="apork-about-area" className="apork-about-area mt-110 mb-110">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 wow fadeInLeft">
              <div className="about-img">
                <img src={aboutimg1} alt="about-1" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 wow fadeInRight">
              <div className="about-content mt-110 mb-90">
                <img src={aboutimg2} alt="img" />
                <h3>
                  Simple And Easy Way To Learn About Your Main Business Throw
                  Our <span>Apork App!</span>
                </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever when an unknown printer took a galley
                  of Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever when an unknown printer took a galley
                  of
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About2;
