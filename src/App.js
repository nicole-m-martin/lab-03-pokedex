import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './Header/Header.js';
import Home from './HomePage/HomePage.js';
import SearchPage from './SearchPage/SearchPage';
import DetailPage from './SearchPage/DetailPage';
import HomePage from './HomePage/HomePage.js';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className = "app">
          <Header />

          <Switch>
            <Route path="/SearchPage"
            exact component={SearchPage}>
              <SearchPage />
            </Route>
            <Route path="/"
            exact component={HomePage}>
              <Home />
            </Route>
            <Route path='/DetailPage'
            exact component={DetailPage}>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

}