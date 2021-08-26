import React from "react"
import { Link } from "gatsby"
import Navbar from "./Navbar"

export default function Layout({ pageTitle, children }) {
  return (
    <div>
      <title>{pageTitle}</title>
      <Navbar />
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}
