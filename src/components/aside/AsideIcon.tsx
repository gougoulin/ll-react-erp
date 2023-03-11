import React from "react";
import { regularIcons } from "../../assets/css/params";
import { capitalize } from "../../utils/text";
import appIcons, { Fallback } from "../icons";

type AsideIconProps = { txt: string };

const AsideIcon = ({ txt }: AsideIconProps) => {
  const key = txt === "" ? "Fallback" : capitalize(txt);
  const Icon = appIcons[key];
  return <Icon {...regularIcons} />;
};

export default AsideIcon;
