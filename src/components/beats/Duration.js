import React, { useCallback } from 'react'
import styled from 'styled-components'
import { colors } from 'BaseTheme'

export default function Duration({ current, setCurrent, total }) {
  // Returns a formatted duration (m:ss)
  const getDisplayTime = useCallback(time => {
    if (isNaN(time)) return '--:--'

    let sec = time % 60
    return `${Math.floor(time / 60)}:${sec < 10 ? '0' + sec : sec}`
  })

  const getOffset = useCallback(() => {
    return current === 0 ? 0 : Math.round((current / total) * 10000) / 100
  })

  const onBarClick = e => {
    if (!isNaN(total)) {
      var rect = e.target.getBoundingClientRect()
      var width = rect.width
      var x = e.clientX - rect.left

      console.log('Setting current to', Math.round(total * (x / width)))

      setCurrent(Math.round(total * (x / width)))
    }
  }

  return (
    <Container>
      <Bar onClick={onBarClick}>
        <Point offset={getOffset()} />

        <Cover offset={getOffset()} />
      </Bar>
      <Times>
        <Time>{getDisplayTime(current)}</Time>
        <Time>{getDisplayTime(total)}</Time>
      </Times>
    </Container>
  )
}

const Bar = styled.div`
  width: calc(100% + 20px);
  height: 20px;
  border: 2px solid ${colors.primaryDark};
  box-sizing: border-box;
  border-radius: 20px;
  background: linear-gradient(
    to right,
    ${colors.accent},
    ${colors.primaryDark}
  );

  :hover {
    cursor: pointer;
    border-color: ${colors.primary};
  }
`

const Container = styled.div`
  position: relative;
  flex: 1;
  width: calc(94% - 20px);
  margin-right: 20px;
  margin-top: 20px;
`

const Cover = styled.div`
  height: 16px;
  background-color: white;
  opacity: 0.7;
  position: absolute;
  top: 2px;
  right: -18px;
  left: ${props => `calc(${props.offset}% + 2px)`};
  border-radius: 20px;
  z-index: 5;
  pointer-events: none;
`

const Point = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 16px;
  border: 2px solid ${colors.primaryDark};
  background-color: ${colors.primary};
  box-sizing: border-box;
  position: absolute;
  left: ${props => `calc(${props.offset}% + 2px)`};
  top: 2px;
  z-index: 10;
`

const Time = styled.p`
  margin: 0;
`

const Times = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
`
