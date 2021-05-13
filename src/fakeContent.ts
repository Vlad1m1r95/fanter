import { Comments, CommentProps } from "./components/Comments/Comments";

import avatar1 from "./components/Post/fakeCommentsAvatar/Mandiri.png";
import avatar2 from "./components/Post/fakeCommentsAvatar/Peter.png";
import postImage1 from "./components/Post/postImage1.png";
import postImage2 from "./components/Post/postImage2.png";
import { PostProps } from "./components/Post/Post";

export const FakeContentPost1: PostProps["content"] = {
  media: postImage1,
  avatar: "./avatar1.png",
  authorName: "n.korobkova",
  datePublishPost: "12 hours ago",
  postTitle: "My beautiful sunny day",
  postDescription: "I think it is just wonderfull, care to share please",
};

export const FakeContentPost2: PostProps["content"] = {
  media: postImage2,
  avatar: "./avatar2.png",
  authorName: "n.korobkova",
  datePublishPost: "12 hours ago",
  postTitle: "My beautiful sunny day",
  postDescription: "I think it is just wonderfull, care to share please",
};

export const FakeCommentsList: CommentProps[] = [
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
    text: "Where you bouth this mask, in seven eleven? I saw it there, price cost 20thb...",
  },
];

export const FakeCommentsListEmpty: CommentProps[] = [];
