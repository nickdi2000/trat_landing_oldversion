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
		},
		{
		"text":`TriviaRat gave us something to look forward to during COVID Lockdown!
			It was so easy to setup and run, in my second Quiz Night I had over 60 people joining in for a night of fun, smiles and questions!
			All the participants found it so easy to use too!`,
			"name": "Adam",
			"type": "Lockdown Trivia",
			},
			{
				"text": `Trivia Rat has been essentially to me over this past year! It helped me continue to provide fun trivia games virtually during lockdown. It's easy to use, has a variety of settings for personalisation, and the creators have always been helpful`,
				"name": "BeccaHosts",
				"instagram": "@BeccaHosts",
				"facebook": "http://www.beccahosts.com/BeccaHosts/",
				"url_title": "BeccaHosts.com",
				"url": "beccahosts.com",
				"type": "Entertainment",
			},
			{
			"text": "TriviaRat has kept us alive during lockdown! We'll continue to use it onsite as it does everything we need, and its very user friendly.",
			"name": "Sunset Trivia",
			"type": "Trivia Company",
			"url_title": "Sunset Trivia",
			"url" : "https://www.facebook.com/sunset.trivia/",

		},
			{
			"text": "I started with TR when I moved to zoom, and i've continued to use it at the restaurants because i hate buying a new set of pens every week :)",
			"name": "CrazyTalk Trivia",
			"type": "Trivia Host",
			"url_title": "@Crazytalk_trivia",
			"url" : "https://instagram.com/crazytalk_trivia",

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
							                        {d.name} {d.type ? <span>{d.type}</span> : null}
							                      </h4>
							                    </div>
																	  {/*<img src={climg1} alt="clientimg" />*/}
																	{d.url ?
																		<p>
																		<a href={d.url}  className="btn" data-style={{color: 'white', textDecorationLine: 'underline'}}>{d.url_title}</a>
																	</p> : null }

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
