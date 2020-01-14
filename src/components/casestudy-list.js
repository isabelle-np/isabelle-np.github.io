// import React from "react";
// import { StaticQuery, graphql } from gatsby;

// export default () => (
//     <StaticQuery
//         query = { graphql `query {
    
//             allMarkdownRemark{
//               totalCount
//               edges {
//                 node {
//                   id 
//                     frontmatter {
//                       title
//                       date
//                       layout
//                     }
//                     excerpt
//                     }
//                 }
//             }
        
          
//     }`
// }

//         render = { data => (
//             <div>
//                 {data.allMarkdownRemark.edges.map(({ node }) => (
//                 <article>
//                     <div>
//                         <strong>{node.frontmatter.title}</strong>
//                     </div>
//                     <div>
//                         {node.excerpt}
//                     </div>
//                 </article> ))}
//             </div>
//         )}
//         />
// )
