import React from "react";
import { LoginTotalComponent, Logo, LoginBox, TextDiv, TextInput, FlexBox } from "./style";

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
          <TextInput placeholder="아이디" marginTop="16px" />
          <TextInput placeholder="비밀번호" marginTop="8px" />
        </FlexBox>{" "}
      </LoginBox>
    </LoginTotalComponent>
  );
};

export default Login;
