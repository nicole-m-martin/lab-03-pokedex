import React, { Component } from 'react'
import request from 'superagent'
import Spinner from './Spinner'

export default class DetailPage extends Component {
 state = {
      pokemonData: {}
  }

  componentDidMount = async () => {        
      this.setState({ loading: true });
  
      const result = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemonName}&sort=asc`);
  
      this.setState({ 
        loading: false,
        pokemonData: result.body.results[0],
      });
  }

  render() {

      return (
          <div>
             {
              this.state.loading
                  ? <Spinner /> 
                  : <div>
                    <div className='detail-card'>
                      <img src={this.state.pokemonData.url_image} alt="pokemon" />
                     <h1>{this.state.pokemonData.pokemon}</h1>
                     <p>HP: {this.state.pokemonData.hp}</p>
                     <p>Ability: {this.state.pokemonData.ability_1}</p>
                     <p>Hidden Ability: {this.state.pokemonData.ability_hidden}</p>
                     <p>Shape: {this.state.pokemonData.shape}</p>
                     <p>Speed: {this.state.pokemonData.speed}</p>
                     <p>Height: {this.state.pokemonData.height}</p>
                     <p>Weight: {this.state.pokemonData.weight}</p>
                     <p>Base EXP: {this.state.pokemonData.base_experience}</p>
                     <p>Attack: {this.state.pokemonData.attack}</p>
                     <p>Special Attack: {this.state.pokemonData.special_attack}</p>
                     <p>Defense: {this.state.pokemonData.defense}</p>
                 </div>
                 </div>
             }
          </div>
      )
  }
}
