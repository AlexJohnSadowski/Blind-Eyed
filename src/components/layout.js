import React, {useState} from "react"

import { createGlobalStyle, ThemeProvider } from "styled-components"
import { normalize } from "styled-normalize"

import Header from './header'
import Cursor from './customCursor'
import Navigation from './navigation'

import { useGlobalStateContext, useGlobalDispatchContext } from '../context/globalContext'

const GlobalStyle = createGlobalStyle`
${normalize}
* { 
  cursor:none;
  text-decoration: none;
  
}

html {
  box-sizing: border-box;
  font-size:16px;
  -webkit-font-smoothing: antialiased;
  height:100%;
}

body {
  font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: ${props => props.theme.background};
  overscroll-behavior:none;
  overflow-x:hidden;
}
`


const Layout = ({ children }) => {
  const { cursorStyles, currentTheme } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const darkTheme = {
    background: '#000',
    text:'#fff',
    red: '#ea291e'
  }

  const lightTheme = {
    background: '#fff',
    text:'#000',
    red: '#ea291e'
  }

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType || false)
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType})
  }

  const [toggleMenu, setToggleMenu] = useState(false)

  return(
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
    <GlobalStyle/>
    <Cursor toggleMenu={toggleMenu} />
    <Header onCursor={onCursor} toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
    <Navigation onCursor={onCursor} toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
    <main>{children}</main>
    {console.log(currentTheme)}
    </ThemeProvider>
  ) 
  
  
}


export default Layout
