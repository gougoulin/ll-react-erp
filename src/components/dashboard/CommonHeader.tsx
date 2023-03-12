import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colors, space } from "../../assets/css/params";
import { RootState } from "../../redux/store";
import { dashboradRoutes, main } from "../../router/constants";

const StyledCommonHeader = styled.header`
  min-height: 5em;
  padding: 0 ${space.medium};
  background: ${colors.gray1};
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`;

interface StyledTabProps {
  bgColor: string;
}

const StyledTab = styled.span`
  box-sizing: border-box;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1em 3em;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  cursor: pointer;
  /* background: ${({ bgColor }: StyledTabProps) => bgColor}; */
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: 5px;
    left: 25%;
    width: 50%;
    height: 100%;
    border-bottom: 4px solid ${({ bgColor }: StyledTabProps) => bgColor};
  }

  &:hover {
    color: ${colors.primary};
  }
`;

const CommonHeader = () => {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const data = useSelector(
    (state: RootState) => state.dashboard.commonHeader.data
  );

  const list =
    data &&
    data.map((it, idx) => {
      return (
        <StyledTab
          bgColor={
            pathname === "/" + main.dashboard + (it === "home" ? "" : "/" + it)
              ? colors.primary
              : "transparent"
          }
          onClick={() => {
            navigate(`${dashboradRoutes[it]}`);
          }}
          key={`commonheader-${it}-${idx}`}
        >
          {it}
        </StyledTab>
      );
    });
  return (
    <StyledCommonHeader>
      {/* <TestStyledTab>
        <NavLink to="/dashboard">home</NavLink>
      </TestStyledTab>
      <StyledTab>
        <NavLink to="/dashboard/tasks">tasks</NavLink>
      </StyledTab>
      <StyledTab>
        <NavLink to="/dashboard/attendance">attendance</NavLink>
      </StyledTab>
      <StyledTab>
        <NavLink to="/dashboard/news">news</NavLink>
      </StyledTab> */}
      {list}
    </StyledCommonHeader>
  );
};

export default CommonHeader;
