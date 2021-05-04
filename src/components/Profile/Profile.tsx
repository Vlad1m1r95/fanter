import React, { FC } from "react";
import profileStyles from "./styles.module.scss";
import tokens from "../../styles/tokens.module.scss";
import cn from "classnames";
import { Button } from "../Button";
import { Follow } from "../../icons/Follow";
import { Message } from "../../icons/Message";
import { Location } from "../../icons/Location";
import KorobkovaProfileImage from "./KorobkovaProfileImage.jpg";
const {
  profile,
  conteiner,
  logo,
  logoContainer,
  info,
  userName,
  personName,
  userLocation,
  personInfo,
  buttonGroup,
  hashTag,
} = profileStyles;
const { content } = tokens;

export const Profile: FC = () => {
  return (
    <div className={profile}>
      <div className={cn(content)}>
        <div className={conteiner}>
          <div className={logo}>
            <div className={logoContainer}>
              <img src={KorobkovaProfileImage} alt="" />
            </div>
          </div>

          <div className={info}>
            <div className={userName}> @n.korobkova</div>
            <h1 className={personName}>
              Nadya Korobkova
              <div className={userLocation}>
                <Location /> United State, New York
              </div>
            </h1>
            <div className={personInfo}>
              <span>29 years</span> <span>I speak English, Spanish</span>
            </div>
            <div className={buttonGroup}>
              <Button icon={<Follow />}>Follow</Button>
              <Button icon={<Message />}>Message</Button>
            </div>
          </div>
          <div>
            You can call me Jacky!{" "}
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
