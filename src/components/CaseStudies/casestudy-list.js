import React from 'react';
import { StaticQuery, graphql } from 'gatsby'
import CaseStudy from './casestudy'

export default () => (
   <StaticQuery

      query = { graphql `query {
         allMarkdownRemark(sort: {fields: [frontmatter___id], order: ASC}) {
           totalCount
           edges {
             node {
               fields {
                  slug
               }
               id
               frontmatter {
                 title
                 subtitle
                 type
                 featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 400) {
                     ...GatsbyImageSharpFluid
                    }
                  }
                }
               }
             }
           }
         }
       }`

      }

      render = { data => (
         <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
               <CaseStudy key={node.id} id={node.id}
                  to={node.fields.slug}
                  title={node.frontmatter.title}
                  subtitle={node.frontmatter.subtitle}
                  type={node.frontmatter.type}
                  fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                   />
            ))}
         </div>
      )}

   />
)