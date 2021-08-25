import React from "react"
import { Link } from "gatsby"

export default function NotFoundPage() {
  return (
    <main>
      <title>Not found</title>
      <h1>Sorry! That page doesn't seem to exist.</h1>
      <Link to='/'>Go home</Link>.
    </main>
  )
}
