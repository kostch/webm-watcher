const SET_POSTS = "SET_POSTS";
const START_FETCHING = "START_FETCHING";
const CLEAR_POSTS = "CLEAR_POSTS";

const defaultState = {
  items: [],
  isFetching: false,
};

export default function postsReducer(state = defaultState, action) {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
      };
    case SET_POSTS:
      const updatedFiles = action.payload.reduce((accumulator, element) => {
        if (Array.isArray(element.files)) {
          const filteredFiles = element.files.filter((file) => file.duration);
          if (filteredFiles.length > 0) {
            accumulator.push(...filteredFiles);
          }
        }
        return accumulator;
      }, []);
      return {
        ...state,
        items: [...state.items, ...updatedFiles],
        isFetching: false,
      };
    case CLEAR_POSTS:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
}

export const setMedia = (items) => ({type: SET_POSTS, payload: items});
export const startFetching = () => ({type: START_FETCHING});
export const clearMedia = () => ({type: CLEAR_POSTS});
