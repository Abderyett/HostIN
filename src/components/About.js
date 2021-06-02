import React from 'react';
import { BiCheckShield } from 'react-icons/bi';
import { IoRocketOutline } from 'react-icons/io5';
import { IoIosCheckmarkCircle } from 'react-icons/io';

import security from '../Svgs/security.svg';
import support from '../Svgs/support.svg';

export function About() {
  return (
    <section className="about-container">
      <h1 className="about-heading">
        <hr />
        Why Choose us?
      </h1>

      <div className="security-container">
        <img src={security} alt="security-logo" className="security-img" />
        <div className="text">
          <div className="shield">
            <BiCheckShield />
          </div>
          <h1>Redundancy and secure servers</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, iste.</p>
          <span className="check-icon">
            <IoIosCheckmarkCircle /> &nbsp; Lorem ipsum dolor sit amet.
          </span>

          <span className="check-icon">
            <IoIosCheckmarkCircle /> &nbsp; Lorem ipsum dolor sit amet.
          </span>
          <span className="check-icon">
            <IoIosCheckmarkCircle /> &nbsp; Lorem ipsum dolor sit amet.
          </span>
        </div>
      </div>
      <div className="support-container">
        <div className="text">
          <div className="rocket">
            <IoRocketOutline />
          </div>
          <h1>Dedicated support</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, iste.</p>
          <span className="check-icon">
            <IoIosCheckmarkCircle /> &nbsp; Lorem ipsum dolor sit amet.
          </span>

          <span className="check-icon">
            <IoIosCheckmarkCircle /> &nbsp; Lorem ipsum dolor sit amet.
          </span>
          <span className="check-icon">
            <IoIosCheckmarkCircle /> &nbsp; Lorem ipsum dolor sit amet.
          </span>
        </div>
        <img src={support} alt="support-logo" className="support-img" />
      </div>
    </section>
  );
}
