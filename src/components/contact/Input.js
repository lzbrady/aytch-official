import React from 'react'
import styled from 'styled-components'

import { colors } from 'BaseTheme'

export default function Input({
  label,
  multiline,
  name,
  onChange,
  type,
  value,
}) {
  return (
    <StyledLabel>
      {label}
      {multiline ? (
        <StyledTextArea
          rows={7}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      ) : (
        <StyledInput
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      )}
    </StyledLabel>
  )
}

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  color: ${colors.primaryDark};
  flex: 1;
`

const StyledInput = styled(props => <input {...props} />)`
  background-color: #edf2f4;
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  flex: 1;
  font-size: 18px;
  margin-top: 5px;
`

const StyledTextArea = styled(props => <textarea {...props} />)`
  background-color: #edf2f4;
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 18px;
  margin-top: 5px;
  resize: vertical;
`
