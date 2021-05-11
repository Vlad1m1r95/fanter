import { FC } from "react";
import stylesPost from "./styles.module.scss";
import authorPhoto from "../Profile/KorobkovaProfileImage.jpg";
import post1 from "./postImage1.png";

import { Share } from "../../icons/Share";
import { Coin } from "../../icons/Coin";
import { Like } from "../../icons/Like";
import { Comments, CommentProps } from "../Comments/Comments";

import avatar1 from "./fakeCommentsAvatar/Mandiri.png";
import avatar2 from "./fakeCommentsAvatar/Peter.png";

const {
  post,
  postHeader,
  postBody,
  comments,
  authorHeader,
  authorInfo,
  authorPhotoContainer,
  authorName,
  datePublishPost,
  sharePost,
  shareIcon,
  postEntity,
  postDescription,
  likeConteiner,
} = stylesPost;

const FakeCommentsList: CommentProps[] = [
  {
    src: avatar1,
    name: "Mandiri",
    text: "Really good mask",
  },

  {
    src: avatar2,
    name: "Jonesen Pi",
    text: "I want nothing samilar",
  },

  {
    src: avatar2,
    name: "Piter",
    text:
      "Where you bouth this mask, in seven eleven? I saw it there, price cost 20thb...",
  },
];

export const Post: FC = () => {
  return (
    <div className={post}>
      <div className={postHeader}>
        <div className={authorHeader}>
          <div className={authorPhotoContainer}>
            <img className={authorPhoto} src={authorPhoto} alt="" />
          </div>
          <div className={authorInfo}>
            <div className={authorName}>n.korobkova</div>
            <div className={datePublishPost}>12 hours ago</div>
          </div>

          <div className={sharePost}></div>
        </div>
        <Share className={shareIcon} />
      </div>
      <div className={postBody}>
        <div className={postEntity}>
          <img src={post1} alt="" />
        </div>
        <div className={postDescription}>
          <div>
            My beautiful sunny day
            <div className={likeConteiner}>
              <div>
                <Like /> <span>892 </span>
              </div>
              <div>
                <Coin />
                <span>Tipp</span>
              </div>
            </div>
          </div>
          <p>I think it is just wonderfull, care to share please</p>
        </div>
      </div>
      <Comments commentsListArray={FakeCommentsList} />
    </div>
  );
};
