// Initialize dotenv
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "SquareSpace",
    description: "ITDEV-164 Gatsby Blog.",
    author: "Jouliet Morales",
    contact: {
      name: "Jouliet Morales",
      company: "Blogs Inc.",
      address: "PO Box 1234",
    },
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: `bx7n4xf2mo61`,
        accessToken: `hSmX-Zk50ka3Uz6UUKQv29HJ7Jk8sS4fVyUGFzmRJzQ`,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",

    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    "gatsby-plugin-offline",
  ],
}
