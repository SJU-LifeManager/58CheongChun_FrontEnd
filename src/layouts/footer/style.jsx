import styled from "styled-components";

export const FooterDiv = styled.div`
  position: fixed;
  z-index: 5;
  bottom: 47px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  max-width: 430px;
  height: 44px;
  padding: 12px 16px;
  background-color: #ffeff5;
  border-top: 1px solid #c1c1c1;
  border-bottom: 1px solid #c1c1c1;
`;

export const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 100%;
  cursor: pointer;
`;
export const IconImg = styled.img`
  width: 28px;
  height: 28px;
  object-fit: cover;
  margin: ${(props) => props.margin || "0px"};
`;

export const ProfileImg = styled(IconImg)`
  width: 44px;
  height: 44px;
  border-radius: 16px;
  border: 1px solid #c0c0c0;
`;

export const IconText = styled.div`
  color: #1e1e1e;
  text-align: center;
  font-family: "Pretendard";
  font-size: 12px;
  line-height: 16px;
  margin: 4px 0px 0px 0px;
`;
