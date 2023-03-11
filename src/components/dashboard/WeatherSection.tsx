import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { colors } from "../../assets/css/params";
import { RootState } from "../../redux/store";
import appIcons from "../icons";
import SectionBase from "./SectionBase";

const StyledWeatherBox = styled(SectionBase)`
  grid-column: 10 / span 3;
  min-height: 11em;
`;

const ContentBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  align-content: space-evenly;
  justify-content: space-evenly;
  background-color: ${colors.primary};
  color: ${colors.gray1};
`;

const TemperatureSpan = styled.span`
  font-size: 3.6rem;
  margin-right: 0.4em;
`;
const DescriptionSpan = styled.span`
  font-size: 1.6rem;
  text-transform: capitalize;
`;

const WeatherSection = () => {
  const { temperature, description, weather } = useSelector(
    (state: RootState) => state.dashboard.weatherSection
  );
  const WeatherIcon = appIcons[weather.toUpperCase()];
  return (
    <StyledWeatherBox>
      <ContentBox>
        <div>
          <TemperatureSpan>{temperature}</TemperatureSpan>
          <DescriptionSpan>{description}</DescriptionSpan>
        </div>
        <WeatherIcon size={64} color={colors.gray1} />
      </ContentBox>
    </StyledWeatherBox>
  );
};

export default WeatherSection;
