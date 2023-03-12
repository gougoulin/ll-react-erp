import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { colors, space } from "../assets/css/params";
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
        <Outlet />
    </VerticalLayout>
  );
};

export default DashboardOutlet;
