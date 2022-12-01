import React from "react";
import Navigation from "../components/Navigation/Navigation";
import {Helmet, Link, Trans, useI18next, useTranslation} from "gatsby-plugin-react-i18next";

// @ts-ignore
import * as styles from "./Default.module.scss";
import "../index.scss";

type Props = {
  wrap?: boolean
  navTransparencyMode?: "opaque"|"transparentWhenAtTop"
  noNavigationSpacer?: boolean
}

const Layout = ({children, wrap, navTransparencyMode, noNavigationSpacer}: React.PropsWithChildren<Props>) => {
  const {languages, originalPath} = useI18next();
  const {t} = useTranslation();
  return <div className={styles.layout + (noNavigationSpacer ? " "+styles.noNavSpacer : "")}>
    <Helmet>
      <title>KREIG.de</title>
    </Helmet>
    <Navigation transparencyMode={navTransparencyMode} />
    <div role={"main"} className={styles.main}>
      {!wrap && children}
      {wrap && <div className={styles.layoutBox}>{children}</div>}
    </div>
    <footer>
      <div className={styles.footerLinks}>
        <div className={styles.footerBlock}>
          <span className={styles.footerTitle}><Trans i18nKey={"layout.footer.languages"} /></span>
          {languages.map((lng) => (
              <Link to={originalPath} language={lng} key={lng}>
                {t("lng."+lng)}
              </Link>
          ))}
          {/*<Link to={"/members"}><Trans i18nKey={"layout.footer.members"} /></Link>*/}
        </div>
        <div className={styles.footerBlock}>
          <span className={styles.footerTitle}><Trans i18nKey={"layout.footer.social"} /></span>
          <a href="/discord" target="_blank" rel="noopener"><Trans i18nKey={"layout.footer.discord"} /></a>
          <a href="https://www.twitch.tv/KreigTV" target="_blank" rel="noopener"><Trans i18nKey={"layout.footer.twitch"} /></a>
          <a href="https://twitter.com/KreigClan" target="_blank" rel="noopener"><Trans i18nKey={"layout.footer.twitter"} /></a>
          <a href="https://www.youtube.com/channel/UClpiVA0oumf3lG-gIZPnr2w" target="_blank" rel="noopener"><Trans i18nKey={"layout.footer.youtube"} /></a>
        </div>
        <div className={styles.footerBlock}>
          <span className={styles.footerTitle}><Trans i18nKey={"layout.footer.functions"} /></span>
          <a href="https://kevink.dev/de/legal/about/" target="_blank" rel="noopener"><Trans i18nKey={"layout.footer.imprint"} /></a>
          <a href="https://unkn0wncat.net/de/legal/datasec/" target="_blank" rel="noopener"><Trans i18nKey={"layout.footer.data_protection"} /></a>
          <a href="https://unkn0wncat.net/de/legal/disclaimer/" target="_blank" rel="noopener"><Trans i18nKey={"layout.footer.disclaimer"} /></a>
        </div>
      </div>
      <div className={styles.footerCopy}>
        &copy; KREIG.de, {(new Date()).getFullYear()}
      </div>
    </footer>
  </div>
}

export default Layout;
