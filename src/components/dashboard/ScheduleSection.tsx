import React from "react";
import styled from "styled-components";
import SectionBase from "./SectionBase";

const StyledNewSection = styled(SectionBase)`
  grid-column: 4 / span 6;
  grid-row: 3 / span 1;
  min-height: 22em;
`;

const ScheduleSection = () => {
  return <StyledNewSection>ScheduleSection</StyledNewSection>;
};

export default ScheduleSection;
