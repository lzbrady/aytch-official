import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Header from 'components/Header'
import Footer from 'components/Footer'

import 'layouts/Layout.css'
import { colors } from 'BaseTheme'

export default function Layout({ alignTop = false, children }) {
  // const [scrollPosition, setScrollPosition] = useState(0)

  // useEffect(() => {
  //   const scrollEvent = () => {
  //     requestAnimationFrame(() => {
  //       setScrollPosition(window.pageYOffset)
  //     })
  //   }

  //   document.addEventListener('scroll', scrollEvent)
  //   return () => {
  //     document.removeEventListener('scroll', scrollEvent)
  //   }
  // }, [])

  return (
    <div>
      <Header />
      {/* <Header scrollPosition={scrollPosition} /> */}

      <Body>
        <Content alignTop={alignTop}>{children}</Content>
      </Body>

      <Footer />
    </div>
  )
}

const Body = styled.div`
  background-color: ${colors.primary};
`

const Content = styled.div`
  margin: ${props => (props.alignTop ? '0px' : '80px') + ' auto 0px'};
  max-width: 1366px;
`
