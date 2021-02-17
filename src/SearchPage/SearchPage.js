
import React from 'react'
import SearchBar from './SearchBar'
import request from 'superagent'
import PokeList from './PokeList.js'
import Sort from './Sort.js'



export default class SearchPage extends React.Component {
  state = {
    pokemonData: [],
    search: '',
    sortBy: '',
    sortOrder: 'asc',
    loading: false,
  }

  fetchPokemon = async () => {
    this.setState({loading:true})
  
    const result = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.search}&sort=${this.state.sortBy}&direction=${this.state.sortOrder}`)
   
      this.setState({ 
      pokemonData: result.body.results,
      loading: false, 
    })
   
  }


  componentDidMount() {
    this.fetchPokemon();
    console.log(this.state.pokemon);
  }

  // submit button handler
  // submitClickHandle = async (e) => {
  //   this.fetchPokemon()
  // }


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
      

