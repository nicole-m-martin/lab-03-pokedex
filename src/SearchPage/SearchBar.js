import React, { Component } from 'react'



export default class SearchBar extends Component {
  render() {
    
    return (
      <div>
      <input onChange={this.props.searchHandle}
      placeholder= 'Find Your Pokemon...' /> 
      </div>
    )
  }
}
