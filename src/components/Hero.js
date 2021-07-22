import React from "react";
import { useState } from 'react';
import homebg from "../img/hero/hero-bg-1.jpeg";
import shape1 from "../img/hero/shape-1.png";
import shape2 from "../img/hero/shape-2.png";
import shape3 from "../img/hero/shape-3.png";
import { Link } from "react-router-dom";
import mobile1 from "../img/hero/hero-mobile-1.png";
import { useHistory } from "react-router-dom";



const Hero = () => {

const [showJoinGame, setShowJoinGame] = React.useState(false);
const [code, updateCode] = React.useState('');


const onClick = () => setShowJoinGame(true)
const history = useHistory();

  function goToGame() {
    window.location = "https://triviarat.com/" + code;
  }

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
                  Trivia Hosting Platform
                </h2>
                <p>
                  No apps required.  Create your own unique link and start hosting in seconds.
                </p>
                <div className="hero-btn">
                  <a href="https://triviarat.com/sign-up" className="btn btn-type-2">
                    Host Sign-up
                  </a>
                  <button className="btn btn-type-3" onClick={onClick}>
                    Join a Game!
                  </button>
                </div>

								{showJoinGame ?
								<div className="join-game-div d-flex justify-content-center flex-column">
									<input class="form-control-lg my-4 py-2"
									style={{ fontSize: "3.2em", height: "2em", textTransform: 'uppercase', fontWeight: 600 }}
									placeholder="Enter Code.."
									value={code} onChange={e => updateCode(e.target.value)}
									/>
									<button className="btn btn-type-3" onClick={goToGame}>GO!</button>
									</div> : null }

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
