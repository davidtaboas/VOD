// Actions
export const NEW_VIDEO_VIEWED = 'accedo-test/history/NEW_VIDEO_VIEWED';
export const FETCH_VIDEO_HISTORY = 'accedo-test/history/FETCH_VIDEO_HISTORY';

// Initial State
const initialState = [];

const HISTORY_KEY = 'videoHistory';

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_VIDEO_HISTORY: {
      // Return the array saved from sessionStorage to state
      return JSON.parse(sessionStorage.getItem(HISTORY_KEY)) || state;
    }
    case NEW_VIDEO_VIEWED: {
      // Push a new video at the begin of array
      const newState = [
        {
          video: action.payload,
          viewedAt: Date.now(),
        },
        ...state,
      ];
      // Save on sessionStorage the array as string
      sessionStorage.setItem(HISTORY_KEY, JSON.stringify(newState));
      return newState;
    }
    default:
      return state;
  }
}

// Functions
export function newVideoViewed(videoID) {
  return {
    type: NEW_VIDEO_VIEWED,
    payload: videoID,
  };
}

export function fetchHistory() {
  return {
    type: FETCH_VIDEO_HISTORY,
  };
}
