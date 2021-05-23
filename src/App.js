import React from 'react';
import Navbar from './components/Navbar';
import './styles/app.scss';
import { AppProvider } from './context';

function App() {
  return (
    <AppProvider>
      <Navbar />
    </AppProvider>
  );
}

export default App;
