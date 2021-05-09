import React from "react";
import ctabg from "../img/cta/cta-bg.png";
import { Link } from "react-router-dom";

const Cta = () => {
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
                  WE Provide World Class Apps For Work <br />
                  Just Get It <i className="fa fa-long-arrow-right"></i>
                </h3>
                <div className="cta-btn float-right">
                  <Link to="#" className="btn btn-type-4">
                    purchase <i className="fa fa-download"></i>
                  </Link>
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
