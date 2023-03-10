import {
  AiFillProject,
  AiOutlineContacts,
  AiOutlineMail,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
  AiOutlineMessage,
  AiOutlineSchedule,
  AiOutlineSetting,
  AiOutlineTeam
} from "react-icons/ai";
import { BsDisplay } from "react-icons/bs";
import { colors } from "../../assets/css/params";

export const task = <BsDisplay size={"1.5em"} color={colors.gray1} />;
export const project = <AiFillProject size={"1.5em"} color={colors.gray1} />;
export const email = <AiOutlineMail size={"1.5em"} color={colors.gray1} />;
export const team = <AiOutlineTeam size={"1.5em"} color={colors.gray1} />;
export const agenda = <AiOutlineSchedule size={"1.5em"} color={colors.gray1} />;
export const meeting = <AiOutlineMessage size={"1.5em"} color={colors.gray1} />;
export const contact = (
  <AiOutlineContacts size={"1.5em"} color={colors.gray1} />
);
export const setting = <AiOutlineSetting size={"1.5em"} color={colors.gray1} />;
export const fallback = (
  <AiOutlineSetting size={"1.5em"} color={colors.gray1} />
);
export const fold = <AiOutlineMenuFold size={"1.5em"} color={colors.gray1} />;
export const unfold = (
  <AiOutlineMenuUnfold size={"1.5em"} color={colors.gray1} />
);

const appIcons: Record<string, JSX.Element> = {
  task,
  project,
  email,
  team,
  agenda,
  meeting,
  contact,
  setting,
  fallback,
  fold,
  unfold
};

export type AppIcons = typeof appIcons;

export default appIcons;
