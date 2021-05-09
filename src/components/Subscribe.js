import React from "react";
import scbg from "../img/subscribe/subscribe-bg.jpg";

const Subscribe = () => {
  return (
    <>
      <div
        id="apork-subscribe-area"
        className="apork-subscribe-area pt-110 pb-110 mt-70 wow fadeInUp"
        style={{ background: `url('${scbg}')` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4">
              <div className="subscribe-title">
                <h3>Subscribe Our Newsletter</h3>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8">
              <div className="subscribe-form text-center">
                <form action="#">
                  <input type="email" placeholder="Type Your Email" />
                  <button type="submit" className="btn btn-type-2">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
