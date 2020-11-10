import React, { useState } from 'react'
import { Link, useStaticQuery } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import Img from 'gatsby-image'
import styled, { css } from 'styled-components'

import MenuIcon from 'components/header/MenuIcon'

import { colors } from 'BaseTheme'

const MOBILE_MENU_THRESHOLD = 870

export default function Header({ scrollPosition }) {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      aytchLogo: file(relativePath: { eq: "aytch-logo.png" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  const [isMenuExpanded, setIsMenuExpanded] = useState(false)

  return (
    <Container>
      <Link to="/">
        <TitleContainer>
          <LogoContainer>
            <Logo fixed={data.aytchLogo.childImageSharp.fixed} />
          </LogoContainer>

          <Title>AYTCH</Title>
        </TitleContainer>
      </Link>

      <StyledMenuIcon
        fill={colors.primaryLight}
        isExpanded={isMenuExpanded}
        onClick={() => setIsMenuExpanded(_isMenuExpanded => !_isMenuExpanded)}
        size={48}
      />

      <Menu isExpanded={isMenuExpanded}>
        <MenuItemAnchor to="/#music">Music</MenuItemAnchor>
        <MenuItemAnchor to="/#video">Videos</MenuItemAnchor>
        <MenuItemAnchor to="/#production">Production</MenuItemAnchor>
        <MenuItemLink to="/beats">Beats</MenuItemLink>
        <MenuItemLink to="/contact">Contact</MenuItemLink>
      </Menu>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 80px;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9999;
  background-color: ${colors.primaryDark};
  justify-content: space-between;
  ${'' /* background-color: ${props =>
    colors.alpha.primaryDark.replace('x', props.scrollPosition / 500)}; */}

  a {
    text-decoration: none;
  }
`

const Logo = styled(props => <Img {...props} />)`
  border-radius: 50px;
`

const LogoContainer = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 50px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid transparent;
  box-sizing: border-box;
  z-index: 200;
`

const Menu = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: stretch;
  flex-direction: row;
  transition: top 200ms ease;
  z-index: 100;

  @media screen and (max-width: ${MOBILE_MENU_THRESHOLD}px) {
    flex-direction: column;
    position: absolute;
    top: ${props => (props.isExpanded ? '80px' : '-220px')};
    left: 0;
    right: 0;
    background-color: ${colors.primaryDark};
  }
`

const menuItemStyle = css`
  flex: 1;
  margin: 4px 20px;
  text-align: center;
  padding: 6px 0px;
  box-sizing: border-box;
  color: ${colors.primaryLight};
  border-bottom: 1px solid transparent;

  :hover {
    color: ${colors.primary};
    border-color: ${colors.primary};
  }
`

const MenuItemAnchor = styled(props => <AnchorLink {...props} />)`
  ${menuItemStyle}
`

const MenuItemLink = styled(props => <Link {...props} />)`
  ${menuItemStyle}
`

const StyledMenuIcon = styled(props => <MenuIcon {...props} />)`
  display: none;

  @media screen and (max-width: ${MOBILE_MENU_THRESHOLD}px) {
    display: flex;
  }
`

const Title = styled.h1`
  color: ${colors.primaryLight};
  text-decoration: none;
  margin: 0px 20px;
  font-weight: normal;
  z-index: 200;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 20px;

  :hover {
    ${LogoContainer} {
      border-color: ${colors.primary};
    }
  }
`
