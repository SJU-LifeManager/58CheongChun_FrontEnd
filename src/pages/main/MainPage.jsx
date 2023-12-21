import React, { useEffect, useState } from "react";
import { FriendBox, MainTotalComponent, TextAlignRightDiv, TextParagraph } from "./style";
import { Header } from "../../layouts/header/Header";
import { Footer } from "../../layouts/footer/Footer";
import { FillButton, NoWidthHeightButton } from "../../components/Button";
// import { TodayFriendsApi } from "../../apis/FriendApi";
import OldPerson from "../../assets/main/OldPerson.svg";

const MainPage = () => {
  const [todayFriendsList, setTodayFriendsList] = useState(null);
  const today = new Date();
  const getTodayFriends = async () => {
    // try {
    //   await TodayFriendsApi().then((res) => {
    //     console.log(res);
    //     setTodayFriendsList(res.data);
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
    setTodayFriendsList([
      {
        nickname: "화양동9",
        birth: "1996-08-11",
        latitude: 22.0,
        longitude: 22.0,
        personality: "INFP",
        hobby: "HIKE",
        relationType: "EXHIBITION_MATE",
      },
      {
        nickname: "군자동청춘",
        birth: "1999-09-11",
        latitude: 22.0,
        longitude: 22.0,
        personality: "ESFP",
        hobby: "TALK",
        relationType: "DRINKING_MATE",
      },
      {
        nickname: "안녕!",
        birth: "1999-05-11",
        latitude: 22.0,
        longitude: 22.0,
        personality: "ENTP",
        hobby: "MUSICAL_INSTRUMENT",
        relationType: "LOVE",
      },
    ]);
  };

  useEffect(() => {
    getTodayFriends();
  }, []);

  return (
    <MainTotalComponent padding="0px 0px 130px 0px">
      <Header />
      <FillButton
        margin="86px 0px 0px 16px"
        fontSize="18px"
        width="134px"
        height="34px"
        backgroundColor="#ffa7a7"
        style={{ alignSelf: "flex-start" }}
      >
        오늘의 친구 추천
      </FillButton>
      {todayFriendsList !== null ? (
        todayFriendsList.map((item) => {
          return (
            <FriendBox key={item.nickname} backgroundImg={OldPerson} margin="16px 0px 0px 0px">
              <TextParagraph margin="280px 0px 0px 16px" fontWeight="700">
                {item.nickname}, {today.getFullYear() - parseInt(item.birth.substring(0, 4)) + 1}세
              </TextParagraph>
              <TextAlignRightDiv>
                <NoWidthHeightButton
                  backgroundColor="rgb(255, 167, 167)"
                  margin="10px 3px 0px"
                  padding="4px 6px"
                  fontSize="16px"
                >
                  {item.personality}
                </NoWidthHeightButton>
                <NoWidthHeightButton
                  backgroundColor="#ffa7a7"
                  margin="10px 3px 0px"
                  padding="4px 6px"
                  fontSize="16px"
                >
                  {item.hobby === "HIKE"
                    ? "등산"
                    : item.hobby === "TALK"
                    ? "수다"
                    : item.hobby === "EAT"
                    ? "맛집 탐방"
                    : item.hobby === "TRAVEL"
                    ? "여행"
                    : item.hobby === "WATCH_BASEBALL"
                    ? "야구 관람"
                    : item.hobby === "MUSICAL_INSTRUMENT"
                    ? "악기 연주"
                    : item.hobby === "COOK"
                    ? "요리"
                    : item.hobby === "DRIVE"
                    ? "드라이브"
                    : item.hobby === "WALK"
                    ? "산책"
                    : item.hobby === "EXHIBITION"
                    ? "전시 관람"
                    : item.hobby === "BOOK"
                    ? "독서"
                    : item.hobby === "WORK_OUT"
                    ? "운동"
                    : item.hobby === "FINE_ART"
                    ? "미술"
                    : item.hobby === "INVESTMENT"
                    ? "재테크"
                    : "사진 촬영"}
                </NoWidthHeightButton>
                <NoWidthHeightButton
                  backgroundColor="#ffa7a7"
                  margin="10px 3px 0px"
                  padding="4px 6px"
                  fontSize="16px"
                >
                  {item.relationType === "LOVE"
                    ? "연인"
                    : item.relationType === "DRINKING_MATE"
                    ? "술친구"
                    : item.relationType === "EATING_MATE"
                    ? "맛집탐방"
                    : item.relationType === "SAME_AGE"
                    ? "동갑"
                    : item.relationType === "NEIGHBORHOOD"
                    ? "동네친구"
                    : item.relationType === "TALKING_MATE"
                    ? "말 상대"
                    : item.relationType === "TRAVEL_MATE"
                    ? "여행친구"
                    : item.relationType === "EXHIBITION_MATE"
                    ? "전시관람"
                    : "산책"}
                </NoWidthHeightButton>
              </TextAlignRightDiv>
            </FriendBox>
          );
        })
      ) : (
        <></>
      )}
      <Footer />
    </MainTotalComponent>
  );
};

export default MainPage;
