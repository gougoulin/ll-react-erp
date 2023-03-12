import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../assets/css/params";
import { RootState } from "../../redux/store";
import TextButton from "../button/TextButton";
import ColList from "../list/ColList";
import ListItem from "../list/ListItem";
import SectionBase from "./SectionBase";
import SectionHeader from "./SectionHeader";
import Title from "./Title";

const StyledNewSection = styled(SectionBase)`
  grid-column: 1 / span 3;
  grid-row: 3 / span 1;
  min-height: 22em;
`;

const NewsSectionHeader = styled(SectionHeader)`
  flex-wrap: wrap;
  justify-content: space-between;
`;

const NewsListItem = styled(ListItem)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const TitleOfNewsWithLik = styled(Link)`
  text-decoration: none;
  color: ${colors.gray11};
`;
const DateText = styled.span`
  color: ${colors.gray7};
`;

const NewsSection = () => {
  const { title, actionText, data } = useSelector(
    (state: RootState) => state.dashboard.newsSection
  );

  const list =
    data &&
    data.map((it, idx) => {
      return (
        <NewsListItem key={`news-${it.txt}-${idx}`}>
          <TitleOfNewsWithLik to="">{it.txt}</TitleOfNewsWithLik>
          <DateText>{it.date}</DateText>
        </NewsListItem>
      );
    });

  return (
    <StyledNewSection>
      <NewsSectionHeader>
        <Title>{title}</Title>
        <TextButton>{actionText}</TextButton>
      </NewsSectionHeader>
      <div>
        <ColList>{list}</ColList>
      </div>
    </StyledNewSection>
  );
};

export default NewsSection;
