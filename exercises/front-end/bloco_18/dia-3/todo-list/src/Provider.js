import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  // const [timer, setTimer] = useState();
  const [randomNumber, setRandomNumber] = useState(500);
  const [showMessage, setShowMessage] = useState('');

  useEffect(() => {
    setRandomNumber(Math.round(Math.random() * (100 - 1) + 1))
    const TEN_SECONDS = 10000;
    setInterval(() => {
      setRandomNumber(Math.round(Math.random() * (100 - 1) + 1))
    }, TEN_SECONDS);
  }, []);

  useEffect(() => {
    randomNumber % 3 === 0 || randomNumber % 5 === 0 ? setShowMessage('Acertou') : setShowMessage('');
    setTimeout(() => {
      setShowMessage('')
    }, 4000);
  }, [randomNumber]);

  const contextValue = { 
    randomNumber, 
    setRandomNumber,
    showMessage,
    setShowMessage,
   }

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}

export default Provider;