import React from 'react'
import { useStaticQuery } from 'gatsby'
import styled from 'styled-components'

export default function VideoThumbnails({
  activeVideoTitle,
  onThumbnailSelected,
}) {
  const data = useStaticQuery(graphql`
    query VideoQuery {
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

  console.log('Videos', data.allVideoJson.nodes)

  return (
    <Container>
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
  )
}

const Card = styled.div`
  width: 240px;
  height: 150px;
  background-color: black;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
  border: ${props => (props.active ? '3px solid white' : 'none')}
  box-sizing: border-box;

  :hover {
    opacity: 0.6;
    cursor: pointer;
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.3);
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow: scroll;
  padding-bottom: 20px;
  margin: 36px 20px;
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
