/*import {createStore, applyMiddleware, compose} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; 

import RootReducer from './Reducers';

const initialState = {};

const store = createStore(
  RootReducer,
  initialState,
  compose(
    applyMiddleware(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
*/



import {createStore} from 'redux';
import RootReducer from './Reducers';

// createStore(rootReducer, InitialState)
const store = createStore(RootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

console.log(store.getState());