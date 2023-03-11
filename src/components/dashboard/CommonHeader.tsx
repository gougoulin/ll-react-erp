import React from 'react'
import styled from 'styled-components';
import { colors } from '../../assets/css/params';

const StyledCommonHeader = styled.header`
  min-height: 5em;
  background: ${colors.gray1};
`;

const CommonHeader = () => {
  return (
    <StyledCommonHeader>CommonHeader</StyledCommonHeader>
  )
}

export default CommonHeader