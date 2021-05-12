import { FC } from "react";
import { Arrow } from "../../icons/Arrow";
import { Comment } from "../../icons/Comment";
import { Avatar } from "../Avatar";

import commentsStyles from "./styles.module.scss";

const {
  comments,
  commentsList,
  comment,
  showAllComments,
  addComment,
  showMore,
} = commentsStyles;

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
      {commentsListArray.length > 0 && (
        <>
          <ul className={commentsList}>
            {commentsListArray.map(({ src, text, name, alt = "?" }) => (
              <li className={comment}>
                <Avatar type="comment" src={src} alt={alt} /> <div>{name}</div>
                <span>{text}</span>{" "}
                {text.length > 50 && (
                  <button className={showMore}>
                    more <Arrow />
                  </button>
                )}
              </li>
            ))}
          </ul>
          <div className={showAllComments}>
            {" "}
            <Comment /> Show comments (56)
          </div>
        </>
      )}

      <div className={addComment}>
        <input placeholder="Type a comment" type="text" />
        <a href="/" role="button">
          Sumbit
        </a>
      </div>
    </div>
  );
};
