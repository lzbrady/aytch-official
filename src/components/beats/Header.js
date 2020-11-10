import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import HighlightButton from 'components/beats/HighlightButton'

import { colors } from 'BaseTheme'
import { MEDIUM_SCREEN_SIZE } from 'constants'

export default function Header({ beat, onHighlightClick }) {
  const data = useStaticQuery(graphql`
    query BeatsHeaderQuery {
      fileName: file(relativePath: { eq: "background-beats.jpg" }) {
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
      <StyledBackgroundImage
        Tag="section"
        fluid={data.fileName.childImageSharp.fluid}
        backgroundColor={`#040e18`}
      >
        <TitleContainer>
          <Title>Aytch</Title>
          <Subtitle>Beats</Subtitle>
        </TitleContainer>
      </StyledBackgroundImage>

      <HighlightButton
        beat={beat}
        onHighlightClick={onHighlightClick}
        style={{ marginBottom: '-75px' }}
      />
    </Container>
  )
}

const Container = styled.div`
  height: 60vh;
  ${'' /* min-height: 600px; */}
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${MEDIUM_SCREEN_SIZE}) {
    height: 50vh !important;
  }
`

const StyledBackgroundImage = styled(props => <BackgroundImage {...props} />)`
  height: 60vh;
  width: 100%;
  z-index: 5;
  position: absolute !important;
  top: 80px;
  left: 0;
  right: 0;

  ::before,
  ::after {
    background-attachment: fixed;
  }

  @media screen and (max-width: ${MEDIUM_SCREEN_SIZE}) {
    height: 50vh !important;
    ::before,
    ::after {
      background-attachment: scroll;
    }
  }
`

const Subtitle = styled.h2`
  color: ${colors.primaryLight};
  font-size: 20vh;
  margin: 0;

  @media (max-width: ${MEDIUM_SCREEN_SIZE}) {
    font-size: 48px;
  }
`

const Title = styled.h1`
  color: ${colors.primaryLight};
  font-size: 25vh;
  margin: 0;

  @media (max-width: ${MEDIUM_SCREEN_SIZE}) {
    font-size: 96px;
  }
`

const TitleContainer = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;

  background: linear-gradient(
    to bottom,
    ${colors.alpha.accent.replace('x', '0.7')},
    ${colors.alpha.primaryDark.replace('x', '0.7')}
  );
`
