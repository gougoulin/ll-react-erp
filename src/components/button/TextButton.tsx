import styled from "styled-components";
import { colors } from "../../assets/css/params";
import ButtonBase, { ButtonBaseProps } from "./ButtonBase";

const StyledTextButton = styled(ButtonBase)`
  padding: 0;
  border: none;
  background: transparent;
  
`;
type TextButtonProps = ButtonBaseProps;

const TextButton = (props: TextButtonProps) => {
  
  return (
    <StyledTextButton {...props} btntextcolor={props.btntextcolor || colors.primary}>
      {props.children}
    </StyledTextButton>
  );
};

export default TextButton;
