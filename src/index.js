import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Root from './containers/Root';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';

import './style.css';

require('./helpers');

const store = configureStore();

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
