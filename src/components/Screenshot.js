import React from "react";
import SwiperCore, { Pagination, Autoplay, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import slimg1 from "../img/screen/screen-1.png";
import slimg2 from "../img/screen/screen-2.png";
import slimg3 from "../img/screen/screen-3.png";
SwiperCore.use([Pagination, Autoplay, EffectCoverflow]);
const Screenshot = () => {
  return (
    <div id="apork-screenshot-area" className="apork-screenshot-area mb-110">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 mx-auto">
            <div className="section-title text-center mb-80">
              <h2>App Screenshot</h2>
              <p>
                Lorem ipsum dolor sit amt, consectet adop adipisicing elit, sed
                do eiusmod more incididunt ugt labore.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="screenshot-slider">
              <Swiper
                spaceBetween={50}
                slidesPerView="auto"
                loop={true}
                effect="coverflow"
                autoplay={true}
                pagination={{ clickable: true }}
                centeredSlides={true}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 80,
                  depth: 200,
                  modifier: 1,
                  slideShadows: false,
                }}
              >
                <SwiperSlide>
                  <div className="slider-image">
                    <img src={slimg1} alt="scimg" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider-image">
                    <img src={slimg2} alt="scimg" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider-image">
                    <img src={slimg3} alt="scimg" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider-image">
                    <img src={slimg1} alt="scimg" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Screenshot;
