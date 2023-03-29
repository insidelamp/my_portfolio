import React from "react";
import styled from "styled-components";
import myImg from "../Img/반명--.jpg";
const MainContent = () => {
  return (
    <Wrapper>
      <GreetingsSpace>
        <GreetingMyImgs src={myImg} />
        <div>
          <GreetingContent>
            안녕하세요 프론트엔드 개발자 임세영입니다
          </GreetingContent>
          <GreetingContent>
            새로운 기술을 적용하여 결과를 내는것을 좋아합니다
          </GreetingContent>
          <GreetingContent>
            만들어진 결과물이더라도 사용법에 대해 이해하려고 기록을 남겨
            잊어먹지 않도록 노력하고 있습니다
          </GreetingContent>
        </div>
      </GreetingsSpace>
      <IntroductionSpace>
        <IntroductionContents>
          <IntroductionContentDisplay>
            <div>생년월일 :</div>
            <div>91.09.30</div>
          </IntroductionContentDisplay>
          <IntroductionContentDisplay>
            <div>연락처 :</div>
            <div>010-4924-5931</div>
          </IntroductionContentDisplay>
          <IntroductionContentDisplay>
            <div>이메일 :</div>
            <div>rkdhfh@naver.com</div>
          </IntroductionContentDisplay>
        </IntroductionContents>
      </IntroductionSpace>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  border: 1px solid black;
`;

const GreetingsSpace = styled.div`
  width: 70%;
  height: 30%;
  border: 1px solid red;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px auto 0px auto;
`;

const GreetingMyImgs = styled.img`
  width: 15%;
  height: 80%;
  border-radius: 20%;
`;

const GreetingContent = styled.p`
  font-size: 20px;
  margin: 10px 0px;
`;
const IntroductionSpace = styled.div`
  width: 70%;
  height: 10%;
  border: 1px solid blue;
  margin: 30px auto 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const IntroductionContents = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid blue;
`;
const IntroductionContentDisplay = styled.div`
  border: 1px solid red;
  display: flex;
  font-size: 25px;
  font-weight: bolder;
`;

export default MainContent;

/*
이름 출생년도 이메일 연락서 주소지 학력

스킬

깃허브 , 티스토리

프로젝트

*/
