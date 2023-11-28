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
`;
