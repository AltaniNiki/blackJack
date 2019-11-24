import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js'

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index.js';

const store=createStore(reducer);

store.subscribe(()=>console.log('store getState()',store.getStore()));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
     document.getElementById("root")
);