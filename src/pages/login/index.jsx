import React, { useState } from "react";
import {
  LoginTotalComponent,
  Logo,
  LoginBox,
  TextDiv,
  TextInput,
  FlexBox,
  SignupToggleBar,
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
        <FlexBox style={{ flexDirection: "column" }}>
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
            style={{ marginTop: "18px" }}
          >
            로그인
          </FillButton>
          <FlexBox style={{ marginTop: "20px" }}>
            <TextDiv fontSize="14px" fontWeight="400">
              비밀번호 찾기
            </TextDiv>
            <TextDiv style={{ margin: "0px 7px" }}>|</TextDiv>
            <TextDiv fontSize="14px" fontWeight="400">
              아이디 찾기
            </TextDiv>
            <TextDiv
              onClick={handleChangeToggle}
              fontSize="14px"
              fontWeight="400"
              style={{ marginLeft: "78px", cursor: "pointer" }}
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
        marginTop="36px"
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
        marginTop="16px"
      >
        <FlexBox>
          <img src={naver} alt="naver" style={{ marginRight: "8px" }} />
          네이버 로그인
        </FlexBox>
      </FillButton>
      <SignupToggleBar isToggle={isToggle}>
        <FlexBox style={{ flexDirection: "column" }}>
          <FillButton
            backgroundColor="#FFA7A7"
            borderRadius="6px"
            fontSize="16px"
            width="328px"
            height="44px"
            marginTop="38px"
          >
            이메일로 시작하기
          </FillButton>
          <FillButton
            backgroundColor="#FEE500"
            borderRadius="6px"
            fontSize="16px"
            color="#000"
            width="328px"
            height="44px"
            marginTop="18px"
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
            marginTop="18px"
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
