import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import state0 from './state0'
import rootReducer from './rootReducer'
import { tick } from './actions'

import {loadState, saveState} from './gameSaver'

//Get state from local storage
const persistedState = loadState()

//Create a store using state from local storage if we have it, or state0 from state0.js otherwise.
const store = createStore(rootReducer, ((persistedState && persistedState.places)?persistedState:state0))
store.subscribe(() => {
    let s = store.getState()
    //store state once per day.
    if (s.ticksToday === 0) {
      saveState(s)
    }
  })
  
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

//TICK actions drive everything that depends on the passage of time
setInterval(()=>{store.dispatch(tick())}, 150)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
