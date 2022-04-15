import React from "react";
import Layout from '../components/layout'
import { graphql } from 'gatsby' 

const RecipeTemplate = ({ data: recipe }) => (
    <Layout>
        <div>
            <h1>{recipe.markdownRemark.frontmatter.title}</h1>
            <div style={{backgroundColor: "lightgrey", marginTop: '1em', marginBottom: '1em'}}>
              {recipe.markdownRemark.frontmatter.description}
              </div>
            <div dangerouslySetInnerHTML={{__html: recipe.markdownRemark.html}}  />
        </div>
    </Layout>
)

export const query = graphql`
query($slug: String!)  {
    markdownRemark(fields: {
       slug: {eq: $slug}
    }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`

export default RecipeTemplate