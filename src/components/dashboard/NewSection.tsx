import React from 'react'
import styled from 'styled-components';
import SectionBase from './SectionBase';

const StyledNewSection = styled(SectionBase)`
  grid-column: 1 / span 3;
  grid-row: 3 / span 1;
  min-height: 22em;
`;

const NewSection = () => {
  return (
    <StyledNewSection>NewSection</StyledNewSection>
  )
}

export default NewSection