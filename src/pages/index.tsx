import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import PageCard from "../components/PageCard"

export default function HomePage() {
  const pageLinks = [
    {
      key: 1,
      pageTitle: "See All Archived Posts",
      pageDetail:
        "View all of the posts that are archived from the old Tavern of the Taegeuk Warriors site",
      imageSrc: `joo-mk-eland.jpg`,
      path: "/posts",
    },
    {
      key: 2,
      pageTitle: "About",
      pageDetail:
        "Find out more about the purpose of the archive site and the Tavern's original mission",
      imageSrc: `lee-sw-pose.jpg`,
      path: "/about",
    },
    {
      key: 3,
      pageTitle: "Contact",
      pageDetail:
        "If you have any questions or comments about the Tavern archive or the original Tavern",
      imageSrc: `park-jy-vs-japan.jpg`,
      path: "/contact",
    },
  ]

  return (
    <Layout pageTitle='Welcome to the Tavern of the Taegeuk Warriors Archive'>
      <HeroImage></HeroImage>
      <PageTitle>
        Welcome to the Tavern of the Taegeuk Warriors Archive
      </PageTitle>
      <BlogPostContainer>
        {pageLinks.map(({ key, pageTitle, pageDetail, imageSrc, path }) => (
          <PageCard
            key={key}
            pageTitle={pageTitle}
            pageDetail={pageDetail}
            imageSrc={imageSrc}
            path={path}
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
