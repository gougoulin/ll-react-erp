import { motion } from "framer-motion";
import React from "react";
import { IoConstructOutline } from "react-icons/io5";
import styled from "styled-components";
import { colors } from "../assets/css/params";
import CenterAllBox from "../components/layout/CenterAllBox";

const Wrapper = styled(CenterAllBox)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const Description = styled.p`
  font-size: 4.8rem;
  line-height: 2;
  font-weight: 500;
  color: ${colors.primary};
  text-transform: uppercase;
`;

const IconWrapper = styled(motion.div)`
  display: inline-block;
`;

const iconWrapperVariants = {
  init: {
    opacity: 1,
    rotate: 0,
  },
  animate: {
    opacity: [0.1, 1, 0.1],
    rotate: [-90, 0, 90],
    transition: {
      repeat: Infinity,
      repeatType: "mirror" as "loop" | "mirror" | "reverse" | undefined,
      duration: 2,
    }
  }
};

const UnderConstruction = () => {
  return (
    <Wrapper>
      <IconWrapper
        variants={iconWrapperVariants}
        animate="animate"
        initial="init"
      >
        <IoConstructOutline size={400} color={colors.primary} />
      </IconWrapper>
      <Description>Page is under construction!</Description>
    </Wrapper>
  );
};

export default UnderConstruction;
