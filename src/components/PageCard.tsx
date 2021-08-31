import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

interface iPageCard {
  pageTitle: string
  imageSrc: string
  pageDetail: string
  path: string
}

export default function PageCard({
  pageTitle,
  imageSrc,
  pageDetail,
  path,
}: iPageCard) {
  return (
    <BlogCard>
      <BlogCardImg src={imageSrc} alt='Blog post image' />
      <BlogCardInfo>
        <h3>{pageTitle}</h3>
        <p>{pageDetail}</p>
        <p>
          <Link to={path}>Visit Page</Link>
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
