/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Header } from "../../layouts/header/Header";
import { Footer } from "../../layouts/footer/Footer";
import { FriendBox, MainTotalComponent, TextAlignRightDiv, TextParagraph } from "../main/style";
import OldPerson from "../../assets/main/OldPerson.svg";
import Favorite from "../../assets/search/Favorite.svg";
import Star from "../../assets/search/Star.svg";
import Pin from "../../assets/search/Pin.svg";
import {
  BackgroundText,
  FriendInfoComponent,
  InnerLinkFriendImg,
  InnerLinkFriendText,
  LinkFriendListComponent,
  LinkFriendListDiv,
  RowDivComponent,
  TotalComponent,
} from "./style";
import { GetUserInfoApi } from "../../apis/UserApi";
import { NoWidthHeightButton } from "../../components/Button";

const FriendSearchPage = () => {
  const token = localStorage.getItem("token");
  const today = new Date();
  const [userInfo, setUserInfo] = useState({
    birth: "",
    blockMemberNumber: 0,
    hasChildren: false,
    hobby: "",
    imageUrl: "",
    introduction: "",
    job: "",
    latitude: 0,
    longitude: 0,
    maritalStatus: "",
    nickname: "",
    personality: "",
  });
  const getUserInfo = async () => {
    try {
      setUserInfo({
        birth: "1998-11-09",
        blockMemberNumber: 0,
        hasChildren: false,
        hobby: "TRAVEL",
        imageUrl: "/static/media/OldPerson.51dd7a6e30904895ab34b4bbfd7658bf.svg",
        introduction: "안녕하세요",
        job: "학생",
        latitude: 37.5503134324548,
        longitude: 127.073136656184,
        maritalStatus: "SINGLE",
        nickname: "하잉",
        personality: "ISFP",
      });
      // await GetUserInfoApi(token).then((res) => {
      //   console.log(res.data.result);
      //   setUserInfo(res.data.result);
      // });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <MainTotalComponent padding="0px 0px 40px 0px">
      <Header />
      <FriendInfoComponent>
        <FriendBox backgroundImg={userInfo.imageUrl} margin="16px 0px 0px 0px">
          <TextParagraph margin="280px 0px 0px 26px" fontWeight="700">
            {userInfo.nickname},{today.getFullYear() - parseInt(userInfo.birth.substring(0, 4)) + 1}
            세
          </TextParagraph>
          <TextAlignRightDiv>
            <NoWidthHeightButton
              backgroundColor="rgb(255, 167, 167)"
              margin="10px 3px 0px"
              padding="4px 6px"
              fontSize="16px"
            >
              {userInfo.personality}
            </NoWidthHeightButton>
            <NoWidthHeightButton
              backgroundColor="#ffa7a7"
              margin="10px 3px 0px"
              padding="4px 6px"
              fontSize="16px"
            >
              {userInfo.hobby === "HIKE"
                ? "등산"
                : userInfo.hobby === "TALK"
                ? "수다"
                : userInfo.hobby === "EAT"
                ? "맛집 탐방"
                : userInfo.hobby === "TRAVEL"
                ? "여행"
                : userInfo.hobby === "WATCH_BASEBALL"
                ? "야구 관람"
                : userInfo.hobby === "MUSICAL_INSTRUMENT"
                ? "악기 연주"
                : userInfo.hobby === "COOK"
                ? "요리"
                : userInfo.hobby === "DRIVE"
                ? "드라이브"
                : userInfo.hobby === "WALK"
                ? "산책"
                : userInfo.hobby === "EXHIBITION"
                ? "전시 관람"
                : userInfo.hobby === "BOOK"
                ? "독서"
                : userInfo.hobby === "WORK_OUT"
                ? "운동"
                : userInfo.hobby === "FINE_ART"
                ? "미술"
                : userInfo.hobby === "INVESTMENT"
                ? "재테크"
                : "사진 촬영"}
            </NoWidthHeightButton>
            <NoWidthHeightButton
              backgroundColor="#ffa7a7"
              margin="10px 3px 0px"
              padding="4px 6px"
              fontSize="16px"
            >
              {userInfo.relationType === "LOVE"
                ? "연인"
                : userInfo.relationType === "DRINKING_MATE"
                ? "술친구"
                : userInfo.relationType === "EATING_MATE"
                ? "맛집탐방"
                : userInfo.relationType === "SAME_AGE"
                ? "동갑"
                : userInfo.relationType === "NEIGHBORHOOD"
                ? "동네친구"
                : userInfo.relationType === "TALKING_MATE"
                ? "말 상대"
                : userInfo.relationType === "TRAVEL_MATE"
                ? "여행친구"
                : userInfo.relationType === "EXHIBITION_MATE"
                ? "전시관람"
                : "산책"}
            </NoWidthHeightButton>
          </TextAlignRightDiv>
        </FriendBox>
        <BackgroundText
          margin="16px 0px 0px 5%"
          width="190px"
          height="34px"
          backgroundColor="#72D9FA"
          style={{ alignSelf: "flex-start" }}
        >
          나에게 꼭 맞는 친구 찾기
        </BackgroundText>
        <LinkFriendListComponent>
          <InnerLinkFriendImg src={Favorite} alt="heart" />
          <InnerLinkFriendText>내가 호감 표시한 친구</InnerLinkFriendText>
        </LinkFriendListComponent>
        <LinkFriendListComponent margin="12px 0px 0px 0px">
          <InnerLinkFriendImg src={Star} alt="star" />

          <InnerLinkFriendText>내 취향 반영 친구</InnerLinkFriendText>
        </LinkFriendListComponent>
        <LinkFriendListComponent margin="12px 0px 0px 0px">
          <InnerLinkFriendImg src={Pin} alt="pin" />
          <InnerLinkFriendText>우리 동네 친구</InnerLinkFriendText>
        </LinkFriendListComponent>
        <BackgroundText margin="16px 0px 0px 0px">직접 찾기</BackgroundText>
      </FriendInfoComponent>
      <Footer />
    </MainTotalComponent>
  );
};

export default FriendSearchPage;
