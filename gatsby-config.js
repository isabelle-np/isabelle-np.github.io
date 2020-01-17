module.exports = {

  
  
  siteMetadata: {
    title: 'Isabelle Nguyen-Phuoc Portfolio',
    description: 'Isabelles design and engineering portfolio',
    author: 'Isabelle Nguyen-Phuoc'
  },

  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            }
          },
          'gatsby-remark-copy-linked-files',
        ]
      }
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `pages`,
          path: `${__dirname}/src/studies`,
        },
    },
    
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      }
    },
    
    
        
  ]
  
}
