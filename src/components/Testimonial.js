import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import climg1 from "../img/testimonial/client-1.png";
import climg2 from "../img/testimonial/client-2.png";
import testibg from "../img/testimonial/testimonial-bg.png";
const Testimonial = () => {

	const reviews = [
		{
			"text": `We cannot not say enough good things about Trivia Rat. They've made hosting a breeze and increased brand awareness and acquiring new social media followers tenfold. Trivia Rat kept Hub of the Hammer Event Planning alive during the pandemic and we're thrilled to keep partnering with them in whatever comes next`,
			"name": "Hub of the Hammer",
			"type": "Event Planning",
			"url": "www.hubofthehammer.com",
			"url_title" : "hubofthehammer.com"
		}
		{
			"text": "I started with TR when I moved to zoom, but when returning to the pub, I never came up with a good reason to go back to paper/pen :)",
			"name": "CrazyTalk Trivia",
			"url": "https://www.instagram.com/crazytalk_trivia/",
			"url_title": "@CTTrivia"
		}
	];

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
											{reviews.map(function(d, idx){
								         return (
													 	    <div className="single-testimonial">
							                    <p>
							                     "{d.text}"
							                    </p>
							                    <div className="title-desig">
							                      <h4>
							                        {d.name} <span>{d.type}</span>
							                      </h4>
							                    </div>
																	  {/*<img src={climg1} alt="clientimg" />*/}
																	<p>
																		<a href={d.url} className="btn btn-type-3">{d.url_title}</a>
																	</p>
							                  </div>

												 )
								       })}
											 {/*
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
                  </div>
									*/}


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
