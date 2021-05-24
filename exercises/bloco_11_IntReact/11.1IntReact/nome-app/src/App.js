import './App.css';

const arrayDeCompromissos = [
  'Levar cachorro para passear',
  'Conversar com a webNamorada',
  'Jogar o lixo no lixo',
  'Lembrar de fazer commits regularmente'
  ]; 

function App() {
  const Task = (value) => {
    return (
     value.map(comp => <li>{ comp }</li>)
    );
  }

  return (
    <ul>
      {Task(arrayDeCompromissos)}
    </ul>
  );
}

export default App;
