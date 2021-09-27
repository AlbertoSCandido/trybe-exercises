import rootReducers from '../reducers';
import { createStore } from 'redux';
const extension = window.devToolsExtension() || ((f) => f);

const store = createStore(rootReducers, extension);

export default store;