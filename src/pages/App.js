import React, { lazy } from "react"
import Layout from "../components/layout"

import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

import HomeBanner from '../components/homePage/homeBanner'


const App = props => {
  const { cursorStyles } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  return (
    <>
      <Layout>
        <HomeBanner onCursor={onCursor} />
      </Layout>
    </>
  )
}

export default App
