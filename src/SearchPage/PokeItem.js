import React, { Component } from 'react'
import { Link } from 'react-router-dom'



export default class PokeItem extends Component {
  render() {
    return (
      
 // how to link to the detail page when clicked
 <Link to={this.props.pokemon.pokemon}>
    <div className='poke-card'>
      
        <div className='poke-card-front'>
        <img src={this.props.image} alt='poke-pics' />
        </div>
        <div className='poke-card-back'>
          <h1>{this.props.pokemon}</h1>
          <ul>
            <li>
              <strong>Shape:</strong> {this.props.shape}
            </li>
            <li>
              <strong>Ability:</strong> {this.props.ability}
            </li>
            <li>
              <strong>Type:</strong> {this.props.type}
            </li>
          </ul>
        </div>
      </div>
      </Link>
      
    )
  }
}

