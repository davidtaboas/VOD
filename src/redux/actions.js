export { fetchMovies } from './modules/movies';
export { nextSlide, prevSlide, loadMoviesSlider } from './modules/ui-slider';

export const ADD_ENTITIES = 'accedo-test/ADD_ENTITIES';

export const addEntities = entities => ({
  type: ADD_ENTITIES,
  payload: entities
});
