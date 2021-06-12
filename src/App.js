import React from 'react';
import './styles/app.scss';
import { AppProvider } from './context';
import { Submenu, Sidebar, Hero, Partners, About, Stats, Maps, Pricing, Faq, Footer } from './components';

function App() {
  return (
    <AppProvider>
      <Sidebar />
      <Hero />
      <Submenu />
      <Partners />
      <About />
      <Stats />
      <Maps />
      <Pricing />
      <Faq />
      <Footer />
    </AppProvider>
  );
}

export default App;
