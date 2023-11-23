/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { EmailSignupTotalComponent, Logo, NextButton, TextInput, TextLabel } from "./style";
import { Link, useLocation } from "react-router-dom";
import { PhoneCertifyApi } from "../../apis/UserApi";

const PhoneSignup = () => {
  const [isPhone, setIsPhone] = useState(false);
  const [isReceiveNumber, setIsReceiveNumber] = useState(true);

  const { state } = useLocation();
  const [userInfo, setUserInfo] = useState({
    ...state.userInfo,
    phone: "",
    checkNumber: "",
  });
  const [certifyResult, setCertifyResult] = useState({
    certifyCode: "01234",
  });

  const { phone, checkNumber } = userInfo;

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

  const phoneCertify = async (userInfo) => {
    if (isPhone) {
      try {
        await PhoneCertifyApi(userInfo).then((res) => {
          if (res.data.code === 200) {
            setCertifyResult(res.data.result);
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
        alert("인증완료");
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
        onChange={handleChangePhone}
        type="text"
        placeholder="휴대폰 번호 ( 010-0000-0000 형식 ) "
        marginTop="94px"
        name="phone"
        value={phone}
      />
      <TextInput
        onChange={handleChangeCheckNumber}
        type="text"
        placeholder="인증번호"
        marginTop="8px"
        name="checkNumber"
        value={checkNumber}
      />
      {!isPhone ? (
        <NextButton onClick={phoneCertify} backgroundColor="#8a8a8a" marginTop="203px">
          인증번호 받기
        </NextButton>
      ) : !isReceiveNumber ? (
        <NextButton onClick={phoneCertify} backgroundColor="#FFA7A7" marginTop="203px">
          인증번호 받기
        </NextButton>
      ) : userInfo.checkNumber === "" ? (
        <NextButton onClick={checkCertify} backgroundColor="#8a8a8a" marginTop="203px">
          다음
        </NextButton>
      ) : (
        <NextButton onClick={checkCertify} backgroundColor="#FFA7A7" marginTop="203px">
          다음
        </NextButton>
      )}
    </EmailSignupTotalComponent>
  );
};

export default PhoneSignup;
