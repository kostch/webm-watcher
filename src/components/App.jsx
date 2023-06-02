import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./main/Main";
import Boards from "./boards/Boards";
import "./app.less";

const App = () => {
  return (
    <div className="container">
      <Boards/>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
