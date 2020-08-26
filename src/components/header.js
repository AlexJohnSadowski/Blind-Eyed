import React, { useEffect } from "react"
import { Link } from "react-router-dom"

import { Container, Flex } from "../styles/globalStyles"
import { HeaderNav, Logo, Menu } from "../styles/headerStyles"

import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

const Header = ( { onCursor, toggleMenu, setToggleMenu }) => {
  const dispatch = useGlobalDispatchContext()
  const { currentTheme } = useGlobalStateContext()

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      dispatch({ type: "TOGGLE_THEME", theme: "light" })
    } else {
      dispatch({ type: "TOGGLE_THEME", theme: "dark" })
    }
  }

  useEffect(() => {
      window.localStorage.setItem('theme', currentTheme)
  }, [currentTheme])

  return (
    <HeaderNav>
      <Container>
        <Flex spaceBetween noHeight>
          <Logo
            onMouseEnter={() => onCursor('hovered')}
            onMouseLeave={onCursor}
          >
            <Link to="/">Blind</Link>
            <span onClick={toggleTheme}
            onMouseEnter={() => onCursor('pointer')}
            onMouseLeave={onCursor}
            
            ></span>
            <Link to="/">Eyed</Link>
          </Logo>
          <Menu onClick={() => setToggleMenu(!toggleMenu)}>
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      
      </Container>
    </HeaderNav>
  )
}

export default Header
