import React, { Component } from 'react'

export default class SearchBar extends Component {
  

  render() {
    const lastPage = 17;
    return (
      <>
      <div>
        <input onChange={this.props.searchHandle}
        placeholder= 'Find Your Pokemon...' /> 
        <button onClick={this.props.clickHandle}>Search!</button>

        <h2>Page {this.props.currentPage}</h2>
        <button onClick={this.previousClickHandle} 
        disabled={this.props.currentPage === 1}>Previous Page</button>
        
        <button disabled={this.props.currentPage === lastPage} 
        onClick={this.nextClickHandle}>Next Page</button>
      </div>
    </>
 
    )
  }
}
