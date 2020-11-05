import React, { useState } from 'react'
import styled from 'styled-components'

import { colors, shadows } from 'BaseTheme'

import PlayButton from 'components/beats/PlayButton'

export default function AllBeats({ containerStyle }) {
  const [activeSong, setActiveSong] = useState()
  const [isPlaying, setIsPlaying] = useState(false)

  const play = song => {
    console.log('Play', song)
    setActiveSong(song)
    // Toggle play/pause if same song, otherwise play
    setIsPlaying(_isPlaying =>
      song.title === activeSong?.title ? !_isPlaying : true
    )
  }

  const songs = [
    {
      title: 'Wittit',
      duration: '3:21',
      bpm: 90,
      imageSrc: 'https://m.media-amazon.com/images/I/61T1lIK0UaL._SS500_.jpg',
    },
    {
      title: 'Dead Faces',
      duration: '2:33',
      bpm: 90,
      imageSrc: 'https://m.media-amazon.com/images/I/61T1lIK0UaL._SS500_.jpg',
    },
  ]

  return (
    <Container style={containerStyle}>
      {songs.map((song, index) => {
        return (
          <>
            <Beat key={song.title}>
              {activeSong?.title !== song.title && (
                <SongNumber>{index + 1}</SongNumber>
              )}
              <StyledPlayButton
                isActive={activeSong?.title === song.title}
                isPlaying={isPlaying}
                onClick={() => play(song)}
              />

              <StyledImage src={song.imageSrc} />

              <SongInfo>
                <Title>{song.title}</Title>
                <Text>{song.duration}</Text>
                <Text>{song.bpm} bpm</Text>
              </SongInfo>

              <BuyButton>
                <BuyButtonText>Buy Now</BuyButtonText>
              </BuyButton>
            </Beat>

            {index + 1 !== songs.length && <Divider />}
          </>
        )
      })}
    </Container>
  )
}

const SongNumber = styled.p`
  margin: 0px;
  font-size: 28px;
  width: 50px;
  text-align: center;
  color: ${colors.primaryDark};
`

const StyledPlayButton = styled(props => <PlayButton {...props} />)`
  display: none;
`

const Beat = styled.div`
  display: flex;
  flex-direction: row;
  padding: 25px 20px;
  align-items: center;
  border-radius: 13px;

  :hover {
    background-color: ${colors.primaryLight};

    ${SongNumber} {
      display: none;
    }

    ${StyledPlayButton} {
      display: flex;
    }
  }
`

const BuyButton = styled.button`
  border-radius: 13px;
  background-color: ${colors.accent};
  padding: 10px 30px;
  border: none;

  :hover {
    cursor: pointer;
    background-color: ${colors.accentDark};
  }
`

const BuyButtonText = styled.p`
  font-size: 18px;
  margin: 0px;
  color: white;
`

const Container = styled.div`
  background-color: white;
  border-radius: 13px;
  ${shadows.primary};
  max-width: 900px;
  margin: auto;
`

const Divider = styled.hr`
  height: 1px;
  background-color: ${colors.primaryLight};
  width: calc(100% - 40px);
  border: none;
  margin: 0px auto;
`

const SongInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  padding: 0px 20px;
`

const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 13px;
  margin-left: 20px;
`

const Text = styled.h3`
  font-size: 18px;
  margin: 0px;
  color: ${colors.primary};
  font-weight: normal;
`

const Title = styled.h1`
  font-size: 28px;
  margin: 0px;
  color: ${colors.primaryDark};
  font-weight: normal;
`
