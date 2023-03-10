import { ChangeEvent, Dispatch, useState } from "react";
import { FaLock, FaMobileAlt, FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../assets/css/params";
import BaseInput from "../components/form/BaseInput";
import {
  BtnSubmit,
  GoLogin,
  IconBox,
  PageTitle,
  StyledForm,
  StyledTextInput
} from "../components/login/components";
import { login } from "../router/constants";

const StyledRadio = styled(BaseInput)`
  font-size: 1.6rem;
  margin-right: 0.5em;
`;

const RadioGroup = styled.div`
  grid-column: 2 / 3;

  & > label {
    margin-right: 1.5em;
  }
`;

const PasswordAgain = styled(StyledTextInput)`
  grid-column: 2 / 3;
`;


const LoginSignup = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordAgain, setPasswordAgain] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  // TODO 表单验证功能
  const [usernameError, setUserNameError] = useState<string>("");
  const [passwordError, setUserPasswordError] = useState<string>("");

  const navigate = useNavigate();

  const handleChange = (
    act: Dispatch<React.SetStateAction<string>>,
    e: ChangeEvent<HTMLInputElement>
  ) => act(e.target.value);

  const handleSubmit = (e: MouseEvent) => {
    e.preventDefault();
    console.log("form submit", username, password, phone)
    // TODO 表单数据发送
  };

  const handleRedirect = (e: MouseEvent) => {
    e.preventDefault();
    navigate(login.index);
  }

  return (
    <div>
      <PageTitle>sign up</PageTitle>
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
        <RadioGroup>
          <label htmlFor="">
            <StyledRadio type="radio" name="gender" />
            <span>Male</span>
          </label>
          <label htmlFor="">
            <StyledRadio type="radio" name="gender" />
            <span>Female</span>
          </label>
        </RadioGroup>
        <IconBox>
          <FaMobileAlt size="1.5em" color={colors.primary} />
        </IconBox>
        <StyledTextInput
          type="text"
          name="phone"
          value={phone}
          onChange={handleChange.bind(null, setPhone)}
        />
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
        <BtnSubmit onClick={handleSubmit}>sign up now</BtnSubmit>
        <GoLogin onClick={handleRedirect}>
          already has a account, to login
        </GoLogin>
      </StyledForm>
    </div>
  );
};

export default LoginSignup;
