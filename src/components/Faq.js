import React, { useState } from 'react';
import { faq } from '../faqData';

export function Faq() {
  const [selected, setSelected] = useState(null);
  return (
    <section className="faq-container">
      <h1>Frequently asked questions ?</h1>
      {faq.map((el, index) => (
        <article key={el.id} className="faq-wrapper">
          <h3 className="faq-title">{el.title}</h3>
        </article>
      ))}
    </section>
  );
}
