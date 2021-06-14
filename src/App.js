import React from 'react';
import './styles/app.scss';
import { Switch, Route } from 'react-router-dom';
import { AppProvider } from './context';
import { Home } from './components/Home';
import { SignIn } from './components/SignIn';
import { Sidebar } from './components/Sidebar';
import { Register } from './components/Register';

function App() {
  return (
    <Switch>
      <AppProvider>
        <Sidebar />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/register" component={Register} />
      </AppProvider>
    </Switch>
  );
}

export default App;
