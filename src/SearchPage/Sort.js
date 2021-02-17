import React, { Component } from 'react'

export default class Sort extends Component {
  render() {
    return (
      <>
      <select onChange={this.props.sortOrderHandle}>
      <option value=''>Sort Alphabetically</option>
      <option value='z'>A to Z</option>
      <option value='a'>Z to A</option>
        
      </select>
      <select onChange={this.props.sortByHandle}>
        <option value=''>Search By Traits</option>
        <option value='pokemon'>Pokemon Name</option>
        <option value='ability_1'>Ability</option>
        <option value='shape'>Shape</option>
        <option value='type_1'>Type</option>
      </select>
      </>
    )
  }
}
