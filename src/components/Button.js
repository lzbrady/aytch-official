import React from 'react'
import styled from 'styled-components'

import { colors } from 'BaseTheme'

export default function Button({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}

const StyledButton = styled.button`
  border: 3px solid ${colors.primaryLight};
  background: none;
  color: ${colors.primaryLight};
  font-size: 18px;
  padding: 10px 40px;
  transition: all 100ms ease;

  :hover {
    cursor: pointer;
    background: ${colors.primaryLight};
    color: ${colors.primaryDark};
  }
`
