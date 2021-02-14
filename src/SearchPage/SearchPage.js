import React, { Component } from 'react'
import pokemon from '../data'
import PokeList from './PokeList.js'
import SearchBar from './SearchBar.js'
import Sort from './Sort.js'


export default class App extends Component {
  state = {
    pokemon: pokemon,
    search: '',


  } 

  
  searchHandle = (e) => {
    this.setState({
      search: e.target.value
    })
  }
  

  render() {
    const filterPoke = pokemon.filter(pokemon => pokemon.pokemon.includes(this.state.search))
  

      

    return (
      <>
      <SearchBar currentValue={this.state.searchPoke} searchHandle={this.searchHandle} />
      <PokeList filterPoke={filterPoke} />

</>
    );
  }
}

