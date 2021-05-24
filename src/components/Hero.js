import React from 'react';
import { BsChevronRight } from 'react-icons/bs';
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
            <p>
              What's more important than fast, reliable, and secure web hosting? It's trust! End up your inconvenience
              forever by trusting us, and we bet you'll never be dissatisfied!
            </p>
            <button type="button" className="btn start-btn">
              Start Now &nbsp;
              <span>
                <BsChevronRight />
              </span>
            </button>
            <button type="button" className="btn contact-btn">
              Contact Sales &nbsp;
              <span>
                <BsChevronRight />
              </span>
            </button>
          </div>
          <img className="data-center" src={dataCenter} alt="data-center" />
        </div>
      </main>
    </>
  );
}

export default Hero;
