import React, { Component } from 'react'
// import pokemon from '../data.js';
import PokeItem from './PokeItem.js'



export default class PokeList extends Component {
  render() {
    return (
      <section className='poke-cards'>
          {this.props.filterPoke.map(pokemon => 
          <PokeItem pokemon={pokemon} key={pokemon._id}/>
              )}
              </section>
    )
  }
}







// const PokeList = ({pokemons}) => {
//   return (
//     <ul>
//         {pokemons.map((pokemon) => 
//          <PokeItem pokemon={pokemon} key={pokemon._id}/>
//         )}

//       </ul>
    
//   )
// }

// export default PokeList
