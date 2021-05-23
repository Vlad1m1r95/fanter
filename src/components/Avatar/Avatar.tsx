import { FC } from "react";
import cn from "classnames";
import AvatarStyles from "./styles.module.scss";
interface Props {
  // bordered?: boolean;
  type: "profileHeader" | "profile" | "post" | "vipBanner" | "comment";
  src: string;
  alt: string;
  className?: string;
}

const { avatar } = AvatarStyles;

export const Avatar: FC<Props> = ({
  className,
  type = "post",
  src = "?",
  alt = "?",
}) => {
  return (
    <div className={cn(avatar, AvatarStyles[`${type}`], className)}>
      <img src={src} alt={alt} />
    </div>
  );
};
