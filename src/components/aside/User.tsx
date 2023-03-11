import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import { useSelector } from "react-redux";
import { colors, space } from "../../assets/css/params";
import { RootState } from "../../redux/store";

const UserBox = styled.div`
  box-sizing: border-box;
  font-size: 1.6rem;
  min-height: 18em;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: ${space.medium} 0;
`;

const UserName = styled.h2`
  padding: ${space.small};
  text-transform: capitalize;
`;

const User = () => {
  const isMiniSider = useSelector(
    (state: RootState) => state.aside.isMiniSider
  );
  const fullname = useSelector((state: RootState) => state.user.fullname);
  return (
    <UserBox>
      {isMiniSider ? undefined : (
        <>
          <Avatar />
          <UserName>{fullname || "user"}</UserName>
        </>
      )}
    </UserBox>
  );
};

export default User;
