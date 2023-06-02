const SET_THREADS = "SET_THREADS";

const defaultState = {
  items: [],
  board: null,
  isFetching: true,
};

export default function threadsReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_THREADS:
      return {
        ...state,
        items: action.payload["threads"],
        board: action.payload["board"],
        isFetching: false,
      };
    default:
      return state;
  }
}

export const setThreads = (items) => ({type: SET_THREADS, payload: items});
