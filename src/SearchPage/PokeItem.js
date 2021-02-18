import React, { Component } from 'react'
import { Link } from 'react-router-dom'; 

export default class PokeItem extends Component {
  render() {
    return (
      
      <Link className='poke-links' to={this.props.pokemon} style={{ textDecoration: 'none', color: 'black' }}>
    <div className='poke-card'>
      
        <div className='poke-card-front'>
        <img src={this.props.image} alt='poke-pics' />
        </div>
        <div className='poke-card-back'>
          <h1>{this.props.pokemon}</h1>
        </div>
      </div>
      </Link>
      
    )
  }
}