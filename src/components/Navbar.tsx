import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export default function Navbar() {
  const [navbar, setNavbar] = useState(false)
  const showNav = () => {
    setNavbar(!navbar)
  }

  return (
    <>
      <Button id='nav-button' onClick={showNav}>
        <NavButton
          src={`tavern-logo-no-bg.png`}
          alt='Tavern of the Taegeuk Warriors logo'
        />
      </Button>
      {navbar && (
        <NavBar>
          <NavItem>
            <Link to='/'>
              <NavAnchor>Home</NavAnchor>
            </Link>
          </NavItem>
          <NavItem>
            <Link to='/about'>
              <NavAnchor>About</NavAnchor>
            </Link>
          </NavItem>
          <NavItem>
            <Link to='/contact'>
              <NavAnchor>Contact</NavAnchor>
            </Link>
          </NavItem>
        </NavBar>
      )}
    </>
  )
}

const NavButton = styled.img`
  height: 4rem;
  width: 4rem;
  position: absolute;
  left: 86vw;
  top: 1rem;
  z-index: 10;
`

const Button = styled.button`
  background: none;
  border: none;
  position: absolute;
`

const NavBar = styled.ul`
  position: absolute;
  background: #161616;
  margin-top: 0;
  padding: 1rem;
  height: 100vh;
  width: 50%;
  right: 0;
  list-style: none;
  z-index: 5;
`

const NavItem = styled.li`
  font-size: 1.5rem;
  padding: 5rem 0;
  text-align: center;
`

const NavAnchor = styled.a`
  color: white;
  text-decoration-line: none;
`
