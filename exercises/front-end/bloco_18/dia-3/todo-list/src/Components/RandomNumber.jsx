import React, { useContext } from 'react'
import AppContext from '../AppContext';

function RandomNumberComponent () {
  const {
    randomNumber,
    showMessage,
  } = useContext(AppContext);
  console.log(showMessage);
  return (
      <div>
        <p>Número aleatório {randomNumber}</p>
        <p>{ showMessage }</p>
        {/* <p>A palavra "Acertou" irá sumir em {1} segundos</p> */}
      </div>
  );
}

export default RandomNumberComponent;