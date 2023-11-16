import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 랜딩페이지 최상단 컴포넌트
export const LoginTotalComponent = styled.div`
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
    margin-top: 80px;
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

export const LoginBox = styled.div`
  width: 328px;
  height: 276px;
  margin-top: 84px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 0px 3px 0px #ffa7a7;
`;

export const TextDiv = styled.div`
  color: #1e1e1e;
  font-family: "Pretendard";
  font-weight: ${(props) => props.fontWeight || "500"};
  line-height: ${(props) => props.lineHeight || "18px"};
  margin: ${(props) => props.margin || "0px 0px 0px 0px"};
  font-size: ${(props) => props.fontSize || "16px"};
`;

export const TextInput = styled.input`
  width: 280px;
  height: 44px;
  padding-left: 16px;
  border-radius: 4px;
  background: #fff;
  border: none;
  outline: none;
  font-family: "Pretendard";
  font-size: 16px;
  line-height: 24px;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.4);
  margin-top: ${(props) => props.marginTop || "0px"};
  ::placeholder {
    color: #979797;
  }
`;

export const SignupToggleBar = styled.div`
  position: fixed;
  bottom: 0;
  border-radius: 20px 20px 0px 0px;
  width: 100vw;
  background-color: #fff;
  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s ease-in-out;
  height: ${(props) => (props.isToggle ? "300px" : "0px")};
  visibility: ${(props) => (props.isToggle ? "visible" : "hidden")};
`;
