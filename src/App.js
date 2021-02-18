import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './Header/Header.js';
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
          <Route 
            path="/" 
            exact
            render={(routerProps) => <HomePage {...routerProps} />} 
          />
          <Route 
            path="/pokemon" 
            exact
            render={(routerProps) => <SearchPage {...routerProps} />} 
          />
            <Route 
            path="/:pokemonName"
            exact render={(routerProps) => <DetailPage {...routerProps} />}
             />
          </Switch>
        </div>
      </Router>
    );
  }

}