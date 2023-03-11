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
import { MdOutlineWbCloudy, MdOutlineWbSunny } from "react-icons/md";


export const Dashboard = BsDisplay;
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

export const SUNNY = MdOutlineWbSunny;
export const CLOUDY = MdOutlineWbCloudy;

const appIcons: Record<string, IconType> = {
  Dashboard,
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
  DefaultUserAvatar,
  SUNNY,
  CLOUDY
};

export type AppIcons = typeof appIcons;

export default appIcons;
