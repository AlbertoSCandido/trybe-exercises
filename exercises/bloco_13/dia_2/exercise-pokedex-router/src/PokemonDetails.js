import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import Data from './data';

export default class PokemonDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favorites: localStorage.getItem('favorites')
    }
    this.favoritePoke = this.favoritePoke.bind(this);
  }

  favoritePoke({ target }) {
    const { id } = this.props.match.params;
    const { checked } = target;
    if (checked) {
      if(localStorage.favorites) {
        const arrPok = localStorage.getItem('favorites')
        if (!arrPok.split(',').includes(id.toString())) {
          return localStorage.setItem('favorites', [arrPok, id]) 
        }
        return null;
      }
      return localStorage.setItem('favorites', id)
    }
    if(localStorage.favorites) {
      const arrPok = localStorage.getItem('favorites')
      if (arrPok.split(',').includes(id.toString())) {
        let newArr = arrPok.split(',').filter(pok => pok !== id).join(',')
        return localStorage.setItem('favorites', newArr)
      }
    }
  }

  checkFav(id) {
    // const { id } = this.props.pokemon
    if(localStorage.favorites) {
      const arrPok = localStorage.getItem('favorites')
      if(arrPok.split(',').includes(id.toString())) {
        return <p>Pokemon Favoritado</p>
      }
      return null;
    }
  } 

  render() {
    const { pokemons } = this.props
    const { id } = this.props.match.params;
    const pokemon = pokemons.find((poke) => poke.id === Number(id));
    const { name, type, averageWeight, summary, foundAt, image } = pokemon;

    return (
      pokemon === undefined ? <Redirect to='/not-found'/> :
      <div>
        <h3>{ name }</h3>
        <img src={image} alt={`${name} sprite`} />
        <br />
        <label htmlFor="favorite-Pokemon" onChange={ this.favoritePoke }>
          Favoritar Pokemon
          <input type="checkbox" id="favorite-Pokemon" name="favorite-Pokemon"></input>
        </label>
        { this.checkFav(id) }
        <p>{ type }</p>
        <p> {averageWeight.value} {averageWeight.measurementUnit} </p>
        <p>{ summary }</p>
        {foundAt.map((found) => {
          return(
            <div>
              <p>{found.location}</p>
              <img src={found.map} alt={found.location}/>
            </div>
          )
        })}
      </div>
    )
  }
}
