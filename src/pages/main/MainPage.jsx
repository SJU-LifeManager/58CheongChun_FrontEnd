import React, { useEffect, useState } from "react";
import { FriendBox, MainTotalComponent, TextParagraph } from "./style";
import { Header } from "../../layouts/header/Header";
import { Footer } from "../../layouts/footer/Footer";
import { FillButton } from "../../components/Button";
// import { TodayFriendsApi } from "../../apis/FriendApi";

const MainPage = () => {
  const [todayFriendsList, setTodayFriendsList] = useState(null);

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
        nickname: "user6",
        birth: "1999-08-11",
        latitude: 22.0,
        longitude: 22.0,
        personality: "activity",
        hobby: "basketball",
        relationType: "sexualfriend",
      },
      {
        nickname: "user7",
        birth: "1999-09-11",
        latitude: 22.0,
        longitude: 22.0,
        personality: "activity",
        hobby: "baseball",
        relationType: "friend",
      },
      {
        nickname: "user3",
        birth: "1999-05-11",
        latitude: 22.0,
        longitude: 22.0,
        personality: "activity",
        hobby: "baseball",
        relationType: "friend",
      },
    ]);
  };
  useEffect(() => {
    getTodayFriends();
  }, []);

  return (
    <MainTotalComponent>
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
            <FriendBox key={item.nickname}>
              <TextParagraph>
                {item.nickname}, {item.birth}
              </TextParagraph>
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
