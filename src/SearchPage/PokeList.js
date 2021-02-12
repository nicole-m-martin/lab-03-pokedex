import React, { Component } from 'react'
import pokemon from '../data.js';
import PokeItem from './PokeItem.js'



export default class PokeList extends Component {
  render() {
    return (
      
      <ul className='poke-list'>
        {
           pokemon.map(pokemon => 
          <PokeItem
          key={pokemon._id}
          image={pokemon.url_image}
          name={pokemon.pokemon}
          shape={pokemon.shape}
          ability={pokemon.ability_1}
          type={pokemon.type_1}
          />)
           }  
           </ul> 
    );
          }
}


