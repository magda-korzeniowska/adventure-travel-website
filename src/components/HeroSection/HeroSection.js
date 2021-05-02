import React from 'react';
import Button from '../Button';

import './styles.css';
import video from '../../assets/videos/video-1.mp4'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={video} autoPlay loop muted />
      <h1 className='hero-title'>ADVENTURE IS HERE!</h1>
      <p className='hero-text'>Don't wait to join!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          btnStyle='btn--outline'
          btnSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          btnStyle='btn--primary'
          btnSize='btn--large'
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection;

// video-2 Video by eberhard grossgasteiger from Pexels
