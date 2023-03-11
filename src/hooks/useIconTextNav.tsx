import { motion } from "framer-motion";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../assets/css/params";
import AsideIcon from "../components/aside/AsideIcon";
import { navMenu } from "../router/constants";

const Wrapper = styled(motion.li)`
  display: grid;
  grid-template-columns: 3em 1fr;
  align-items: center;
  padding: 1em 1.5em;
  text-transform: capitalize;
  cursor: pointer;

  &:hover {
    background: ${colors.primary};
  }
`;

const ActiveWrapper = styled(Wrapper)`
  background-color: ${colors.primary};
`;

const wrapperVariants = {
  hover: {
    backgroundColor: "rgba(0, 204, 204, 1)"
  },
  init: {
    backgroundColor: "rgba(0, 204, 204, 0)"
  }
};

const useIconTextNav = (menu: string[]) => {
  const navigate = useNavigate();
  const location = useLocation();
  const elementList = menu.map((txt: string, idx) => {
    let ret = (
      <Wrapper
        variants={wrapperVariants}
        initial="init"
        whileHover="hover"
        key={`aside-icon-txt-nav-${idx}`}
        onClick={() => navigate(navMenu[txt])}
      >
        <AsideIcon txt={txt} />
        <span>{txt}</span>
      </Wrapper>
    );
    if ("/" + txt === location.pathname) {
      ret = (
        <ActiveWrapper
          variants={wrapperVariants}
          whileHover="hover"
          key={`aside-icon-txt-nav-${idx}`}
          onClick={() => navigate(navMenu[txt])}
        >
          <AsideIcon txt={txt} />
          <span>{txt}</span>
        </ActiveWrapper>
      );
    }
    return ret;
  });

  return elementList;
};

export default useIconTextNav;
