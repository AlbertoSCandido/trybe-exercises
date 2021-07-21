import React from 'react';
import './App.css';
import Cars from './Cars';
import GlobalState from './GlobalState';

function App() {
  return (
    <GlobalState>
      <Cars />
    </GlobalState>
  );
}

export default App;
