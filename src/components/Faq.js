/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React, { useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { faq } from '../faqData';

export function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggle = (i) => {
    if (activeIndex === i) {
      return setActiveIndex(null);
    }
    setActiveIndex(i);
  };

  return (
    <section className="faq-container">
      <h1>Frequently asked questions ?</h1>
      {faq.map((el, index) => (
        <article key={el.id} className="faq-wrapper">
          <div className="title-wrapper" onClick={() => toggle(index)}>
            <p className="faq-title">{el.title}</p>
            <span className="chevron">{activeIndex === index ? <BiChevronUp /> : <BiChevronDown />}</span>
          </div>
          {activeIndex === index && <p className="faq-answer">{el.answer}</p>}
        </article>
      ))}
    </section>
  );
}
