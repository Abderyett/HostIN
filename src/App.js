import React from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import './styles/app.scss';
import { AppProvider } from './context';

function App() {
  return (
    <AppProvider>
      <Sidebar />
      <Hero />
    </AppProvider>
  );
}

export default App;
