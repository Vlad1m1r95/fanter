import { FC } from "react";
import vipBannerStyles from "./styles.module.scss";
import bg from "./vipBannerBg.png";
import crown from "./crown.png";
import crown2 from "./crown2.png";
import cn from "classnames";
import { Arrow } from "../../icons/Arrow";

interface VipBannerProps {
  title: string;
  text: string;
  logo: string;
  post: string;
  videos: string;
  href: string;
}

const {
  vipBanner,
  background,
  content,
  title,
  text,
  crownImage,
  crownImageWithLogo,
  logoContainer,
  logo,
  showContent,
} = vipBannerStyles;

export const VipBanner: FC<VipBannerProps> = ({
  title: titleVipBanner,
  text: textVipBanner,
  logo: logoVipBanner,
  post: postVipBanner,
  videos: videosVipBanner,
  href,
}) => {
  return (
    <div className={vipBanner}>
      <img className={background} src={bg} alt="" />
      <div className={content}>
        <div>
          <div className={title}>{titleVipBanner}</div>
          <div className={text}>{textVipBanner}</div>
        </div>
        <div>
          {logoVipBanner && (
            <div className={logoContainer}>
              <img className={logo} src={logoVipBanner} alt="logo" />
            </div>
          )}
          <img
            className={cn({
              [crownImage]: !logoVipBanner,
              [crownImageWithLogo]: logoVipBanner,
            })}
            src={logoVipBanner ? crown2 : crown}
            alt="crown"
          />
        </div>
      </div>

      <a href={href} className={showContent}>
        {postVipBanner} post and {videosVipBanner} <Arrow />
      </a>
    </div>
  );
};
