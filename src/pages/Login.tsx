import { ChangeEvent, Dispatch, useState } from "react";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { NavigateFunction, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colors, space } from "../assets/css/params";
import ButtonBase from "../components/button/ButtonBase";
import TextButton from "../components/button/TextButton";
import BaseInput from "../components/form/BaseInput";
import BaseSelect from "../components/form/BaseSelect";
import { login } from "../router/constants";

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
  position: relative;
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
  const [department, setDepartment] = useState<string>("deparment");
  const [usernameError, setUserNameError] = useState<string>("");
  const [passwordError, setUserPasswordError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const navigate: NavigateFunction = useNavigate();
  const handleChange = (
    act: Dispatch<React.SetStateAction<string>>,
    e: ChangeEvent<HTMLInputElement>
  ) => act(e.target.value);
  const handleSubmit = (e: MouseEvent) => {
    e.preventDefault();
    navigate("/");
  };
  const handleRedirect = (act: NavigateFunction, path: string) => act(path);
  return (
    <StyledForm>
      <IconBox>
        <FaUserAlt size="1.5em" color={colors.primary} />
      </IconBox>
      <StyledTextInput
        type="text"
        name="username"
        value={username}
        onChange={handleChange.bind(null, setUsername)}
      />
      <IconBox>
        <FaLock size="1.5em" color={colors.primary} />
      </IconBox>
      <StyledTextInput
        type="password"
        name="username"
        value={password}
        onChange={handleChange.bind(null, setPassword)}
      />
      <StyledSelect>
        <BaseSelect
          valueSelected={department}
          setValueSelected={setDepartment}
          options={["Test 1", "Test 2", "Test 3", "Test 4"]}
        />
      </StyledSelect>
      <LoginBtnGroupBox>
        <BtnForget
          onClick={handleRedirect.bind(
            null,
            navigate,
            `${login.index}/${login.passwordReset}`
          )}
          btntextcolor={colors.gray9}
          btnfontsize="1.2rem"
        >
          forget password
        </BtnForget>
        <BtnRegister
          onClick={handleRedirect.bind(
            null,
            navigate,
            `${login.index}/${login.signin}`
          )}
          btnfontsize="1.2rem"
        >
          sign in
        </BtnRegister>
      </LoginBtnGroupBox>
      <BtnSubmit onClick={handleSubmit}>log in</BtnSubmit>
    </StyledForm>
  );
};

export default Login;
