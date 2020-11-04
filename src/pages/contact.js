import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'

import Layout from 'layouts/Layout'

import ContactForm from 'components/contact/ContactForm'

import { colors } from 'BaseTheme'

export default function Contact() {
  const data = useStaticQuery(graphql`
    query ContactImageQuery {
      fileName: file(relativePath: { eq: "background-contact.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout ignoreMaxWidth>
      <Container>
        <ContactForm />

        <Background>
          <StyledImg fluid={data.fileName.childImageSharp.fluid}>
            <Gradient />
          </StyledImg>
        </Background>
      </Container>
    </Layout>
  )
}

const Background = styled.div`
  width: 100%;
  height: 40vh;
  position: absolute !important;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
`

const Container = styled.div`
  padding: 100px 0px;
  position: relative;
`

const Gradient = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(
    to bottom,
    ${colors.primary},
    ${colors.alpha.primary.replace('x', '0.8')}
  );
`

const StyledImg = styled(props => <BackgroundImage {...props} />)`
  height: 100%;
  width: 100%;
  background-repeat: repeat;
  background-size: contain;
  ${'' /* z-index: 5; */}

  ::before,
  ::after {
    background-attachment: scroll;
  }
`
