import React from 'react';
import Navbar from './Navbar';
import dataCenter from '../Svgs/data-center.svg';

function Hero() {
  return (
    <>
      <main className="hero-container">
        <Navbar />
        <div className="hero-section">
          <div className="hero-text">
            <h1>Cloud Hosting For Pros</h1>
            <h4>Deplay your website with fews clicks</h4>
          </div>
          <img className="data-center" src={dataCenter} alt="data-center" />
        </div>
      </main>
    </>
  );
}

export default Hero;
