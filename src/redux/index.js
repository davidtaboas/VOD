import { combineReducers } from 'redux';

// Import reducers
import movies from './modules/movies';
import slider from './modules/ui-slider';

import { ADD_ENTITIES } from './actions';

function entities(state = null, action) {
  switch (action.type) {
    case ADD_ENTITIES:
      return action.payload;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  entities,
  movies,
  ui: combineReducers({
    slider
  })
});

export default rootReducer;
