/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React, { useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { motion } from 'framer-motion';
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
        <motion.article
          animate={{ backgroundColor: activeIndex === index ? '#f0f4f8' : '#fff' }}
          key={el.id}
          className="faq-wrapper"
        >
          <div className="title-wrapper" onClick={() => toggle(index)}>
            <p className="faq-title">{el.title}</p>
            <span className="chevron">{activeIndex === index ? <BiChevronUp /> : <BiChevronDown />}</span>
          </div>
          {activeIndex === index && (
            <motion.p
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: 'auto' },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
              className="faq-answer"
            >
              {el.answer}
            </motion.p>
          )}
        </motion.article>
      ))}
    </section>
  );
}
