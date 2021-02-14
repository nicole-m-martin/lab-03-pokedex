import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import style2 from './Header.module.css'

export default class SearchPage extends Component {
  render() {
    return (
      <header className={style2.headerBox}>
        
        <NavLink className={style2.headerLinks} exact activeClassName='selected' to='/'>
          Home  
          </NavLink>
          <NavLink className={style2.headerLinks} exact activeClassName='selected' to='./SearchPage/SearchPage.js'>
          Search 
          </NavLink>

      </header>
    )
  }
}

