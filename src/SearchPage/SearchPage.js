import React, { Component } from 'react'
import pokemon from '../data'
import PokeList from './PokeList.js'



export default class App extends Component {
  state = {
    pokemon: pokemon,
  }



  render() {
    const filterPoke = pokemon.filter((pokemon) => {
      if(!this.state.pokemon) return true;
      if(pokemon.pokemon === this.state.pokemon){
        return true;
      }
    })

    return (
      <div>
        <PokeList pokemon= { filterPoke } />
      </div>
    )
  }
}

