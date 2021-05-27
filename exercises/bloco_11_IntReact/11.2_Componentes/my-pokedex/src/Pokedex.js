import React from 'react';
import Data from './data'
import Pokemom from './Pokemom'

class Pokedex extends React.Component {
  render() {
    return <div className='App'> {Data.map(pok => <Pokemom key={pok.id} pokemon = {pok}/>)} </div>
  }
}

export default Pokedex;