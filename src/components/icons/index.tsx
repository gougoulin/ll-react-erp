import { IconType } from "react-icons";
import {
  AiFillProject,
  AiOutlineCheckCircle,
  AiOutlineClockCircle,
  AiOutlineCoffee,
  AiOutlineContacts,
  AiOutlineFileZip,
  AiOutlineGlobal,
  AiOutlineMail,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
  AiOutlineMessage,
  AiOutlineRead,
  AiOutlineSchedule,
  AiOutlineSetting,
  AiOutlineTeam,
  AiOutlineUser,
  AiOutlineVideoCamera,
  AiOutlineWarning
} from "react-icons/ai";
import { BsCalendar2Event, BsDisplay } from "react-icons/bs";
import { MdOutlineWbCloudy, MdOutlineWbSunny } from "react-icons/md";
import { BiRestaurant } from "react-icons/bi";

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

/**
 * Useful Links Section
 */
export const VIDEO_MEETING = AiOutlineVideoCamera;
export const READING_GROUP = AiOutlineRead;
export const GOVERNMENT_SITES = AiOutlineGlobal;
export const ARCHIEVE = AiOutlineFileZip;
export const EVENT = BsCalendar2Event;
export const HOTEL_MENU = BiRestaurant;

/**
 * Attendance page 
 */
export const ATTENDANCE_CHECK = AiOutlineCheckCircle;
export const ATTENDANCE_LATE = AiOutlineClockCircle;
export const ATTENDANCE_ABSENT = AiOutlineCoffee;
export const ATTENDANCE_WARN = AiOutlineWarning;

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
  CLOUDY,
  VIDEO_MEETING,
  READING_GROUP,
  GOVERNMENT_SITES,
  ARCHIEVE,
  EVENT,
  HOTEL_MENU,
  ATTENDANCE_CHECK,
  ATTENDANCE_LATE,
  ATTENDANCE_ABSENT,
  ATTENDANCE_WARN
};

export type AppIcons = typeof appIcons;

export default appIcons;
