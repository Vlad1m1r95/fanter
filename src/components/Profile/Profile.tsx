import React, { FC } from "react";
import profileStyles from "./styles.module.scss";
import tokens from "../../styles/tokens.module.scss";
import cn from "classnames";
import { Button } from "../Button";
import { Follow } from "../../icons/Follow";
import { Message } from "../../icons/Message";
import { Location } from "../../icons/Location";
import KorobkovaProfileImage from "./KorobkovaProfileImage.jpg";
import { Avatar } from "../Avatar";
const {
  profile,
  container,
  wrapper,
  description,
  logo,
  logoContainer,
  info,
  userName,
  personName,
  userLocation,
  personInfo,
  personInfoMobile,
  buttonGroup,
  hashTag,
  avatarDesktop,
  avatarMobile,
  infoHeaderMobile,
} = profileStyles;
const { content } = tokens;

export const Profile: FC = () => {
  return (
    <div className={profile}>
      <div className={cn(content)}>
        <div className={container}>
          <div className={wrapper}>
            <div className={cn(logo, avatarDesktop)}>
              <Avatar type="profile" src={KorobkovaProfileImage} alt="" />
            </div>
            <div className={info}>
              <div className={infoHeaderMobile}>
                <div className={cn(logo, avatarMobile)}>
                  <Avatar
                    className={avatarMobile}
                    type="profile"
                    src={KorobkovaProfileImage}
                    alt=""
                  />
                </div>

                <div>
                  <div className={userName}> @n.korobkova</div>
                  <h1 className={personName}>Nadya Korobkova</h1>
                  <div className={userLocation}>
                    <Location /> United State, New York
                  </div>
                </div>
              </div>

              <div className={personInfo}>
                <span>29 years</span> <span>I speak English, Spanish</span>
              </div>
              <div className={buttonGroup}>
                <Button icon={<Follow />}>Follow</Button>
                <Button icon={<Message />}>Message</Button>
              </div>

              <div className={personInfoMobile}>
                <span>29 years</span> <span>I speak English, Spanish</span>
              </div>
            </div>
          </div>

          <div className={description}>
            You can call me Jacky!
            <a className={hashTag} href="#DiosConmigo">
              #DiosConmigo
            </a>{" "}
            Get a look inside my private life things I don’t share anywhere
            else! 😃 I stay working on my world
          </div>
        </div>
      </div>
    </div>
  );
};
