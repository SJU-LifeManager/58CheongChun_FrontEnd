import React from "react";
import { HeaderDiv, IconImg } from "./style";
import ArrowLeft from "../../assets/header/ArrowLeft.svg";
import Gagaga from "../../assets/header/Gagaga.svg";
import Diamond from "../../assets/header/Diamond.svg";
import { Link } from "react-router-dom";
import { Logo } from "./style";

export const Header = () => {
  return (
    <HeaderDiv>
      <IconImg margin="0px 24px 0px 16px" src={ArrowLeft} alt="arrow" />
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <Logo>
          <div className="logo">
            <p>오팔</p>
            <p>청춘</p>
          </div>
        </Logo>
      </Link>
      <div>
        <IconImg src={Gagaga} alt="gagaga" />
        <IconImg margin="0px 16px 0px 8px" src={Diamond} alt="diamond" />
      </div>
    </HeaderDiv>
  );
};
