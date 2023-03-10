import { ChangeEvent, Dispatch, useState } from "react";
import { FaLock, FaMobile, FaMobileAlt, FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../assets/css/params";
import ButtonBase from "../components/button/ButtonBase";
import TextButton from "../components/button/TextButton";
import BaseInput from "../components/form/BaseInput";
import { login } from "../router/constants";
import {
  BtnSubmit,
  GoLogin,
  IconBox,
  PageTitle,
  StyledForm,
  StyledTextInput
} from "./login/components";

const PasswordAgain = styled(StyledTextInput)`
  grid-column: 2 / 3;
`;

const SendCodeGroup = styled.div`
  grid-column: 2 / 3;
  display: flex;
`;
const SendCodeBtn = styled(ButtonBase)`
  min-width: 10em;
  margin-left: 1.5em;
`;
const CodeInput = styled(StyledTextInput)`
  min-width: 1em;
`;

const LoginPasswordReset = () => {
  const [department, setDepartment] = useState<string>("deparment");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordAgain, setPasswordAgain] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [code, setCode] = useState<string>("");
  // TODO 表单验证功能
  const [usernameError, setUserNameError] = useState<string>("");
  const [passwordError, setUserPasswordError] = useState<string>("");

  const navigate = useNavigate();

  const handleChange = (
    act: Dispatch<React.SetStateAction<string>>,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    act(e.target.value);
  };

  const handleSubmit = (e: MouseEvent) => {
    e.preventDefault();
    navigate(login.index);
  };

  const handleRedirect = (e: MouseEvent) => {
    e.preventDefault();
    navigate(login.index);
  };

  const handleSendCode = (e: MouseEvent) => {
    e.preventDefault(); // TODO logic to send the 4-digit code
  }

  return (
    <div>
      <PageTitle>find your password</PageTitle>
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
          <FaMobileAlt size="1.5em" color={colors.primary} />
        </IconBox>
        <StyledTextInput
          type="text"
          name="phone"
          value={phone}
          onChange={handleChange.bind(null, setPhone)}
        />
        <SendCodeGroup>
          <CodeInput
            type="text"
            name="code"
            value={code}
            onChange={handleChange.bind(null, setCode)}
          />
          <SendCodeBtn onClick={handleSendCode}>Send Code</SendCodeBtn>
        </SendCodeGroup>
        <IconBox>
          <FaLock size="1.5em" color={colors.primary} />
        </IconBox>
        <StyledTextInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange.bind(null, setPassword)}
        />
        <PasswordAgain
          type="password"
          name="password_again"
          value={passwordAgain}
          onChange={handleChange.bind(null, setPasswordAgain)}
        />
        <BtnSubmit onClick={handleSubmit}>confirm</BtnSubmit>
        <GoLogin onClick={handleRedirect}>
          already has a account, to login
        </GoLogin>
      </StyledForm>
    </div>
  );
};

export default LoginPasswordReset;
