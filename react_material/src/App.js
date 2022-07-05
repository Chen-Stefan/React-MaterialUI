import logo from './logo.svg';
import './App.css';
import Pokedex from './components/Pokedex';
import PokemonProfile from './components/PokemonProfile';
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
   <Switch>
    {/* 这里可以用render, 也可以用component =  */}
     <Route exact path='/' render={(props) => <Pokedex {...props} />} />
     <Route exact path='/pokemon/:pokemonId' render={(props) => <PokemonProfile {...props} />} />
   </Switch>
  );
}

export default App;
