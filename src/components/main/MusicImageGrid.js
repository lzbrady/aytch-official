import React from 'react'
import { useStaticQuery } from 'gatsby'
import styled from 'styled-components'

export default function MusicImageGrid({}) {
  const data = useStaticQuery(graphql`
    query MusicQuery {
      allMusicJson {
        nodes {
          title
          imageSrc
        }
      }
    }
  `)

  console.log('Music', data.allMusicJson.nodes)

  return (
    <Grid>
      {data?.allMusicJson?.nodes?.map(music => {
        return (
          <GridElement key={music.title}>
            <a href={music.link}>
              <StyledImage src={music.imageSrc} />
              <Title>{music.title}</Title>
            </a>
          </GridElement>
        )
      })}
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3px;
`

const GridElement = styled.div`
  position: relative;
  filter: grayscale(1);
  width: 100%;
  height: 100%;

  :hover {
    filter: grayscale(0);

    h3 {
      display: inherit;
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
`

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`

const Title = styled.h3`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  text-align: center;
  pointer-events: none;
  margin: 0;
  padding: 20px 10px;
  display: none;
`
