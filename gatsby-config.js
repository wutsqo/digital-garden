require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Muhammad Urwatil Wutsqo`,
    description: `Welcome to my personal website.`,
    author: `@wutsqo`,
    siteUrl: `https://wutsqo.me`,
  },
  trailingSlash: "always",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Muhammad Urwatil Wutsqo`,
        short_name: `Wutsqo`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/assets/images/logo.svg`,
      },
    },
    "gatsby-plugin-dark-mode",
    "gatsby-plugin-postcss",
  ],
}
