import React from 'react';
import { StaticQuery, graphql } from 'gatsby'
import CaseStudy from '../components/casestudy'

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
                 image
                 
               }
               excerpt
             }
           }
         }
       }`

      }

      render = { data => (
         <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
               <CaseStudy id={node.id}
                  to={node.fields.slug}
                  title={node.frontmatter.title}
                  subtitle={node.frontmatter.subtitle}
                  type={node.frontmatter.type}
                   />
            ))}
         </div>
      )}

   />
)