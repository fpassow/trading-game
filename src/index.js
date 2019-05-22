import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import state0 from './state0'
import rootReducer from './rootReducer'
import { tick } from './actions'
//import * as SysClock from './SysClock'

const store = createStore(rootReducer, state0)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

//TICK actions drive everything that depends on the passage of time
setInterval(()=>{store.dispatch(tick())}, 150)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
