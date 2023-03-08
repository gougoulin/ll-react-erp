import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { colors, space } from "../../assets/css/params";

const StyledBaseInput = styled(motion.input)`
  font-size: 1.6rem;
  padding: 4px 2em;
  background-color: transparent;
  border: 1px solid ${colors.gray5};
  border-radius: ${space.borderRadius};
  outline: 0;
`;

const inputVariants = {
  focus: {
    boxShadow: `4px 4px 2px ${colors.gray3}`,
    outline: `1px solid ${colors.primary}`
  },
  hover: {
    scale: 1.05
  }
};

const BaseInput = (props: any) => {
  return (
    <StyledBaseInput
      variants={inputVariants}
      whileFocus="focus"
      whileHover="hover"
      {...props}
    />
  );
};

export default BaseInput;
