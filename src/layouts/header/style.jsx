import styled from "styled-components";

export const HeaderDiv = styled.div`
  position: fixed;
  top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 48px;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
`;
export const IconImg = styled.img`
  width: 24px;
  height: 24px;
  margin: ${(props) => props.margin || "0px"};
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  .logo {
    display: flex;
    font-family: "Retrosans";
    font-size: 30px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 1.2px;
    :first-child {
      color: #ffa7a7;
    }
    :last-child {
      color: #97e6ff;
    }
  }
`;
