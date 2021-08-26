import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"

export default function contact() {
  return (
    <Layout pageTitle='Contact Us'>
      <HeroImage />
      <PageTitle>Contact Us</PageTitle>
      <PageContent>
        <p>
          If you have questions or comments about the website or the Tavern of
          the Taegeuk Warriors, please send an email to: email@email.com
        </p>
      </PageContent>
    </Layout>
  )
}

const HeroImage = styled.div`
  background-image: url("park-js-nt.jpg");
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
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  margin: 1.5rem;
  background: #f8f8f8ce;
  font-size: 1.25rem;
  line-height: 1.5em;
`
