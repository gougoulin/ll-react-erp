import { useSelector } from "react-redux";
import styled from "styled-components";
import useIconTextNav from "../../hooks/useIconTextNav";
import { RootState } from "../../redux/store";
import BaseAside from "./BaseAside";
import ToggleAsideIcon from "./ToggleAsideIcon";
import User from "./User";

const StyledNav = styled.ul`
  display: flex;
  flex-direction: column;
`;

const AsideIconText = () => {
  const menu = useSelector((state: RootState) => state.aside.menu);
  const menuList = menu.split("@@");
  const elements = useIconTextNav(menuList);
  return (
    <BaseAside>
      <User />
      <StyledNav>{elements}</StyledNav>
      <ToggleAsideIcon />
    </BaseAside>
  );
};

export default AsideIconText;
