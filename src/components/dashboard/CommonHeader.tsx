import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colors, space } from "../../assets/css/params";
import { RootState } from "../../redux/store";
import { dashboradRoutes } from "../../router/constants";

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
  height: 100%;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  cursor: pointer;
  background: ${({ bgColor }: StyledTabProps) => bgColor};

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
            pathname === "/dashboard" + (it === "home" ? "" : "/" + it)
              ? colors.gray3
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
