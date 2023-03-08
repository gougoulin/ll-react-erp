import styled from "styled-components";
import { colors, space } from "../assets/css/params";
import CenterAllBox from "../components/layout/CenterAllBox";
import { FaUserAlt, FaLock } from "react-icons/fa";
import TextButton from "../components/button/TextButton";
import ButtonBase from "../components/button/ButtonBase";
import BaseInput from "../components/form/BaseInput";
import BaseSelect from "../components/form/BaseSelect";
import { useState } from "react";

const LoginRootBox = styled(CenterAllBox)`
  background-color: ${colors.primary};
  min-height: 100vh;
  min-width: 100vw;
`;

const ContentBox = styled(CenterAllBox)`
  font-size: 1.6rem;
  width: 1060px;
  height: 652px;
  background: ${colors.gray1};
`;
const StyledForm = styled.form`
  font-size: 1.6rem;
  display: grid;
  grid-template-columns: 2em 1fr;
  max-width: 30em;
  align-items: center;
  gap: ${space.small};
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;
const StyledTextInput = styled(BaseInput)`
  font-size: 16px;
  min-width: 20em;
  min-height: 2em;
`;
const StyledSelect = styled.div`
  /* font-size: 1.6rem;
  min-width: 15em;
  min-height: 3em; */
  grid-column: 2 / 3;
`;

const LoginBtnGroupBox = styled.div`
  grid-column: 2 / 3;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;
const BtnForget = styled(TextButton)``;
const BtnRegister = styled(TextButton)``;
const BtnSubmit = styled(ButtonBase)`
  grid-column: 2 / 3;
  margin-top: ${space.small};
`;

const Login = () => {
  const [valueSelected, setValueSelected] = useState<string>("deparment");
  return (
    <LoginRootBox>
      <ContentBox>
        <StyledForm action="">
          <IconBox>
            <FaUserAlt size="1.5em" color={colors.primary} />
          </IconBox>
          <StyledTextInput type="text" name="username" />
          <IconBox>
            <FaLock size="1.5em" color={colors.primary} />
          </IconBox>
          <StyledTextInput type="password" name="username" />
          <StyledSelect>
            <BaseSelect
              valueSelected={valueSelected}
              setValueSelected={setValueSelected}
              options={["Test 1", "Test 2", "Test 3", "Test 4"]}
            />
          </StyledSelect>
          <LoginBtnGroupBox>
            <BtnForget btntextcolor={colors.gray9} btnfontsize="1.2rem">
              forget password
            </BtnForget>
            <BtnRegister btnfontsize="1.2rem">sign in</BtnRegister>
          </LoginBtnGroupBox>
          <BtnSubmit>submit</BtnSubmit>
        </StyledForm>
      </ContentBox>
    </LoginRootBox>
  );
};

export default Login;
