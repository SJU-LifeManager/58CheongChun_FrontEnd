import React from "react";
import { EmailSignupTotalComponent, IsSizeTextLabel, Logo, TextLabel } from "./style";
import { Link } from "react-router-dom";

const FirstAdditionSignup = () => {
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
        <TextLabel margin="32px 0px 0px 0px">반갑습니다!</TextLabel>
        <TextLabel>회원님의 정보를 알려주세요.</TextLabel>
      </div>
      <div>
        <IsSizeTextLabel>성별(필수)</IsSizeTextLabel>
      </div>
    </EmailSignupTotalComponent>
  );
};

export default FirstAdditionSignup;
