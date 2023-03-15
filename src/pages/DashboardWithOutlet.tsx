import { AnimatePresence } from "framer-motion";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import CommonHeader from "../components/dashboard/CommonHeader";

const VerticalLayout = styled.div`
  display: flex;
  flex-flow: column nowrap;
  max-height: 100vh;
  overflow: auto;
`;

const DashboardOutlet = () => {
  return (
    <VerticalLayout>
      <CommonHeader />
      <AnimatePresence mode="wait">
          <Outlet />
      </AnimatePresence>
    </VerticalLayout>
  );
};

export default DashboardOutlet;
