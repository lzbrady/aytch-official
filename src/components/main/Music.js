import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

import Section from 'components/Section'
import Button from 'components/Button'
import MusicImageGrid from 'components/main/MusicImageGrid'

export default function Music({}) {
  const data = useStaticQuery(graphql`
    query MusicBackgroundQuery {
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
    <Section
      title="Music"
      imageData={data.fileName.childImageSharp.fluid}
      id="music"
    >
      <Container>
        <MusicContainer>
          <MusicImageGrid />
          <Button
            text="View More"
            style={{ margin: '40px auto 0px', width: '250px' }}
          />
        </MusicContainer>

        <SpotifyContainer>
          <iframe
            title="Spotify Follow"
            src="https://open.spotify.com/follow/1/?uri=spotify:artist:5USwQPDuFkuAfWMWFSQKY0&size=detail&theme=light"
            width="300"
            height="56"
            scrolling="no"
            frameBorder="0"
            style={{ border: 'none', overflow: 'hidden', marginBottom: '40px' }}
          ></iframe>

          <iframe
            title="Spotify Music"
            src="https://open.spotify.com/embed/artist/5USwQPDuFkuAfWMWFSQKY0"
            width="300"
            height="380"
            frameBorder="0"
            allow="encrypted-media"
          ></iframe>
        </SpotifyContainer>
      </Container>
    </Section>
  )
}

const Container = styled.div`
  padding: 10% 5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const MusicContainer = styled.div`
  flex: 1;
  align-items: center;
  min-width: 300px;
  padding: 0px 20px;
  margin-bottom: 40px;
`

const SpotifyContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`
