import React from "react";
import styled from "styled-components";
import SectionBase from "./SectionBase";
import SectionHeader from "./SectionHeader";
import Title from "./Title";

const StyledNewSection = styled(SectionBase)`
  grid-column: 4 / span 6;
  grid-row: 3 / span 1;
  min-height: 22em;
`;

const ScheduleSection = () => {
  return (
    <StyledNewSection>
      <SectionHeader>
        <Title>schedule</Title>
      </SectionHeader>
    </StyledNewSection>
  );
};

export default ScheduleSection;
