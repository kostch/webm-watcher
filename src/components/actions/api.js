import axios from "axios";
import {setThreads} from "../../reducers/threadsReducer";
import {startFetching, setMedia} from "../../reducers/postsReducer";
import {setBoards} from "../../reducers/boardsReducer";

const proxy = "https://proxy-delta-blush.vercel.app/?url=";

export const getThreads = (board = "hw") => {
  return async (dispatch) => {
    const response = await axios.get(proxy + `https://2ch.hk/${board}/threads.json`);
    dispatch(setThreads(response.data));
    response.data["threads"].forEach((thread) => {
      dispatch(getPosts(board, thread.num));
    });
  };
};

const getPosts = (board, threadID) => {
  return async (dispatch) => {
    const response = await axios.get(proxy + `https://2ch.hk/${board}/res/${threadID}.json`);
    dispatch(startFetching());
    dispatch(setMedia(response.data.threads[0].posts));
  };
};

export const getBoards = () => {
  return async (dispatch) => {
    const response = await axios.get(proxy + `https://2ch.hk/api/mobile/v2/boards`);
    dispatch(setBoards(response.data));
  };
};
