import { ChangeEvent, Dispatch, useState } from "react";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { colors } from "../assets/css/params";
import BaseSelect from "../components/form/BaseSelect";
import { login } from "../router/constants";
import {
  BtnForget,
  BtnRegister,
  BtnSubmit,
  IconBox,
  LoginBtnGroupBox,
  PageTitle,
  StyledForm,
  StyledSelect,
  StyledTextInput
} from "./login/components";

const Login = () => {
  const [department, setDepartment] = useState<string>("deparment");
  // TODO 表单验证功能
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
  const handleRedirect = (
    act: NavigateFunction,
    path: string,
    e: MouseEvent
  ) => {
    e.preventDefault();
    act(path);
  };
  return (
    <div>
      <PageTitle>ERP Sign In</PageTitle>
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
            sign up
          </BtnRegister>
        </LoginBtnGroupBox>
        <BtnSubmit onClick={handleSubmit}>log in</BtnSubmit>
      </StyledForm>
    </div>
  );
};

export default Login;
