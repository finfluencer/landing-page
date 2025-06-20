/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Finfluencer - AI-Powered Trading Insights",
    description:
      "Never miss a market move with AI-powered buy/sell alerts and plain-English insights.",
    siteUrl: `https://www.finfluencer.ai`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
  ],
};
