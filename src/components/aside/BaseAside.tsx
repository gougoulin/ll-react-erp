import styled from "styled-components";
import { colors } from "../../assets/css/params";

type StyledAsideProps = {
  asideFontSize?: string;
  asideTextColor?: string;
};

const StyledAside = styled.aside`
  min-height: 100vh;
  background-color: ${colors.dark};
  color: ${(props: StyledAsideProps) => props.asideTextColor || colors.gray1};
  font-size: ${(props: StyledAsideProps) => props.asideFontSize || "1.6rem"};
  position: relative;
`;

const BaseAside = StyledAside;

export default BaseAside;
