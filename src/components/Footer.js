import React from 'react'
import { Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import SocialMediaIcons from 'components/SocialMediaIcons'

import { colors } from 'BaseTheme'

export default function Footer({}) {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      aytchLogo: file(relativePath: { eq: "aytch-logo.png" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      hiTunesLogo: file(relativePath: { eq: "hi-tunes-logo.png" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Container>
      <LogoContainer>
        <ImageContainer>
          <Img fixed={data.aytchLogo.childImageSharp.fixed} />
        </ImageContainer>
      </LogoContainer>

      <ContentContainer>
        <Title>Aytch</Title>

        <Pages>
          <FooterLink to="/#music">Music</FooterLink>
          <FooterLink to="/#videos">Videos</FooterLink>
          <FooterLink to="/#production">Production</FooterLink>
          <FooterLink to="/beats">Beats</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </Pages>

        <SocialMediaIcons color={colors.primary} />

        <AuthorLink>Website created with by Pretty Good Media</AuthorLink>
      </ContentContainer>

      <LogoContainer>
        <ImageContainer>
          <Img fixed={data.hiTunesLogo.childImageSharp.fixed} />
        </ImageContainer>
      </LogoContainer>
    </Container>
  )
}

const AuthorLink = styled.a`
  color: ${colors.primary};
  margin-top: 20px;
  font-size: 12px;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${colors.primaryDark};
  padding: 30px;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`

const FooterLink = styled.div`
  color: ${colors.primaryLight};
`

const Icons = styled.div``

const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 200px;
  overflow: hidden;
`

const LogoContainer = styled.div`
  width: 300px;
  max-width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Pages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  align-self: stretch;
  margin-bottom: 80px;
`

const Title = styled.h1`
  color: ${colors.primaryLight};
margin-bottom: 40px;
`
