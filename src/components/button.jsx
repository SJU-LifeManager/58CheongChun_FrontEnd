import styled from "styled-components";

export const FillButton = styled.button`
  cursor: pointer;
  color: #fff;
  text-align: center;
  font-family: "Pretendard";
  font-weight: 600;
  line-height: 24px;
  border-radius: 8px;
  border: none;
  background-color: ${(props) => props.backgroundColor || null};
  font-size: ${(props) => props.fontSize || "22px"};
  width: ${(props) => props.width || "328px"};
  height: ${(props) => props.height || "48px"};
`;
