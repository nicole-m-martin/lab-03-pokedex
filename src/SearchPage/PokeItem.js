import React from 'react'

const PokeItem = ({ pokemon }) => {
 
    return (
      

    <div className='poke-card'>
      
        <div className='poke-card-front'>
        <img src={pokemon.url_image} alt='poke-pics' />
        </div>
        <div className='poke-card-back'>
          <h1>{pokemon.pokemon}</h1>
          <ul>
            <li>
              <strong>Shape:</strong> {pokemon.shape}
            </li>
            <li>
              <strong>Ability:</strong> {pokemon.ability_1}
            </li>
            <li>
              <strong>Type:</strong> {pokemon.type_1}
            </li>
          </ul>
        </div>
      </div>
      
    )
  }

  export default PokeItem
