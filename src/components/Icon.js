import React from 'react'
import styled from 'styled-components'

export default function Icon({ icon, size, href }) {
  if (href) {
    return (
      <StyledIcon size={size}>
        <IconLink href={href} target="_blank">
          {icon}
        </IconLink>
      </StyledIcon>
    )
  }

  return <StyledIcon>{icon}</StyledIcon>
}

const StyledIcon = styled.div`
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.size + 'px'};

  :hover {
    background-color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
  }
`

const IconLink = styled.a`
  display: flex;
`
