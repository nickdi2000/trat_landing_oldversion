import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import climg1 from "../img/client/client-1.png";
import climg2 from "../img/client/client-2.png";
import climg3 from "../img/client/client-3.png";
import climg4 from "../img/client/client-4.png";
import { Link } from "react-router-dom";
const Client = () => {
  return (
    <>
      <div
        id="apork-client-slider"
        className="apork-client-slider pt-110 pb-110"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-10 col-md-12 mx-auto">
              <div className="all-client-slider">
                <OwlCarousel
                  className="owl-theme owl-carousel"
                  loop
                  items={4}
                  autoplay={true}
                  dots={false}
                >
                  <Link to="#">
                    <div className="single-client">
                      <img src={climg1} alt="" className="img-fluid" />
                    </div>
                  </Link>

                  <Link to="#">
                    <div className="single-client">
                      <img src={climg2} alt="" className="img-fluid" />
                    </div>
                  </Link>

                  <Link to="#">
                    <div className="single-client">
                      <img src={climg3} alt="" className="img-fluid" />
                    </div>
                  </Link>

                  <Link to="#">
                    <div className="single-client">
                      <img src={climg4} alt="" className="img-fluid" />
                    </div>
                  </Link>

                  <Link to="#">
                    <div className="single-client">
                      <img src={climg1} alt="" className="img-fluid" />
                    </div>
                  </Link>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;
