import { FC } from "react";
import stylesPost from "./styles.module.scss";
import authorPhoto from "../Profile/KorobkovaProfileImage.jpg";

import { Share } from "../../icons/Share";
import { Coin } from "../../icons/Coin";
import { Like } from "../../icons/Like";
import { Comments, CommentProps } from "../Comments/Comments";
import cn from "classnames";
import { Status } from "./Status";

const {
  post,
  postHeader,
  postBody,
  postEntity,
  postEntityBlack,
  comments,
  authorHeader,
  authorInfo,
  authorPhotoContainer,
  authorName,
  datePublishPost,
  sharePost,
  shareIcon,

  postDescription,
  likeConteiner,
} = stylesPost;

export interface PostProps {
  content: {
    media: string;
    avatar: string;
    authorName: string;
    datePublishPost: string;
    postTitle: string;
    postDescription: string;
  };
  status: "loading" | "failed" | "success";
  loadingText: string;
  loaadingDescription: string;
  errorText: string;
  errorDescription: string;
  commentsList: CommentProps[];
  likes: number;
  showTipp: boolean;
}

export const Post: FC<PostProps> = ({
  content: {
    media,
    avatar,
    authorName: author,
    datePublishPost: date,
    postTitle: title,
    postDescription: description,
  },
  commentsList,
  status,
  loadingText,
  loaadingDescription,
  errorText,
  errorDescription,
  likes,
  showTipp,
}) => {
  return (
    <div className={post}>
      <div className={postHeader}>
        <div className={authorHeader}>
          <div className={authorPhotoContainer}>
            <img className={authorPhoto} src={avatar} alt="?" />
          </div>
          <div className={authorInfo}>
            <div className={authorName}>{author}</div>
            <div className={datePublishPost}>{date}</div>
          </div>

          <div className={sharePost}></div>
        </div>
        <Share className={shareIcon} />
      </div>
      <div className={postBody}>
        <div
          className={cn(postEntity, {
            [postEntityBlack]: status === "loading" || "error",
          })}
        >
          {status === "success" && <img src={media} alt="" />}
          {status === "loading" && (
            <Status
              status="loading"
              title={loadingText}
              description={loaadingDescription}
            />
          )}
          {status === "failed" && (
            <Status
              status="failed"
              title={errorText}
              description={errorDescription}
            />
          )}
        </div>

        <div className={postDescription}>
          <div>
            {title}
            <div className={likeConteiner}>
              {status !== "loading" && status !== "failed" ? (
                <>
                  <div>
                    <Like /> <span>892 </span>
                  </div>
                  {showTipp && (
                    <div>
                      <Coin />
                      <span>Tipp</span>
                    </div>
                  )}
                </>
              ) : (
                <div>
                  <Like
                    opacity={
                      status !== "loading" && status !== "failed" ? 1 : 0.3
                    }
                  />
                  <span>{likes}</span>
                </div>
              )}
            </div>
          </div>
          <p>{description}</p>
        </div>
      </div>
      <Comments commentsListArray={commentsList} />
    </div>
  );
};
