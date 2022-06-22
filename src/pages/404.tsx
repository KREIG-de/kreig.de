import * as React from "react"
import Layout from "../layouts/Default";
import {graphql} from "gatsby";
import {Helmet, Link, Trans, useTranslation} from "gatsby-plugin-react-i18next";

const NotFoundPage = () => {
  const {t} = useTranslation();

  return (
    <Layout wrap={true}>
      <Helmet>
        <title>{t("404.title")}</title>
      </Helmet>
      <h1><Trans i18nKey={"404.title"} /></h1>

      <p><Trans i18nKey={"404.text"} components={{HomepageLink: <Link to={"/"} />}} /></p>
    </Layout>
  )
}

export default NotFoundPage

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
