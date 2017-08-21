import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../redux';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

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
      const nextRootReducer = require('../redux').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
