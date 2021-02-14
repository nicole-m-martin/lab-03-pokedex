import React, { Component } from 'react'

export default class SearchBar extends Component {
  

  render() {
    return (
      <>
      <div>
        <input type= 'text' 
        placeholder= 'Find Your Pokemon...'
        value= {this.props.currentValue}
        onChange= {this.props.searchHandle} />
      </div>
    </>

    )
  }
}
