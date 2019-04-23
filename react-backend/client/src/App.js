import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.scss';
import Navbar from './components/Navbar';

import Home from './components/Home';
import NewIdea from './components/NewIdea';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route exact path='/ideas/new' component={NewIdea} />
      </Router>
    );
  }
}

export default App;
