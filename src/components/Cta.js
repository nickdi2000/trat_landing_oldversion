import React from "react";
import ctabg from "../img/cta/cta-bg.png";
import { Link } from "react-router-dom";

const Cta = ({url}) => {
  return (
    <>
      <div
        id="cta-area"
        className="cta-area pt-140 pb-140"
        style={{ background: `url('${ctabg}') no-repeat center center` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="cta-content">
                <h3>
                  Remember its FREE to signup!<br />
                  Give it a shot! <i className="fa fa-long-arrow-right"></i>
                </h3>
                <div className="cta-btn float-right">
                  <a href={url} className="btn btn-type-4">
                    Sign-up <i className="fa fa-signup"></i>
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

export default Cta;
