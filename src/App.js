import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Header/Header.js';

import './App.css';
import Home from './HomePage/HomePage.js';
import SearchPage from './SearchPage/SearchPage';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className = "app">
          <Header />

          <Switch>
            <Route path="/SearchPage">
              <SearchPage />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

}