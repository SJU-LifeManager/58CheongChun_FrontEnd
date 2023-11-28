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

  const handleChangeHobby = (e) => {
    if (e.target.value === "등산") {
      setUserInfo({
        ...userInfo,
        hobby: "HIKE",
      });
    } else if (e.target.value === "수다") {
      setUserInfo({
        ...userInfo,
        hobby: "TALK",
      });
    } else if (e.target.value === "맛집탐방") {
      setUserInfo({
        ...userInfo,
        hobby: "EAT",
      });
    } else if (e.target.value === "여행") {
      setUserInfo({
        ...userInfo,
        hobby: "TRAVEL",
      });
    } else if (e.target.value === "야구관람") {
      setUserInfo({
        ...userInfo,
        hobby: "WATCH_BASEBALL",
      });
    } else if (e.target.value === "악기연주") {
      setUserInfo({
        ...userInfo,
        hobby: "MUSICAL_INSTRUMENT",
      });
    } else if (e.target.value === "요리") {
      setUserInfo({
        ...userInfo,
        hobby: "COOK",
      });
    } else if (e.target.value === "드라이브") {
      setUserInfo({
        ...userInfo,
        hobby: "DRIVE",
      });
    } else if (e.target.value === "산책") {
      setUserInfo({
        ...userInfo,
        hobby: "WALK",
      });
    } else if (e.target.value === "전시관람") {
      setUserInfo({
        ...userInfo,
        hobby: "EXHIBITION",
      });
    } else if (e.target.value === "독서") {
      setUserInfo({
        ...userInfo,
        hobby: "BOOK",
      });
    } else if (e.target.value === "운동") {
      setUserInfo({
        ...userInfo,
        hobby: "WORK_OUT",
      });
    } else if (e.target.value === "미술") {
      setUserInfo({
        ...userInfo,
        hobby: "FINE_ART",
      });
    } else if (e.target.value === "재테크") {
      setUserInfo({
        ...userInfo,
        hobby: "INVESTMENT",
      });
    } else if (e.target.value === "사진촬영") {
      setUserInfo({
        ...userInfo,
        hobby: "PHOTOGRAPY",
      });
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
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="2px 6px"
              value="등산"
              backgroundColor="#FFA7A7"
              fontSize="16px"
            >
              등산
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="2px 6px"
              value="등산"
              backgroundColor="#949494"
              fontSize="16px"
            >
              등산
            </NoWidthHeightButton>
          )}
          {userInfo.hobby === "TALK" ? (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="2px 6px"
              value="수다"
              backgroundColor="#FFA7A7"
              fontSize="16px"
            >
              수다
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="2px 6px"
              value="수다"
              backgroundColor="#949494"
              fontSize="16px"
            >
              수다
            </NoWidthHeightButton>
          )}
          {userInfo.hobby === "EAT" ? (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="2px 6px"
              value="맛집탐방"
              backgroundColor="#FFA7A7"
              fontSize="16px"
            >
              맛집탐방
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="2px 6px"
              value="맛집탐방"
              backgroundColor="#949494"
              fontSize="16px"
            >
              맛집탐방
            </NoWidthHeightButton>
          )}
          {userInfo.hobby === "TRAVEL" ? (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="2px 6px"
              value="여행"
              backgroundColor="#FFA7A7"
              fontSize="16px"
            >
              여행
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="2px 6px"
              value="여행"
              backgroundColor="#949494"
              fontSize="16px"
            >
              여행
            </NoWidthHeightButton>
          )}
          {userInfo.hobby === "WATCH_BASEBALL" ? (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="2px 6px"
              value="야구관람"
              backgroundColor="#FFA7A7"
              fontSize="16px"
            >
              야구 관람
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="2px 6px"
              value="야구관람"
              backgroundColor="#949494"
              fontSize="16px"
            >
              야구 관람
            </NoWidthHeightButton>
          )}
          {userInfo.hobby === "MUSICAL_INSTRUMENT" ? (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="2px 6px"
              value="악기연주"
              backgroundColor="#FFA7A7"
              fontSize="16px"
            >
              악기 연주
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="2px 6px"
              value="악기연주"
              backgroundColor="#949494"
              fontSize="16px"
            >
              악기 연주
            </NoWidthHeightButton>
          )}
          {userInfo.hobby === "COOK" ? (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="2px 6px"
              value="요리"
              backgroundColor="#FFA7A7"
              fontSize="16px"
            >
              요리
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="2px 6px"
              value="요리"
              backgroundColor="#949494"
              fontSize="16px"
            >
              요리
            </NoWidthHeightButton>
          )}
          {userInfo.hobby === "DRIVE" ? (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="2px 6px"
              value="드라이브"
              backgroundColor="#FFA7A7"
              fontSize="16px"
            >
              드라이브
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="2px 6px"
              value="드라이브"
              backgroundColor="#949494"
              fontSize="16px"
            >
              드라이브
            </NoWidthHeightButton>
          )}
          {userInfo.hobby === "WALK" ? (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="2px 6px"
              value="산책"
              backgroundColor="#FFA7A7"
              fontSize="16px"
            >
              산책
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="2px 6px"
              value="산책"
              backgroundColor="#949494"
              fontSize="16px"
            >
              산책
            </NoWidthHeightButton>
          )}
          {userInfo.hobby === "EXHIBITION" ? (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="2px 6px"
              value="전시관람"
              backgroundColor="#FFA7A7"
              fontSize="16px"
            >
              전시 관람
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="2px 6px"
              value="전시관람"
              backgroundColor="#949494"
              fontSize="16px"
            >
              전시 관람
            </NoWidthHeightButton>
          )}
          {userInfo.hobby === "BOOK" ? (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="2px 6px"
              value="독서"
              backgroundColor="#FFA7A7"
              fontSize="16px"
            >
              독서
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="2px 6px"
              value="독서"
              backgroundColor="#949494"
              fontSize="16px"
            >
              독서
            </NoWidthHeightButton>
          )}
          {userInfo.hobby === "WORK_OUT" ? (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="2px 6px"
              value="운동"
              backgroundColor="#FFA7A7"
              fontSize="16px"
            >
              운동
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="2px 6px"
              value="운동"
              backgroundColor="#949494"
              fontSize="16px"
            >
              운동
            </NoWidthHeightButton>
          )}
          {userInfo.hobby === "FINE_ART" ? (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="2px 6px"
              value="미술"
              backgroundColor="#FFA7A7"
              fontSize="16px"
            >
              미술
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="2px 6px"
              value="미술"
              backgroundColor="#949494"
              fontSize="16px"
            >
              미술
            </NoWidthHeightButton>
          )}
          {userInfo.hobby === "INVESTMENT" ? (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="2px 6px"
              value="재테크"
              backgroundColor="#FFA7A7"
              fontSize="16px"
            >
              재테크
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="2px 6px"
              value="재테크"
              backgroundColor="#949494"
              fontSize="16px"
            >
              재테크
            </NoWidthHeightButton>
          )}
          {userInfo.hobby === "PHOTOGRAPY" ? (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="2px 6px"
              value="사진촬영"
              backgroundColor="#FFA7A7"
              fontSize="16px"
            >
              사진 촬영
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="2px 6px"
              value="사진촬영"
              backgroundColor="#949494"
              fontSize="16px"
            >
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
