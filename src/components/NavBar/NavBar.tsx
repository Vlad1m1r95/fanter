import { FC } from "react";
import { Liked } from "../../icons/Navbar/Liked";
import { Post } from "../../icons/Navbar/Post";
import { Private } from "../../icons/Navbar/Private";
import { Starred } from "../../icons/Navbar/Starred";
import { Videos } from "../../icons/Navbar/Videos";

import NavBarStyles from "./styles.module.scss";

const { navbar, active, icon, navLink, iconVideo } = NavBarStyles;

export const NavBar: FC = () => {
  return (
    <ul className={navbar}>
      <li className={active} tabIndex={0}>
        <Post className={icon} />
        Post
      </li>
      <li tabIndex={0}>
        <Private className={icon} /> Private
      </li>
      <li tabIndex={0}>
        <Videos className={iconVideo} /> Videos
      </li>
      <li tabIndex={0}>
        <Starred className={icon} /> Starred
      </li>
      <li tabIndex={0}>
        <Liked className={icon} />
        Liked
      </li>
    </ul>
  );
};
