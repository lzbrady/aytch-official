import React from 'react'
import styled from 'styled-components'

import { colors } from 'BaseTheme'

export default function RadioButtons({ buttons, label, name }) {
  return (
    <div>
      <Label>{label}</Label>

      <ButtonsContainer>
        {buttons.map(button => {
          return (
            <RadioButton>
              <RadioInput type="radio" value={button.value} name={name} />
              {button.label}
            </RadioButton>
          )
        })}
      </ButtonsContainer>
    </div>
  )
}

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
`

const Label = styled.p`
  font-size: 18px;
  color: ${colors.primaryDark};
  margin: 0px 0px 10px;
`

const RadioButton = styled.div`
  margin: 5px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const RadioInput = styled.input`
  width: 20px;
  height: 20px;
  margin: 0px 5px 0px 0px;

  :hover {
    cursor: pointer;
  }
`
