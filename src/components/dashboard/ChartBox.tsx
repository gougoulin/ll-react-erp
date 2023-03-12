import React, { Component, createRef, PureComponent, RefObject } from "react";
import { connect, Provider } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../redux/store";
import * as charts from "echarts";
import CenterAllBox from "../layout/CenterAllBox";
import { BarChartDataType } from "../../redux/slices/dashboardSlice";
import { colors } from "../../assets/css/params";

const StyledChartBox = styled.div`
  width: 350px;
  height: 350px;
  display: flex;
  flex-flow: row nowrap;
  justify-items: center;
`;

type ChartBoxProps = {
  option: string;
};

type ChartBoxState = {
  option: string;
};

class ChartBox extends PureComponent<ChartBoxProps, ChartBoxState> {
  chartRef: RefObject<HTMLDivElement>;
  chart: null | charts.EChartsType;

  constructor(props: ChartBoxProps) {
    super(props);
    this.state = {
      option: ""
    };
    this.chartRef = createRef<HTMLDivElement>();
    this.chart = null;
  }

  componentDidMount(): void {
    let option = JSON.parse(this.props.option) as BarChartDataType;
    if (this.chartRef.current) {
      if (this.chart === null) {
        this.chart = charts.init(this.chartRef.current);
      }
      let dataWithStyle = option.series[0].data.map((val, indx) => {
        let color = colors.primary;
        switch (indx) {
          case 1:
            color = colors.normal;
            break;
          case 3:
            color = colors.danger;
        }
        return {
          value: val,
          itemStyle: {
            color: color
          }
        };
      });
      option.series[0].data = dataWithStyle;
      this.chart.setOption(option as any);
    }
  }

  render() {
    console.log("render echart");

    return <StyledChartBox ref={this.chartRef} />;
  }
}

function mapStateToProps(state: RootState) {
  const option = state.dashboard.performanceSection.option;
  return { option };
}

export default connect(mapStateToProps)(ChartBox);
