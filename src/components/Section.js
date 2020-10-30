import React from 'react'
import styled from 'styled-components'

import { colors } from 'BaseTheme'

export default function Section({ title, children }) {
  return (
    <StyledSection>
      <SectionLabel>
        <Label>{title}</Label>
      </SectionLabel>

      {children}
    </StyledSection>
  )
}

const SectionLabel = styled.div`
  background-color: ${colors.primaryLight};
  padding: 40px 50px;
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
`
