import React from 'react'
import styled from 'styled-components'

import { colors } from 'BaseTheme'

export default function Button({ children, onClick, style, text }) {
  return (
    <StyledButton onClick={onClick} style={style}>
      <ButtonText>{text}</ButtonText>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  border: 3px solid ${colors.primaryLight};
  background: none;
  padding: 10px 40px;
  transition: all 100ms ease;
  display: block;

  :hover {
    cursor: pointer;
    background: ${colors.primaryLight};

    p {
      color: ${colors.primaryDark};
    }
  }
`

const ButtonText = styled.p`
  color: ${colors.primaryLight};
  font-size: 18px;
  transition: all 200ms linear;
  margin: 0px;
  font-size: 24px;
`
