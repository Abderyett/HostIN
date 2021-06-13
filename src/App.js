import React from 'react';
import './styles/app.scss';
import { AppProvider } from './context';
import { Home } from './components/Home';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <AppProvider>
      <Sidebar />
      <Home />
    </AppProvider>
  );
}

export default App;
