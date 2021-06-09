import React from 'react';
import './pokemon.css';
import { Link } from 'react-router-dom';


class Pokemon extends React.Component {
  checkFav() {
    const { id } = this.props.pokemon
    if(localStorage.favorites) {
      const arrPok = localStorage.getItem('favorites')
      if(arrPok.split(',').includes(id.toString())) {
        return <p>Pokemon Favoritado</p>
      }
      return null;
    }
  }
  
  render() {
    const { pokemon } = this.props
    const {name, type, averageWeight, image} = pokemon;
    return (
      <div className="pokemon">
        <div>
          <p>{name}</p>
          { this.checkFav() }
          <p>{type}</p>
          <p>
            Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
          <Link to={`/pokemon-details/${pokemon.id}`} >Pokemon Info</Link>
        </div>
        <img src={image} alt={`${name} sprite`} />
      </div>
    );
  }
}

export default Pokemon;