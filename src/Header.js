import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

export default class SearchPage extends Component {
  render() {
    return (
      <header>
        <NavLink exact activeClassName='selected' to='/'>
          Home  
          </NavLink>
          <NavLink exact activeClassName='selected' to='./SearchPage/SearchPage.js'>
          Search 
          </NavLink>

      </header>
    )
  }
}

