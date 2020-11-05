import React, { useState } from 'react'
import { useStaticQuery } from 'gatsby'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

import Section from 'components/Section'
import VideoThumbnails from 'components/main/VideoThumbnails'

export default function Video({}) {
  // const [videoSizeDivider, setVideoSizeDivider] = useState(1);
  // window.innerWidth
  // Load initial video
  const data = useStaticQuery(graphql`
    query VideoQuery {
      videoJson {
        title
        imageSrc
        link
        isSquare
      }

      fileName: file(relativePath: { eq: "background-beats.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [activeVideo, setActiveVideo] = useState(data?.videoJson)

  return (
    <Section
      id="video"
      title="Video"
      imageData={data.fileName.childImageSharp.fluid}
    >
      <Container>
        <VideoContainer center={!activeVideo?.isSquare}>
          <h1>{activeVideo?.title}</h1>
          <PlayerContainer center={!activeVideo?.isSquare}>
            <ReactPlayer
              url={activeVideo?.link}
              controls={true}
              width={'100%'}
              height={'100%'}
            />
          </PlayerContainer>
        </VideoContainer>

        <VideoThumbnails
          onThumbnailSelected={selectedVideo => setActiveVideo(selectedVideo)}
          activeVideoTitle={activeVideo?.title}
        />
      </Container>
    </Section>
  )
}

const Container = styled.div`
  padding: 80px 20px 0px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
`

const PlayerContainer = styled.div`
  width: 100%;
  max-width: 960px;
  height: 605px;
  display: flex;
  justify-content: center;
  align-items: ${props => (props.center ? 'center' : 'flex-start')};
  margin: auto;
  background-color: black;

  @media (max-width: 800px) {
    height: 320px !important;
  }
`
const VideoContainer = styled.div`
  width: 100%;
  text-align: center;
  margin: 0px 20px;
`
