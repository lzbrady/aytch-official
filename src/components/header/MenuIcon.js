import React from 'react'
import { Animate } from 'react-move'
import styled from 'styled-components'
import { easeExpOut } from 'd3-ease'

export default function MenuIcon({
  className,
  isExpanded,
  fill,
  onClick,
  size,
}) {
  const lines = [
    { y: 75, transX: 160, transY: 20, turn: 45 },
    { y: 210, transX: 1000, transY: 0, turn: 0 },
    { y: 345, transX: -200, transY: 170, turn: -45 },
  ]

  return (
    <MenuButton className={className} onClick={onClick} size={size}>
      <svg width={size} height={size} viewBox={'0 0 480 480'} fill={fill}>
        {lines.map(line => (
          <Animate
            key={line.y}
            start={() => ({
              x: 0,
              y: 0,
              turn: 0,
            })}
            update={() => ({
              x: [isExpanded ? line.transX : 0],
              y: [isExpanded ? line.transY : 0],
              turn: [isExpanded ? line.turn : 0],
              timing: { duration: 750, ease: easeExpOut },
            })}
          >
            {state => {
              return (
                <rect
                  x="40"
                  y={line.y}
                  width="400"
                  height="60"
                  rx="50"
                  style={{
                    transform: `translate(${state.x}px, ${state.y}px) rotate(${state.turn}deg)`,
                  }}
                />
              )
            }}
          </Animate>
        ))}
      </svg>
    </MenuButton>
  )
}

const MenuButton = styled.button`
  border: none;
  background: none;
  z-index: 200;
  border-radius: 48px;
  width: ${props => props.size + 4 + 'px'};
  height: ${props => props.size + 4 + 'px'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 16px;

  :hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.3);
  }
`
