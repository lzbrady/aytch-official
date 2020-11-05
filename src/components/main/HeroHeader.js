import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Button from 'components/Button'
import SocialMediaIcons from 'components/SocialMediaIcons'

import { colors } from 'BaseTheme'
import { SMALL_SCREEN_SIZE } from 'constants'

export default function HeroHeader({}) {
  const data = useStaticQuery(graphql`
    query HeroHeaderQuery {
      fileName: file(relativePath: { eq: "childish_gambino.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Container>
      <ContentContainer>
        <HeaderTextContainer>
          <HeaderText>Singer</HeaderText>
          <HeaderText>Songwriter</HeaderText>
          <HeaderText>Producer</HeaderText>
        </HeaderTextContainer>

        <Button text="Looking for Beats?" />

        <SocialMediaIcons color={colors.primaryLight} size={32} />
      </ContentContainer>

      <ImageContainer>
        <Img
          className="profile"
          fluid={data.fileName.childImageSharp.fluid}
          alt="Aytch"
        />
      </ImageContainer>
    </Container>
  )
}

const Container = styled.div`
  padding-top: 180px;
  display: flex;
`

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: ${SMALL_SCREEN_SIZE}) {
    position: relative;
    z-index: 10;
  }
`

const HeaderText = styled.h1`
  color: ${colors.primaryDark};
  font-size: 48px;
  font-weight: normal;
  margin: 15px 0px;
`

const HeaderTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  margin-bottom: 120px;
`

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${SMALL_SCREEN_SIZE}) {
    position: absolute;
    top: 160px;
    right: -250px;
    width: 500px;
    height: auto;
    z-index: 1;
    opacity: 0.5;
  }
`
