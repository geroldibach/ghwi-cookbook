import React from "react"
import { graphql } from "gatsby"
import Layout from '/src/components/layout'


export default function PageTemplate({ data: { markdownRemark } }) {
  return (
    <Layout pageTitle={markdownRemark.frontmatter.title}>
    <div>
      <p>layout1</p>
      {markdownRemark.frontmatter.description}
    </div>
    <div>
    {markdownRemark.rawMarkdownBody}
    </div>
    </Layout>
  )
}

export const cvPageQuery = graphql`
  query CVPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
      }
      rawMarkdownBody
    }
  }
`;