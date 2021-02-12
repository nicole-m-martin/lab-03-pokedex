import React, { Component } from 'react'
import PokeList from './PokeList.js'
import pokemon  from '../data.js'


export default class SearchPage extends Component {

state = {
  pokemon: pokemon,

}

  render() {

    const filterPoke = pokemon.filter((pokemon) => {
      if (!this.state.pokemon) return true;
      return false
    })


    return (
      <div>
        <PokeList filterPoke = {filterPoke} />
      </div>
    )
  }
}

