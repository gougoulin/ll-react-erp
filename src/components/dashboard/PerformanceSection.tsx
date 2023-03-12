import React, { createRef, useEffect, useRef } from "react";
import styled from "styled-components";
import SectionBase from "./SectionBase";
import * as echarts from "echarts";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ChartBox from "./ChartBox";
import SectionHeader from "./SectionHeader";
import Title from "./Title";

const StyledPerformanceSection = styled(SectionBase)`
  grid-column: 10 / 13;
  min-height: 22em;
  min-width: 350px;
  
`;

const ContentBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
`;

const PerformanceSectionHeader = styled(SectionHeader)`
  align-self: stretch;
`;

// const StyledChartBox = styled.div`
//   width: 2em;
//   height: 5em;
// `;
// const ChartBox = (props: any) => {
//   return <StyledChartBox ref={props.cite} />;
// };

const PerformanceSection = () => {
  const { title } = useSelector(
    (state: RootState) => state.dashboard.performanceSection
  );
  // const chartBoxRef = createRef<HTMLDivElement>();
  // const chartBoxRef = useRef<HTMLDivElement>();

  // useEffect(() => {
  //   if (chartBoxRef.current) {
  //     const chart = echarts.init(chartBoxRef.current);
  //     const optionObj = JSON.parse(option);
  //     chart.setOption(optionObj);
  //   }
  // }, [option, chartBoxRef]);

  return (
    <StyledPerformanceSection>
      <ContentBox>
        <PerformanceSectionHeader>
          <Title>{title}</Title>
        </PerformanceSectionHeader>
        <ChartBox />
      </ContentBox>
    </StyledPerformanceSection>
  );
};

export default PerformanceSection;
