// Export functions from single reducers with ducks structure
export { fetchMovies } from './modules/movies';
export { loadMoviesSlider, selectNext, selectPrev } from './modules/ui-slider';
export { newVideoViewed, fetchHistory } from './modules/history';

// General action for normalize data
export const ADD_ENTITIES = 'accedo-test/ADD_ENTITIES';

export const addEntities = entities => ({
  type: ADD_ENTITIES,
  payload: entities,
});
