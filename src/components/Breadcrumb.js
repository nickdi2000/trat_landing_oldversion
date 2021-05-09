import React from "react";
import {Link} from "react-router-dom";
import brdcbg from "../img/breadcrumb/breadcrumb.png";

const Breadcrumb = (props) => {
  return (
    <>
      <div
        id="apork-breadcrumb-area"
        className="apork-breadcrumb-area text-center"
        style={{ background: `url('${brdcbg}')` }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>{props.name}</h2>
              <ul className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <Link to="/" title="Home">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active">{props.name}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
