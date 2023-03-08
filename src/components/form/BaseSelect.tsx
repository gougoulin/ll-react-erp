import { motion } from "framer-motion";
import React, {
  createRef,
  Dispatch,
  SetStateAction,
  SyntheticEvent,
  useEffect,
  useRef,
  useState
} from "react";
import { FaAngleDown } from "react-icons/fa";
import styled from "styled-components";
import { colors, space } from "../../assets/css/params";

const StyledBaseSelect = styled(motion.div)`
  box-sizing: border-box;
  font-size: 1.6rem;
  background-color: transparent;
  border: 0;
  outline: 0;
  display: flex;
  flex-flow: column nowrap;
  position: relative;
`;

const StyledOption = styled(motion.div)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6rem;
  min-height: 2em;
  padding-left: 2em;
  line-height: 2em;
  background-color: ${colors.gray1};
  border: 0;
  outline: 0;
`;
const customOptionVariants = {
  hover: {
    color: colors.gray1,
    backgroundColor: colors.primary
  }
};
const CustomOption = (props: Record<string, any>) => {
  return (
    <StyledOption
      variants={customOptionVariants}
      whileHover="hover"
      {...props}
    />
  );
};

const StyledOptionSelected = styled(StyledOption)`
  border: 1px solid ${colors.gray5};
  border-radius: ${space.borderRadius};
`;
const StyledOptionGroup = styled(motion.div)`
  position: absolute;
  top: 42px;
  width: 100%;
  border: 1px solid ${colors.gray5};
  border-radius: ${space.borderRadius};
  border-top: 0;
  overflow: hidden;
`;
type CustomOptionGroupProps = {};
const customOptionGroupVariants = {
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  },
  initial: {
    opacity: 0,
    y: "-42px"
  },
  hover: {
    scale: 1.1
  }
};
const CustomOptionGroup = (props: any & CustomOptionGroupProps) => {
  return (
    <StyledOptionGroup
      variants={customOptionGroupVariants}
      animate="animate"
      initial="initial"
      {...props}
    />
  );
};

const StyledSpan = styled.span`
  padding: 4px 0;
`;

const IconBox = styled.div`
  border: 0;
  outline: 0;
  border-left: 1px solid ${colors.gray5};
  padding: 0 0.8em;
  min-height: 40px;
  display: flex;
  place-items: center;
`;

type BaseSelectProps = {
  [key: string]: any;
  valueSelected: string;
  setValueSelected: Dispatch<SetStateAction<string>>;
  options: string[];
};

const BaseSelect = ({
  valueSelected,
  setValueSelected,
  options
}: BaseSelectProps) => {
  const [showMemu, setShowMemu] = useState(false);
  const onClick = () => {
    setShowMemu((state) => !state);
  };
  const handleMouseLeave = () => {
    setShowMemu(false);
  };
  const handleClick = (txt: string) => {
    setValueSelected(txt);
    setShowMemu(false);
  };
  const optionsOfSelect =
    options &&
    options.map((it, id) => {
      return (
        <CustomOption
          key={it + "-" + id}
          onClick={handleClick.bind(undefined, it)}
        >
          <StyledSpan>{it}</StyledSpan>
        </CustomOption>
      );
    });

  return (
    <StyledBaseSelect onMouseLeave={handleMouseLeave}>
      <StyledOptionSelected onClick={onClick}>
        <StyledSpan>{valueSelected}</StyledSpan>
        <IconBox>
          <FaAngleDown />
        </IconBox>
      </StyledOptionSelected>
      {/* <CustomOptionGroup>{optionsOfSelect}</CustomOptionGroup> */}
      {showMemu ? (
        <CustomOptionGroup>{optionsOfSelect}</CustomOptionGroup>
      ) : undefined}
    </StyledBaseSelect>
  );
};

export default BaseSelect;
