import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Header from 'components/Header'

export default function Layout({ alignTop = false, children }) {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const scrollEvent = () => {
      requestAnimationFrame(() => {
        setScrollPosition(window.pageYOffset)
      })
    }

    document.addEventListener('scroll', scrollEvent)
    return () => {
      document.removeEventListener('scroll', scrollEvent)
    }
  }, [])

  return (
    <div>
      <Header scrollPosition={scrollPosition} />

      <Body alignTop={alignTop}>{children}</Body>
    </div>
  )
}

const Body = styled.div`
  margin-top: ${props => (props.alignTop ? '0px' : '80px')};
  background-color: teal;
`
