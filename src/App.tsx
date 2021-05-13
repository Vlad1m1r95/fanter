import React, { FC } from "react";
import "./styles/reset.css";
import "./styles/fonts.scss";
import "./styles/global.scss";
import { Layout } from "./components/Layout";
import { VipBanner } from "./components/VipBanner";
import logo from "./components/Profile/KorobkovaProfileImage.jpg";
import { Post } from "./components/Post";
import {
  FakeCommentsList,
  FakeCommentsListEmpty,
  FakeContentPost1,
  FakeContentPost2,
} from "./fakeContent";

export const App: FC = () => {
  return (
    <Layout>
      <VipBanner
        title="Fanter VIP"
        text="Access to premium 
content $35/mo"
        logo=""
        post="95,000"
        videos="29,760"
        href="/"
      />
      <VipBanner
        title="Nadya 
        Korobkova VIP"
        text="Access to premium 
        content $18/mo"
        logo={logo}
        post="182"
        videos="82"
        href="/"
      />

      <Post
        content={FakeContentPost1}
        commentsList={FakeCommentsList}
        status="success"
        loadingText="Your video uploading..."
        loaadingDescription="Soon video will be available
        this information see only you"
        errorText="Opps, video converting error"
        errorDescription="Your video can’t be uploaded"
        likes={888}
        showTipp={true}
      />
      <Post
        content={FakeContentPost2}
        commentsList={FakeCommentsListEmpty}
        status="success"
        loadingText="Your video uploading..."
        loaadingDescription="Soon video will be available
      this information see only you"
        errorText="Opps, video converting error"
        errorDescription="Your video can’t be uploaded"
        likes={999}
        showTipp={false}
      />

      <Post
        content={FakeContentPost2}
        commentsList={FakeCommentsListEmpty}
        status="loading"
        loadingText="Your video uploading..."
        loaadingDescription="Soon video will be available
      this information see only you"
        errorText="Opps, video converting error"
        errorDescription="Your video can’t be uploaded"
        likes={444}
        showTipp={true}
      />

      <Post
        content={FakeContentPost2}
        commentsList={FakeCommentsListEmpty}
        status="failed"
        loadingText="Your video uploading..."
        loaadingDescription="Soon video will be available
      this information see only you"
        errorText="Opps, video converting error"
        errorDescription="Your video can’t be uploaded"
        likes={777}
        showTipp={true}
      />
    </Layout>
  );
};
