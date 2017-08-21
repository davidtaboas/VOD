import fetch from 'isomorphic-fetch';

// Actions
export const REQUEST_MOVIES = 'accedo-test/movies/REQUEST_MOVIES';
export const RECEIVE_MOVIES = 'accedo-test/movies/RECEIVE_MOVIES';

// Initial State
const initialState = {
  totalCount: 0,
  isFetching: false,
  didInvalidate: false,
  items: []
};

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_MOVIES:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_MOVIES:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.movies.entries,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
}

// Functions
export function requestMovies() {
  return {
    type: REQUEST_MOVIES
  };
}

function receiveMovies(json) {
  return {
    type: RECEIVE_MOVIES,
    movies: json,
    receivedAt: Date.now()
  };
}

export function fetchMovies() {
  return dispatch => {
    dispatch(requestMovies());
    return fetch('https://demo2697834.mockable.io/movies')
      .then(response => response.json())
      .then(json => dispatch(receiveMovies(json)));
  };
}

function shouldFetchMovies(state) {
  const movies = state.movies.entities;
  if (!movies) {
    return true;
  } else if (movies.isFetching) {
    return false;
  } else {
    return movies.didInvalidate;
  }
}

export function fetchMoviesIfNeeded() {
  // Note that the function also receives getState()
  // which lets you choose what to dispatch next.

  // This is useful for avoiding a network request if
  // a cached value is already available.

  return (dispatch, getState) => {
    if (shouldFetchMovies(getState())) {
      // Dispatch a thunk from thunk!
      return dispatch(fetchMovies());
    } else {
      // Let the calling code know there's nothing to wait for.
      return Promise.resolve();
    }
  };
}
