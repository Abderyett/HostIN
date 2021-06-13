import React from 'react';
import { Hero } from './Hero';
import { Submenu } from './Submenu';
import { Partners } from './Partners';
import { About } from './About';
import { Stats } from './Stats';
import { Maps } from './Maps';
import { Pricing } from './Pricing';
import { Faq } from './Faq';
import { Footer } from './Footer';

export function Home() {
  return (
    <>
      <Hero />
      <Submenu />
      <Partners />
      <About />
      <Stats />
      <Maps />
      <Pricing />
      <Faq />
      <Footer />
    </>
  );
}
