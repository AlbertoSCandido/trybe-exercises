import './App.css';

const arrayDeCompromissos = [
  'Levar cachorro para passear',
  'Conversar com a webNamorada',
  'Jogar o lixo no lixo',
  'Lembrar de fazer commits regularment'
  ]; 

function App() {
  const Task = (value) => {
    return (
      <li>{ value }</li>
    );
  }

  return (
    <ul>
      {arrayDeCompromissos.map(comp => Task(comp))}
    </ul>
  );
}

export default App;
