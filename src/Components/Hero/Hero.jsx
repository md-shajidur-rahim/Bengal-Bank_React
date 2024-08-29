import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Welcome to Bengal Commercial Bank - Your Trusted Financial Partner</h1>
            <p>At Bengal Bank, we are committed to providing you with a secure and prosperous future. With a legacy of trust and excellence, we offer a wide range of banking services tailored to meet your needs. </p>
            <button className='btn'>Explore more<img src={dark_arrow} alt=""/></button>
        </div>
    </div>
  )
}

export default Hero;