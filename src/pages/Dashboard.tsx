import React from "react";
import styled from "styled-components";
import { space } from "../assets/css/params";

const HomeLayout = styled.div`
  grid-template-columns: repeat(8, 1fr);
  gap: ${space.medium};
`;

const CommonHeader = styled.header`
  grid-row: 1 / 2;
  grid-column: 1 / span 8;
`;

const Dashboard = () => {
  return (
    <HomeLayout>
      <CommonHeader>header</CommonHeader>

      <div>Home</div>
    </HomeLayout>
  );
};

export default Dashboard;
