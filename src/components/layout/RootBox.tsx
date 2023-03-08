import React from "react";
import styled from "styled-components";
import CenterAllBox from "./CenterAllBox";
import { ReactNode } from "react";

const StyledRootBox = styled.div`
`;

type RootBoxProps = {
  children: ReactNode;
};

const RootBox = (props: RootBoxProps) => {
  const { children } = props;
  return (
    <StyledRootBox>
      <CenterAllBox>{children}</CenterAllBox>;
    </StyledRootBox>
  );
};

export default RootBox;
