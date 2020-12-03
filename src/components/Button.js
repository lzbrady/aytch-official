import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

import { colors } from 'BaseTheme'

export default function Button({
  children,
  color,
  dark,
  href,
  hoverColor,
  onClick,
  style,
  text,
  linkTo,
}) {
  if (linkTo) {
    // Render Gatsby Link
    return (
      <StyledLink
        to={linkTo}
        style={style}
        color={color}
        hoverColor={hoverColor}
        dark={dark}
      >
        <ButtonText color={color} dark={dark}>
          {text}
        </ButtonText>
        {children}
      </StyledLink>
    )
  }

  if (href) {
    return (
      <StyledAnchor
        href={href}
        style={style}
        color={color}
        hoverColor={hoverColor}
        dark={dark}
        target="_blank"
      >
        <ButtonText color={color} dark={dark}>
          {text}
        </ButtonText>
        {children}
      </StyledAnchor>
    )
  }

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

const buttonStyle = css`
  border: 3px solid
    ${props =>
      props.color || props.dark ? colors.primaryDark : colors.primaryLight};
  background: none;
  padding: 10px 40px;
  transition: all 100ms ease;
  display: block;
  text-decoration: none;
  text-align: center;

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

const StyledAnchor = styled.a`
  ${buttonStyle}
`

const StyledButton = styled.button`
  ${buttonStyle}
`

const StyledLink = styled(props => <Link {...props} />)`
  ${buttonStyle}
`

const ButtonText = styled.p`
  color: ${props =>
    props.color || props.dark ? colors.primaryDark : colors.primaryLight};
  font-size: 18px;
  transition: all 200ms linear;
  margin: 0px;
  font-size: 24px;
`
