import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface PageSwitchAnimationWrapperProps {
  children: ReactNode;
}

const variants = {
  final: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring"
    }
  },
  init: {
    y: -200,
    opacity: 0.1,
  }
};

const PageSwitchAnimationWrapper = (props: PageSwitchAnimationWrapperProps) => {
  const { children } = props;
  return (
    <motion.div variants={variants} animate="final" initial="init">
      {children}
    </motion.div>
  );
};

export default PageSwitchAnimationWrapper;
