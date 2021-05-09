import React from "react";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <>
      <div id="apork-counter-area" className="apork-counter-area mt-100 mb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-12 mx-auto">
              <div className="row counter-parent justify-content-between">
                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-4">
                  <div className="single-counter text-center">
                    <h2 className="counter">
                      <CountUp
                        start={0}
                        end={36780}
                        duration={2.75}
                        separator=","
                      />
                    </h2>
                    <span>Download App</span>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-4">
                  <div className="single-counter text-center">
                    <h2 className="counter">
                      <CountUp
                        start={0}
                        end={6510}
                        duration={2.75}
                        separator=","
                      />
                    </h2>
                    <span>Active Users</span>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-4">
                  <div className="single-counter text-center">
                    <h2 className="counter">
                      <CountUp
                        start={0}
                        end={789}
                        duration={2.75}
                        separator=","
                      />
                    </h2>
                    <span>Positive Reviews</span>
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

export default Counter;
