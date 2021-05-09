import React from "react";
import errorimg from "../img/error/error.png";
import { Link } from "react-router-dom";
const Errorcontent = () => {
  return (
    <>
      <div
        id="apork-error-area"
        className="apork-error-area mt-110 mb-110 text-center"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12 wow fadeInUp">
              <div className="error-wraper">
                <img src={errorimg} alt="img-img" />
                <div className="error-content">
                  <div className="row">
                    <div className="col-xl-7 col-lg-7 col-md-10 col-sm-12 mx-auto wow flipInY">
                      <h2>
                        Page <span>Not</span> Found
                      </h2>
                      <p>
                        We’re sorry, the page you have looked for does not exist
                        in our database! Maybe go to our home page or try to use
                        a search?
                      </p>
                      <Link to="/" className="btn btn-type-2">
                        go to home
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Errorcontent;
