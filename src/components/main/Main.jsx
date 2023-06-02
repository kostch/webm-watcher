import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getThreads} from "../actions/api";
import {randomInteger} from "../../functions/randomNumber";
import {download} from "../../functions/downloadMedia";
import {setWatch} from "../../reducers/watchedReducer";
import {clearMedia} from "../../reducers/postsReducer";
import "./main.less";

const Main = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.posts);
  const md5 = useSelector((state) => state.watched.items);
  const board = useSelector((state) => state.boards.activeBoard);
  const [randomNum, setRandomNum] = useState(0);
  const [isRandomNumSet, setIsRandomNumSet] = useState(false);
  const videoPath = videos.items[randomNum]?.path || "";

  const nextVideo = () => {
    const num = randomInteger(videos.items.length);

    md5.forEach((id) => {
      if (id !== videos.items[num].md5) {
        setRandomNum(num);
        dispatch(setWatch(videos.items[randomNum].md5));
      } else {
        nextVideo();
      }
    });
  };

  useEffect(() => {
    dispatch(getThreads());
  }, []);

  useEffect(() => {
    if (board !== null) {
      dispatch(clearMedia());
      dispatch(getThreads(board));
    }
  }, [board]);

  useEffect(() => {
    if (!isRandomNumSet && videos.items.length > 0) {
      setRandomNum(randomInteger(videos.items.length));
      setIsRandomNumSet(true);
    }
  }, [videos.items, isRandomNumSet]);

  return (
    <div className="video_wrapper">
      {videoPath && (
        <>
          <div className="navigation">
            <button className="download btn" onClick={() => download("https://2ch.hk" + videoPath)}>
              download
            </button>
            <button className="next btn" onClick={nextVideo}>
              Next
            </button>
          </div>
          <video
            key={videos.items[randomNum].md5}
            width="700"
            height="450"
            controls="controls"
            poster={"https://2ch.hk" + videos.items[randomNum].thumbnail}>
            <source src={"https://2ch.hk" + videoPath}/>
          </video>
        </>
      )}
    </div>
  );
};

export default Main;
