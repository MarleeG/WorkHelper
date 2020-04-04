import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import "./App.css";
import Methods from "./method/pages/methods";
import Testing from "./method/pages/Testing";

const App = () => {
  return (
    <main>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Methods />
          </Route>

          <Route path="/test" exact>
            <Testing />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </main>
  );
};

export default App;
