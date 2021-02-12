import React, { Component } from 'react'

export default class PokeItem extends Component {
  render() {
    return (

      <>
      <ul>
     <img src={this.props.image} alt='poke-pics' />
        <h3>Pokemon Name: {this.props.name}</h3>
        <p>Shape: {this.props.shape}</p>
        <p>Ability: {this.props.ability}</p>
        <p>Type: {this.props.type}</p>
      </ul>
      </>
    )
  }
}
