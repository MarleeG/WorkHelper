import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
      <main>
        <h1>HEADER</h1>
        <Router>
          <Switch>
            <Route path="/" exact>
              {/* <Users /> */}
              
            </Route>
            <Redirect to="/" />
          </Switch>
        </Router>
      </main>
  );
}

export default App;
