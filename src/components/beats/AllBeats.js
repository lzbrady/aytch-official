import React from 'react'
import styled from 'styled-components'

import { colors, shadows } from 'BaseTheme'

import PlayIcon from '@icons/play.svg'

export default function AllBeats({ containerStyle }) {
  return (
    <Container style={containerStyle}>
      <Beat>
        <SongNumber>1</SongNumber>

        <StyledImage src="https://m.media-amazon.com/images/I/61T1lIK0UaL._SS500_.jpg" />

        <SongInfo>
          <Title>Wittit</Title>
          <Text>3:21</Text>
          <Text>90 bpm</Text>
        </SongInfo>

        <BuyButton>
          <BuyButtonText>Buy Now</BuyButtonText>
        </BuyButton>
      </Beat>

      <Divider />

      <Beat>
        <SongNumber>1</SongNumber>

        <StyledImage src="https://m.media-amazon.com/images/I/61T1lIK0UaL._SS500_.jpg" />

        <SongInfo>
          <Title>Wittit</Title>
          <Text>3:21</Text>
          <Text>90 bpm</Text>
        </SongInfo>

        <BuyButton>
          <BuyButtonText>Buy Now</BuyButtonText>
        </BuyButton>
      </Beat>
    </Container>
  )
}

const Beat = styled.div`
  display: flex;
  flex-direction: row;
  padding: 25px 20px;
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

  :hover {
    cursor: pointer;
    background-color: ${colors.accentDark};
  }
`

const BuyButtonText = styled.p`
  font-size: 24px;
  margin: 0px;
  color: white;
`

const Container = styled.div`
  background-color: white;
  border-radius: 13px;
  ${shadows.primary};
  max-width: 900px;
  margin: auto;
`

const Divider = styled.hr`
  height: 1px;
  background-color: ${colors.primaryLight};
  width: calc(100% - 40px);
  border: none;
  margin: 0px;
`

const SongInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  padding: 0px 20px;
`

const SongNumber = styled.p`
  margin: 0px;
  font-size: 36px;
  width: 50px;
  margin-right: 20px;
  text-align: center;
  color: ${colors.primaryDark};
`

const StyledImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 13px;
`

const Text = styled.h3`
  font-size: 18px;
  margin: 0px;
  color: ${colors.primary};
`

const Title = styled.h1`
  font-size: 36px;
  margin: 0px;
  color: ${colors.primaryDark};
`
