import { FC, HTMLAttributes, ReactHTMLElement, ReactNode } from "react";
import buttonStyles from "./styles.module.scss";
import cn from "classnames";

const { button, buttonBlue, buttonGrey, buttonDarkBlue } = buttonStyles;
export interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon: ReactNode;
  color?: "grey" | "blue" | "darkBlue";
}
export const Button: FC<Props> = ({
  icon,
  color = "blue",
  children,
  ...props
}) => {
  return (
    <button
      className={cn(button, {
        [buttonBlue]: color === "blue",
        [buttonGrey]: color === "grey",
        [buttonDarkBlue]: color === "darkBlue",
      })}
      {...props}
    >
      {icon} {children}
    </button>
  );
};
