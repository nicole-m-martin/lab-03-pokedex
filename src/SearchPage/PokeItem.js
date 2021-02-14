import React, { Component } from 'react'

export default class PokeItem extends Component {
  render() {
    return (
      

    <div className='poke-card'>
      
        <div className='poke-card-front'>
        <img src={this.props.pokemon.url_image} alt='poke-pics' />
        </div>
        <div className='poke-card-back'>
          <h1>{this.props.pokemon.pokemon}</h1>
          <ul>
            <li>
              <strong>Shape:</strong> {this.props.pokemon.shape}
            </li>
            <li>
              <strong>Ability:</strong> {this.props.pokemon.ability_1}
            </li>
            <li>
              <strong>Type:</strong> {this.props.pokemon.type_1}
            </li>
          </ul>
        </div>
      </div>
      
    )
  }
}