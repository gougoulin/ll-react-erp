import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { toggleSider } from "../../redux/slices/asideSlice";
import { RootState } from "../../redux/store";
import { fold, unfold } from "../icons";

const Wrapper = styled.div`
  position: absolute;
  bottom: 1vh;
  left: 1vw;
`;

const ToggleAsideIcon = () => {
  const dispatch = useDispatch();
  const isMiniSider = useSelector(
    (state: RootState) => state.aside.isMiniSider
  );
  return (
    <Wrapper onClick={() => dispatch(toggleSider())}>
      {isMiniSider ? unfold : fold}
    </Wrapper>
  );
};

export default ToggleAsideIcon;
