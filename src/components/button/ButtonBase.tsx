import { motion } from "framer-motion";
import { EventHandler, ReactNode } from "react";
import styled from "styled-components";
import { colors, space } from "../../assets/css/params";

const StyledButtonBase = styled(motion.button)`
  font-family: "Roboto", "Sans Serif", Arial;
  font-size: ${({ btnfontsize: btnFontSize }: ButtonBaseProps) => btnFontSize || "1.6rem"};
  padding: ${({ btnPadding }: ButtonBaseProps) =>
    btnPadding || space.buttonPadding};
  border-radius: ${space.borderRadius};
  border: ${({ btnBorder }: ButtonBaseProps) =>
    btnBorder || `1px solid ${colors.primary}`};
  text-transform: ${({ btnTextTransform }: ButtonBaseProps) =>
    btnTextTransform || "Capitalize"};
  background: ${({ btnBackground }: ButtonBaseProps) =>
    btnBackground || colors.primary};
  color: ${({ btntextcolor: btnTextColor }: ButtonBaseProps) => btnTextColor || colors.gray1};
  cursor: pointer;
`;

export type ButtonBaseProps = {
  children?: ReactNode;
  btnfontsize?: string;
  btnPadding?: string;
  btnTextTransform?: string;
  btnBackground?: string;
  btnBorder?: string;
  btntextcolor?: string;
  onClick?: EventHandler<any>;
};

const buttonVariants = {
  hover: {
    scale: 1.1
  }
};

const ButtonBase = (props: ButtonBaseProps) => {
  return (
    <StyledButtonBase variants={buttonVariants} whileHover="hover" {...props}>
      {props.children}
    </StyledButtonBase>
  );
};

export default ButtonBase;
