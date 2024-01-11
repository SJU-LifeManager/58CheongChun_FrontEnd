import styled from "styled-components";

export const RowDivComponent = styled.div`
  display: flex;
  align-items: center;
  margin: ${(props) => props.margin || "0px"};
`;

export const FriendInfoComponent = styled.div`
  width: 90%;
  height: 1000px;
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const ImgContainContainer = styled.div`
  width: 100%;
`;

export const UserImg = styled.img`
  width: 100%;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 6px;
  display: block;
  background:
    url(<path-to-image>),
    lightgray 50% / cover no-repeat;
`;

export const HeartImg = styled.img`
  width: 32px;
  object-fit: cover;
  position: absolute;
  display: block;
  margin: -40px 0px 0px 80%;
`;

export const XImg = styled.img`
  width: 32px;
  object-fit: cover;
  position: absolute;
  display: block;
  cursor: pointer;
  margin: -3px 0px 0px 90%;
`;

export const InfoBox = styled.div`
  border-radius: 6px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.backgroundColor || "#fff"};
  min-width: 328px;
  flex-shrink: 0;

  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "80px"};
  margin: ${(props) => props.margin || "0px"};
`;

export const TextDiv = styled.div`
  color: #1e1e1e;
  text-align: center;
  font-family: Pretendard;
  font-style: normal;
  line-height: ${(props) => props.lineHeight || "22px"}; /* 110% */
  font-weight: ${(props) => props.fontWeight || "600"};
  font-size: ${(props) => props.fontSize || "20px"};
  color: ${(props) => props.color || "1e1e1e"};
  margin: ${(props) => props.margin || "0px"};
`;

export const BackgroundTextDiv = styled.div`
  display: flex;
  padding: 4px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  background: #ffeff5;
  color: #757575;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px; /* 87.5% */
`;

export const AnswerBackgroundTextDiv = styled.div`
  display: flex;
  padding: 4px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: #ffa7a7;
  color: #fff;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px; /* 87.5% */
`;

export const RequestFriendBtn = styled.button`
  display: flex;
  border: none;
  width: 90%;
  height: 42px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: #ffa7a7;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 100% */
  margin: 18px 0px 0px 0px;
`;

export const ModalComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 36%;
  width: 296px;
  height: 104px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.4);
`;

export const ModalTextDiv = styled.div`
  color: #000;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  line-height: 14px; /* 70% */
  font-size: ${(props) => props.fontSize || "20px"};
  margin: ${(props) => props.margin || "0px"};
`;
