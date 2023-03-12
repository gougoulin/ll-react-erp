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

const MainContentLayout = styled.div`
  flex: 1;
  padding: ${space.medium};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-content: flex-start;
  gap: ${space.medium};
  background: ${colors.gray4};
`;

const DashboardOutlet = () => {
  return (
    <VerticalLayout>
      <CommonHeader />
      <MainContentLayout>
        <Outlet />
      </MainContentLayout>
    </VerticalLayout>
  );
};

export default DashboardOutlet;
