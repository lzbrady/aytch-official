import React from 'react'
import { Link, useStaticQuery } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import Img from 'gatsby-image'
import styled, { css } from 'styled-components'

import SocialMediaIcons from 'components/SocialMediaIcons'

import { colors } from 'BaseTheme'
import { SMALL_SCREEN_SIZE } from 'constants'

export default function Footer({}) {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      aytchLogo: file(relativePath: { eq: "aytch-logo.png" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      hiTunesLogo: file(relativePath: { eq: "hi-tunes-logo.png" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Container>
      <ContentContainer>
        <Title>Aytch</Title>

        <Pages>
          <MenuItemAnchor to="/#music">Music</MenuItemAnchor>
          <MenuItemAnchor to="/#video">Videos</MenuItemAnchor>
          <MenuItemAnchor to="/#production">Production</MenuItemAnchor>
          <MenuItemLink to="/beats">Beats</MenuItemLink>
          <MenuItemLink to="/contact">Contact</MenuItemLink>
        </Pages>
      </ContentContainer>

      <ImageContentContainer>
        <LogoContainer>
          <ImageContainer>
            <Img fixed={data.aytchLogo.childImageSharp.fixed} />
          </ImageContainer>
        </LogoContainer>

        <LogoContainer>
          <ImageContainer>
            <Img fixed={data.hiTunesLogo.childImageSharp.fixed} />
          </ImageContainer>
        </LogoContainer>
      </ImageContentContainer>

      <SocialMediaIcons color={colors.primary} style={{ margin: 'auto' }} />

      <AuthorLink href="https://pgmediasolutions.com/" target="_blank">
        Website created with ♫ by <strong>Pretty Good Media</strong>
      </AuthorLink>
    </Container>
  )
}

const AuthorLink = styled.a`
  color: ${colors.primary};
  font-size: 12px;
  text-decoration: none;
  margin: 20px auto 5px;

  :hover {
    text-decoration: underline;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.primaryDark};
  padding: 30px;
  box-sizing: border-box;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`

const menuItemStyle = css`
  flex: 1;
  margin: 4px 0px;
  text-align: center;
  padding: 6px 0px;
  box-sizing: border-box;
  color: ${colors.primaryLight};
  border-bottom: 1px solid transparent;
  text-decoration: none;

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

const ImageContainer = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 150px;
  overflow: hidden;
`

const ImageContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
  flex-wrap: wrap;
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 10px;
`

const Pages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  align-self: stretch;
  margin-bottom: 10px;

  @media screen and (max-width: ${SMALL_SCREEN_SIZE}) {
    flex-direction: column;
  }
`

const Title = styled.h1`
  color: ${colors.primaryLight};
  margin: 0px auto 20px;
  font-size: 48px;
`
