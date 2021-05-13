import React from "react";
import homebg from "../img/hero/hero-bg-1.jpeg";
import shape1 from "../img/hero/shape-1.png";
import shape2 from "../img/hero/shape-2.png";
import shape3 from "../img/hero/shape-3.png";
import { Link } from "react-router-dom";
import mobile1 from "../img/hero/hero-mobile-1.png";
const Hero = () => {
  return (
    <>
      <div
        id="apork-hero"
        className="apork-hero-area hero-bg position-relative"
        style={{ background: `url('${homebg}')` }}
      >
        <div className="hero-style-shape">
          <img className="style-shape shape-1" src={shape1} alt="imgshape" />
          <img className="style-shape shape-2" src={shape2} alt="imgshape" />
          <img
            className="style-shape aporkrot shape-3"
            src={shape3}
            alt="imgshape"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-8 col-md-12">
              <div className="hero-content">
                <h2>
                  Simple Hosting Platform
                </h2>
                <p>
                  No apps required.  Get up and running in under a minute with your own unique link.
                </p>
                <div className="hero-btn">
                  <Link to="#" className="btn btn-type-2">
                    Read More
                  </Link>
                  <Link to="/sign-up" className="btn btn-type-3">
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 offset-xl-1 col-lg-4 wow fadeInRight">
              <div className="hero-mobile-img">
                <img src={mobile1} alt="imgmobile" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
