import { combineReducers } from 'redux';

// Import reducers
import movies from './modules/movies';
import slider from './modules/ui-slider';
import history from './modules/history';

import { ADD_ENTITIES } from './actions';

const initialState = {
  movies: [],
};

function entities(state = initialState, action) {
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
  history,
  ui: combineReducers({
    slider,
  }),
});

export default rootReducer;
