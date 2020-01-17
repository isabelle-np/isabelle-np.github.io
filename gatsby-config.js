module.exports = {
  
  siteMetadata: {
    title: 'Isabelle Nguyen-Phuoc Portfolio',
    description: 'Isabelles design and engineering portfolio',
    author: 'Isabelle Nguyen-Phuoc'
  },

  plugins: [
    `gatsby-plugin-sass`,

    {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `files`,
          path: `${__dirname}/src/studies`,
        },
    },

    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/studies`,
      },
    },
  ]
  
}
