/* eslint-disable no-unused-vars */
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
import { Link, useNavigate } from "react-router-dom";
import { LoginApi } from "../../apis/UserApi";

const Login = () => {
  const navigate = useNavigate();
  const [isToggle, setIsToggle] = useState(false);

  const handleChangeToggle = () => {
    setIsToggle(!isToggle);
  };

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginInfo;

  const handleChangeLoginInfo = (e) => {
    const { name, value } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    try {
      await LoginApi(loginInfo).then((res) => {
        console.log(res);
        const authorizationHeader = res.headers.get("Authorization");
        // 여기에서 토큰을 저장하거나 처리
        console.log(authorizationHeader);

        if (res.data.code === 200) {
          alert("로그인에 성공하셨습니다.");
          const token = res.data.result;
          localStorage.setItem("token", token);
          navigate("/main");
        } else if (res.data.code === 404) {
          alert("존재하지 않는 회원입니다.");
        } else if (res.data.code === 400) {
          alert("잘못된 비밀번호입니다.");
        }
      });
    } catch (err) {
      console.log(err);
    }
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
          <TextInput
            onChange={handleChangeLoginInfo}
            type="text"
            placeholder="아이디"
            marginTop="12px"
            name="email"
            value={email}
          />
          <TextInput
            onChange={handleChangeLoginInfo}
            type="password"
            placeholder="비밀번호"
            marginTop="8px"
            name="password"
            value={password}
          />
          <FillButton
            backgroundColor="#FFA7A7"
            width="304px"
            height="44px"
            borderRadius="6px"
            margin="18px 0px 0px 0px"
            onClick={handleLogin}
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
          <Link to="/signup/email" style={{ textDecoration: "none", color: "black" }}>
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
