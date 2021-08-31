import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export default function PostCard({ post }) {
  return (
    <Card>
      <PostTitle>{post.frontmatter.title}</PostTitle>
      <CardContent>
        <p>By: {post.frontmatter.author}</p>
        <Link to={"/posts/" + post.frontmatter.slug} key={post.id}>
          <a>Read Post</a>
        </Link>
      </CardContent>
    </Card>
  )
}

const Card = styled.div`
  background-color: #f8f8f8;
  border: 2px solid #414040;
  border-radius: 5px;
  box-shadow: 3px 3px #414040;
  display: flex;
  flex-direction: column;
  margin: 3vh;
  width: 90%;
  justify-content: center;
`

const PostTitle = styled.h3`
  text-decoration-line: none;
  color: black;
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
`
