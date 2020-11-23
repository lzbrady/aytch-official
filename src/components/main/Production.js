import React from 'react'
import { useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Section from 'components/Section'
import Button from 'components/Button'

import { colors } from 'BaseTheme'

export default function Production({}) {
  const data = useStaticQuery(graphql`
    query ProductionQuery {
      aytch: file(relativePath: { eq: "aytch.jpg" }) {
        childImageSharp {
          fixed(width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      hiTunes: file(relativePath: { eq: "hi-tunes-studio.jpg" }) {
        childImageSharp {
          fixed(width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Section id="production" title="Production">
      <Container>
        <ContentContainer>
          <StyledImage fixed={data.hiTunes.childImageSharp.fixed} />
          <Text>
            Looking for a professional studio to record your song? Aytch has
            been recording, mixing, and mastering tracks since 2010. He has most
            recently joined the Hi Tunes Studio team to collaborate with some of
            Florida's best.
          </Text>
          <Text>
            Hi Tunes Studio has top of the line equipment, software, and staff.
            Located in Boca Raton, Florida, Hi Tunes has recorded musicians from
            all over the country.
          </Text>
          <Button
            text="Book with Aytch"
            href="https://squareup.com/appointments/book/643ecbe1-3ff1-43ed-ac6b-3587869ead9a/MJ6BBSXV0YERV/services"
            style={{ marginTop: '30px' }}
          />
        </ContentContainer>

        <ContentContainer>
          <StyledImage fixed={data.aytch.childImageSharp.fixed} />
          <Text>
            Aytch has been recording, mixing, and mastering tracks since 2010.
            He started making his own music since he was 10 years old, where he
            honed in on his craft. Eventually, he attended Berklee College of
            Music, where he connected with some of the most talented individuals
            in the music industry. It was here that Aytch was able to take his
            craft to the next level, refining his mastering talent until he
            reached and exceeded professional standards.
          </Text>
          <Text>
            Aytch now balances creating his own music and helping others achieve
            their own dream. He knows how elusive that perfect sound can be, but
            has dedicated his life's work to finding it.
          </Text>
        </ContentContainer>
      </Container>

      <ArtistHeader>Aytch has worked with artists such as</ArtistHeader>
      <ArtistContainer>
        <Artist>Joe Schmoe</Artist>
        <Artist>Joe Schmoe</Artist>
        <Artist>Joe Schmoe</Artist>
        <Artist>Joe Schmoe</Artist>
        <Artist>and more</Artist>
      </ArtistContainer>
    </Section>
  )
}

const Artist = styled.h1`
  margin: 10px 20px;
  color: ${colors.primaryDark};
  font-size: 24px;
`

const ArtistContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const ArtistHeader = styled.p`
  text-align: center;
  color: ${colors.primaryDark};
  font-size: 20px;
  margin: 40px auto 0px;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 40px;
  align-items: flex-start;
  justify-content: center;
`

const ContentContainer = styled.div`
  flex: 1;
  margin: 0px 20px;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 400px;
`

const StyledImage = styled(props => <Img {...props} />)`
  border: 3px solid ${colors.primaryLight};
  box-sizing: border-box;
`

const Text = styled.p`
  margin: 20px auto 0px;
`
