import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { colors } from 'BaseTheme'

import Duration from 'components/beats/Duration'
import PlayButton from 'components/beats/PlayButton'

const Beat = React.forwardRef(
  ({ index, isActive, lastElement, onClick, song }, ref) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const audioRef = useRef()

    // Track time
    useEffect(() => {
      const timeUpdater = e => {
        setCurrentTime(e.target.currentTime)

        if (e.target.currentTime >= audioRef.current.duration) {
          setIsPlaying(false)
        }
      }
      const listener = audioRef.current
      listener.addEventListener('timeupdate', timeUpdater)

      return () => {
        listener.removeEventListener('timeupdate', timeUpdater)
      }
    })

    // When beat is no longer active, stop
    useEffect(() => {
      if (!isActive) {
        audioRef.current.pause()
        setIsPlaying(false)
      }
    }, [isActive])

    return (
      <>
        <StyledBeat key={song.title}>
          <Info>
            <PlayButton
              isActive={isActive}
              isPlaying={isPlaying}
              ref={ref}
              onClick={() => {
                if (audioRef && audioRef.current) {
                  // Toggle audio
                  isPlaying ? audioRef.current.pause() : audioRef.current.play()
                  setIsPlaying(_isPlaying => !_isPlaying)
                  onClick(song)
                }
              }}
            />
            <StyledImage fixed={song?.image?.asset?.fixed} />
            <SongInfo>
              <Title>{song.title}</Title>
              <Text>{song.duration}</Text>
              <Text>{song.bpm} bpm</Text>
            </SongInfo>
            <BuyButton>
              <BuyButtonText>Buy Now</BuyButtonText>
            </BuyButton>

            <audio ref={audioRef} src={song.audio_file?.asset.url} />
          </Info>

          {audioRef && audioRef.current && (
            <Duration
              setCurrent={newTime => {
                audioRef.current.currentTime = newTime
                setCurrentTime(newTime)
              }}
              current={Math.floor(currentTime)}
              total={Math.floor(audioRef.current.duration)}
            />
          )}
        </StyledBeat>

        {!lastElement && <Divider />}
      </>
    )
  }
)

const StyledBeat = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 25px 0px;
  align-items: center;
  border-radius: 13px;

  :hover {
    background-color: ${colors.primaryLight};
  }
`

const BuyButton = styled.button`
  border-radius: 13px;
  background-color: ${colors.accent};
  padding: 10px 30px;
  border: none;
  margin: 10px auto;
  flex: 1;
  max-width: 250px;
  min-width: 200px;
  align-self: center;

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

const Divider = styled.hr`
  height: 1px;
  background-color: ${colors.primaryLight};
  width: calc(100% - 40px);
  border: none;
  margin: 0px auto;
`

const Info = styled.div`
  flex: 1;
  width: 94%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const SongInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  padding: 0px 20px;
`

const StyledImage = styled(props => <Img {...props} />)`
  width: 75px;
  height: 75px;
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

export default Beat
