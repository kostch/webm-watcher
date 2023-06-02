const SET_BOARDS = "SET_BOARDS";
const SET_BOARD = "SET_BOARD";

const defaultState = {
  items: [],
  activeBoard: null,
};

export default function boardsReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_BOARDS:
      return {
        ...state,
        items: action.payload,
      };
    case SET_BOARD:
      return {
        ...state,
        activeBoard: action.payload,
      };
    default:
      return state;
  }
}

export const setBoards = (items) => ({type: SET_BOARDS, payload: items});
export const setBoard = (items) => ({type: SET_BOARD, payload: items});
