import * as React from "react"
import Layout from "../layouts/Default";
import {graphql} from "gatsby";
import {Helmet, Trans, useTranslation} from "gatsby-plugin-react-i18next";

// @ts-ignore
import * as styles from "./index.module.scss";
import {StaticImage} from "gatsby-plugin-image";

const IndexPage = () => {
    const {t} = useTranslation()

  return (
      <Layout navTransparencyMode={"transparentWhenAtTop"} noNavigationSpacer={true}>
          <Helmet>
              <title>{t("home.title")} | KREIG.de</title>
          </Helmet>
          <div className={styles.hero}>
              <div className={styles.background}>
                <StaticImage src={"../images/homeBg.jpg"} alt={"A soldier standing in a field"} objectFit={"cover"} objectPosition={"center"} />
              </div>

              <div className={styles.heroContent}>
                  <span className={styles.heroSlogan}>
                      <Trans i18nKey={"home.slogan"} components={{1: <span className={styles.sloganAccent}/>, br: <br/>}}>
                          <span className={styles.sloganAccent}>KREIG</span>
                          slogan
                      </Trans>
                  </span>
              </div>

              <div className={styles.heroShadow} />
          </div>
          <div className={"layoutBox"}>
              <h1>{t("home.about.title")}</h1>

              <p>{t("home.about.text1")}</p>

              <h2>{t("home.about.subtitle")}</h2>

              <p>{t("home.about.text2")}</p>
          </div>
      </Layout>
  )
}

export default IndexPage

export const query = graphql`
    query($language: String!) {
        locales: allLocale(filter: {language: {eq: $language}}) {
            edges {
                node {
                    ns
                    data
                    language
                }
            }
        }
    }
`;
