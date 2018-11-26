import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ButtonAppBar from './components/Navbar';
import RegisterPage from './containers/RegisterPage';
import LoginPage from './containers/LoginPage';
import HomePage from './containers/HomePage';

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

/*
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about/">About</Link>
    </li>
    <li>
      <Link to="/users/">Users</Link>
    </li>
    <li>
      <Link to="/register/">Register</Link>
    </li>
  </ul>
*/

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ButtonAppBar></ButtonAppBar>
          <Route path="/" exact component={HomePage} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
          <Route path="/register/" component={RegisterPage} />
          <Route path="/login/" component={LoginPage} />
        </div>
      </Router>
    );
  }
}

export default App;
