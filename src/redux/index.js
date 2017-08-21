import { combineReducers } from 'redux';

// Import reducers
import movies from './movies';

const rootReducer = combineReducers({
  movies
});

export default rootReducer;
