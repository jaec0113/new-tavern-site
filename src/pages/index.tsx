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
      <HeroImage
        src={`son-hm-flag.jpg`}
        alt='Son Heungmin smiling while holding a South Korean flag'
      />
      {samplePosts.map(({ key, postTitle, postAuthor, imageSrc }) => (
        <PostCard
          key={key}
          postTitle={postTitle}
          postAuthor={postAuthor}
          imageSrc={imageSrc}
        />
      ))}
    </Layout>
  )
}

const HeroImage = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
`
