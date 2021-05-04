import { FC } from "react";
import { Exit } from "../../icons/Exit";

import userProfileStyles from "./styles.module.scss";

const { userProfile, logoContainer, greetings, userName } = userProfileStyles;
export const UserProfile: FC = () => {
  return (
    <div className={userProfile}>
      <div className={greetings}>Hello,</div>
      <div className={userName}>Mandira</div>
      <div className={logoContainer}>
        <img src="userPhoto.png" alt="" />
      </div>
      <Exit />
    </div>
  );
};
