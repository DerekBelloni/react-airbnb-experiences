import React from 'react';
import hero from '../images/hero.png'

const Hero = () => {
  return (
    <div className="hero--main font">
      <img className="hero--img" src={hero} alt="" />
      <h1>Online Experiences</h1>
      <p className="hero--p">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
    </div>
  )
}

export default Hero