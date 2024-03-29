import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../assets/css/params";
import AsideIcon from "../components/aside/AsideIcon";
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
        {<AsideIcon txt={txt} />}
      </StyledNavLink>
    );
    
    if (txt === location.pathname.split("/")[1]) {
      ret = (
        <ActiveNavLink key={`aside-nav-${idx}`} to={navMenu[txt]}>
          {<AsideIcon txt={txt} />}
        </ActiveNavLink>
      );
    }
    return ret;
  });

  return elementList;
};

export default useIconOnlyNav;
