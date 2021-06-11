import React, { useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { faq } from '../faqData';

export function Faq() {
  const [selected, setSelected] = useState(null);
  return (
    <section className="faq-container">
      <h1>Frequently asked questions ?</h1>
      {faq.map((el, index) => (
        <article key={el.id} className="faq-wrapper">
          <div className="title-wrapper">
            <h3 className="faq-title">{el.title}</h3>
            <span>
              <BiChevronDown className="chevron" />
            </span>
          </div>
          <p className="faq-answer">{el.answer}</p>
        </article>
      ))}
    </section>
  );
}
