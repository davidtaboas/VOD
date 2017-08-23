import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './containers/Home';
import Watch from './containers/Watch';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';

import { fetchMovies } from './redux/actions';
import './style.css';

require('./helpers');

const store = configureStore();

store.dispatch(fetchMovies());
render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/watch/:videoID" component={Watch} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
