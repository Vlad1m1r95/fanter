import React, { FC } from "react";
import { Chat } from "../../icons/Chat";
import { Logo } from "../../icons/Logo";
import { TimeLine } from "../../icons/TimeLine";
import headerStyles from "./styles.module.scss";
import { UserProfile } from "../UserProfile/UserProfile";

const { header, content, contentHeader, logo, barItem, badge } = headerStyles;
export const Header: FC = () => {
  return (
    <div className={header}>
      <div className={content}>
        <div className={contentHeader}>
          <div className={logo}>
            <Logo />
          </div>
          <div className={barItem}>
            <TimeLine /> <p>Timeline</p>
          </div>
          <div className={barItem}>
            <div className={badge}>
              <i>3</i>
              <Chat />
            </div>
            <p>Chats</p>
          </div>

          <div className={barItem}></div>
          <div className={barItem}>
            <UserProfile />
          </div>
        </div>
      </div>
    </div>
  );
};
