import { FC } from "react";
import { Header } from "../Header";
import { Profile } from "../Profile";
import { ProfileHeader } from "../ProfileHeader";
import tokens from "../../styles/tokens.module.scss";
import layoutStyles from "./styles.module.scss";
import cn from "classnames";
import { NavBar } from "../NavBar";

const { content } = tokens;
const { gridContent } = layoutStyles;
export const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <ProfileHeader />
      <Profile />
      <div className={cn(content, gridContent)}>
        <NavBar />
        <div>{children}</div>
      </div>
    </>
  );
};
