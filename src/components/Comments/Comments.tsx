import { FC } from "react";
import { Avatar } from "../Avatar";

import commentsStyles from "./styles.module.scss";

const { comments, commentsList, comment } = commentsStyles;

export type CommentProps = {
  src: string;
  name: string;
  text: string;
  alt?: string;
};
export interface CommentsProps {
  commentsListArray: CommentProps[];
}
export const Comments: FC<CommentsProps> = ({ commentsListArray }) => {
  return (
    <div className={comments}>
      <ul className={commentsList}>
        {commentsListArray.map(({ src, text, name, alt = "?" }) => (
          <li className={comment}>
            <Avatar type="comment" src={src} alt={alt} /> <div>{name}</div>
            <div>{text}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
