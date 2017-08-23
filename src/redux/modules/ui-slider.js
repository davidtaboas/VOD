// Actions
export const LOAD_MOVIES_SLIDER = 'accedo-test/ui-slider/LOAD_MOVIES_SLIDER';
export const NEXT_SLIDE = 'accedo-test/ui-slider/NEXT_SLIDE';
export const PREV_SLIDE = 'accedo-test/ui-slider/PREV_SLIDE';

// Initial State
const initialState = {
  currentPosition: 0, // position on screen
  currentIndex: 0, // index of item selected
  items: [], // all items
  showItems: 4, // numbers of items to show
  currentItems: [] // items showed
};

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MOVIES_SLIDER: {
      const currentItems = action.payload.slice(
        state.currentPosition,
        state.showItems
      );
      currentItems.unshift(action.payload.last());
      currentItems.push(action.payload[state.showItems]);
      return {
        ...state,
        items: action.payload,
        currentItems
      };
    }
    case NEXT_SLIDE: {
      const currentPosition =
        state.currentPosition < state.showItems - 1
          ? state.currentPosition + 1
          : state.showItems - 1;
      const currentIndex = (state.currentIndex + 1) % state.items.length;
      const auxItems = [...state.items, ...state.items];
      const currentItems = auxItems.slice(
        currentIndex,
        currentIndex + state.showItems
      );
      currentItems.unshift(state.currentItems[1]);
      currentItems.push(auxItems[currentIndex + state.showItems]);
      return {
        ...state,
        currentPosition,
        currentIndex,
        currentItems
      };
    }
    case PREV_SLIDE: {
      const currentPosition =
        state.currentPosition > 0 ? state.currentPosition - 1 : 0;
      let currentIndex = (state.currentIndex - 1) % state.items.length;
      let currentItems = [];
      if (currentIndex < 0) {
        currentItems = [
          ...state.items.slice(currentIndex),
          ...state.items.slice(0, state.showItems + currentIndex)
        ];
        currentIndex = state.items.length + currentIndex;
      } else {
        currentItems = [...state.items, ...state.items].slice(
          currentIndex,
          currentIndex + state.showItems
        );
      }
      currentItems.unshift(state.currentItems[0]);
      currentItems.push(state.currentItems.last());
      return {
        ...state,
        currentPosition,
        currentIndex,
        currentItems
      };
    }
    default:
      return state;
  }
}

export function loadMoviesSlider(movies) {
  return {
    type: LOAD_MOVIES_SLIDER,
    payload: movies
  };
}

export function nextSlide() {
  return {
    type: NEXT_SLIDE
  };
}

export function prevSlide() {
  return {
    type: PREV_SLIDE
  };
}
