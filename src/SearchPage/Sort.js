import React, { Component } from 'react'

export default class Sort extends Component {
  render() {
    return (
      <>
        <select onChange={this.props.sortByHandle}>
          <option value=''>Category:</option>
          <option value='pokemon'>Pokemon Name</option>
          <option value='ability_1'>Ability</option>
          <option value='shape'>Shape</option>
          <option value='type_1'>Type</option>
        </select>

        <select onChange={this.props.sortOrderHandle}>
          <option value=''>Sort</option>
          <option value='desc'>A to Z</option>
          <option value='asc'>Z to A</option>
        </select>
        </>
    )
  }
}
