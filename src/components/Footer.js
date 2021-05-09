import React from "react";
import brand2 from "../img/logo-2.png";
import limg1 from "../img/footer/news/news-1.jpg";
import limg2 from "../img/footer/news/news-2.jpg";
import limg3 from "../img/footer/news/news-3.jpg";
import gallery1 from "../img/footer/gallery/gallery-1.jpg";
import gallery2 from "../img/footer/gallery/gallery-2.jpg";
import gallery3 from "../img/footer/gallery/gallery-3.jpg";
import gallery4 from "../img/footer/gallery/gallery-4.jpg";
import gallery5 from "../img/footer/gallery/gallery-5.jpg";
import gallery6 from "../img/footer/gallery/gallery-6.jpg";
import { Link } from "react-router-dom";
import footerbg from "../img/footer/foot-bg.png";
const Footer = () => {
  return (
    <>
      <footer
        id="apork-footer-area"
        className="apork-footer-area pt-100"
        style={{ background: `url('${footerbg}')` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12">
              <div className="footer-widget widget-1">
                <div className="footer-logo">
                  <Link to="#">
                    <img src={brand2} alt="footer-logo" className="img-fluid" />
                  </Link>
                </div>

                <p>
                  But I must explain to you how all this mistaken idea of
                  denouncing asure and praising pain was born and I will give
                  you a
                </p>
                <ul className="footer-social">
                  <li>
                    <Link to="#">
                      <i className="fa fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-instagram "></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-vk"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 offset-xl-1 col-lg-3 col-md-4 col-sm-12">
              <div className="footer-widget widget-2">
                <h3>latest news</h3>
                <div className="media-box">
                  <div className="media">
                    <div className="media-left pull-left">
                      <Link to="#">
                        <img className="media-object" src={limg1} alt="img" />
                      </Link>
                    </div>
                    <div className="media-body">
                      <Link to="#" className="media-heading">
                        latest news here
                      </Link>
                      <div className="post-date">22 Mar, 2010</div>
                    </div>
                  </div>

                  <div className="media">
                    <div className="media-left pull-left">
                      <Link to="#">
                        <img className="media-object" src={limg2} alt="img" />
                      </Link>
                    </div>
                    <div className="media-body">
                      <Link className="media-heading" to="#">
                        latest news here
                      </Link>
                      <div className="post-date">21 Dec, 2019</div>
                    </div>
                  </div>

                  <div className="media">
                    <div className="media-left pull-left">
                      <Link to="#">
                        <img className="media-object" src={limg3} alt="img" />
                      </Link>
                    </div>
                    <div className="media-body">
                      <Link className="media-heading" to="#">
                        latest news here
                      </Link>
                      <div className="post-date">15 Jan, 2011</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 offset-xl-1 col-lg-5 col-md-4 col-sm-12">
              <div className="footer-widget widget-2">
                <h3>Gallery Image</h3>
                <ul className="gallery-all-img">
                  <li>
                    <Link to="#">
                      <img src={gallery1} alt="wdg-img" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img src={gallery2} alt="wdg-img" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img src={gallery3} alt="wdg-img" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img src={gallery4} alt="wdg-img" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img src={gallery5} alt="wdg-img" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img src={gallery6} alt="wdg-img" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="footer-copyright text-center pt-40 pb-40">
                <p>
                  &copy; 2020 All Right Reserved by{" "}
                  <Link to="#">theme_group</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
