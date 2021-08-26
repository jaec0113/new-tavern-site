import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

interface iPostCard {
  postTitle: string
  imageSrc: string
  postAuthor: string
}

export default function PostCard({
  postTitle,
  imageSrc,
  postAuthor,
}: iPostCard) {
  return (
    <BlogCard>
      <BlogCardImg src={imageSrc} alt='Blog post image' />
      <BlogCardInfo>
        <h3>{postTitle}</h3>
        <p>By: {postAuthor}</p>
        <p>
          <Link to='#'>Read Post</Link>
        </p>
      </BlogCardInfo>
    </BlogCard>
  )
}

const BlogCard = styled.div`
  border: 2px solid black;
  display: flex;
  margin: 3vh;
`

const BlogCardImg = styled.img`
  width: 40%;
`
const BlogCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`
