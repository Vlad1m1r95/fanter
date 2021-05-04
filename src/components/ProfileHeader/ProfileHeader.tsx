import { FC } from "react";

import profileStyles from "./styles.module.scss";

import profileHeaderBg from "./profileHeaderBg.png";
import KorobkovaProfileBg from "./KorobkovaProfileBg.jpg";
import { Settings } from "../../icons/Settings";

const { profileHeader } = profileStyles;

export const ProfileHeader: FC = () => {
  return (
    <div className={profileHeader}>
      <Settings />
      <img src={KorobkovaProfileBg} alt="" />
      <img src={profileHeaderBg} alt="" />
    </div>
  );
};
