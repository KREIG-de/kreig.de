import type {GatsbyConfig} from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `KREIG.de`,
        siteUrl: `https://kreig.de`
    },
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": "./src/images/"
            },
            __key: "images"
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/locales`,
                name: `locale`
            }
        },
        {
            resolve: `gatsby-plugin-react-i18next`,
            options: {
                localeJsonSourceName: `locale`,
                languages: [`en`, `de`],
                defaultLanguage: `en`,
                siteUrl: `https://kreig.de`,
                trailingSlash: 'always',
                i18nextOptions: {
                    interpolation: {
                        escapeValue: false // not needed for react as it escapes by default
                    }
                },
                pages: []
            }
        },
        {
            resolve: `gatsby-plugin-netlify`,
            options: {
                headers: {},
            }
        }
    ]
};

export default config;
