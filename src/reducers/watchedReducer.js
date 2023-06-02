const SET_WATCHED = "SET_WATCHED";

const defaultState = {
  items: [0],
};

export default function watchedReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_WATCHED:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
}

export const setWatch = (items) => ({type: SET_WATCHED, payload: items});
