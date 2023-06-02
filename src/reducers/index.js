import {combineReducers} from "redux";
import {createStore, applyMiddleware} from "redux";
import threadsReducer from "./threadsReducer";
import postsReducer from "./postsReducer";
import watchedReducer from "./watchedReducer";
import boardsReducer from "./boardsReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  threads: threadsReducer,
  posts: postsReducer,
  watched: watchedReducer,
  boards: boardsReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
