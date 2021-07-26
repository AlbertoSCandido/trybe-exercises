import React from 'react';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import GlobalContext from './GlobalContext';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') return redSignal;
  if (signalColor === 'yellow') return yellowSignal;
  if (signalColor === 'green') return greenSignal;
  return null;
};

const TrafficSignal = () => {
  return (
    <GlobalContext.Consumer>
      {(value) => {
        const {handleClickSignal, state } = value;
        const { signalColor } = state;
        return (
          <div>
            <div className="button-container">
              <button onClick={() => handleClickSignal('red')} type="button">
                Red
              </button>
              <button onClick={() => handleClickSignal('yellow')} type="button">
                Yellow
              </button>
              <button onClick={() => handleClickSignal('green')} type="button">
                Green
              </button>
            </div>
            <img className="signal" src={renderSignal(signalColor)} alt="" />
          </div>
        );
      }}
    </GlobalContext.Consumer>
  );
};

export default TrafficSignal;
