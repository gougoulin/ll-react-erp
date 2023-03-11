import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { regularIcons } from "../../assets/css/params";
import { toggleSider } from "../../redux/slices/asideSlice";
import { RootState } from "../../redux/store";
import { Fold, Unfold } from "../icons";

const Wrapper = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
`;

const ToggleAsideIcon = () => {
  const dispatch = useDispatch();
  const isMiniSider = useSelector(
    (state: RootState) => state.aside.isMiniSider
  );

  return (
    <Wrapper onClick={() => dispatch(toggleSider())}>
      {isMiniSider ? <Unfold {...regularIcons} /> : <Fold {...regularIcons} />}
    </Wrapper>
  );
};

export default ToggleAsideIcon;
