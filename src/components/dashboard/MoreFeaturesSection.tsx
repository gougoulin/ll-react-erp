import React from 'react'
import styled from 'styled-components';
import SectionBase from './SectionBase';

const StyledNewSection = styled(SectionBase)`
  grid-column: 10 / span 3;
  grid-row: 3 / span 1;
  min-height: 22em;
`;

const MoreFeaturesSection = () => {
  return (
    <StyledNewSection>MoreFeaturesSection</StyledNewSection>
  )
}

export default MoreFeaturesSection