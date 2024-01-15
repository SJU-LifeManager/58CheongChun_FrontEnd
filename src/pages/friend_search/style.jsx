import styled from "styled-components";

export const RowDivComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${(props) => props.margin || "0px"};
`;

export const FriendInfoComponent = styled.div`
  width: 98%;
  height: 830px;
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
  cursor: pointer;
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
  cursor: pointer;

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
  margin: 0px 12px 0px 16px;
`;

// direct search
export const ArrowImg = styled.img`
  width: 20px;
  height: 20px;
  margin: 0px 12px 0px 16px;
`;

export const TextHeader = styled.div`
  color: #1e1e1e;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 111.111% */
`;

export const MainComponent = styled.div`
  min-width: 328px;
  width: 92%;
  height: 470px;
  flex-shrink: 0;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);
  margin: 8px 0px 0px 0px;
`;

export const RowComponent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: ${(props) => props.margin || "20px 0px 0px 0px"};
  padding: 0px 12px;
`;

export const MainTopicDiv = styled.div`
  display: inline-flex;
  width: 84px;
  padding: 8px 0px;

  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: #ffeff5;
  color: #757575;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 100% */
`;

export const MainAnswerDiv = styled.div`
  display: inline-flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px; /* 77.778% */
  margin: ${(props) => props.margin || "0px 0px 0px 16px"};
  background-color: ${(props) => props.backgroundColor || "#fff"};
  color: ${(props) => props.color || "#1e1e1e"};
`;

export const ApplyFriendBtn = styled.button`
  width: 286px;
  height: 38px;
  margin: 20px 0px 0px 13%;
  flex-shrink: 0;
  border-radius: 8px;
  background: #ffa7a7;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  cursor: pointer;
  font-style: normal;
  font-weight: 600;
  border: none;
  line-height: 18px; /* 100% */
`;
