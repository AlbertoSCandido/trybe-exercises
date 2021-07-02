import { combineReducers } from 'redux'

import clientesReducer from './clientesReducer';
import loginReducer from './loginReducer';

const rootReducers = combineReducers({
  clientesReducer,
  loginReducer,
})

export default rootReducers;
