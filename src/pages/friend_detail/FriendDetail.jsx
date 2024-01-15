/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Header } from "../../layouts/header/Header";
import { Footer } from "../../layouts/footer/Footer";
import { MainTotalComponent } from "../main/style";
import { useLocation } from "react-router-dom";
import OldPerson from "../../assets/main/OldPerson.svg";
import BlankImg from "../../assets/detail/blankHeart.svg";
import FillImg from "../../assets/detail/fillHeart.svg";
import XButtonImg from "../../assets/signup/Xbutton.svg";
import { ApplyFriendApi, FriendLikeApi, FriendsDetailApi } from "../../apis/FriendApi";
import {
  AnswerBackgroundTextDiv,
  BackgroundTextDiv,
  FriendInfoComponent,
  HeartImg,
  ImgContainContainer,
  InfoBox,
  InsideModalBtn,
  ModalComponent,
  ModalTextDiv,
  RequestFriendBtn,
  RowDivComponent,
  TextDiv,
  UserImg,
  XImg,
} from "./style";

const DetailPage = () => {
  const { state } = useLocation();
  const token = localStorage.getItem("token");
  const today = new Date();

  const [userInfo, setUserInfo] = useState({
    nickname: state.nickname,
    birth: state.birth,
  });
  const [islike, setIslike] = useState(false);
  const [isOpenLikeModal, setIsOpenLikeModal] = useState(false);
  const [isOpenFriendModal, setIsOpenFriendModal] = useState(false);
  const [isOpenResultFriendModal, setIsOpenResultFriendModal] = useState(false);
  const [resultFriendMessage, setResultFriendMessage] = useState("");

  const getFriendDetail = async () => {
    try {
      // await FriendsDetailApi(userInfo.nickname, token).then((res) => {
      //   console.log(res.data);
      //   if (res.data.code === 404) {
      //     alert(res.data.message);
      //   } else if (res.data.code === 200) {
      //     setUserInfo(...userInfo,res.data.result);
      //   }
      // });
      setUserInfo({
        ...userInfo,
        img: OldPerson,
        id: 11,
        nickname: "동찬",
        job: "학생",
        islike: true,
        maritalStatus: "MARRIED",
        hasChildren: false,
        personality: "ACTIVITY",
        hobby: "baseball",
        relationType: "TRAVEL_MATE",
        introduction: "안녕하세요. 반가워요.",
        latitude: 123.20123,
        longitude: 123.123123,
      });
      setIslike(userInfo.islike);
    } catch (err) {
      console.log(err);
    }
  };

  const likeButton = async () => {
    try {
      await FriendLikeApi(userInfo.id, token).then((res) => {
        console.log(res);
        if (res.data.code === 200) {
          setIslike(!islike);
          setIsOpenLikeModal(true);
          setUserInfo({
            ...userInfo,
            islike: !islike,
          });
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const openApplyFriendModal = () => {
    setIsOpenFriendModal(true);
  };

  const applyFriend = async () => {
    try {
      await ApplyFriendApi(userInfo.id, token).then((res) => {
        console.log(res);
        setIsOpenFriendModal(false);
        setIsOpenResultFriendModal(true);

        if (res.data.code === 200) {
          setResultFriendMessage("상대방이 요청을 받으면 친구목록에 추가돼요");
        } else if (res.data.code === 409) {
          setResultFriendMessage("이미 친구 요청을 보냈습니다.");
        }
      });
    } catch (err) {
      console.log(err);
      setIsOpenFriendModal(false);
    }
  };

  useEffect(() => {
    getFriendDetail();
  }, [islike]);

  return (
    <MainTotalComponent padding="0px 0px 40px 0px">
      <Header />
      {isOpenLikeModal ? (
        <ModalComponent>
          <XImg onClick={() => setIsOpenLikeModal(false)} src={XButtonImg} alt="X" />
          <ModalTextDiv margin="32px 0px 0px 0px">친구요청을 완료했습니다.</ModalTextDiv>
          <ModalTextDiv margin="12px 0px 0px 0px" fontSize="16px">
            {resultFriendMessage}
          </ModalTextDiv>
        </ModalComponent>
      ) : (
        <></>
      )}
      {isOpenFriendModal ? (
        <ModalComponent height="164px">
          <XImg onClick={() => setIsOpenFriendModal(false)} src={XButtonImg} alt="X" />
          <ModalTextDiv margin="32px 0px 0px 0px">친구요청을 할까요?</ModalTextDiv>
          <ModalTextDiv margin="16px 0px 0px 0px" fontSize="16px">
            다이아 2개가 소모됩니다.
          </ModalTextDiv>
          <div>
            <InsideModalBtn onClick={applyFriend}>네</InsideModalBtn>
            <InsideModalBtn onClick={() => setIsOpenFriendModal(false)}>아니오</InsideModalBtn>
          </div>
        </ModalComponent>
      ) : (
        <></>
      )}
      {isOpenResultFriendModal ? (
        <ModalComponent>
          <XImg onClick={() => setIsOpenResultFriendModal(false)} src={XButtonImg} alt="X" />
          <ModalTextDiv margin="32px 0px 0px 0px">친구요청을 완료했습니다.</ModalTextDiv>
          <ModalTextDiv margin="12px 0px 0px 0px" fontSize="16px">
            {resultFriendMessage}
          </ModalTextDiv>
        </ModalComponent>
      ) : (
        <></>
      )}

      <FriendInfoComponent>
        <ImgContainContainer>
          <UserImg src={userInfo.img} alt="profile" />
          {islike ? (
            <HeartImg onClick={likeButton} src={FillImg} alt="heart" />
          ) : (
            <HeartImg onClick={likeButton} src={BlankImg} alt="heart" />
          )}
        </ImgContainContainer>

        <InfoBox backgroundColor=" #FFEFF5" margin="14px 0px 0px 0px">
          <RowDivComponent margin="16px 0px 0px 0px">
            <TextDiv margin="0px 0px 0px 16px">{userInfo.nickname}</TextDiv>
            <TextDiv margin="0px 0px 0px 8px">
              {today.getFullYear() - parseInt(userInfo.birth.substring(0, 4)) + 1}세
            </TextDiv>
          </RowDivComponent>
          <RowDivComponent margin="14px 0px 0px 16px">
            <TextDiv fontSize="16px" fontWeight="500" lineHeight="14px">
              {userInfo.introduction}
            </TextDiv>
          </RowDivComponent>
        </InfoBox>
        <InfoBox height="110px" margin="8px 0px 0px 0px">
          <RowDivComponent margin="16px 0px 0px 16px">
            <BackgroundTextDiv>직업</BackgroundTextDiv>
            <TextDiv margin="0px 0px 0px 44px" fontSize="16px" lineHeight="14px">
              {userInfo.job}
            </TextDiv>
          </RowDivComponent>
          <RowDivComponent margin="12px 0px 0px 16px">
            <BackgroundTextDiv>결혼 여부</BackgroundTextDiv>
            <TextDiv margin="0px 0px 0px 12px" fontSize="16px" lineHeight="14px">
              {userInfo.maritalStatus === "MARRIED"
                ? "기혼"
                : userInfo.maritalStatus === "SINGLE"
                ? "기혼"
                : "이혼"}
            </TextDiv>
          </RowDivComponent>
          <RowDivComponent margin="8px 0px 0px 16px">
            <BackgroundTextDiv>자녀 여부</BackgroundTextDiv>
            <TextDiv margin="0px 0px 0px 12px" fontSize="16px" lineHeight="14px">
              {userInfo.hasChildren === true ? "있음" : "없음"}
            </TextDiv>
          </RowDivComponent>
        </InfoBox>
        <InfoBox height="215px" margin="12px 0px 0px 0px">
          <RowDivComponent margin="12px 0px 0px 16px">
            <BackgroundTextDiv>내 성격</BackgroundTextDiv>
          </RowDivComponent>
          <RowDivComponent margin="12px 0px 0px 16px">
            <AnswerBackgroundTextDiv>{userInfo.personality}</AnswerBackgroundTextDiv>
          </RowDivComponent>
          <RowDivComponent margin="12px 0px 0px 16px">
            <BackgroundTextDiv>내 취미</BackgroundTextDiv>
          </RowDivComponent>
          <RowDivComponent margin="12px 0px 0px 16px">
            <AnswerBackgroundTextDiv>
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
            </AnswerBackgroundTextDiv>
          </RowDivComponent>
          <RowDivComponent margin="12px 0px 0px 16px">
            <BackgroundTextDiv>이런 친구가 좋아요</BackgroundTextDiv>
          </RowDivComponent>
          <RowDivComponent margin="12px 0px 0px 16px">
            <AnswerBackgroundTextDiv>
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
            </AnswerBackgroundTextDiv>
          </RowDivComponent>
        </InfoBox>
        <RequestFriendBtn onClick={openApplyFriendModal}>친구요청</RequestFriendBtn>
      </FriendInfoComponent>

      <Footer />
    </MainTotalComponent>
  );
};

export default DetailPage;
