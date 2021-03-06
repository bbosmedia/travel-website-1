import React from 'react';
import { Button } from '../Button/Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={() =>console.log('hey')}
        >
          GET STARTED
        </Button>
        <Button
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={() =>console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;