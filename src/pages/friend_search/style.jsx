import styled from "styled-components";

export const RowDivComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${(props) => props.margin || "0px"};
`;

export const FriendInfoComponent = styled.div`
  width: 98%;
  height: 1000px;
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const BackgroundText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 100% */
  flex-shrink: 0;
  border-radius: 8px;
  background-color: ${(props) => props.backgroundColor || "#ffa7a7"};
  width: ${(props) => props.width || "286px"};
  height: ${(props) => props.height || "38px"};
  margin: ${(props) => props.margin || "0px"};
`;

export const LinkFriendListComponent = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: 48px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #ffeff5;
  margin: ${(props) => props.margin || "16px 0px 0px 0px"};
`;

export const InnerLinkFriendText = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 111.111% */
  margin: ${(props) => props.margin || "0px"};
`;

export const InnerLinkFriendImg = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;
