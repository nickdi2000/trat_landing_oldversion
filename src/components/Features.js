import React from "react";
import shape1 from "../img/features/bg-shape-1.png";
import shape2 from "../img/features/bg-shape-2.png";
import icon1 from "../img/features/icon-1.png";
import icon2 from "../img/features/icon-2.png";
import icon3 from "../img/features/icon-3.png";
import ishape1 from "../img/features/shape-1.png";
import ishape2 from "../img/features/shape-2.png";
import ishape3 from "../img/features/shape-3.png";
const Features = () => {
  return (
    <>
      <div
        id="apork-features-area"
        className="apork-features-area position-relative"
      >
        <div className="features-bg-shape">
          <img src={shape1} alt="featuresimg" className="style-shape fbs-1" />
          <img src={shape2} alt="featuresimg" className="style-shape fbs-2" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 mx-auto">
              <div className="section-title text-center mb-80">
                <h2>App Features</h2>
                <p>
                  Lorem ipsum dolor sit amt, consectet adop adipisicing elit,
                  sed do eiusmod more incididunt ugt labore.
                </p>
              </div>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-xl-4 col-lg-4 col-md-4 wow fadeInLeft">
              <div className="single-features">
                <img src={icon1} alt="featuresimg" />
                <h3>Easy Customize</h3>
                <p>
                  Simply dummy text of the printing and typesetting industry.
                  Ipsum has been
                </p>
                <div className="features-shape">
                  <img src={ishape1} alt="featuresimg" />
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-4 wow fadeInUp">
              <div className="single-features">
                <img src={icon2} alt="featuresimg" />
                <h3>Responsive Ready</h3>
                <p>
                  Simply dummy text of the printing and typesetting industry.
                  Ipsum has been
                </p>
                <div className="features-shape">
                  <img src={ishape2} alt="featuresimg" />
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-4 wow fadeInRight">
              <div className="single-features">
                <img src={icon3} alt="featuresimg" />
                <h3>Cloud Storage</h3>
                <p>
                  Simply dummy text of the printing and typesetting industry.
                  Ipsum has been
                </p>
                <div className="features-shape">
                  <img src={ishape3} alt="featuresimg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
