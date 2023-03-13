import { motion } from "framer-motion";
import React from "react";
import { IconType } from "react-icons";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { colors } from "../../assets/css/params";
import { RootState } from "../../redux/store";
import appIcons, { Fallback } from "../icons";
import ContentBox from "./ContentBox";
import SectionBase from "./SectionBase";
import SectionHeader from "./SectionHeader";
import Title from "./Title";

const StyledNewSection = styled(SectionBase)`
  grid-column: 10 / span 3;
  grid-row: 3 / span 1;
  min-height: 22em;
`;

const IconLinkBox = styled(motion.div)`
  box-sizing: border-box;
  width: 100px;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: center;
  border: 0;
  cursor: pointer;
`;

interface IconWrapperProps {
  bgColor: string;
}

const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 1px solid transparent;
  display: flex;
  place-items: center;
  place-content: center;
  background-color: ${({ bgColor }: IconWrapperProps) => bgColor};
`;

const StyledText = styled.p`
  font-size: 1.4rem;
  line-height: 1.2;
  text-transform: capitalize;
  padding: 0.5em;
  text-align: center;
  margin-bottom: 0.8em;
`;

const SectionContentBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 1em 0;
`;

const IconLinkBoxVariants = {
  hover: {
    scale: 1.2
  }
};

const MoreFeaturesSection = () => {
  const { title, data } = useSelector(
    (state: RootState) => state.dashboard.moreFeaturesSection
  );
  const list =
    data &&
    data.map((item, idx) => {
      let ItemIcon: IconType = Fallback;
      if (Object.hasOwnProperty.call(appIcons, item.icon)) {
        ItemIcon = appIcons[item.icon];
      }
      return (
        <IconLinkBox
          variants={IconLinkBoxVariants}
          whileHover="hover"
          key={`${item.text}-icon-${idx}`}
        >
          <IconWrapper bgColor={item.color}>
            <ItemIcon size={32} color={colors.gray2} />
          </IconWrapper>
          <StyledText>{item.text}</StyledText>
        </IconLinkBox>
      );
    });
  return (
    <StyledNewSection>
      <ContentBox>
        <SectionHeader>
          <Title>{title}</Title>
        </SectionHeader>
        <SectionContentBox>
          {list}
          {/* push 2nd row to the left to align with the first row */}
          <IconLinkBox></IconLinkBox>
          <IconLinkBox></IconLinkBox>
          <IconLinkBox></IconLinkBox>
        </SectionContentBox>
      </ContentBox>
    </StyledNewSection>
  );
};

export default MoreFeaturesSection;
