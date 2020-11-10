import React from 'react'
import styled, { css } from 'styled-components'

export default function Icon({ className, href, icon, size }) {
  if (href) {
    return (
      <StyledIcon className={className} size={size}>
        <IconLink href={href} target="_blank">
          {icon}
        </IconLink>
      </StyledIcon>
    )
  }

  return (
    <StyledIcon className={className} size={size}>
      {icon}
    </StyledIcon>
  )
}

const StyledIcon = styled.div`
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.size + 'px'};
  border: none;
  background: none;

  :hover {
    background-color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
  }
`

const IconLink = styled.a`
  display: flex;
`
