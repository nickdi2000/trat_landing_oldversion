import React from "react";
import acimg from "../img/faqs/faqs-1.png";
import {Link} from "react-router-dom";
const Accordion = () => {
  return (
    <>
      <div id="aprok-faq-area" className="aprok-faq-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 mx-auto">
              <div className="section-title text-center mb-80">
                <h2>faqs</h2>
                <p>
                  If these FAQs don't answer your questions.  Feel free to <a href='https://triviarat.com/contact-us'>Contact Us</a> Directly.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 wow fadeInLeft">
              <div className="faq-img">
                <img src={acimg} alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 wow fadeInRight">
              <div className="aprok-accordion-wrapper">
                <div className="accordion" id="accordionExample">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h2 className="mb-0">
                        <Link
                          className="btn btn-link"
                          to="#"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          How to Buy This?
                        </Link>
                      </h2>
                    </div>

                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <p>
                          is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h2 className="mb-0">
                        <Link
                          className="btn btn-link collapsed"
                          to="#"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          It is refundable?
                        </Link>
                      </h2>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <p>
                          is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <Link
                          className="btn btn-link collapsed"
                          to="#"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Can i use free
                        </Link>
                      </h2>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <p>
                          is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingfour">
                      <h2 className="mb-0">
                        <Link
                          className="btn btn-link collapsed"
                          to="#"
                          data-toggle="collapse"
                          data-target="#headingFour"
                          aria-expanded="false"
                          aria-controls="headingFour"
                        >
                          24 / 7 Supports
                        </Link>
                      </h2>
                    </div>
                    <div
                      id="headingFour"
                      className="collapse"
                      aria-labelledby="headingfour"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <p>
                          is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout
                        </p>
                      </div>
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

export default Accordion;
