import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js'

import { createStore,applyMiddleware,compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index.js';
import { composeWithDevTools } from 'redux-devtools-extension';

/*const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;*/
const store=createStore(reducer/*,composeWithDevTools(
    applyMiddleware(...middleware)
  )*/);

// store.subscribe(()=>console.log('store getState()',store.getStore()));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
     document.getElementById("root")
);