import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Methods from './method/pages/methods';

const App = () => {
  return (
      <main>
        <Router>
          <Switch>
            <Route path="/" exact>
            <Methods/>
            </Route>

            
            <Redirect to="/" />
          </Switch>
        </Router>
      </main>
  );
}

export default App;
