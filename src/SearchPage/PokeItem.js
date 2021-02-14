import React, { Component } from 'react'

export default class PokeItem extends Component {
  render() {
    return (

      <>
      <ul>
     <img src={this.props.pokemon.url_image} alt='poke-pics' />
        <h3>Pokemon Name: {this.props.pokemon.pokemon}</h3>
        <p>Shape: {this.props.pokemon.shape}</p>
        <p>Ability: {this.props.pokemon.ability_1}</p>
        <p>Type: {this.props.pokemon.type_1}</p>
      </ul>
      </>
    )
  }
}
