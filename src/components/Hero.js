import React from 'react';
import Navbar from './Navbar';
import dataCenter from '../Svgs/data-center.svg';

function Hero() {
  return (
    <>
      <main className="hero-container">
        <Navbar />
        <img className="data-center" src={dataCenter} alt="data-center" />
      </main>
    </>
  );
}

export default Hero;
