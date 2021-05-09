import React from "react";
import icon1 from "../img/contact/icon-1.png";
import icon2 from "../img/contact/icon-2.png";
import icon3 from "../img/contact/icon-3.png";
import { Link } from "react-router-dom";
import Map from "./Map";
const ContactContent = () => {
  return (
    <>
      <div id="apork-contact-area" className="apork-contact-area mt-110 mb-110">
        <div id="contact-info-area" className="contact-info-area">
          <div className="container">
            <div className="row text-center">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 wow fadeInLeft">
                <div className="contact-info-box">
                  <div className="contact-info-icon">
                    <img src={icon1} alt="img1" />
                  </div>
                  <ul className="contact-info">
                    <li>+1 (234) 567-8991</li>
                    <li>+1 (234) 567-8991</li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 wow fadeInUp">
                <div className="contact-info-box">
                  <div className="contact-info-icon">
                    <img src={icon2} alt="img2" />
                  </div>
                  <ul className="contact-info">
                    <li>189 Matex Street, Badly Avenue</li>
                    <li>New York, NY-12548</li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 wow fadeInRight">
                <div className="contact-info-box">
                  <div className="contact-info-icon">
                    <img src={icon3} alt="imgi" />
                  </div>
                  <ul className="contact-info">
                    <li>
                      <Link to="mailto:apork@website.com">
                        apork@website.com
                      </Link>
                    </li>
                    <li>
                      <Link to="mailto:sales@website.com">
                        sales@website.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div id="contact-map-area" className="contact-map-area wow fadeInUp">

          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <Map/>
              </div>
            </div>
          </div>
        </div>
        <div
          id="apork-contact-form-area"
          className="apork-contact-form-area wow fadeInUp"
        >
          <form className="apork-contact-form">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Name *"
                  />
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="E-mail *"
                  />
                </div>

                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <input
                    className="form-control"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12">
                  <textarea
                    className="form-control"
                    name="message"
                    cols="30"
                    rows="8"
                    placeholder="Request"
                  ></textarea>
                  <button type="submit" className="btn btn-type-6">
                    submit
                  </button>
                </div>
              </div>
              <p className="form-message float-left mt-15"></p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactContent;
