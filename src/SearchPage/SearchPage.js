import React, { Component } from 'react'
import pokemon from '../data'
import PokeList from './PokeList.js'
import SearchBar from './SearchBar.js'
import Sort from './Sort.js'


// set the global state
export default class App extends Component {
  state = {
    pokemon: pokemon,
    search: '',
    sortBy: 'pokemon',
    sortOrder: 'a',


  } 

  // search state handler
  searchHandle = (e) => {
    this.setState({
      search: e.target.value
    })
  }
// sort by type state handler
  sortByHandle = (e) => {
    this.setState({
      sortBy: e.target.value
    })
  }
// sort by order handler
  sortOrderHandle = (e) => {
    this.setState({
      sortOrder: e.target.value
    })
  }
  

  render() {
    // filter this pokemon 
    const filterPoke = pokemon.filter(pokemon => pokemon.pokemon.includes(this.state.search))
    // sort the pokemon 
    if (this.state.sortBy !== '') {
      // Ascending order
      if (this.state.sortOrder === 'a') {
      (this.state.pokemon.sort((a, b) => a[this.state.sortBy].localeCompare(b[this.state.sortBy])))
      // Descending order
      } else {this.state.pokemon.sort((a, b) => b[this.state.sortBy].localeCompare(a[this.state.sortBy]))}
    }
  

      
    // add the JSX to render onto the SearchPage
    return (
      <>
      <SearchBar currentValue={this.state.searchPoke} searchHandle={this.searchHandle} />
      <Sort sortByHandle={this.sortByHandle} sortOrderHandle={this.sortOrderHandle}  /> 
            
      <PokeList filterPoke={filterPoke} />

</>
    );
  }
}

