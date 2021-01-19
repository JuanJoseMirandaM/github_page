import React from "react";
import Nav from "./components/Nav";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import UserDetail from "./pages/UserDetail";
import Repository from "./pages/Repository";

function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route path="/" exact render={ props => <Home {...props} />} />
        <Route path="/user" exact render={ props => <User {...props} />} />
        <Route path="/user/:username" exact render={ props => <UserDetail {...props} />} />
        <Route path="/repository" exact render={ props => <Repository {...props} />} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
