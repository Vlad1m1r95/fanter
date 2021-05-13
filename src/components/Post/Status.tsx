import { FC } from "react";
import statusStyles from "./styles.module.scss";
import loading from "./loading.png";
import sadEmoji from "./sadEmoji.png";
import { Button } from "../Button";
import { Trash } from "../../icons/Trash";
interface StatusProps {
  status: "loading" | "failed";
  title: string;
  description: string;
}

const { status, statusTitle, statusDescription } = statusStyles;
export const Status: FC<StatusProps> = ({ status: st, title, description }) => {
  return (
    <div className={status}>
      {st === "loading" && <img src={loading} alt="" />}
      {st === "failed" && <img src={sadEmoji} alt="" />}
      <div className={statusTitle}>{title}</div>
      <div className={statusDescription}>{description}</div>
      {st === "failed" && (
        <Button icon={<Trash />} color="darkBlue">
          Delete
        </Button>
      )}
    </div>
  );
};
