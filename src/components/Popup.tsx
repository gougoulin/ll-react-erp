import React from "react";
import styled from "styled-components";
import { colors, space } from "../assets/css/params";

const StyledPopup = styled.div`
  font-size: 1.4rem;
  line-height: 1.5;
  min-height: 10em;
  min-width: 15em;
  box-sizing: border-box;
  padding: 0.8em 1.2em;
  background-color: ${colors.gray3};
  position: absolute;
  border: 0;
  border-radius: ${space.borderRadius};
  top: -11.5em;
  left: -12em;
  color: ${colors.danger};

  &::before {
    content: "";
    display: inline-block;
    border: 1em solid transparent;
    border-top: 1em solid ${colors.gray3};
    width: 0;
    height: 0;
    position: absolute;
    top: 100%;
    left: 80%;
  }
`;

type PropupProps = {
  txtcontent?: string;
};

const Popup = (props: PropupProps) => {
  const { txtcontent } = props;
  return <StyledPopup>{txtcontent}</StyledPopup>;
};

export default Popup;
