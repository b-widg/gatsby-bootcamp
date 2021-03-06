module.exports = {
  siteMetadata: {
    title: 'Great Gatsby Bootcamp',
    author: 'Some Guy',
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-remark',
  ],
};
