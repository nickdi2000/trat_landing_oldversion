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
                  <a to="#">
                    {/*<img src={brand2} alt="footer-logo" className="img-fluid" />*/}
										<h2 className="img-fluid" style={{color: 'white'}}>TriviaRat.com</h2>
                  </a>
                </div>

                <p>
                	"The enthusiasm and confidence you bring to our table on trivia nights is rivaled only by the impressive consistency with which you are always wrong"<br/>
									<i>-Anonymous Host</i>
                </p>
                <ul className="footer-social">
                  <li>
                    <a href="https://facebook.com/triviarat">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a to="https://twitter.com/triviarat">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a to="https://instagram.com/triviarat">
                      <i className="fa fa-instagram "></i>
                    </a>
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

                    </div>
                    <div className="media-body">
                      <Link to="#" className="media-heading">
                        Wagering now Available
                      </Link>
                      <div className="post-date">22 Apr, 2021</div>
                    </div>
                  </div>

                  <div className="media">
                    <div className="media-left pull-left">

                    </div>
                    <div className="media-body">
                      <Link className="media-heading" to="#">
                        More Automatic Questions!
                      </Link>
                      <div className="post-date">21 Jan, 2021</div>
                    </div>
                  </div>

                  <div className="media">
                    <div className="media-left pull-left">

                    </div>
                    <div className="media-body">
                      <Link className="media-heading" to="#">
                        Video Streaming now availlable!
                      </Link>
                      <div className="post-date">15 Feb, 2021</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
						{/*
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
						*/}
          </div>


          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="footer-copyright text-center pt-40 pb-40">
                <p>
                  &copy; 2021 All Right Reserved by{" "}
                  <a href="https://triviarat.com/">TriviaRat.com</a>
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
