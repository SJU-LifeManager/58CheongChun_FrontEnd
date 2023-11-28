/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  FullWidthDivBox,
  EmailSignupTotalComponent,
  Logo,
  TextLabel,
  GridBox,
  DoubleGridBox,
  NextButton,
} from "./style";
import { Link, useLocation } from "react-router-dom";
import { NoWidthHeightButton } from "../../components/Button";
import { SignUpApi } from "../../apis/UserApi";

const SecondAddition = () => {
  const [is, setIs] = useState({
    isPersonalityEI: false,
    isPersonalitySN: false,
    isPersonalityTF: false,
    isPersonalityJP: false,
    isHobby: false,
    isRelationType: false,
  });
  const { state } = useLocation();
  const [userInfo, setUserInfo] = useState({
    ...state.userInfo,
    personalityEI: "",
    personalitySN: "",
    personalityTF: "",
    personalityJP: "",
    hobby: "",
    relationType: "",
  });

  const handleChangePersonality = (e) => {
    if (e.target.value === "내성적인") {
      setUserInfo({
        ...userInfo,
        personalityEI: "INTROVERSION",
      });
      setIs({
        ...is,
        isPersonalityEI: true,
      });
    } else if (e.target.value === "외향적인") {
      setUserInfo({
        ...userInfo,
        personalityEI: "EXTROVERSION",
      });
      setIs({
        ...is,
        isPersonalityEI: true,
      });
    } else if (e.target.value === "감각적인") {
      setUserInfo({
        ...userInfo,
        personalitySN: "SENSING",
      });
      setIs({
        ...is,
        isPersonalitySN: true,
      });
    } else if (e.target.value === "직관적인") {
      setUserInfo({
        ...userInfo,
        personalitySN: "INTUITION",
      });
      setIs({
        ...is,
        isPersonalitySN: true,
      });
    } else if (e.target.value === "이성적인") {
      setUserInfo({
        ...userInfo,
        personalityTF: "THINKING",
      });
      setIs({
        ...is,
        isPersonalityTF: true,
      });
    } else if (e.target.value === "감성적인") {
      setUserInfo({
        ...userInfo,
        personalityTF: "FEELING",
      });
      setIs({
        ...is,
        isPersonalityTF: true,
      });
    } else if (e.target.value === "계획적인") {
      setUserInfo({
        ...userInfo,
        personalityJP: "JUDGING",
      });
      setIs({
        ...is,
        isPersonalityJP: true,
      });
    } else if (e.target.value === "즉흥적인") {
      setUserInfo({
        ...userInfo,
        personalityJP: "PERCEIVING",
      });
      setIs({
        ...is,
        isPersonalityJP: true,
      });
    }
  };

  const handleChangeHobby = (e) => {
    setIs({
      ...is,
      isHobby: true,
    });
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

  const handleChangeRelation = (e) => {
    setIs({
      ...is,
      isRelationType: true,
    });
    if (e.target.value === "연인") {
      setUserInfo({
        ...userInfo,
        relationType: "LOVE",
      });
    } else if (e.target.value === "술친구") {
      setUserInfo({
        ...userInfo,
        relationType: "DRINKING_MATE",
      });
    } else if (e.target.value === "맛집탐방") {
      setUserInfo({
        ...userInfo,
        relationType: "EATING_MATE",
      });
    } else if (e.target.value === "동갑") {
      setUserInfo({
        ...userInfo,
        relationType: "SAME_AGE",
      });
    } else if (e.target.value === "동네친구") {
      setUserInfo({
        ...userInfo,
        relationType: "NEIGHBORHOOD",
      });
    } else if (e.target.value === "말상대") {
      setUserInfo({
        ...userInfo,
        relationType: "TALKING_MATE",
      });
    } else if (e.target.value === "여행친구") {
      setUserInfo({
        ...userInfo,
        relationType: "TRAVEL_MATE",
      });
    } else if (e.target.value === "전시관람") {
      setUserInfo({
        ...userInfo,
        relationType: "EXHIBITION_MATE",
      });
    } else if (e.target.value === "산책") {
      setUserInfo({
        ...userInfo,
        relationType: "WALKING_MATE",
      });
    }
  };

  const SignUp = async (userInfo) => {
    if (!is.isPersonalityEI || !is.isPersonalitySN || !is.isPersonalityTF || !is.isPersonalityJP) {
      alert("성격항목을 모두 선택해주세요.");
    } else if (!is.isHobby) {
      alert("취미를 선택해주세요.");
    } else if (!is.isRelationType) {
      alert("원하는 친구 유형을 선택해주세요.");
    } else {
      try {
        await SignUpApi(userInfo).then((res) => {
          console.log(res);
        });
      } catch (err) {
        console.log(err);
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
        <TextLabel margin="32px 0px 0px 0px">반갑습니다!</TextLabel>
        <TextLabel>회원님의 정보를 알려주세요.</TextLabel>
      </div>
      <FullWidthDivBox margin="36px 0px 0px 0px">
        <TextLabel fontSize="18px" margin="0px 0px 0px 30px">
          성격(각 항목마다 1개 선택)
        </TextLabel>
        <DoubleGridBox>
          <div>
            {userInfo.personalityEI === "INTROVERSION" ? (
              <NoWidthHeightButton
                onClick={handleChangePersonality}
                margin="4px 6px"
                value="내성적인"
                backgroundColor="#FFA7A7"
                fontSize="16px"
              >
                내성적인
              </NoWidthHeightButton>
            ) : (
              <NoWidthHeightButton
                onClick={handleChangePersonality}
                margin="4px 6px"
                value="내성적인"
                backgroundColor="#949494"
                fontSize="16px"
              >
                내성적인
              </NoWidthHeightButton>
            )}
            <span>|</span>
            {userInfo.personalityEI === "EXTROVERSION" ? (
              <NoWidthHeightButton
                onClick={handleChangePersonality}
                margin="4px 6px"
                value="외향적인"
                backgroundColor="#FFA7A7"
                fontSize="16px"
              >
                외향적인
              </NoWidthHeightButton>
            ) : (
              <NoWidthHeightButton
                onClick={handleChangePersonality}
                margin="4px 6px"
                value="외향적인"
                backgroundColor="#949494"
                fontSize="16px"
              >
                외향적인
              </NoWidthHeightButton>
            )}
          </div>
          <div>
            {userInfo.personalitySN === "SENSING" ? (
              <NoWidthHeightButton
                onClick={handleChangePersonality}
                margin="4px 6px"
                value="감각적인"
                backgroundColor="#FFA7A7"
                fontSize="16px"
              >
                감각적인
              </NoWidthHeightButton>
            ) : (
              <NoWidthHeightButton
                onClick={handleChangePersonality}
                margin="4px 6px"
                value="감각적인"
                backgroundColor="#949494"
                fontSize="16px"
              >
                감각적인
              </NoWidthHeightButton>
            )}
            <span>|</span>
            {userInfo.personalitySN === "INTUITION" ? (
              <NoWidthHeightButton
                onClick={handleChangePersonality}
                margin="4px 6px"
                value="직관적인"
                backgroundColor="#FFA7A7"
                fontSize="16px"
              >
                직관적인
              </NoWidthHeightButton>
            ) : (
              <NoWidthHeightButton
                onClick={handleChangePersonality}
                margin="4px 6px"
                value="직관적인"
                backgroundColor="#949494"
                fontSize="16px"
              >
                직관적인
              </NoWidthHeightButton>
            )}
          </div>
          <div>
            {userInfo.personalityTF === "THINKING" ? (
              <NoWidthHeightButton
                onClick={handleChangePersonality}
                margin="4px 6px"
                value="이성적인"
                backgroundColor="#FFA7A7"
                fontSize="16px"
              >
                이성적인
              </NoWidthHeightButton>
            ) : (
              <NoWidthHeightButton
                onClick={handleChangePersonality}
                margin="4px 6px"
                value="이성적인"
                backgroundColor="#949494"
                fontSize="16px"
              >
                이성적인
              </NoWidthHeightButton>
            )}
            <span>|</span>
            {userInfo.personalityTF === "FEELING" ? (
              <NoWidthHeightButton
                onClick={handleChangePersonality}
                margin="4px 6px"
                value="감성적인"
                backgroundColor="#FFA7A7"
                fontSize="16px"
              >
                감성적인
              </NoWidthHeightButton>
            ) : (
              <NoWidthHeightButton
                onClick={handleChangePersonality}
                margin="4px 6px"
                value="감성적인"
                backgroundColor="#949494"
                fontSize="16px"
              >
                감성적인
              </NoWidthHeightButton>
            )}
          </div>
          <div>
            {userInfo.personalityJP === "JUDGING" ? (
              <NoWidthHeightButton
                onClick={handleChangePersonality}
                margin="4px 6px"
                value="계획적인"
                backgroundColor="#FFA7A7"
                fontSize="16px"
              >
                계획적인
              </NoWidthHeightButton>
            ) : (
              <NoWidthHeightButton
                onClick={handleChangePersonality}
                margin="4px 6px"
                value="계획적인"
                backgroundColor="#949494"
                fontSize="16px"
              >
                계획적인
              </NoWidthHeightButton>
            )}
            <span>|</span>
            {userInfo.personalityJP === "PERCEIVING" ? (
              <NoWidthHeightButton
                onClick={handleChangePersonality}
                margin="4px 6px"
                value="즉흥적인"
                backgroundColor="#FFA7A7"
                fontSize="16px"
              >
                즉흥적인
              </NoWidthHeightButton>
            ) : (
              <NoWidthHeightButton
                onClick={handleChangePersonality}
                margin="4px 6px"
                value="즉흥적인"
                backgroundColor="#949494"
                fontSize="16px"
              >
                즉흥적인
              </NoWidthHeightButton>
            )}
          </div>
        </DoubleGridBox>
      </FullWidthDivBox>
      <FullWidthDivBox>
        <TextLabel fontSize="18px" margin="0px 0px 0px 30px">
          취미(1개 선택)
        </TextLabel>
        <GridBox>
          {userInfo.hobby === "HIKE" ? (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="4px 6px"
              value="등산"
              backgroundColor="#FFA7A7"
              fontSize="16px"
            >
              등산
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="4px 6px"
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
              margin="4px 6px"
              value="수다"
              backgroundColor="#FFA7A7"
              fontSize="16px"
            >
              수다
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="4px 6px"
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
              margin="4px 6px"
              value="맛집탐방"
              backgroundColor="#FFA7A7"
              fontSize="16px"
            >
              맛집탐방
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="4px 6px"
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
              margin="4px 6px"
              value="여행"
              backgroundColor="#FFA7A7"
              fontSize="16px"
            >
              여행
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="4px 6px"
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
              margin="4px 6px"
              value="야구관람"
              backgroundColor="#FFA7A7"
              fontSize="16px"
            >
              야구 관람
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="4px 6px"
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
              margin="4px 6px"
              value="악기연주"
              backgroundColor="#FFA7A7"
              fontSize="16px"
            >
              악기 연주
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="4px 6px"
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
              margin="4px 6px"
              value="요리"
              backgroundColor="#FFA7A7"
              fontSize="16px"
            >
              요리
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="4px 6px"
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
              margin="4px 6px"
              value="드라이브"
              backgroundColor="#FFA7A7"
              fontSize="16px"
            >
              드라이브
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="4px 6px"
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
              margin="4px 6px"
              value="산책"
              backgroundColor="#FFA7A7"
              fontSize="16px"
            >
              산책
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="4px 6px"
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
              margin="4px 6px"
              value="전시관람"
              backgroundColor="#FFA7A7"
              fontSize="16px"
            >
              전시 관람
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="4px 6px"
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
              margin="4px 6px"
              value="독서"
              backgroundColor="#FFA7A7"
              fontSize="16px"
            >
              독서
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="4px 6px"
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
              margin="4px 6px"
              value="운동"
              backgroundColor="#FFA7A7"
              fontSize="16px"
            >
              운동
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="4px 6px"
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
              margin="4px 6px"
              value="미술"
              backgroundColor="#FFA7A7"
              fontSize="16px"
            >
              미술
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="4px 6px"
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
              margin="4px 6px"
              value="재테크"
              backgroundColor="#FFA7A7"
              fontSize="16px"
            >
              재테크
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="4px 6px"
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
              margin="4px 6px"
              value="사진촬영"
              backgroundColor="#FFA7A7"
              fontSize="16px"
            >
              사진 촬영
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton
              onClick={handleChangeHobby}
              margin="4px 6px"
              value="사진촬영"
              backgroundColor="#949494"
              fontSize="16px"
            >
              사진 촬영
            </NoWidthHeightButton>
          )}
        </GridBox>
      </FullWidthDivBox>
      <FullWidthDivBox margin="32px 0px 0px 0px">
        <TextLabel fontSize="18px" margin="0px 0px 0px 30px">
          원하는 친구(1개 선택)
        </TextLabel>
        <GridBox>
          {userInfo.relationType === "LOVE" ? (
            <NoWidthHeightButton
              onClick={handleChangeRelation}
              margin="4px 6px"
              value="연인"
              backgroundColor="#FFA7A7"
              fontSize="16px"
            >
              연인
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton
              onClick={handleChangeRelation}
              margin="4px 6px"
              value="연인"
              backgroundColor="#949494"
              fontSize="16px"
            >
              연인
            </NoWidthHeightButton>
          )}
          {userInfo.relationType === "DRINKING_MATE" ? (
            <NoWidthHeightButton
              onClick={handleChangeRelation}
              margin="4px 6px"
              value="술친구"
              backgroundColor="#FFA7A7"
              fontSize="16px"
            >
              술친구
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton
              onClick={handleChangeRelation}
              margin="4px 6px"
              value="술친구"
              backgroundColor="#949494"
              fontSize="16px"
            >
              술친구
            </NoWidthHeightButton>
          )}
          {userInfo.relationType === "EATING_MATE" ? (
            <NoWidthHeightButton
              onClick={handleChangeRelation}
              margin="4px 6px"
              value="맛집탐방"
              backgroundColor="#FFA7A7"
              fontSize="16px"
            >
              맛집탐방
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton
              onClick={handleChangeRelation}
              margin="4px 6px"
              value="맛집탐방"
              backgroundColor="#949494"
              fontSize="16px"
            >
              맛집탐방
            </NoWidthHeightButton>
          )}
          {userInfo.relationType === "SAME_AGE" ? (
            <NoWidthHeightButton
              onClick={handleChangeRelation}
              margin="4px 6px"
              value="동갑"
              backgroundColor="#FFA7A7"
              fontSize="16px"
            >
              동갑
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton
              onClick={handleChangeRelation}
              margin="4px 6px"
              value="동갑"
              backgroundColor="#949494"
              fontSize="16px"
            >
              동갑
            </NoWidthHeightButton>
          )}
          {userInfo.relationType === "NEIGHBORHOOD" ? (
            <NoWidthHeightButton
              onClick={handleChangeRelation}
              margin="4px 6px"
              value="동네친구"
              backgroundColor="#FFA7A7"
              fontSize="16px"
            >
              동네친구
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton
              onClick={handleChangeRelation}
              margin="4px 6px"
              value="동네친구"
              backgroundColor="#949494"
              fontSize="16px"
            >
              동네친구
            </NoWidthHeightButton>
          )}
          {userInfo.relationType === "TALKING_MATE" ? (
            <NoWidthHeightButton
              onClick={handleChangeRelation}
              margin="4px 6px"
              value="말상대"
              backgroundColor="#FFA7A7"
              fontSize="16px"
            >
              말상대
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton
              onClick={handleChangeRelation}
              margin="4px 6px"
              value="말상대"
              backgroundColor="#949494"
              fontSize="16px"
            >
              말상대
            </NoWidthHeightButton>
          )}
          {userInfo.relationType === "TRAVEL_MATE" ? (
            <NoWidthHeightButton
              onClick={handleChangeRelation}
              margin="4px 6px"
              value="여행친구"
              backgroundColor="#FFA7A7"
              fontSize="16px"
            >
              여행친구
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton
              onClick={handleChangeRelation}
              margin="4px 6px"
              value="여행친구"
              backgroundColor="#949494"
              fontSize="16px"
            >
              여행친구
            </NoWidthHeightButton>
          )}
          {userInfo.relationType === "EXHIBITION_MATE" ? (
            <NoWidthHeightButton
              onClick={handleChangeRelation}
              margin="4px 6px"
              value="전시관람"
              backgroundColor="#FFA7A7"
              fontSize="16px"
            >
              전시관람
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton
              onClick={handleChangeRelation}
              margin="4px 6px"
              value="전시관람"
              backgroundColor="#949494"
              fontSize="16px"
            >
              전시관람
            </NoWidthHeightButton>
          )}
          {userInfo.relationType === "WALKING_MATE" ? (
            <NoWidthHeightButton
              onClick={handleChangeRelation}
              margin="4px 6px"
              value="산책"
              backgroundColor="#FFA7A7"
              fontSize="16px"
            >
              산책
            </NoWidthHeightButton>
          ) : (
            <NoWidthHeightButton
              onClick={handleChangeRelation}
              margin="4px 6px"
              value="산책"
              backgroundColor="#949494"
              fontSize="16px"
            >
              산책
            </NoWidthHeightButton>
          )}
        </GridBox>
      </FullWidthDivBox>
      {!is.isPersonalityEI || !is.isPersonalitySN || !is.isPersonalityTF || !is.isPersonalityJP ? (
        <NextButton onClick={SignUp} backgroundColor="#8a8a8a" margin="46px 0px 0px 0px">
          회원가입
        </NextButton>
      ) : !is.isHobby ? (
        <NextButton onClick={SignUp} backgroundColor="#8a8a8a" margin="46px 0px 0px 0px">
          회원가입
        </NextButton>
      ) : !is.isRelationType ? (
        <NextButton onClick={SignUp} backgroundColor="#8a8a8a" margin="46px 0px 0px 0px">
          회원가입
        </NextButton>
      ) : (
        <NextButton onClick={SignUp} backgroundColor="#FFA7A7" margin="46px 0px 0px 0px">
          회원가입
        </NextButton>
      )}
    </EmailSignupTotalComponent>
  );
};

export default SecondAddition;
