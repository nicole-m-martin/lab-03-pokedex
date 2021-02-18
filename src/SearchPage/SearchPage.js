
import React from 'react'
import SearchBar from './SearchBar'
import request from 'superagent'
import PokeList from './PokeList.js'
import Sort from './Sort.js'
import pika from '../img/poke-p.webp'




export default class SearchPage extends React.Component {
  state = {
    pokemonData: [],
    search: '',
    sortBy: 'pokemon',
    sortOrder: 'asc',
    loading: false,
    pokeTotal: 0,
    currentPage: 1,
    perPage: 25,
  }

  fetchPokemon = async () => {
    this.setState({loading:true})
  
    const result = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.search}&sort=${this.state.sortBy}&direction=${this.state.sortOrder}&page=${this.state.currentPage}&perPage=${this.state.perPage}`)
   
      this.setState({ 
      pokemonData: result.body.results,
      count: result.body.count,
      loading: false, 
    })
   
  }

  componentDidMount() {
    this.fetchPokemon();
  }

  // click button handler
  clickHandle = async () => {

    await this.fetchPokemon()
  }


 // search state handler
 searchHandle = async (e) => {
  this.setState({
    search: e.target.value,
    currentPage: 1,
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
  const lastPage = Math.ceil(this.state.pokeTotal / this.state.perPage);  
    
  // add the JSX to render onto the SearchPage
  return (
    <>
    <img className='pika-pic' src={pika} alt='pika' />

    <SearchBar  
    searchHandle={this.searchHandle}
    clickHandle={this.clickHandle} 
    />

    <button 
    onClick={this.previousClickHandle} 
    disabled={this.state.currentPage === 1}>
    Prev Page</button>

    <button 
    onClick={this.nextClickHandle} 
    disabled={this.state.currentPage === lastPage}>
    Next Page</button>

    <h2>Page: {this.state.currentPage}</h2>

    <Sort sortByHandle={this.sortByHandle} 
    sortOrderHandle={this.sortOrderHandle}  />
    
    <PokeList pokemonData={this.state.pokemonData}
    loading = {this.state.loading} />
    </>
  );
}
}

        
        
        
      

      