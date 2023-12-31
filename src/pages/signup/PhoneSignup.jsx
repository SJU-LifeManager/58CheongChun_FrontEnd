/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { EmailSignupTotalComponent, Logo, NextButton, TextInput, TextLabel } from "./style";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { PhoneCertifyApi } from "../../apis/UserApi";

const PhoneSignup = () => {
  const navigate = useNavigate();

  const [isPhone, setIsPhone] = useState(false);
  const [isReceiveNumber, setIsReceiveNumber] = useState(false);

  const { state } = useLocation();
  const [userInfo, setUserInfo] = useState({
    ...state.userInfo,
    phoneNumber: "",
    checkNumber: "",
  });
  const [certifyResult, setCertifyResult] = useState({});

  const { phoneNumber, checkNumber } = userInfo;

  const handleChangePhone = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
    var regExp = /^\d{3}-\d{3,4}-\d{4}$/;
    if (regExp.test(value)) {
      setIsPhone(true);
    } else {
      setIsPhone(false);
    }
  };

  const handleChangeCheckNumber = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const phoneCertify = async () => {
    if (isPhone) {
      try {
        await PhoneCertifyApi(userInfo).then((res) => {
          if (res.data.code === 200) {
            setCertifyResult(res.data.result);
            alert("인증코드가 전송되었습니다.");
          } else if (res.data.code === 500) {
            alert("인증코드 전송에 실패하였습니다.");
          }
          setIsReceiveNumber(true);
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("휴대폰 번호를 입력해주세요.");
    }
  };

  const checkCertify = () => {
    if (userInfo.checkNumber === "") {
      alert("인증코드를 입력해주세요.");
    } else {
      if (certifyResult.certifyCode === userInfo.checkNumber) {
        alert("인증되었습니다.");
        navigate("/signup/additionInfo", { state: { userInfo: userInfo } });
      } else {
        alert("인증코드가 올바르지 않습니다.");
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
      <TextLabel margin="32px 0px 0px 0px">휴대폰 인증을 해주세요.</TextLabel>
      <TextInput
        autoComplete="off"
        onChange={handleChangePhone}
        type="text"
        placeholder="휴대폰 번호 ( 010-0000-0000 형식 ) "
        margin="94px 0px 0px 0px"
        name="phoneNumber"
        value={phoneNumber}
      />
      <TextInput
        autoComplete="off"
        onChange={handleChangeCheckNumber}
        type="text"
        placeholder="인증번호"
        margin="8px 0px 0px 0px"
        name="checkNumber"
        value={checkNumber}
      />
      {!isPhone ? (
        <NextButton onClick={phoneCertify} backgroundColor="#8a8a8a" margin="203px 0px 0px 0px">
          인증번호 받기
        </NextButton>
      ) : !isReceiveNumber ? (
        <NextButton onClick={phoneCertify} backgroundColor="#FFA7A7" margin="203px 0px 0px 0px">
          인증번호 받기
        </NextButton>
      ) : userInfo.checkNumber === "" ? (
        <NextButton onClick={checkCertify} backgroundColor="#8a8a8a" margin="203px 0px 0px 0px">
          다음
        </NextButton>
      ) : (
        <NextButton onClick={checkCertify} backgroundColor="#FFA7A7" margin="203px 0px 0px 0px">
          다음
        </NextButton>
      )}
    </EmailSignupTotalComponent>
  );
};

export default PhoneSignup;
