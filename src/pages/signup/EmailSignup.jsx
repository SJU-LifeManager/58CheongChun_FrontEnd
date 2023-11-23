/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  CheckPasswordImg,
  EmailSignupTotalComponent,
  Logo,
  NextButton,
  TextInput,
  TextLabel,
  XButton,
} from "./style";
import CheckButton from "../../assets/signup/Check.svg";
import Xbutton from "../../assets/signup/Xbutton.svg";

const EmailSignup = () => {
  const navigate = useNavigate();

  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isSamePassword, setIsSamePassword] = useState(false);

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    checkPassword: "",
  });
  const { email, password, checkPassword } = userInfo;

  const handleChangeEmail = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
    const regx =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (regx.test(value)) {
      setIsEmail(true);
    } else {
      setIsEmail(false);
    }
  };

  const handleChangePassword = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
    if (value !== "") {
      setIsPassword(true);
    } else {
      setIsPassword(false);
    }
  };

  const handleChangeCheckPassword = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
    if (userInfo.password === value) {
      setIsSamePassword(true);
    } else {
      setIsSamePassword(false);
    }
  };

  const nextSignup = () => {
    if (!isEmail) {
      alert("올바른 이메일 형식을 입력해주세요.");
    } else {
      if (isPassword && isSamePassword) {
        navigate("/signup/Tos", { state: { userInfo: userInfo } });
      } else {
        alert("비밀번호가 동일하지 않습니다.다시 입력해주세요.");
      }
    }
  };

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
      <TextInput
        onChange={handleChangeEmail}
        type="text"
        placeholder="이메일"
        marginTop="61px"
        name="email"
        value={email}
      />
      <TextInput
        onChange={handleChangePassword}
        type="password"
        placeholder="비밀번호"
        marginTop="8px"
        name="password"
        value={password}
        autoComplete="off"
      />
      <TextInput
        onChange={handleChangeCheckPassword}
        type="password"
        placeholder="비밀번호 확인"
        marginTop="8px"
        name="checkPassword"
        value={checkPassword}
        autoComplete="off"
      />
      {isSamePassword ? (
        <CheckPasswordImg src={CheckButton} alt="check" />
      ) : (
        <CheckPasswordImg src={Xbutton} alt="X" />
      )}
      {isEmail && isPassword && isSamePassword ? (
        <NextButton onClick={nextSignup} backgroundColor="#FFA7A7" marginTop="151px">
          다음
        </NextButton>
      ) : (
        <NextButton onClick={nextSignup} backgroundColor="#8a8a8a" marginTop="151px">
          다음
        </NextButton>
      )}
    </EmailSignupTotalComponent>
  );
};

export default EmailSignup;
