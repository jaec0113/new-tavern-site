import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import PostCard from "../components/PostCard"

export default function HomePage() {
  const samplePosts = [
    {
      key: 1,
      postTitle: "What do you have to do if you're Joo Minkyu? (Opinion)",
      postAuthor: "Tim Lee",
      imageSrc: `joo-mk-eland.jpg`,
    },
    {
      key: 2,
      postTitle: "Korean Youth Players Abroad: Lee Seung Woo",
      postAuthor: "Jinseok Yang",
      imageSrc: `lee-sw-pose.jpg`,
    },
    {
      key: 3,
      postTitle: "The Case for Park Chu-Young",
      postAuthor: "Roy Ghim",
      imageSrc: `park-jy-vs-japan.jpg`,
    },
  ]

  return (
    <Layout pageTitle='Welcome to the Tavern of the Taegeuk Warriors Archive'>
      <HeroImage></HeroImage>
      <PageTitle>
        Welcome to the Tavern of the Taegeuk Warriors Archive
      </PageTitle>
      <BlogPostContainer>
        {samplePosts.map(({ key, postTitle, postAuthor, imageSrc }) => (
          <PostCard
            key={key}
            postTitle={postTitle}
            postAuthor={postAuthor}
            imageSrc={imageSrc}
          />
        ))}
      </BlogPostContainer>
    </Layout>
  )
}

const HeroImage = styled.div`
  background-image: url("son-hm-flag.jpg");
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
  position: relative;
`

const PageTitle = styled.h1`
  position: absolute;
  color: white;
  margin: 2rem;
  padding: 3rem;
  background: #16161637;
  top: 50%;
  font-size: 2.5rem;
  overflow-x: hidden;
`

const BlogPostContainer = styled.div`
  display: grid;
`
