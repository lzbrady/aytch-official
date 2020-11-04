import React from 'react'
import styled from 'styled-components'

import { colors } from 'BaseTheme'

export default function Button({
  children,
  color,
  dark,
  hoverColor,
  onClick,
  style,
  text,
}) {
  return (
    <StyledButton
      onClick={onClick}
      style={style}
      color={color}
      hoverColor={hoverColor}
      dark={dark}
    >
      <ButtonText color={color} dark={dark}>
        {text}
      </ButtonText>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  border: 3px solid
    ${props =>
      props.color || props.dark ? colors.primaryDark : colors.primaryLight};
  background: none;
  padding: 10px 40px;
  transition: all 100ms ease;
  display: block;

  :hover {
    cursor: pointer;
    background: ${props =>
      props.color || props.dark ? colors.primaryDark : colors.primaryLight};

    p {
      color: ${props =>
        props.hoverColor || props.dark
          ? colors.primaryLight
          : colors.primaryDark};
    }
  }
`

const ButtonText = styled.p`
  color: ${props =>
    props.color || props.dark ? colors.primaryDark : colors.primaryLight};
  font-size: 18px;
  transition: all 200ms linear;
  margin: 0px;
  font-size: 24px;
`
