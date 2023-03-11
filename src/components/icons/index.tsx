import { Fragment } from "react";
import { IconType } from "react-icons";
import {
  AiFillProject,
  AiOutlineContacts,
  AiOutlineMail,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
  AiOutlineMessage,
  AiOutlineSchedule,
  AiOutlineSetting,
  AiOutlineTeam,
  AiOutlineUser
} from "react-icons/ai";
import { BsDisplay } from "react-icons/bs";
import { colors } from "../../assets/css/params";

export const Task = BsDisplay;
export const Project = AiFillProject;
export const Email = AiOutlineMail;
export const Team = AiOutlineTeam;
export const Agenda = AiOutlineSchedule;
export const Meeting = AiOutlineMessage;
export const Contact = AiOutlineContacts;
export const Setting = AiOutlineSetting;
export const Fallback = AiOutlineSetting;
export const Fold = AiOutlineMenuFold;
export const Unfold = AiOutlineMenuUnfold;

export const DefaultUserAvatar = AiOutlineUser;

const appIcons: Record<string, IconType> = {
  Task,
  Project,
  Email,
  Team,
  Agenda,
  Meeting,
  Contact,
  Setting,
  Fallback,
  Fold,
  Unfold,
  DefaultUserAvatar
};

export type AppIcons = typeof appIcons;

export default appIcons;
