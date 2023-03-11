import React from 'react'
import styled from 'styled-components';
import SectionBase from './SectionBase';

const StyledPerformanceSection = styled(SectionBase)`
  grid-column: 10 / 13;
  min-height: 22em;
`;

const PerformanceSection = () => {
  return (
    <StyledPerformanceSection>PerformanceSection</StyledPerformanceSection>
  )
}

export default PerformanceSection