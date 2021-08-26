import React from "react"
import { createGlobalStyle } from "styled-components"
import "@fontsource/raleway"
import Navbar from "./Navbar"

export default function Layout({ pageTitle, children }) {
  return (
    <>
      <GlobalStyle />
      <title>{pageTitle}</title>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background: url('tavern-logo.jpg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-attachment: fixed;
  font-family: "Raleway", sans-serif;
}
  
`
