import React from 'react'
import PokeItem from './PokeItem.js'
import Spinner from './Spinner.js'



const PokeList = ({ pokemons, isLoading }) => {
  return (
    isLoading ? ( <Spinner /> ) : (
    <section className='poke-cards'>
        {pokemons.map((pokemon) =>  (
        <PokeItem pokemon={pokemons} key={pokemon._id}/>
            ))}
            </section>
))}
        

export default PokeList
