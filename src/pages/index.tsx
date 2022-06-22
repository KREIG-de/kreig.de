import * as React from "react"
import Layout from "../layouts/Default";
import {graphql} from "gatsby";
import {Helmet, useTranslation} from "gatsby-plugin-react-i18next";

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
                      <span className={styles.sloganAccent}>KREIG</span><br/>
                      your text here.
                  </span>
              </div>

              <div className={styles.heroShadow} />
          </div>
          <div className={"layoutBox"}>
              <h1>Hello World</h1>

              <p>This is the boilerplate for the new KREIG.de web project.</p>

              <h2>Boilerplate Information</h2>

              <p>The KREIG.de boilerplate contains example objects for testing stylesheet compatibility with existing content.</p>
              <p>With this testing facility it is possible to deliver a perfect experience to users not only on desktop, but also mobile and other <a href={"https://www.steamdeck.com/"}>handheld devices</a>.</p>
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
