import React, { useRef } from 'react'
import { useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import { shadows } from 'BaseTheme'

export default function VideoThumbnails({
  activeVideoTitle,
  onThumbnailSelected,
}) {
  const data = useStaticQuery(graphql`
    query VideoThumbnailsQuery {
      allVideoJson {
        nodes {
          title
          imageSrc
          link
          isSquare
        }
      }
    }
  `)

  const containerRef = useRef()

  return (
    <Wrapper>
      <ArrowButton
        onClick={() => containerRef.current.scrollBy(-260, 0)}
        align="left"
      >
        &lt;
      </ArrowButton>

      <Container ref={containerRef}>
        {data?.allVideoJson?.nodes?.map(thumbnail => {
          return (
            <Thumbnail
              key={thumbnail.title}
              onClick={() => onThumbnailSelected(thumbnail)}
            >
              <Card active={activeVideoTitle === thumbnail.title}>
                <StyledImage src={thumbnail.imageSrc} />
              </Card>
              <Title>{thumbnail.title}</Title>
            </Thumbnail>
          )
        })}
      </Container>

      <ArrowButton
        onClick={() => containerRef.current.scrollBy(260, 0)}
        align="right"
      >
        &gt;
      </ArrowButton>
    </Wrapper>
  )
}

const ArrowButton = styled.button`
  position: absolute;
  top: 50px;
  height: 50px;
  width: 50px;
  background-color: rgba(255, 255, 255, 0.6);
  border: none;
  border-radius: 8px;
  font-size: 32px;
  z-index: 100;
  ${props => props.align + ': 0'};

  :hover {
    background-color: rgb(255, 255, 255) !important;
  }
`

const Card = styled.div`
  width: 240px;
  height: 150px;
  background-color: black;
  border-radius: 8px;
  border: ${props => (props.active ? '3px solid white' : 'none')};
  box-sizing: border-box;
  ${shadows.primary}

  :hover {
    opacity: 0.6;
    cursor: pointer;
    ${shadows.hover.primary}
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow: scroll;
  padding-bottom: 20px;
`

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`

const Title = styled.h3``

const Thumbnail = styled.div`
  width: 240px;
  text-align: center;
  margin-right: 20px;
  flex-shrink: 0;
`

const Wrapper = styled.div`
  position: relative;
  width: calc(100% - 80px);
  margin: 36px 40px;
`
