import React from 'react'
import styled from 'styled-components';
import SectionBase from './SectionBase';
import SectionHeader from './SectionHeader';
import Title from './Title';

const StyledNewSection = styled(SectionBase)`
  grid-column: 1 / span 3;
  grid-row: 3 / span 1;
  min-height: 22em;
`;

const NewsSection = () => {
  return (
    <StyledNewSection>
      <SectionHeader>
        <Title>news</Title>
      </SectionHeader>
    </StyledNewSection>
  );
}

export default NewsSection