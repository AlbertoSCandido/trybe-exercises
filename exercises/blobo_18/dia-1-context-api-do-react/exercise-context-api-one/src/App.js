import React from 'react';
import './App.css';
import Cars from './Cars';
import GlobalState from './GlobalState';
import TrafficSignal from './TrafficSignal';
function App() {
  return (
    <GlobalState>
      <Cars />
      <TrafficSignal />
    </GlobalState>
  );
}

export default App;
