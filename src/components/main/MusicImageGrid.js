import React from 'react'
import { useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import { colors } from 'BaseTheme'

export default function MusicImageGrid({}) {
  const data = useStaticQuery(graphql`
    query MusicQuery {
      allMusicJson {
        nodes {
          title
          imageSrc
          link
        }
      }
    }
  `)

  return (
    <Grid>
      {data?.allMusicJson?.nodes?.map(music => {
        return (
          <Link href={music.link} target="_blank">
            <GridElement key={music.title} backgroundImage={music.imageSrc}>
              <Title>{music.title}</Title>
            </GridElement>
          </Link>
        )
      })}
    </Grid>
  )
}

const Title = styled.h3`
  pointer-events: none;
  margin: 0;
  opacity: 0;
  color: ${colors.primaryDark};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 5px;
  font-weight: normal;
  transition: opacity 200ms ease;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3px;
`

const GridElement = styled.div`
  filter: grayscale(1);
  width: 100%;
  height: 0px;
  padding-top: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: ${props =>
    props.backgroundImage ? 'url(' + props.backgroundImage + ')' : 'black'};
  background-size: cover;

  :hover {
    filter: grayscale(0);

    ${Title} {
      opacity: 1;
      background-color: rgba(255, 255, 255, 0.95);
    }
  }
`

const Link = styled.a`
  width: 100%;
  text-align: center;
  text-decoration: none;
`
