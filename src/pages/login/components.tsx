import { ChangeEvent, Dispatch, useState } from "react";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { NavigateFunction, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colors, space } from "../../assets/css/params";
import ButtonBase from "../../components/button/ButtonBase";
import TextButton from "../../components/button/TextButton";
import BaseInput from "../../components/form/BaseInput";
import BaseSelect from "../../components/form/BaseSelect";
import { login } from "../../router/constants";

export const StyledForm = styled.form`
  font-size: 1.6rem;
  display: grid;
  grid-template-columns: 2em 1fr;
  max-width: 30em;
  align-items: center;
  gap: ${space.small};
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  position: relative;
`;

export const StyledTextInput = styled(BaseInput)`
  font-size: 16px;
  min-width: 20em;
  min-height: 2em;
`;

export const StyledSelect = styled.div`
  /* font-size: 1.6rem;
  min-width: 15em;
  min-height: 3em; */
  grid-column: 2 / 3;
`;

export const LoginBtnGroupBox = styled.div`
  grid-column: 2 / 3;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;
export const BtnForget = styled(TextButton)``;

export const BtnRegister = styled(TextButton)``;

export const BtnSubmit = styled(ButtonBase)`
  grid-column: 2 / 3;
  margin-top: ${space.small};
`;

export const PageTitle = styled.h2`
  font-size: 4rem;
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 1em;
`;

export const GoLogin = styled(TextButton)`
  grid-column: 2 / 3;
`;