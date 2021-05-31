import React from 'react';
import security from '../Svgs/security.svg';
import support from '../Svgs/support.svg';

export function About() {
  return (
    <section className="about-container">
      <div className="security-container">
        <img src={security} alt="security-logo" />
        <div className="security-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laborum possimus esse facere quo fugiat
          explicabo, voluptatem qui. Officiis consequuntur esse ullam porro obcaecati beatae consequatur quo sunt maxime
          magni.
        </div>
      </div>
      <div className="support-container">
        <img src={support} alt="support-logo" />
        <div className="security-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laborum possimus esse facere quo fugiat
          explicabo, voluptatem qui. Officiis consequuntur esse ullam porro obcaecati beatae consequatur quo sunt maxime
          magni.
        </div>
      </div>
    </section>
  );
}
