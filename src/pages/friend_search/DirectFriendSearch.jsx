/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { FriendBox, MainTotalComponent, TextAlignRightDiv, TextParagraph } from "../main/style";
import { Header } from "../../layouts/header/Header";
import { Footer } from "../../layouts/footer/Footer";
import { FillButton, NoWidthHeightButton } from "../../components/button";
import { InsideDistanceFriendsApi, TodayFriendsApi } from "../../apis/FriendApi";
import OldPerson from "../../assets/main/OldPerson.svg";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import rightArrow from "../../assets/search/RightArrow.svg";
import { FlexBox } from "../main/style";
import {
  ApplyFriendBtn,
  ArrowImg,
  MainAnswerDiv,
  MainComponent,
  MainTopicDiv,
  RowComponent,
  TextHeader,
} from "./style";

const DirectFriendSearchPage = () => {
  const navigate = useNavigate();
  const today = new Date();
  const token = localStorage.getItem("token");
  const [userInfo, setUserInfo] = useState({
    gender: "male",
    age: 50,
    maritalStatus: "MARRIED",
    hasChildren: true,
    personality: "activity",
    distance: 30,
  });

  return (
    <MainTotalComponent padding="0px 0px 130px 0px">
      <Header />
      <FlexBox margin="90px 0px 0px 0px" style={{ alignSelf: "flex-start" }}>
        <ArrowImg src={rightArrow} alt="arrow" />
        <TextHeader>친구 조건을 직접 선택해서 찾아보세요</TextHeader>
      </FlexBox>

      <FillButton
        margin="15px 0px 0px 16px"
        fontSize="18px"
        width="170px"
        height="34px"
        backgroundColor="#ffa7a7"
        style={{ alignSelf: "flex-start" }}
      >
        원하는 친구 조건
      </FillButton>

      <MainComponent>
        <RowComponent margin="16px 0px 0px 0px">
          <MainTopicDiv>성별</MainTopicDiv>
          <MainAnswerDiv name="gender" value="male">
            남자
          </MainAnswerDiv>
          <MainAnswerDiv name="gender" value="female">
            여자
          </MainAnswerDiv>
          <MainAnswerDiv name="gender" value="both">
            모두
          </MainAnswerDiv>
        </RowComponent>
        <RowComponent>
          <MainTopicDiv>거리</MainTopicDiv>
          <MainAnswerDiv name="distance" value="10">
            남자
          </MainAnswerDiv>
          <MainAnswerDiv name="distance" value="50">
            여자
          </MainAnswerDiv>
          <MainAnswerDiv name="distance" value="100">
            모두
          </MainAnswerDiv>
        </RowComponent>
        <RowComponent>
          <MainTopicDiv>나이</MainTopicDiv>
          <MainAnswerDiv name="age" value="50">
            50대
          </MainAnswerDiv>
          <MainAnswerDiv name="age" value="60" margin="0px 0px 0px 12px">
            60대
          </MainAnswerDiv>
          <MainAnswerDiv name="age" value="70" margin="0px 0px 0px 12px">
            70대이상
          </MainAnswerDiv>
        </RowComponent>
        <RowComponent>
          <MainTopicDiv>결혼여부</MainTopicDiv>
          <MainAnswerDiv name="maritalStatus" value="SINGLE">
            미혼
          </MainAnswerDiv>
          <MainAnswerDiv name="maritalStatus" value="MARRIED">
            기혼
          </MainAnswerDiv>
          <MainAnswerDiv name="maritalStatus" value="DIVORCED">
            돌싱
          </MainAnswerDiv>
        </RowComponent>
        <RowComponent>
          <MainTopicDiv>자녀여부</MainTopicDiv>
          <MainAnswerDiv name="hasChildren" value="both">
            상관없음
          </MainAnswerDiv>
          <MainAnswerDiv name="hasChildren" value="false" margin="0px 0px 0px 12px">
            없음
          </MainAnswerDiv>
          <MainAnswerDiv name="hasChildren" value="true" margin="0px 0px 0px 12px">
            있음
          </MainAnswerDiv>
        </RowComponent>
        <RowComponent>
          <MainTopicDiv>성격</MainTopicDiv>
          <MainAnswerDiv>INFP</MainAnswerDiv>
        </RowComponent>
        <RowComponent>
          <MainTopicDiv>취미</MainTopicDiv>
          <MainAnswerDiv>영화관람</MainAnswerDiv>
        </RowComponent>
        <ApplyFriendBtn style={{ alignItems: "center" }}>이 조건으로 친구 찾기</ApplyFriendBtn>
      </MainComponent>

      <Footer />
    </MainTotalComponent>
  );
};

export default DirectFriendSearchPage;
