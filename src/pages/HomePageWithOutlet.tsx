import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { RootState } from "../redux/store";
import AsideIconOnly from "../components/aside/AsideIconOnly";
import AsideIconText from "../components/aside/AsideIconText";

const HomePageBox = styled.div`
  display: grid;
  grid-template-columns: ${({ siderWidth }: HomePageBoxProps) => siderWidth} 1fr;
`;
type HomePageBoxProps = {
  siderWidth: string;
};

const NavMotionWrapper = (props: any) => {
  const { x, children } = props;
  return (
    <motion.div
      initial={{ x: x, opacity: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      {children}
    </motion.div>
  );
};

const HomePageWithOutlet = () => {
  const isMiniSider = useSelector(
    (state: RootState) => state.layout.isMiniSider
  );
  const narrowWidth = useSelector(
    (state: RootState) => state.layout.narrowWidth
  );
  const wideWidth = useSelector((state: RootState) => state.layout.wideWidth);

  return (
    <HomePageBox siderWidth={isMiniSider ? narrowWidth : wideWidth}>
      <AnimatePresence mode="wait">
        <div key={isMiniSider ? `aside-icon-only` : `aside-icon-and-text`}>
          <NavMotionWrapper x={-48}>
            {isMiniSider ? <AsideIconOnly key="asideicononly" /> : undefined}
          </NavMotionWrapper>
          <NavMotionWrapper x={-240}>
            {isMiniSider ? undefined : <AsideIconText key="asideicontext" />}
          </NavMotionWrapper>
        </div>
      </AnimatePresence>
      <Outlet />
    </HomePageBox>
  );
};

export default HomePageWithOutlet;
