import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { colors } from "../../assets/css/params";
import { RootState } from "../../redux/store";
import ButtonBase from "../button/ButtonBase";
import SectionBase from "./SectionBase";

type StyledWelcomeSectionProps = { bgImgUri: string };

const StyledWelcomeBox = styled(SectionBase)`
  background-color: ${colors.gray1};
  background-image: url(${(props: StyledWelcomeSectionProps) => props.bgImgUri});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  grid-column: 1 / span 9;
  min-height: 11em;
`;

const ContentBox = styled.div`
  min-width: 100%;
  min-height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-content: space-evenly;
  align-items: center;
`;

const Text = styled.h3`
  opacity: 1;
  font-size: 3.2rem;
  line-height: 1.1;
  color: ${colors.gray1};
  font-weight: 500;
  text-align: center;
`

const WelcomeSection = () => {
  const {imgUri, clockInBtnText, welcomeText } = useSelector(
    (state: RootState) => state.dashboard.welcomeSection
  );
  return (
    <StyledWelcomeBox bgImgUri={imgUri}>
      <ContentBox>
        <Text>{welcomeText}</Text>
        <ButtonBase>{clockInBtnText}</ButtonBase>
      </ContentBox>
    </StyledWelcomeBox>
  );
};

export default WelcomeSection;
