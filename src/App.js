import React from 'react';
import './styles/app.scss';
import { Switch, Route } from 'react-router-dom';
import { AppProvider } from './context';
import { Home } from './components/Home';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <Switch>
      <AppProvider>
        <Sidebar />
        <Route exact path="/">
          <Home />
        </Route>
      </AppProvider>
    </Switch>
  );
}

export default App;
