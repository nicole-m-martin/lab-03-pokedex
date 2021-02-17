import React, { Component } from 'react'
import request from 'superagent'
import Spinner from './Spinner'
import PokeItem from './PokeItem'

export default class DetailPage extends Component {

  state = {
    pokemonData: {}
}


componentDidMount = async () => {        
    this.setState({ loading: true })
     
    const data = await request.get(`{https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemonName}`);

    this.setState({ 
      pokemonData: data.body.results.find
      (item => item.pokemon === 
      this.props.match.params.pokemonName),
      loading: false,
    });
}


  render() {
    return (
      <>
        <h3>Pokemon Details</h3>
        { this.props.loading ? <Spinner /> : 
        <PokeItem
        pokemon={this.state.pokemonData.pokemon} 
        image={this.state.pokemonData.pokemon} 
        shape={this.state.pokemonData.shape} 
        ability={this.state.pokemonData.ability_1} 
        type={this.state.pokemonData.type_1}
        key={this.state.pokemonData._id} />
        
          }
      </>
    )
  }
}
