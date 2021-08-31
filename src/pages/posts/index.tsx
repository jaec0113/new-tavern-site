import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../../components/Layout"

export default function AllPosts({ data }) {
  const posts = data.posts.nodes

  return (
    <Layout pageTitle='See All Archived Posts'>
      <HeroImage />
      <PageTitle>All Tavern of the Taegeuk Warriors Archived Posts</PageTitle>
      <PageContent>
        {posts.map((post) => (
          <Link to={"/posts/" + post.frontmatter.slug} key={post.id}>
            <div>
              <h3>{post.frontmatter.title}</h3>
              <p>{post.frontmatter.author}</p>
            </div>
          </Link>
        ))}
      </PageContent>
    </Layout>
  )
}

export const query = graphql`
  query PostsPage {
    posts: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          author
          slug
        }
        id
      }
    }
  }
`
const HeroImage = styled.div`
  background-image: url("ahn-jh-2002.jpg");
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
`

const PageTitle = styled.h1`
  position: absolute;
  color: white;
  width: 60%;
  margin-left: 2rem;
  padding: 3rem;
  background: #16161637;
  top: 60%;
  font-size: 2.5rem;
`

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 1.5rem;
  background: #f8f8f8ce;
  font-size: 1.25rem;
  line-height: 1.5em;
`
