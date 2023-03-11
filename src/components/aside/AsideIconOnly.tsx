import { useSelector } from "react-redux";
import styled from "styled-components";
import useIconOnlyNav from "../../hooks/useIconOnlyNav";
import { RootState } from "../../redux/store";
import BaseAside from "./BaseAside";
import ToggleAsideIcon from "./ToggleAsideIcon";
import User from "./User";

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
      <User />
      <StyledNav>{elements}</StyledNav>
      <ToggleAsideIcon />
    </BaseAside>
  );
};

export default AsideIconOnly;
