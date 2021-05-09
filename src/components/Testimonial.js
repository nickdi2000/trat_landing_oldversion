import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import climg1 from "../img/testimonial/client-1.png";
import climg2 from "../img/testimonial/client-2.png";
import testibg from "../img/testimonial/testimonial-bg.png";
const Testimonial = () => {
  return (
    <>
      <div
        id="apork-testimonial-area"
        className="apork-testimonial-area pt-110 pb-110 mt-110 mb-110 wow fadeInUp"
        style={{ background: `url('${testibg}') no-repeat center center` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-10 mx-auto col-md-12">
              <div className="testimonial-wraper text-center">
                <OwlCarousel
                  className="owl-theme owl-carousel"
                  loop
                  items={1}
                  margin={10}
                  autoplay={true}
                >
                  <div className="single-testimonial">
                    <p>
                      is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem
                    </p>
                    <div className="title-desig">
                      <h4>
                        Daniel Wells <span>developer</span>
                      </h4>
                    </div>
                    <img src={climg1} alt="clientimg" />
                  </div>

                  <div className="single-testimonial">
                    <p>
                      is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem
                    </p>
                    <div className="title-desig">
                      <h4>
                        Wells mark <span>designer</span>
                      </h4>
                    </div>
                    <img src={climg2} alt="clientimg" />
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
