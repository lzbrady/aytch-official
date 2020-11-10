import React, { useState } from 'react'
import styled from 'styled-components'

import { shadows } from 'BaseTheme'

import Beat from 'components/beats/Beat'

const AllBeats = React.forwardRef(({ beats, containerStyle }, ref) => {
  const [activeSong, setActiveSong] = useState()

  const play = song => {
    setActiveSong(song)
  }

  return (
    <Container style={containerStyle}>
      {beats.map((song, index) => {
        return (
          <Beat
            ref={index === 0 ? ref : null}
            index={index}
            isActive={activeSong?.title === song.title}
            key={song.title}
            lastElement={index + 1 === beats.length}
            onClick={play}
            song={song}
          />
        )
      })}
    </Container>
  )
})

const Container = styled.div`
  background-color: white;
  border-radius: 13px;
  width: 90%;
  max-width: 900px;
  margin: auto;
  ${shadows.primary};
`

export default AllBeats
