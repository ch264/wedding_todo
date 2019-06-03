// file renders to browser DOM


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// react app interacts with store
import { Provider } from 'react-redux';

// Redux
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

// create reducer and pass into store
const store = createStore(rootReducer);

// pass store into application to provide access to it
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
