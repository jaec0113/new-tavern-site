import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"

export default function NotFoundPage() {
  return (
    <Layout pageTitle='404 | Sorry Page Not Found'>
      <HeroImage />
      <PageTitle>Hey! That page doesn't exist!</PageTitle>
    </Layout>
  )
}

const HeroImage = styled.div`
  background-image: url("shin-ty-yell.jpg");
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
  padding: 3rem;
  background: #161616ab;
  top: 30%;
  font-size: 2.5rem;
`
