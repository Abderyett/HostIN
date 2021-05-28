import React from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import './styles/app.scss';
import { AppProvider } from './context';
import Submenu from './components/Submenu';

function App() {
  return (
    <AppProvider>
      <Sidebar />
      <Hero />
      <Submenu />
    </AppProvider>
  );
}

export default App;
