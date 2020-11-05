import React from 'react'
import styled from 'styled-components'

import { colors } from 'BaseTheme'

import PlayIcon from '@icons/play.svg'
import PauseIcon from '@icons/pause.svg'

export default function PlayButton({
  className,
  isActive,
  isPlaying,
  onClick,
}) {
  return (
    <Container className={className} isActive={isActive} onClick={onClick}>
      {isActive && isPlaying ? (
        <PauseIcon width={24} height={24} fill={'white'} />
      ) : (
        <PlayIcon width={24} height={24} fill={'white'} />
      )}
    </Container>
  )
}

const Container = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  display: flex ${props => (props.isActive ? ' !important' : '')};
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${colors.accent}, ${colors.primaryDark});
  border: none;

  :hover {
    cursor: pointer;
    background: linear-gradient(
      315deg,
      ${colors.accent},
      ${colors.primaryDark}
    );
  }
`
