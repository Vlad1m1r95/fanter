import { FC } from "react";
import "./styles/reset.css";
import "./styles/fonts.scss";
import "./styles/global.scss";
import { Layout } from "./components/Layout";
import { PremiumContent } from "./components/PremiumContent";

export const App: FC = () => {
  return (
    <Layout>
      <PremiumContent />
    </Layout>
  );
};
