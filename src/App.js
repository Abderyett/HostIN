import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './styles/app.scss';
import { AppProvider } from './context';

function App() {
  return (
    <AppProvider>
      {/* <Navbar /> */}
      <Hero />
    </AppProvider>
  );
}

export default App;
