import React from 'react';
import Pokemon from './Pokemon';
import Button from './button'

class Pokedex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: this.props.pokemons.filter(pok => pok.type === 'Fire'),
      pokemon: 0,
    }
    this.nextPok = this.nextPok.bind(this)
    this.allTypes = this.allTypes.bind(this)
    this.filterType = this.filterType.bind(this)
  }
  
  nextPok () {
    if(this.state.pokemon === this.state.filter.length - 1) {
      this.setState((_curr, _props) => ({
        pokemon: 0
      }))
    } else {
      this.setState((curr, _props) => ({
        pokemon : curr.pokemon + 1
      }))
    }
  }

  filterType(type) {
    this.setState((_curr, props) => ({
      filter: props.pokemons.filter(pok => pok.type === type)
    }))
    this.setState((_curr, _props) => ({
      pokemon: 0
    }))
  }

  allTypes() {
    this.setState((_curr, props) => ({
      filter: props.pokemons
    }))
    this.setState((_curr, _props) => ({
      pokemon: 0
    }))
  }
  
  render() {
    const types = this.props.pokemons.reduce((acum, curr) => acum.includes(curr.type) ? acum : acum.concat(curr.type),[])
    return (
      <div className="pokedex">
        <Pokemon onClick={this.nextPok} pokemon={this.state.filter[this.state.pokemon]} />
        <div>
          <button className='btn' onClick={this.allTypes}>All Types</button>
          {types.map((type,index) => <Button key={index} pokType={type} click={()=> this.filterType(type)}></Button>)}
          <div>
          <button className='btnP' onClick={this.nextPok}>Próximo</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Pokedex;