import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBoards} from "../actions/api";
import {setBoard} from "../../reducers/boardsReducer";
import "./boards.less";

const Boards = () => {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards);

  const choseActive = (e) => {
    if (e.target.value !== undefined && boards.activeBoard !== e.target.value) {
      dispatch(setBoard(e.target.value));
    }
  };

  useEffect(() => {
    dispatch(getBoards());
  }, []);

  return (
    <nav className="list">
      {boards.items &&
        boards.items.map((board) => (
          <label className="list-item" key={board.id} onClick={(e) => choseActive(e)}>
            <input name="board" value={board.id} type="radio"/>
            {board.name}
          </label>
        ))}
    </nav>
  );
};

export default Boards;
