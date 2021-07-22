import React from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import GlobalContext from './GlobalContext';

function Cars() {
  return (
    <GlobalContext.Consumer>
      { ({state, handleClick}) => (
        <div>
          <div>
            <img
              className={state.red ? 'car-right' : 'car-left'}
              src={carRed}
              alt="red car"
            />
            <button
              onClick={() => handleClick('red', !state.red)}
              type="button"
            >
              Move
            </button>
          </div>
          <div>
            <img
              className={state.blue ? 'car-right' : 'car-left'}
              src={carBlue}
              alt="blue car"
            />
            <button
              onClick={() => handleClick('blue', !state.blue)}
              type="button"
            >
              Move
            </button>
          </div>
          <div>
            <img
              className={state.yellow ? 'car-right' : 'car-left'}
              src={carYellow}
              alt="yellow car"
            />
            <button
              onClick={() => handleClick('yellow', !state.yellow)}
              type="button"
            >
              Move
            </button>
          </div>
        </div>
      )
      }
    </GlobalContext.Consumer>
  );
}

export default Cars;
