import React from "react";
import styled from "styled-components";
import { colors, space } from "../../assets/css/params";

const StyledCommonHeader = styled.header`
  min-height: 5em;
  padding: 0 ${space.medium};
  background: ${colors.gray1};
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`;

const StyledTab = styled.span`
  box-sizing: border-box;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1em 3em;
  height: 100%;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  cursor: pointer;

  &:hover {
    color: ${colors.primary};
  }
`;

const TestStyledTab = styled(StyledTab)`
  background-color: ${colors.gray3};
  color: ${colors.primary};
`;

const CommonHeader = () => {
  return (
    <StyledCommonHeader>
      <TestStyledTab>home</TestStyledTab>
      <StyledTab>tasks</StyledTab>
      <StyledTab>attendance</StyledTab>
      <StyledTab>news</StyledTab>
    </StyledCommonHeader>
  );
};

export default CommonHeader;
