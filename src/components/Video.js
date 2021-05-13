import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import videoimg from "../img/video/video-bg.jpeg";
import "react-modal-video/css/modal-video.min.css";
const Video = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="ug_PJaubXDI"
        onClose={() => setOpen(false)}
      />
      <div
        id="apork-videos-area"
        className="apork-videos-area mt-180 mb-110 wow fadeInUp"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="apork-videos position-relative text-center">
                <img src={videoimg} alt="" />
                <div className="videos-icon-text">
                  <h3>Walkthrough</h3>
                  <div
                    className="popup-video wow pulse infinite"
                    onClick={() => setOpen(true)}
                  >
                    <i className="fa fa-play"></i>
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

export default Video;
