import React from 'react';
import './styles/app.scss';
import { AppProvider } from './context';
import { Submenu, Sidebar, Hero, Partners } from './components';

function App() {
  return (
    <AppProvider>
      <Sidebar />
      <Hero />
      <Submenu />
      <Partners />
    </AppProvider>
  );
}

export default App;
