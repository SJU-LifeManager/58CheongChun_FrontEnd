import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => props.flexDirection || "row"};
  margin: ${(props) => props.margin || "0px"};
`;

// 로그인페이지 최상단 컴포넌트
export const MainTotalComponent = styled.div`
  width: 430px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${(props) => props.padding || "0px"};
`;

export const FriendBox = styled.div`
  width: 90%;
  height: 360px;
  border-radius: 6px;
  cursor: pointer;

  background: linear-gradient(180deg, #000 0.25%, rgba(202, 201, 201, 0) 58.34%);
  background-repeat: no-repeat;
  background-size: cover;

  background-image: url(${(props) => props.backgroundImg || "none"});
  margin: ${(props) => props.margin || "0px"};
`;

export const TextParagraph = styled.p`
  color: #fff;
  font-family: "Pretendard";
  font-size: ${(props) => props.fontSize || "24px"};
  font-weight: ${(props) => props.fontWeight || "500"};
  margin: ${(props) => props.margin || "0px"};
`;

export const TextAlignRightDiv = styled.div`
  text-align: right;
`;
