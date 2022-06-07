import React from "react";
import Button from "../Button";

import "./styles.scss";
import video from "../../assets/videos/video-1.mp4";

function HeroSection() {
  return (
    <div className="hero__container">
      <video
        className="hero__video"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />
      <h1 className="hero__title">ADVENTURE IS HERE!</h1>
      <p className="hero__text">Don't wait to join!</p>
      <div className="hero__btns">
        <Button className="btns" btnStyle="btn--outline" btnSize="btn--large">
          GET STARTED
        </Button>
        <Button className="btns" btnStyle="btn--primary" btnSize="btn--large">
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;

// video-1 Video by ROMAN ODINTSOV from Pexels
