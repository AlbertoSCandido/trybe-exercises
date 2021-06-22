import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom';
import PokemonDetails from './PokemonDetails';
import About from './About'
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <BrowserRouter>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
        <Switch>
          <Route exact path='/' render={() => <Pokedex pokemons={pokemons} />} />
          <Route path='/pokemon-details/:id' render={(props) => <PokemonDetails {...props} pokemons={pokemons}/>} />
          <Route path='/about' component={ About }/>
          <Route component={ NotFound }/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;