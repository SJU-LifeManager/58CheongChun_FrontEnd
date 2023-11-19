import React, { useState } from "react";
import {
  LoginTotalComponent,
  Logo,
  LoginBox,
  TextDiv,
  TextInput,
  FlexBox,
  SignupToggleBar,
  ExitButton,
} from "./style";
import { FillButton } from "../../components/Button";
import kakao from "../../assets/login/Kakao.png";
import naver from "../../assets/login/Naver.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleChangeToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <LoginTotalComponent>
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <Logo>
          <div className="logo">
            <p>오팔</p>
            <p>청춘</p>
          </div>
        </Logo>
      </Link>
      <LoginBox>
        <FlexBox flexDirection="column">
          <TextDiv
            lineHeight="24px"
            margin="24px 0px 0px 24px"
            fontSize="18px"
            fontWeight="600"
            style={{ alignSelf: "flex-start" }}
          >
            로그인
          </TextDiv>
          <TextInput placeholder="아이디" marginTop="12px" />
          <TextInput placeholder="비밀번호" marginTop="8px" />
          <FillButton
            backgroundColor="#FFA7A7"
            width="304px"
            height="44px"
            borderRadius="6px"
            margin="18px 0px 0px 0px"
          >
            로그인
          </FillButton>
          <FlexBox margin="20px 0px 0px 0px">
            <TextDiv fontSize="14px" fontWeight="400">
              비밀번호 찾기
            </TextDiv>
            <TextDiv margin="0px 7px">|</TextDiv>
            <TextDiv fontSize="14px" fontWeight="400">
              아이디 찾기
            </TextDiv>
            <TextDiv
              onClick={handleChangeToggle}
              fontSize="14px"
              fontWeight="400"
              margin="0px 0px 0px 78px"
              style={{ cursor: "pointer" }}
            >
              회원가입
            </TextDiv>
          </FlexBox>
        </FlexBox>
      </LoginBox>
      <FillButton
        backgroundColor="#FEE500"
        borderRadius="6px"
        fontSize="16px"
        color="#000"
        width="328px"
        height="44px"
        margin="36px 0px 0px 0px"
      >
        <FlexBox>
          <img src={kakao} alt="kakao" style={{ marginRight: "8px" }} />
          카카오 로그인
        </FlexBox>
      </FillButton>
      <FillButton
        backgroundColor="#5AC466"
        borderRadius="6px"
        fontSize="16px"
        width="328px"
        height="44px"
        margin="16px 0px 0px 0px"
      >
        <FlexBox>
          <img src={naver} alt="naver" style={{ marginRight: "8px" }} />
          네이버 로그인
        </FlexBox>
      </FillButton>
      <SignupToggleBar isToggle={isToggle}>
        <FlexBox flexDirection="column">
          <ExitButton onClick={handleChangeToggle}>X</ExitButton>
          <Link to="/emailSignup" style={{ textDecoration: "none", color: "black" }}>
            <FillButton
              backgroundColor="#FFA7A7"
              borderRadius="6px"
              fontSize="16px"
              width="328px"
              height="44px"
              margin="32px 0px 0px 0px"
            >
              이메일로 시작하기
            </FillButton>
          </Link>
          <FillButton
            backgroundColor="#FEE500"
            borderRadius="6px"
            fontSize="16px"
            color="#000"
            width="328px"
            height="44px"
            margin="18px 0px 0px 0px"
          >
            <FlexBox>
              <img src={kakao} alt="kakao" style={{ marginRight: "8px" }} />
              카카오로 시작하기
            </FlexBox>
          </FillButton>
          <FillButton
            backgroundColor="#5AC466"
            borderRadius="6px"
            fontSize="16px"
            width="328px"
            height="44px"
            margin="18px 0px 0px 0px"
          >
            <FlexBox>
              <img src={naver} alt="naver" style={{ marginRight: "8px" }} />
              네이버로 시작하기
            </FlexBox>
          </FillButton>
        </FlexBox>
      </SignupToggleBar>
    </LoginTotalComponent>
  );
};

export default Login;