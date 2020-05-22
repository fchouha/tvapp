module.exports = {
  pathPrefix: `/tvapp`,
  siteMetadata: {
    title: `Livestream TV`,
    description: `Watch free live TV`,
    author: `Fadi Chouha`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`merriweather sans`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
