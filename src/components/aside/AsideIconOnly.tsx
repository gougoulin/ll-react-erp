import { useSelector } from "react-redux";
import styled from "styled-components";
import useIconOnlyNav from "../../hooks/useIconOnlyNav";
import { RootState } from "../../redux/store";
import BaseAside from "./BaseAside";
import ToggleAsideIcon from "./ToggleAsideIcon";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const AsideIconOnly = () => {
  const menu = useSelector((state: RootState) => state.aside.menu);
  const menuList = menu.split("@@");
  const elements = useIconOnlyNav(menuList);
  return (
    <BaseAside>
      <StyledNav>{elements}</StyledNav>
      <ToggleAsideIcon />
    </BaseAside>
  );
};

export default AsideIconOnly;
