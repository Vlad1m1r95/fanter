import React, { FC } from "react";
import "./styles/reset.css";
import "./styles/fonts.scss";
import "./styles/global.scss";
import { Layout } from "./components/Layout";

import { VipBanner } from "./components/VipBanner";

import logo from "./components/Profile/KorobkovaProfileImage.jpg";
import { Post } from "./components/Post";

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

      <Post />
    </Layout>
  );
};
