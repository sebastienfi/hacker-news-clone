/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-source-hacker-news-v2`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hacker News Clone for Travaux.com`,
        short_name: `Hacker News 4 hours Clone`,
        start_url: `/`,
        background_color: `#f7f7f7`,
        theme_color: `#191919`,
        display: `minimal-ui`,
      },
    },
    "gatsby-plugin-react-helmet",
  ],
}
