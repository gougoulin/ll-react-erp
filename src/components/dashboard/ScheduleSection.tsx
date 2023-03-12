import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../redux/store";
import ColList from "../list/ColList";
import ListItem from "../list/ListItem";
import ContentBox from "./ContentBox";
import DateText from "./DateText";
import SectionBase from "./SectionBase";
import SectionHeader from "./SectionHeader";
import Title from "./Title";

const StyledNewSection = styled(SectionBase)`
  grid-column: 4 / span 6;
  grid-row: 3 / span 1;
  min-height: 24em;
`;

const ScheduleSectionListItem = styled(ListItem)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ScheduleSection = () => {
  const { title, data } = useSelector(
    (state: RootState) => state.dashboard.scheduleSection
  );

  const list =
    data &&
    data.map((it, idx) => {
      return (
        <ScheduleSectionListItem key={`schedule-${it.txt}-${it.id}-${idx}`}>
          <span>{it.txt}</span>
          <DateText>{it.date}</DateText>
        </ScheduleSectionListItem>
      );
    });
  return (
    <StyledNewSection>
      <ContentBox>
        <SectionHeader>
          <Title>{title}</Title>
        </SectionHeader>
        <div>
          <ColList>{list}</ColList>
        </div>
      </ContentBox>
    </StyledNewSection>
  );
};

export default ScheduleSection;
