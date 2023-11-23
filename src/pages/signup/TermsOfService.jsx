/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./style";
import {
  CheckPasswordImg,
  EmailSignupTotalComponent,
  Logo,
  NextButton,
  TextLabel,
  TosBox,
} from "./style";
import { Link, useLocation, useNavigate } from "react-router-dom";
import blankCircleImg from "../../assets/signup/Ellipse.svg";
import checkImg from "../../assets/signup/Check.svg";

const TermsOfService = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [isAllCheck, setIsAllCheck] = useState(false);
  const [isCheck1, setIsCheck1] = useState(false);
  const [isCheck2, setIsCheck2] = useState(false);
  const [isCheck3, setIsCheck3] = useState(false);
  const [isCheck4, setIsCheck4] = useState(false);

  const handleClickAll = () => {
    setIsAllCheck(true);
    setIsCheck1(true);
    setIsCheck2(true);
    setIsCheck3(true);
    setIsCheck4(true);
  };

  const handleClick1 = () => {
    setIsCheck1(true);
  };
  const handleClick2 = () => {
    setIsCheck2(true);
  };
  const handleClick3 = () => {
    setIsCheck3(true);
  };
  const handleClick4 = () => {
    setIsCheck4(!isCheck4);
  };

  const nextSignup = () => {
    if (isCheck1 && isCheck2 && isCheck3) {
      navigate("/emailSignup/phoneSignup", { state: { userInfo: state.userInfo } });
    } else {
      alert("필수 약관을 모두 체크해주세요.");
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
      <TextLabel margin="32px 0px 0px 27px" style={{ alignSelf: "flex-start" }}>
        서비스 이용약관에
      </TextLabel>
      <TextLabel margin="0px 0px 0px 27px" style={{ alignSelf: "flex-start" }}>
        동의해주세요.
      </TextLabel>
      <TosBox margin="37px 0px 0px 0px">
        {isAllCheck ? (
          <CheckPasswordImg
            cursor="pointer"
            onClick={handleClickAll}
            width="24px"
            height="24px"
            src={checkImg}
            alt="check"
          />
        ) : (
          <CheckPasswordImg
            cursor="pointer"
            onClick={handleClickAll}
            width="24px"
            height="24px"
            src={blankCircleImg}
            alt="circle"
          />
        )}
        <TextLabel fontSize="20px" margin="5px 0px 0px -22px">
          네, 모두 동의합니다.
        </TextLabel>
      </TosBox>
      <TosBox margin="30px 0px 0px 0px">
        {isCheck1 ? (
          <CheckPasswordImg
            cursor="pointer"
            onClick={handleClick1}
            width="24px"
            height="24px"
            src={checkImg}
            alt="check"
          />
        ) : (
          <CheckPasswordImg
            cursor="pointer"
            onClick={handleClick1}
            width="24px"
            height="24px"
            src={blankCircleImg}
            alt="circle"
          />
        )}
        <TextLabel fontSize="16px" margin="4px 0px 0px -22px">
          (필수) 만 14세 이상입니다.
        </TextLabel>
      </TosBox>
      <TosBox margin="20px 0px 0px 0px">
        {isCheck2 ? (
          <CheckPasswordImg
            cursor="pointer"
            onClick={handleClick2}
            width="24px"
            height="24px"
            src={checkImg}
            alt="check"
          />
        ) : (
          <CheckPasswordImg
            cursor="pointer"
            onClick={handleClick2}
            width="24px"
            height="24px"
            src={blankCircleImg}
            alt="circle"
          />
        )}
        <TextLabel fontSize="16px" fontWeight="500" margin="4px 0px 0px -22px">
          (필수) 서비스 이용약관에 동의
        </TextLabel>
      </TosBox>
      <TosBox margin="20px 0px 0px 0px">
        {isCheck3 ? (
          <CheckPasswordImg
            cursor="pointer"
            onClick={handleClick3}
            width="24px"
            height="24px"
            src={checkImg}
            alt="check"
          />
        ) : (
          <CheckPasswordImg
            cursor="pointer"
            onClick={handleClick3}
            width="24px"
            height="24px"
            src={blankCircleImg}
            alt="circle"
          />
        )}
        <TextLabel fontSize="16px" fontWeight="500" margin="5px 0px 0px -22px">
          (필수) 개인정보 수집이용에 동의
        </TextLabel>
      </TosBox>
      <TosBox margin="20px 0px 0px 0px">
        {isCheck4 ? (
          <CheckPasswordImg
            cursor="pointer"
            onClick={handleClick4}
            width="24px"
            height="24px"
            src={checkImg}
            alt="check"
          />
        ) : (
          <CheckPasswordImg
            cursor="pointer"
            onClick={handleClick4}
            width="24px"
            height="24px"
            src={blankCircleImg}
            alt="circle"
          />
        )}
        <TextLabel fontSize="16px" fontWeight="500" margin="5px 0px 0px -22px">
          (선택) 마케팅 개인정보제3자 제공 동의
        </TextLabel>
      </TosBox>
      {isCheck1 && isCheck2 && isCheck3 ? (
        <NextButton onClick={nextSignup} backgroundColor="#FFA7A7" marginTop="121px">
          다음
        </NextButton>
      ) : (
        <NextButton onClick={nextSignup} backgroundColor="#8a8a8a" marginTop="121px">
          다음
        </NextButton>
      )}
    </EmailSignupTotalComponent>
  );
};

export default TermsOfService;
