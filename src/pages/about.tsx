import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"

export default function AboutPage() {
  return (
    <Layout pageTitle='About the Tavern Archive Site'>
      <HeroImage />
      <PageTitle>About The Tavern Archive Site</PageTitle>
      <PageContent>
        <p>
          With the Tavern of the Taegeuk Warriors site officially closed for
          business it seemed a bit of a shame for all of that content to just
          disappear from the internet. So the decision was made to create a
          simple site where we could have some of the more popular content and
          host it for free.
        </p>
        <h2>About The Tavern of the Taegeuk Warriors</h2>
        <p>
          The Tavern of the Taeguk Warriors was an English-language Korean
          football website that created original content, wrote stories,
          previews, reviewed matches, and analyzed and scrutinized Korean
          football from 2012 - 2021.
        </p>
        <p>
          We strove to tell the story of the beautiful game through a Korean
          perspective, by keeping up to date with the Korean National Team,
          Koreans Players Abroad, Youth Prospects, the K League as well as
          presenting innovative commentary and analysis you couldn’t get
          anywhere else on Korean football in the English language.
        </p>
        <p>
          The Tavern was the brainchild of Roy Ghim, “The Old Tavern Owner”, who
          created this site as a blog following the jubilation and shock as
          Korean football once again stunned the world by claiming a historic
          Olympic bronze medal at the 2012 London Games. His deep passion and
          love for football was something emulated by the entire Tavern crew who
          were inspired by his story
        </p>
      </PageContent>
    </Layout>
  )
}

const HeroImage = styled.div`
  background-image: url("park-jy-kneeling.jpg");
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
