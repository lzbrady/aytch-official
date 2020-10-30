import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Button from 'components/Button'
import SocialMediaIcons from 'components/SocialMediaIcons'

import { colors } from 'BaseTheme'

export default function HeroHeader({}) {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
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
      <ContentContainer center>
        <HeaderTextContainer>
          <HeaderText>Singer</HeaderText>
          <HeaderText>Songwriter</HeaderText>
          <HeaderText>Producer</HeaderText>
        </HeaderTextContainer>

        <Button text="Looking for Beats?" />

        <SocialMediaIcons color={colors.primaryLight} size={32} />
      </ContentContainer>

      <ContentContainer>
        <Img
          className="profile"
          fluid={data.fileName.childImageSharp.fluid}
          alt="Aytch"
        />
      </ContentContainer>
    </Container>
  )
}

const Container = styled.div`
  padding-top: 180px;
  display: grid;
  grid-template-columns: 3fr 4fr;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.center ? 'center' : 'inherit')};
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
