import React from "react";
import { LoginTotalComponent, Logo, LoginBox, TextDiv, TextInput, FlexBox } from "./style";
import { FillButton } from "../../components/button";

const Login = () => {
  return (
    <LoginTotalComponent>
      <Logo>
        <div className="logo">
          <p>오팔</p>
          <p>청춘</p>
        </div>
      </Logo>
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
            <TextDiv fontSize="14px" fontWeight="400" style={{ marginLeft: "78px" }}>
              회원가입
            </TextDiv>
          </FlexBox>
        </FlexBox>
      </LoginBox>
    </LoginTotalComponent>
  );
};

export default Login;
