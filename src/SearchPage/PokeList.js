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



// const CharacterGrid = ({items, isLoading}) => {
//   // This is returning the loading with a ternary function. If its loading then show the spinner. if is not loading at the cards with a section
//   return isLoading ? (<Spinner />) : (<section className='cards'>
//     {/* Now use map to loop through and output what you want */}
//     {/* Open un an expression and */}
//     {items.map((item) =>(
//       <CharacterItem key={item.char_id} item={item}></CharacterItem>
//     ))}
//   </section>)
  
// }

// export default CharacterGrid