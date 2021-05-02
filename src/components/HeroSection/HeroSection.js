import React from 'react';
import Button from '../Button';

import './styles.css';

function HeroSection() {
  return(
    <div className='hero-container'>
      <video src='' autoPlay loop muted/>
      <h1>ADVENTURE IS HERE!</h1>
      <p>Don't wait to join!</p>
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