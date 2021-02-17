import React, { Component } from 'react'
// import pokemon from '../data.js';
import PokeItem from './PokeItem.js'
import Spinner from './Spinner'



export default class PokeList extends Component {
  render() {
    return (
      <section className='poke-cards'>
          { this.props.loading ? <Spinner /> :
          this.props.pokemonData.map(poke => 
          <PokeItem pokemon={poke.pokemon} image={poke.url_image} ability={poke.ability_1} shape={poke.shape} type={poke.type_1}
            key={poke._id} />
              )}
              </section>
    )
  }
}
