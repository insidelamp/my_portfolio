//모듈 불러오기
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

// 공용 파일
import Header from "./components/Header";

// 페이지 파일

import MainContent from "./pages/MainContent";
import Slack from "./pages/Slack";
import Stackover from "./pages/Stackover";
import dailydaily from "./pages/dailydaily";
import TypeTodo from "./pages/TypeTodo";

function App() {
  return (
    <BrowserRouter>
      <MainCss>
        <Header />
        <MainContents>
          <Routes>
            <Route path="/" exact element={<MainContent />}></Route>
          </Routes>
        </MainContents>
      </MainCss>
    </BrowserRouter>
  );
}

const MainCss = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const MainContents = styled.div`
  display: flex;
  flex-direction: row;
`;

export default App;
