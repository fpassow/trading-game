import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import state0 from './state0'
import rootReducer from './rootReducer'
import * as SysClock from './SysClock'

const store = createStore(rootReducer, state0)

//The "system clock" module dispatches TICK actions which drive
// everything that isn't driven by UI events.
SysClock.startClockWithDispatch(store.dispatch)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
