import React from 'react'
import { Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { colors } from 'BaseTheme'

export default function Footer({}) {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      aytchLogo: file(relativePath: { eq: "aytch-logo.png" }) {
        childImageSharp {
          fixed(width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      hiTunesLogo: file(relativePath: { eq: "hi-tunes-logo.png" }) {
        childImageSharp {
          fixed(width: 250, height: 250) {
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

        <Icons></Icons>

        <AuthorLink></AuthorLink>
      </ContentContainer>

      <LogoContainer>
        <ImageContainer>
          <Img fixed={data.hiTunesLogo.childImageSharp.fixed} />
        </ImageContainer>
      </LogoContainer>
    </Container>
  )
}

const AuthorLink = styled.a``

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${colors.primaryDark};
  padding: 30px;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: center;
`

const ContentContainer = styled.div`
  flex: 1;
`

const FooterLink = styled.div``

const Icons = styled.div``

const ImageContainer = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 250px;
  overflow: hidden;
`

const LogoContainer = styled.div`
  width: 300px;
  max-width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Pages = styled.div``

const Title = styled.h1``
