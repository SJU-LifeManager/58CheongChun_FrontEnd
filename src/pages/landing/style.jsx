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
  height: 352px;
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
      font-size: 26px;
      font-weight: 700;
      margin-top: 12px;
    }
  }
  //다른 공통 박스들 설정
  .commonBoxContent {
    display: flex;
    img {
      margin: 8px 0px 0px 4px;
      width: 153px;
    }
    .textBox {
      margin: 48px 8px 0px 8px;
      text-align: right;
      p {
        margin-top: 4px;
        font-size: 22px;
        font-weight: 600;
      }
      :last-child {
        font-size: 32px;
      }
    }
  }
`;

// 랜딩페이지 아래에 있는 부분 스타일링
export const LandingBoxBottom = styled(LandingBox)`
  width: 100%;
  height: 450px;
  border-radius: 0px;
  .footerContent {
    display: flex;
    justify-content: center;
    .logo {
      margin-top: 64px;
      display: flex;
      font-family: "Retrosans";
      font-size: 40px;
      font-weight: 400;
      letter-spacing: 1.6px;
      :first-child {
        color: #ffa7a7;
      }
      :last-child {
        color: #97e6ff;
      }
    }
    .text {
      margin: 323px 0px 0px 0px;
      position: absolute;
      text-align: center;
      p {
        margin: 12px 0px 0px;
        font-family: "Pretendard";
        font-size: 32px;
        font-weight: 600;
        line-height: 30px;
      }
    }
  }
`;
