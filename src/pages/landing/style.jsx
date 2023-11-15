import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 랜딩페이지 최상단 컴포넌트
export const LandingComponent = styled.div`
  width: 430px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 랜딩페이지의 박스들 설정
export const LandingBox = styled.div`
  width: 328px;
  height: 342px;
  border-radius: 12px;

  margin-top: ${(props) => props.marginTop || "28px"};
  background: url(${(props) => props.backgroundImg || null});
  background-color: ${(props) => props.backgroundColor || null};
  background: ${(props) => props.gradient || null};
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);

  // 첫번째 박스 설정
  .firstBoxContent {
    margin-top: 42px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-size: 24px;
      font-weight: 600;
      color: #434343;
    }
    :last-child {
      font-size: 25px;
      font-weight: 700;
      margin-top: 10px;
    }
  }
`;

export const LandingBoxBottom = styled(LandingBox)`
  width: 100%;
  height: 375px;
  border-radius: 0px;
`;
