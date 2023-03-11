import styled from "styled-components";
import { colors } from "../assets/css/params";
import CenterAllBox from "../components/layout/CenterAllBox";

import { Outlet } from "react-router-dom";

const LoginRootBox = styled(CenterAllBox)`
  background-color: ${colors.primary};
  min-height: 100vh;
  min-width: 100vw;
`;

const ContentBox = styled(CenterAllBox)`
  font-size: 1.6rem;
  width: 1060px;
  height: 652px;
  background: ${colors.gray1};
`;


const RootOutlet = () => {
  return (
    <LoginRootBox>
      <ContentBox>
        <Outlet />
      </ContentBox>
    </LoginRootBox>
  );
};

export default RootOutlet;
