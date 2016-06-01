import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import { createRendererStore } from 'redux-electron';

import App from './containers/App.js';

let enhancer = compose(
  applyMiddleware(createLogger())
);

const store = createRendererStore(enhancer);

render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('app'));
