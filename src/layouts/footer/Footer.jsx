import React from "react";
import { FooterDiv, IconBox, IconImg, IconText, ProfileImg } from "./style";
import Search from "../../assets/footer/Search.svg";
import Person from "../../assets/footer/Person.svg";
import Awesome from "../../assets/footer/Awesome.svg";
import Chat from "../../assets/footer/Chat.svg";
import Profile from "../../assets/footer/Profile.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <FooterDiv>
      <Link to="/friend/search" style={{ textDecoration: "none", color: "black" }}>
        <IconBox>
          <IconImg src={Search} alt="search" />
          <IconText>친구찾기</IconText>
        </IconBox>
      </Link>
      <IconBox>
        <IconImg src={Person} alt="person" />
        <IconText>친구목록</IconText>
      </IconBox>
      <IconBox>
        <IconImg src={Awesome} alt="today" />
        <IconText>오늘의 인연</IconText>
      </IconBox>
      <IconBox>
        <IconImg src={Chat} alt="chat" />
        <IconText>1:1 대화방</IconText>
      </IconBox>
      <IconBox>
        <ProfileImg src={Profile} alt="profile" />
      </IconBox>
    </FooterDiv>
  );
};
