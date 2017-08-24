// Actions
export const LOAD_MOVIES_SLIDER = 'accedo-test/ui-slider/LOAD_MOVIES_SLIDER';
export const NEXT_SLIDE = 'accedo-test/ui-slider/NEXT_SLIDE';
export const PREV_SLIDE = 'accedo-test/ui-slider/PREV_SLIDE';
export const MOVE_POSITION = 'accedo-test/ui-slider/MOVE_POSITION';

// Initial State
const initialState = {
  currentPosition: 0, // position on screen
  currentIndex: 0, // index of item selected
  items: [], // all items
  showItems: 4, // numbers of items to show
  currentItems: [], // items showed
};

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MOVIES_SLIDER: {
      // Set items to show on page
      const currentItems = action.payload.slice(
        state.currentPosition,
        state.showItems,
      );
      currentItems.unshift(action.payload.last());
      currentItems.push(action.payload[state.showItems]);
      return {
        ...state,
        items: action.payload,
        currentItems,
      };
    }
    case MOVE_POSITION: {
      // Update position of selected item on page
      let currentPosition = state.currentPosition;
      if (action.payload < 0) {
        currentPosition = currentPosition ? currentPosition + action.payload : 0;
      } else {
        currentPosition = currentPosition !== (state.showItems - 1) ?
          currentPosition + action.payload : state.showItems - 1;
      }
      return {
        ...state,
        currentPosition,
      };
    }
    case NEXT_SLIDE: {
      // Move items on slider
      const currentIndex = (state.currentIndex + 1) % state.items.length;
      const auxItems = [...state.items, ...state.items];
      const currentItems = auxItems.slice(
        currentIndex,
        currentIndex + state.showItems,
      );
      currentItems.unshift(state.currentItems[1]);
      currentItems.push(auxItems[currentIndex + state.showItems]);
      return {
        ...state,
        currentIndex,
        currentItems,
      };
    }
    case PREV_SLIDE: {
      // Move items on slider
      let currentIndex = state.currentIndex - 1;
      let currentItems = [];
      if (currentIndex < 1) {
        currentItems = [
          ...state.items.slice(currentIndex - 1),
          ...state.items.slice(0, state.showItems + 1),
        ];
        currentIndex = state.items.length + currentIndex;
      } else {
        currentItems = [...state.items, ...state.items].slice(
          currentIndex - 1,
          currentIndex + state.showItems + 1);
      }
      return {
        ...state,
        currentIndex,
        currentItems,
      };
    }
    default:
      return state;
  }
}

export function loadMoviesSlider(movies) {
  return {
    type: LOAD_MOVIES_SLIDER,
    payload: movies,
  };
}

function nextSlide() {
  return {
    type: NEXT_SLIDE,
  };
}

function prevSlide() {
  return {
    type: PREV_SLIDE,
  };
}

function movePosition(amount) {
  return {
    type: MOVE_POSITION,
    payload: amount,
  };
}

export function selectNext() {
  // Check position of slider and move items and update position
  return (dispatch, getState) => {
    if (getState().ui.slider.currentPosition === (getState().ui.slider.showItems - 1)) {
      dispatch(nextSlide());
    }
    dispatch(movePosition(1));
    return Promise.resolve();
  };
}

export function selectPrev() {
  // Check position of slider and move items and update position
  return (dispatch, getState) => {
    if (!getState().ui.slider.currentPosition) {
      dispatch(prevSlide());
    }
    dispatch(movePosition(-1));
    return Promise.resolve();
  };
}
