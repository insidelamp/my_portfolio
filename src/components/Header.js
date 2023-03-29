import React from "react";
import styled from "styled-components";

function Header() {
  return <MyHeader>임세영의 포트폴리오</MyHeader>;
}

const MyHeader = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: bold;
  color: gray;
  border: 10px solid rgb(203, 226, 253);
`;

export default Header;
