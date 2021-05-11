import { FC } from "react";
import cn from "classnames";
import AvatarStyles from "./styles.module.scss";
interface Props {
  // bordered?: boolean;
  type: "profileHeader" | "profile" | "post" | "vipBanner" | "comment";
  src: string;
  alt: string;
}

const { avatar } = AvatarStyles;

export const Avatar: FC<Props> = ({ type = "post", src = "?", alt = "?" }) => {
  return (
    <div className={cn(avatar, AvatarStyles[`${type}`])}>
      <img src={src} alt={alt} />
    </div>
  );
};
