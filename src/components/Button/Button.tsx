import { FC, HTMLAttributes, ReactNode } from "react";
import buttonStyles from "./styles.module.scss";
import cn from "classnames";

const { button, buttonBlue, buttonGrey } = buttonStyles;
export interface Props extends HTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  type?: "grey" | "blue";
}
export const Button: FC<Props> = ({ icon, type = "blue", children }, props) => {
  return (
    <button
      className={cn(button, {
        [buttonBlue]: type === "blue",
        [buttonGrey]: type === "grey",
      })}
      {...props}
    >
      {icon} {children}
    </button>
  );
};
