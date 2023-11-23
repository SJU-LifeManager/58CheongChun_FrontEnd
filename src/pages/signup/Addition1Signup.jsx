import React from "react";
import { EmailSignupTotalComponent, Logo, TextLabel } from "./style";
import { Link } from "react-router-dom";

const Addition1Signup = () => {
  return (
    <EmailSignupTotalComponent>
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <Logo>
          <div className="logo">
            <p>오팔</p>
            <p>청춘</p>
          </div>
        </Logo>
      </Link>
      <div>
        <TextLabel margin="32px 0px 0px 0px">서비스 이용을 위한 정보를</TextLabel>
        <TextLabel>입력해 주세요.</TextLabel>
      </div>
    </EmailSignupTotalComponent>
  );
};

export default Addition1Signup;
