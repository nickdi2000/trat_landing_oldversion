import React from "react";
import pricbg from "../img/prictable/prictable-bg.png";
import { Link } from "react-router-dom";
const Pricing = () => {
  return (
    <>
      <div
        id="apork-pricing-table-area"
        className="apork-pricing-table-area mt-110 mb-110"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 mx-auto">
              <div className="section-title text-center mb-80">
                <h2>Pricing Plan</h2>
                <p>
                  Lorem ipsum dolor sit amt, consectet adop adipisicing elit,
                  sed do eiusmod more incididunt ugt labore.
                </p>
              </div>
            </div>
          </div>
          <div className="price-tab">
            <div className="price-menu-box text-center">
              <ul className="nav price-nav mb-40" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="month-tab"
                    data-toggle="tab"
                    href="#month1"
                    role="tab"
                    aria-controls="month1"
                    aria-selected="true"
                  >
                    Monthly
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="yearly-tab"
                    data-toggle="tab"
                    href="#yearly"
                    role="tab"
                    aria-controls="yearly"
                    aria-selected="false"
                  >
                    Yearly
                  </a>
                </li>
              </ul>
            </div>

            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="month1"
                role="tabpanel"
                aria-labelledby="month-tab"
              >
                <div className="row">
                  <div className="col-xl-4 col-lg-4 wow fadeInLeft">
                    <div className="single-price-area text-center mb-30">
                      <div
                        className="single-price-bg"
                        style={{ background: `url('${pricbg}')` }}
                      ></div>
                      <div className="price-header">
                        <h4>Primary</h4>
                        <h2>
                          $0<span className="sep">/</span>
                          <span>mo</span>
                        </h2>
                      </div>
                      <div className="price-item-list">
                        <ul>
                          <li>Life Time SSL</li>
                          <li>1 Dedicated IP</li>
                          <li>100 GB storage</li>
                          <li>Unlimited Addons</li>
                          <li>Windows Server</li>
                        </ul>
                      </div>
                      <div className="price-btn mt-35">
                        <Link className="btn btn-type-5" to="#">
                          <i className="fa fa-check"></i> order now
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 wow fadeInUp">
                    <div className="single-price-area active text-center mb-30">
                      <div
                        className="single-price-bg"
                        style={{ background: `url('${pricbg}')` }}
                      ></div>
                      <div className="price-header">
                        <h4>popular</h4>
                        <h2>
                          $21<span className="sep">/</span>
                          <span>mo</span>
                        </h2>
                      </div>
                      <div className="price-item-list">
                        <ul>
                          <li>Life Time SSL</li>
                          <li>1 Dedicated IP</li>
                          <li>100 GB storage</li>
                          <li>Unlimited Addons</li>
                          <li>Windows Server</li>
                        </ul>
                      </div>
                      <div className="price-btn active mt-35">
                        <Link className="btn btn-type-5" to="#">
                          <i className="fa fa-check"></i> order now
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 wow fadeInRight">
                    <div className="single-price-area text-center mb-30">
                      <div
                        className="single-price-bg"
                        style={{ background: `url('${pricbg}')` }}
                      ></div>
                      <div className="price-header">
                        <h4>standard</h4>
                        <h2>
                          $69<span className="sep">/</span>
                          <span>mo</span>
                        </h2>
                      </div>
                      <div className="price-item-list">
                        <ul>
                          <li>Life Time SSL</li>
                          <li>1 Dedicated IP</li>
                          <li>100 GB storage</li>
                          <li>Unlimited Addons</li>
                          <li>Windows Server</li>
                        </ul>
                      </div>
                      <div className="price-btn mt-35">
                        <Link className="btn btn-type-5" to="#">
                          <i className="fa fa-check"></i> order now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="yearly"
                role="tabpanel"
                aria-labelledby="yearly-tab"
              >
                <div className="row">
                  <div className="col-xl-4 col-lg-4 wow fadeInLeft">
                    <div className="single-price-area text-center mb-30">
                      <div
                        className="single-price-bg"
                        style={{ background: `url('${pricbg}')` }}
                      ></div>
                      <div className="price-header">
                        <h4>Primary</h4>
                        <h2>
                          $0<span className="sep">/</span>
                          <span>yr</span>
                        </h2>
                      </div>
                      <div className="price-item-list">
                        <ul>
                          <li>Life Time SSL</li>
                          <li>1 Dedicated IP</li>
                          <li>100 GB storage</li>
                          <li>Unlimited Addons</li>
                          <li>Windows Server</li>
                        </ul>
                      </div>
                      <div className="price-btn mt-35">
                        <Link className="btn btn-type-5" to="#">
                          <i className="fa fa-check"></i> order now
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 wow fadeInUp">
                    <div className="single-price-area active text-center mb-30">
                      <div
                        className="single-price-bg"
                        style={{ background: `url('${pricbg}')` }}
                      ></div>
                      <div className="price-header">
                        <h4>popular</h4>
                        <h2>
                          $21<span className="sep">/</span>
                          <span>yr</span>
                        </h2>
                      </div>
                      <div className="price-item-list">
                        <ul>
                          <li>Life Time SSL</li>
                          <li>1 Dedicated IP</li>
                          <li>100 GB storage</li>
                          <li>Unlimited Addons</li>
                          <li>Windows Server</li>
                        </ul>
                      </div>
                      <div className="price-btn active mt-35">
                        <Link className="btn btn-type-5" to="#">
                          <i className="fa fa-check"></i> order now
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 wow fadeInRight">
                    <div className="single-price-area text-center mb-30">
                      <div
                        className="single-price-bg"
                        style={{ background: `url('${pricbg}')` }}
                      ></div>
                      <div className="price-header">
                        <h4>standard</h4>
                        <h2>
                          $69<span className="sep">/</span>
                          <span>yr</span>
                        </h2>
                      </div>
                      <div className="price-item-list">
                        <ul>
                          <li>Life Time SSL</li>
                          <li>1 Dedicated IP</li>
                          <li>100 GB storage</li>
                          <li>Unlimited Addons</li>
                          <li>Windows Server</li>
                        </ul>
                      </div>
                      <div className="price-btn mt-35">
                        <Link className="btn btn-type-5" to="#">
                          <i className="fa fa-check"></i> order now
                        </Link>
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

export default Pricing;
