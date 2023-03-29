import React from "react";
import styled from "styled-components";
import myImg from "../Img/반명--.jpg";

// skils - frontend
import webImg from "../Img/web.png";
import reactImg from "../Img/react.png";
import typescriptImg from "../Img/typescript.png";
import reduxImg from "../Img/redux.png";
import styledConponentImg from "../Img/styledcomponent.jpeg";
import reactQueryImg from "../Img/react-query.jpeg";

// skils - Version Control
import gitImg from "../Img/git.png";
import githubImg from "../Img/github.png";

// skils - Deployment
import amazonImg from "../Img/amazon.png";
import firebaseImg from "../Img/firebase.png";
import vercelImg from "../Img/vercel.png";

// skils - Communication
import figmaImg from "../Img/figma.png";

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
            결과물의 사용법과 작동원리에 대한 기록을 남겨 잊어먹지 않도록
            노력하고 있습니다
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
      <SkilsSpace>
        <SkilsContentsTitle>Frontend</SkilsContentsTitle>
        <SkilsContents>
          <SkilsImg className="front" src={webImg} />
          <SkilsImg className="front" src={reactImg} />
          <SkilsImg className="front" src={typescriptImg} />
          <SkilsImg className="front" src={reduxImg} />
          <SkilsImg className="front" src={styledConponentImg} />
          <SkilsImg className="front" src={reactQueryImg} />
        </SkilsContents>
        <SkilsContentsTitle>Version Control</SkilsContentsTitle>

        <SkilsContents>
          <SkilsImg src={gitImg} />
          <SkilsImg src={githubImg} />
        </SkilsContents>
        <SkilsContentsTitle>Deployment</SkilsContentsTitle>

        <SkilsContents>
          <SkilsImg src={amazonImg} />
          <SkilsImg src={firebaseImg} />
          <SkilsImg src={vercelImg} />
        </SkilsContents>
        <SkilsContentsTitle>Communication</SkilsContentsTitle>

        <SkilsContents>
          <SkilsImg src={figmaImg} />
        </SkilsContents>
      </SkilsSpace>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  border: 1px solid black;
  overflow-y: scroll;
  background-color: black;
`;

const GreetingsSpace = styled.div`
  width: 70%;
  height: 30%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px auto 0px auto;
  background-color: white;
  border-radius: 50px;
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
  margin: 30px auto 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;
`;
const IntroductionContents = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const IntroductionContentDisplay = styled.div`
  display: flex;
  font-size: 25px;
  font-weight: bolder;
`;

const SkilsSpace = styled.div`
  width: 70%;
  height: 90%;
  margin: 30px auto 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SkilsContents = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 30px;
  margin: 10px 0px;
`;
const SkilsContentsTitle = styled.div`
  font-size: 30px;
  font-weight: bolder;
  margin: 30px 0px;
  color: white;
`;
const SkilsImg = styled.img`
  background-color: transparent;
  width: 13%;
  height: 60%;
  margin: 0px 10px;
  &.front {
    width: 15%;
    height: 40%;
  }
`;

export default MainContent;

/*

깃허브 , 티스토리

프로젝트

*/
