import React from 'react'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import App from './App';
import User from './components/User';
import Repository from './components/Repository';
import Nav from './components/Nav';
import UserDetail from './components/UserDetail';

const Routes = () => {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route path="/" exact render={ props => <App {...props} />} />
        <Route path="/user" exact render={ props => <User {...props} />} />
        <Route path="/user/:username" exact render={ props => <UserDetail {...props} />} />
        <Route path="/repository" exact render={ props => <Repository {...props} />} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default Routes;
