
import React from 'react'
import SearchBar from './SearchBar'
import request from 'superagent'
import PokeList from './PokeList.js'
import Sort from './Sort.js'
import { render } from '@testing-library/react'



export default class SearchPage extends React.Component {
  state = {
    pokemonData: [],
    search: '',
    sortBy: '',
    sortOrder: 'asc',
    loading: false,
    pokeTotal: '0'
  }

  fetchPokemon = async () => {
    this.setState({loading:true})
  
    const result = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.search}&sort=${this.state.sortBy}&direction=${this.state.sortOrder}&page=${this.state.currentPage}`)
   
      this.setState({ 
      pokemonData: result.body.results,
      pokemonTotal: result.body.count,
      loading: false, 
    })
   
  }

  componentDidMount() {
    this.fetchPokemon();
    console.log(this.state.pokemon);
  }

  // click button handler
  clickHandle = async () => {
    await this.setState({ 
      currentPage: 1 
    }) 
    await this.fetchPokemon()
  }


 // search state handler
 searchHandle = async (e) => {
  this.setState({
    search: e.target.value
  })
  await this.fetchPokemon()
}

// sort by type state handler
sortByHandle = async (e) => {
  this.setState({
    sortBy: e.target.value
  })
  await this.fetchPokemon()
}

// sort by order handler
sortOrderHandle = async (e) => {
   this.setState({
    sortOrder: e.target.value
  })
  await this.fetchPokemon()
}

// next page handler
nextClickHandle = async () => {
  await this.setState({
    currentPage: this.state.currentPage + 1
  })
  await this.fetchPokemon();
}

// pre page handler
previousClickHandle = async () => {
  await this.setState({
    currentPage: this.state.currentPage - 1
  })
  await this.fetchPokemon();
}


render() {

    
  // add the JSX to render onto the SearchPage
  return (
    <>
    <SearchBar  searchHandle={this.searchHandle}/>
    <Sort sortByHandle={this.sortByHandle} sortOrderHandle={this.sortOrderHandle}  /> 
          
    <PokeList pokemonData={this.state.pokemonData}
    loading = {this.state.loading} />

</>
  );
}
}
      

