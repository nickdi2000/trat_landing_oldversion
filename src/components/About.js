import React from "react";
import abouticon from "../img/about/about-icon-1.png";
import joeys from "../img/about/joeys.gif";
import about1 from "../img/about/about-1.png";
import {Link} from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const About = ({url}) => {
  return (
    <>
      <div id="apork-about-area" className="apork-about-area mt-230">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 mx-auto">
              <div className="section-title text-center mb-80">
                <h2>No Setup Required</h2>
                <p>
                  The main focus here is simplicity.  Once you've created your unique room code, you can start hosting immediately. Further configurations are available, but not required.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 wow fadeInLeft">
              <div className="about-img">
                 <LazyLoadImage
								 	src={joeys}
									alt="Player-view"
									/>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 wow fadeInRight">
              <div className="about-content mt-110 mb-90 center">
                <img src={abouticon} alt="" />
                <h3>
                  Hosting a trivia night should be <span>simple</span>
                </h3>
                <p>
                  Instruct your players to navigate to <strong>TriviaRat.com/yourcode</strong> where they can enter their team name.
									It's all downhill from there: just start announcing your questions and watch as the responses appear in real-time.
                </p>
								<div className="d-flex justify-content-center mb-5">
                <a href={url} className="btn btn-type-2 mt-30">
                  Start Hosting!
                </a>
								</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
