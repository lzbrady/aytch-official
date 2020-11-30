import React from 'react'
import styled from 'styled-components'

import Button from 'components/Button'
import Input from 'components/contact/Input'

import { colors } from 'BaseTheme'

export default function ContactForm({}) {
  return (
    <Container>
      <TitleContainer>
        <Title>Contact Aytch</Title>
      </TitleContainer>

      <Form
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />

        <FormContent>
          <InputGroup>
            <Input label="First Name" />
            <Input label="Last Name" />
          </InputGroup>

          <InputGroup>
            <Input label="Email Address" />
          </InputGroup>

          <InputGroup>
            <Input label="Message" multiline />
          </InputGroup>
        </FormContent>
        <Button dark text="Submit" style={{ margin: '80px auto 20px' }} />
      </Form>
    </Container>
  )
}

const Container = styled.div`
  background-color: white;
  border-radius: 13px;
  padding: 40px;
  max-width: 820px;
  margin: auto;
  position: relative;
  z-index: 10;
`

const Form = styled(props => <form {...props} />)``

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  grid-gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
`

const Title = styled.h1`
  margin: 0px auto 25px;
  text-align: center;
  font-size: 48px;
  font-weight: normal;
  color: ${colors.primaryDark};
`

const TitleContainer = styled.div``
