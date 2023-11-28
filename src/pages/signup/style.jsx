import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => props.flexDirection || "row"};
  margin: ${(props) => props.margin || "0px"};
`;

// 이메일회원가입 페이지 최상단 컴포넌트
export const EmailSignupTotalComponent = styled.div`
  width: 430px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  .logo {
    margin-top: 9vh;
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
`;

export const TextLabel = styled.div`
  color: #1e1e1e;
  font-family: "Pretendard";
  letter-spacing: 1.12px;
  font-weight: ${(props) => props.fontWeight || "600"};
  font-size: ${(props) => props.fontSize || "28px"};
  margin: ${(props) => props.margin || "0px"};
`;
export const IsSizeTextLabel = styled(TextLabel)`
  width: ${(props) => props.width || "120px"};
  height: ${(props) => props.height || "21px"};
`;

export const TextInput = styled.input`
  max-width: 350px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.4);
  font-family: "Pretendard";
  line-height: 24px;
  outline: none;
  border: none;
  padding-left: 24px;
  width: ${(props) => props.width || "82%"};
  height: ${(props) => props.height || "44px"};
  margin: ${(props) => props.margin || "0px"};
  font-size: ${(props) => props.fontSize || "16px"};
  ::placeholder {
    color: #979797;
  }
`;

export const FileInput = styled.input`
  width: 80px;
  display: none;
`;

export const NextButton = styled.button`
  width: 90%;
  max-width: 400px;
  height: 44px;
  border-radius: 4px;
  background-color: #8a8a8a;
  color: #fff;
  font-family: "Pretendard";
  cursor: pointer;
  border: none;
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
  background-color: ${(props) => props.backgroundColor || "#8a8a8a"};
  margin: ${(props) => props.margin || "0px"};
`;

export const CheckPasswordImg = styled.img`
  width: ${(props) => props.width || "20px"};
  height: ${(props) => props.height || "20px"};
  margin-top: -32px;
  align-self: flex-end;
  margin-right: 40px;
  cursor: ${(props) => props.cursor || "none"};
`;

export const TosBox = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: 30px;
  margin: ${(props) => props.margin || "0px"};
`;

export const FullWidthDivBox = styled.div`
  width: 100%;
  min-width: 345px;
  padding: 5px 10px 0px;
  height: 120px;
  margin: ${(props) => props.margin || "0px"};
`;

export const GridBox = styled.div`
  padding: 10px 18px;
`;
export const ImgText = styled(GridBox)`
  font-weight: bold;
  color: #0095f6;
  cursor: pointer;
  margin: 2px 0px 0px -8px;
`;

export const DoubleGridBox = styled.div`
  padding: 10px 18px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const ImgBox = styled.img`
  width: ${(props) => props.width || "44px"};
  height: ${(props) => props.height || "44px"};
  object-fit: cover;
`;

export const FlexLabel = styled.label`
  display: flex;
`;
