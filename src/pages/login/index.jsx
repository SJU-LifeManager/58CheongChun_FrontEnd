import React from "react";
import { LoginTotalComponent, Logo, LoginBox, TextDiv } from "./style";

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
        <TextDiv lineHeight="24px" margin="24px 0px 0px 24px" fontSize="18px" fontWeight="600">
          로그인
        </TextDiv>
      </LoginBox>
    </LoginTotalComponent>
  );
};

export default Login;
