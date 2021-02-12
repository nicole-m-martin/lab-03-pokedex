import React, { Component } from 'react';
import PokeItem from '../SearchPage/PokeItem.js'



export default class PokeList extends Component {
  render() {
    return (
      <ul>
       { this.props.filterPoke.map(pokemon =>
        <PokeItem
        key={pokemon.description}
        pokeProp={pokemon} />)}
        </ul>
    )
  }
}

