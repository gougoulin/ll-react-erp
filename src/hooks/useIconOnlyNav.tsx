import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../assets/css/params";
import appIcons from "../components/icons";
import { navMenu } from "../router/constants";

const StyledNavLink = styled(NavLink)`
  padding: 0.5em;
  display: flex;
  place-content: center;

  &:hover {
    background: ${colors.primary};
  }
`;
const ActiveNavLink = styled(StyledNavLink)`
  background-color: ${colors.primary};
`;

const useIconOnlyNav = (menu: string[]) => {
  const location = useLocation();
  const elementList = menu.map((txt: string, idx) => {
    let ret = (
      <StyledNavLink key={`aside-nav-${idx}`} to={navMenu[txt]}>
        {appIcons[txt] || appIcons["default"]}
      </StyledNavLink>
    );
    if ("/" + txt === location.pathname) {
      ret = (
        <ActiveNavLink key={`aside-nav-${idx}`} to={navMenu[txt]}>
          {appIcons[txt] || appIcons["default"]}
        </ActiveNavLink>
      );
    }
    return ret;
  });

  return elementList;
};

export default useIconOnlyNav;
