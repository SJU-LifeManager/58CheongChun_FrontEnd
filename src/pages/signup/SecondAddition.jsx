/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FullWidthDivBox, EmailSignupTotalComponent, Logo, TextLabel, GridBox } from "./style";
import { Link, useLocation } from "react-router-dom";
import { NoWidthHeightButton } from "../../components/Button";

const SecondAddition = () => {
  const { state } = useLocation();
  const [userInfo, setUserInfo] = useState({
    ...state.userInfo,
    personality: {
      EI: "",
      SN: "",
      TF: "",
      JP: "",
    },
    hobby: "",
    relationType: "",
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
      <FullWidthDivBox margin="36px 0px 0px 0px">
        <TextLabel fontSize="18px" margin="0px 0px 0px 30px">
          성격(각 항목마다 1개 선택)
        </TextLabel>
      </FullWidthDivBox>
      <FullWidthDivBox>
        <TextLabel fontSize="18px" margin="0px 0px 0px 30px">
          취미(1개 선택)
        </TextLabel>
        <GridBox>
          {userInfo.hobby === "HIKE" ? (
            <NoWidthHeightButton margin="2px 6px" backgroundColor="#FFA7A7" fontSize="16px">
              등산
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton margin="2px 6px" backgroundColor="#949494" fontSize="16px">
              등산
            </NoWidthHeightButton>
          )}
          {userInfo.hobby === "HIKE" ? (
            <NoWidthHeightButton margin="2px 6px" backgroundColor="#FFA7A7" fontSize="16px">
              수다
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton margin="2px 6px" backgroundColor="#949494" fontSize="16px">
              수다
            </NoWidthHeightButton>
          )}
          {userInfo.hobby === "HIKE" ? (
            <NoWidthHeightButton margin="2px 6px" backgroundColor="#FFA7A7" fontSize="16px">
              맛집탐방
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton margin="2px 6px" backgroundColor="#949494" fontSize="16px">
              맛집탐방
            </NoWidthHeightButton>
          )}
          {userInfo.hobby === "HIKE" ? (
            <NoWidthHeightButton margin="2px 6px" backgroundColor="#FFA7A7" fontSize="16px">
              여행
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton margin="2px 6px" backgroundColor="#949494" fontSize="16px">
              여행
            </NoWidthHeightButton>
          )}
          {userInfo.hobby === "HIKE" ? (
            <NoWidthHeightButton margin="2px 6px" backgroundColor="#FFA7A7" fontSize="16px">
              야구 관람
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton margin="2px 6px" backgroundColor="#949494" fontSize="16px">
              야구 관람
            </NoWidthHeightButton>
          )}
          {userInfo.hobby === "HIKE" ? (
            <NoWidthHeightButton margin="2px 6px" backgroundColor="#FFA7A7" fontSize="16px">
              악기 연주
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton margin="2px 6px" backgroundColor="#949494" fontSize="16px">
              악기 연주
            </NoWidthHeightButton>
          )}
          {userInfo.hobby === "HIKE" ? (
            <NoWidthHeightButton margin="2px 6px" backgroundColor="#FFA7A7" fontSize="16px">
              요리
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton margin="2px 6px" backgroundColor="#949494" fontSize="16px">
              요리
            </NoWidthHeightButton>
          )}
          {userInfo.hobby === "HIKE" ? (
            <NoWidthHeightButton margin="2px 6px" backgroundColor="#FFA7A7" fontSize="16px">
              드라이브
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton margin="2px 6px" backgroundColor="#949494" fontSize="16px">
              드라이브
            </NoWidthHeightButton>
          )}
          {userInfo.hobby === "HIKE" ? (
            <NoWidthHeightButton margin="2px 6px" backgroundColor="#FFA7A7" fontSize="16px">
              산책
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton margin="2px 6px" backgroundColor="#949494" fontSize="16px">
              산책
            </NoWidthHeightButton>
          )}
          {userInfo.hobby === "HIKE" ? (
            <NoWidthHeightButton margin="2px 6px" backgroundColor="#FFA7A7" fontSize="16px">
              전시 관람
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton margin="2px 6px" backgroundColor="#949494" fontSize="16px">
              전시 관람
            </NoWidthHeightButton>
          )}
          {userInfo.hobby === "HIKE" ? (
            <NoWidthHeightButton margin="2px 6px" backgroundColor="#FFA7A7" fontSize="16px">
              독서
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton margin="2px 6px" backgroundColor="#949494" fontSize="16px">
              독서
            </NoWidthHeightButton>
          )}
          {userInfo.hobby === "HIKE" ? (
            <NoWidthHeightButton margin="2px 6px" backgroundColor="#FFA7A7" fontSize="16px">
              운동
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton margin="2px 6px" backgroundColor="#949494" fontSize="16px">
              운동
            </NoWidthHeightButton>
          )}
          {userInfo.hobby === "HIKE" ? (
            <NoWidthHeightButton margin="2px 6px" backgroundColor="#FFA7A7" fontSize="16px">
              미술
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton margin="2px 6px" backgroundColor="#949494" fontSize="16px">
              미술
            </NoWidthHeightButton>
          )}
          {userInfo.hobby === "HIKE" ? (
            <NoWidthHeightButton margin="2px 6px" backgroundColor="#FFA7A7" fontSize="16px">
              재테크
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton margin="2px 6px" backgroundColor="#949494" fontSize="16px">
              재테크
            </NoWidthHeightButton>
          )}
          {userInfo.hobby === "HIKE" ? (
            <NoWidthHeightButton margin="2px 6px" backgroundColor="#FFA7A7" fontSize="16px">
              사진 촬영
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton margin="2px 6px" backgroundColor="#949494" fontSize="16px">
              사진 촬영
            </NoWidthHeightButton>
          )}
        </GridBox>
      </FullWidthDivBox>
      <FullWidthDivBox>
        <TextLabel fontSize="18px" margin="0px 0px 0px 30px">
          원하는 친구(1개 선택)
        </TextLabel>
      </FullWidthDivBox>
    </EmailSignupTotalComponent>
  );
};

export default SecondAddition;
