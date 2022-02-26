import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const RecipesPage = ({ data }) => {
  let entries =  data.allMarkdownRemark.edges.map(edge => {
    let fileName = edge.node.fileAbsolutePath.replace(/^.*[\\/]/, '').replace(/\.md$/, '')
    return(
    <article key={edge.node.id}>
      <h2>
        <Link to={`/recipes/${fileName}`}>
          {fileName}
        </Link>
      </h2>
      <p>Posted: {edge.node.frontmatter.date}</p>
    </article>
  )})

  
  return (
    <Layout pageTitle="Recipes">
      {
        entries
      }
    </Layout>
  )
}

export const query = graphql`
query  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            templateKey
            description
            date
          }
          id
          fileAbsolutePath
          
        }
      }
    }
}
`

export default RecipesPage