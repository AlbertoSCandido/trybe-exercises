import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import CostumerBase from './pages/CostumerBase';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Home />}/>
        <Route path="/login" render={() => <Login />}/>
        <Route path="/costumer-base" render={() => <CostumerBase />}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
