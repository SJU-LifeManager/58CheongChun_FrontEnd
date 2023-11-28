import React, { useState } from "react";
import { EmailSignupTotalComponent, Logo, TextLabel } from "./style";
import { Link, useLocation } from "react-router-dom";

const SecondAddition = () => {
  const { state } = useLocation();
  const [userInfo, setUserInfo] = useState({
    ...state.userInfo,
    personality: [],
  });

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
    </EmailSignupTotalComponent>
  );
};

export default SecondAddition;
