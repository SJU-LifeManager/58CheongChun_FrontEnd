import styled from "styled-components";

export const FillButton = styled.button`
  cursor: pointer;
  text-align: center;
  font-family: "Pretendard";
  font-weight: 600;
  line-height: 24px;
  border: none;
  border-radius: ${(props) => props.borderRadius || "8px"};
  color: ${(props) => props.color || "#fff"};
  background-color: ${(props) => props.backgroundColor || null};
  font-size: ${(props) => props.fontSize || "22px"};
  width: ${(props) => props.width || "328px"};
  height: ${(props) => props.height || "48px"};
  margin: ${(props) => props.margin || "0px"};
`;
