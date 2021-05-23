import { FC } from "react";

import profileStyles from "./styles.module.scss";

import profileHeaderBg from "./profileHeaderBg.png";
import KorobkovaProfileBg from "./KorobkovaProfileBg.jpg";
import { Settings } from "../../icons/Settings";
import { ArrowMobileHeader } from "../../icons/Navbar/ArrowMobileHeader";

const { profileHeader } = profileStyles;

export const ProfileHeader: FC = () => {
  return (
    <div className={profileHeader}>
      <Settings />
      <ArrowMobileHeader />
      <img src={KorobkovaProfileBg} alt="" />
      <img src={profileHeaderBg} alt="" />
    </div>
  );
};
