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
                 image
                 keywords
                 date(formatString: "MMMM YYYY")
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
                  keywords={node.frontmatter.keywords}
                  title={node.frontmatter.title}
                  date={node.frontmatter.date}
                  excerpt={node.excerpt} />
            ))}
         </div>
      )}

   />
)