import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

import { colors } from 'BaseTheme'
import { SMALL_SCREEN_SIZE } from 'constants'

export default function Section({ id, imageData, title, children }) {
  return (
    <StyledSection id={id}>
      {imageData ? (
        <StyledBackgroundImage
          Tag="section"
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <SectionLabel>
            <Label>{title}</Label>
          </SectionLabel>
        </StyledBackgroundImage>
      ) : (
        <SectionLabel>
          <Label>{title}</Label>
        </SectionLabel>
      )}

      {children}
    </StyledSection>
  )
}

const StyledBackgroundImage = styled(props => <BackgroundImage {...props} />)`
  height: 160px;
  width: 100%;

  ::before,
  ::after {
    background-attachment: fixed;
  }

  @media screen and (max-width: ${SMALL_SCREEN_SIZE}) {
    ::before,
    ::after {
      background-attachment: scroll;
    }
  }
`

const SectionLabel = styled.div`
  background-color: ${colors.alpha.primary.replace('x', '0.9')};
  height: 160px;
  display: flex;
  align-items: center;
  padding: 0px 50px;
`

const StyledSection = styled.div`
  background-color: ${colors.primary};
  margin: 75px 0px;
`

const Label = styled.h1`
  margin: 0;
  font-size: 96px;
  font-weight: normal;
  color: ${colors.primaryDark};
  flex: 1;

  @media screen and (max-width: ${SMALL_SCREEN_SIZE}) {
    font-size: 60px;
  }
`
