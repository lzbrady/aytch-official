import React from 'react'
import styled from 'styled-components'

import { colors, shadows } from 'BaseTheme'

import PlayIcon from '@icons/play.svg'

export default function HighlightButton({ style }) {
  return (
    <StyledButton style={style}>
      <PlayIcon width={60} height={60} fill="white" />
      <Title>Beat Title</Title>
    </StyledButton>
  )
}

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  width: 500px;
  height: 150px;
  border-radius: 126px;
  margin: auto;
  background-color: ${colors.accent};
  border: none;
  z-index: 10;
  ${shadows.primary};

  :hover {
    cursor: pointer;
    background-color: ${colors.accentDark};
    ${shadows.hover.primary};
  }
`

const Title = styled.h3`
  font-size: 48px;
  flex: 1;
  color: white;
`
