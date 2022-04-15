import React from "react"
import { graphql } from "gatsby"
import Layout from '/src/components/layout'
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import FullWidthImage from "./FullWidthImage";

export default function PageTemplate({ data: { markdownRemark } }) {
  const image = getImage(markdownRemark.frontmatter.image)
  return (
    <Layout pageTitle={markdownRemark.frontmatter.title}>
      <div>v1</div>
      <div>
      <FullWidthImage img={image} title='titel' subheading='subheading' />
      </div>
      <br/>
      <br/>
    <div>
      {markdownRemark.frontmatter.description}
    </div>
    <br/>
      <br/>
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