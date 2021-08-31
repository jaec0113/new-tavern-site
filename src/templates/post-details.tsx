import React from "react"
import { graphql } from "gatsby"

export default function PostDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, author, date } = data.markdownRemark.frontmatter

  return (
    <div>
      <h1>{title}</h1>
      <h3>Posted On: {date}</h3>
      <h3>Written By: {author}</h3>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export const query = graphql`
  query PostDetailsPage($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        author
      }
    }
  }
`
