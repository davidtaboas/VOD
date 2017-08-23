import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../redux';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */
const reduxModules = require('../redux');

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        thunkMiddleware // lets us dispatch() functions
      )
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reduxers
    module.hot.accept('../redux', () => {
      const nextRootReducer = reduxModules.default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
