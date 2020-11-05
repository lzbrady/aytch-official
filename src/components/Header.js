import React from 'react'
import { Link, useStaticQuery } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { colors } from 'BaseTheme'

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

      <Menu>
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
`

const Menu = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`

const MenuItemAnchor = styled(props => <AnchorLink {...props} />)`
  width: 80px;
  margin: 4px 20px;
  text-align: center;
  border-radius: 5px;
  padding: 6px 0px;
  color: ${colors.primaryLight};
`

const MenuItemLink = styled(props => <Link {...props} />)`
  width: 80px;
  margin: 4px 20px;
  width: 80px;
  text-align: center;
  border-radius: 5px;
  padding: 6px 0px;
  color: ${colors.primaryLight};
`

const Title = styled.h1`
  color: ${colors.primaryLight};
  text-decoration: none;
  margin: 0px 20px;
  font-weight: normal;
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
