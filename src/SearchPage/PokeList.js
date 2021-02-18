import React, { Component } from 'react'
import PokeItem from './PokeItem.js'
import Spinner from './Spinner'



export default class PokeList extends Component {
  render() {
    return (
      <section className='poke-cards'>
          { this.props.loading ? <Spinner /> :
          this.props.pokemonData.map(poke => 
          <PokeItem 
          pokemon={poke.pokemon} 
          image={poke.url_image} 
          shape={poke.shape} 
          ability={poke.ability_1} 
          type={poke.type_1}
          key={poke._id} />
          )}
      </section>
    )
  }
}
