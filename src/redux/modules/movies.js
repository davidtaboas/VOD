import fetch from 'isomorphic-fetch';
import { normalize } from 'normalizr';

import { addEntities, loadMoviesSlider } from '../actions';
import { movieListSchema } from './../../store/schema';
// Actions
export const REQUEST_MOVIES = 'accedo-test/movies/REQUEST_MOVIES';
export const RECEIVE_MOVIES = 'accedo-test/movies/RECEIVE_MOVIES';

// Initial State
const initialState = {
  totalCount: 0,
  isFetching: false,
  didInvalidate: false,
  items: [],
};

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_MOVIES:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      });
    case RECEIVE_MOVIES:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.payload.entries,
        lastUpdated: action.receivedAt,
        totalCount: action.payload.totalCount,
      };
    default:
      return state;
  }
}

// Functions
export function requestMovies() {
  return {
    type: REQUEST_MOVIES,
  };
}

function receiveMovies(json) {
  return {
    type: RECEIVE_MOVIES,
    payload: json,
    receivedAt: Date.now(),
  };
}

export function fetchMovies() {
  return (dispatch) => {
    dispatch(requestMovies());
    return fetch('https://demo2697834.mockable.io/movies')
      .then(response => response.json())
      .then((json) => {
        const data = normalize(json, movieListSchema);
        dispatch(addEntities(data.entities));
        dispatch(receiveMovies(data.result));
        dispatch(loadMoviesSlider(data.result.entries));
      });
  };
}
