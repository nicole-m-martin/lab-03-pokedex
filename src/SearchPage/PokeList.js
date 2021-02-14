import React, { Component } from 'react'
// import pokemon from '../data.js';
import PokeItem from './PokeItem.js'



export default class PokeList extends Component {
  render() {
    return (
      <ul>
          {this.props.filterPoke.map(pokemon => 
          <PokeItem pokemon={pokemon} key={pokemon._id}/>
              )}
              </ul>
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
