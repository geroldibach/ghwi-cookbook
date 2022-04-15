import React from "react";
import { graphql, Link } from "gatsby";

import Layout from '../components/layout'


const recipenav = ({data, pageContext}) => {
  const {currentPage, isFirstPage, isLastPage, totalPages } = pageContext
  const nextPage = `/recipenav/${String(currentPage + 1)}`
  const prevPage = currentPage - 1 === 1 ? '/recipenav' : `/recipenav/${String(currentPage -1)}`
  return (
    <Layout>
        <div>
            <h1 style={{display: 'inlineBlock', borderBottom:'1px solid'}}>Recipes</h1>
                <h4>{data.allMarkdownRemark.totalCount} My Recipes</h4>
                {data.allMarkdownRemark.edges.map(({node}) => (
                    <div key={node.id}>
                        <h3>
                          <Link to={`/recipes${node.fields.slug}`}>{node.frontmatter.title}</Link> 
                          <span style={{color: '#bbb'}}>
                            - {node.frontmatter.date}
                        </span></h3>  
                        <p>{node.frontmatter.description}</p>                          
                    </div>
                ))}
        {/* Pagination Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            maxWidth: 300,
            margin: '0 auto'
          }}
        >
          {!isFirstPage &&(
            <Link to={prevPage} rel="prev">
              Prev Page
            </Link>
          )}
          {Array.from({ length: totalPages }, (_, index) => (
            <Link key={index} to={`/recipenav/${index === 0 ? "" : index +1}`}>
              {index + 1}
            </Link>
          ))}
          {!isLastPage && (
            <Link to={nextPage} rel="next">
              Next Page
            </Link>
          )}
        </div>
        </div>

    </Layout>
)}

export const query = graphql`
query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      skip: $skip
      limit: $limit
      filter: {fileAbsolutePath: {regex: "/(recipes)/"  }}
      )
      {totalCount
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            date
            title
            description
          }
        
        }
      }
    }
  }
`

export default recipenav