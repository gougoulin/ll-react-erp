import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { RootState } from "../../redux/store";
import AsideIconOnly from "../aside/AsideIconOnly";
import AsideIconText from "../aside/AsideIconText";

const HomePageBox = styled.div`
  display: grid;
  grid-template-columns: ${({ siderWidth }: HomePageBoxProps) => siderWidth} 1fr;
`;
type HomePageBoxProps = {
  siderWidth: string;
};

const NavMotionWrapper = (props: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      {props.children}
    </motion.div>
  );
};

const HomePageLayout = () => {
  const isMiniSider = useSelector(
    (state: RootState) => state.layout.isMiniSider
  );
  const narrowWidth = useSelector(
    (state: RootState) => state.layout.narrowWidth
  );
  const wideWidth = useSelector((state: RootState) => state.layout.wideWidth);

  return (
    <HomePageBox siderWidth={isMiniSider ? narrowWidth : wideWidth}>
      <NavMotionWrapper>
        {isMiniSider ? <AsideIconOnly /> : <AsideIconText />}
      </NavMotionWrapper>
      <Outlet />
    </HomePageBox>
  );
};

export default HomePageLayout;
