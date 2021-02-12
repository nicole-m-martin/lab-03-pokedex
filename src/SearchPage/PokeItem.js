import React, { Component } from 'react'

export default class PokeItem extends Component {
  render() {
    return (
      <div>
        <li>
        <img alt='poke-pics' src={this.props.url_image} />
        <h3>{this.props.pokeProp.name}</h3>
        <p>{this.props.pokeProp.pokemon}</p>
        <p>Type: {this.props.pokeProp.type_1}</p>
        <p>Defense: {this.props.pokeProp.defense}</p>
        <p>Attack: {this.props.pokeProp.attack}</p>
      </li>
      </div>
    )
  }
}
