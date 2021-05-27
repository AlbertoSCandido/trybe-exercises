import React from 'react';

class Pokemom extends React.Component {
  render() {
    return (
      <div className= 'CardF'>
        <div key = {this.props.pokemon.id} className= 'Card'>
          <p>{this.props.pokemon.name}</p>
          <p>{this.props.pokemon.type}</p>
          <p>Average weight: {this.props.pokemon.averageWeight.value} {this.props.pokemon.averageWeight.measurementUnit}</p>
        </div>
        <img src = {this.props.pokemon.image} alt= {this.props.pokemon.name}></img>
      </div>
    )
  }
}

export default Pokemom;