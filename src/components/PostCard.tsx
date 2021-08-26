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
  background-color: #f8f8f8;
  border: 2px solid #414040;
  border-radius: 5px;
  box-shadow: 3px 3px #414040;
  display: flex;
  margin: 3vh;
`

const BlogCardImg = styled.img`
  padding: 2px;
  width: 40%;
`
const BlogCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`
