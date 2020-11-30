import React from 'react'
import styled from 'styled-components'

import Icon from 'components/Icon'

import FacebookIcon from '@icons/facebook.svg'
import InstagramIcon from '@icons/instagram.svg'
import SoundCloudIcon from '@icons/soundcloud.svg'
import SpotifyIcon from '@icons/spotify.svg'
import YouTubeIcon from '@icons/youtube.svg'

export default function SocialMediaIcons({ color = 'black', size = 24, style }) {
  return (
    <IconContainer style={style}>
      <Icon
        href="https://www.youtube.com/channel/UCKgU9kCGe0Aq1qFUkPC2Y7w"
        icon={<YouTubeIcon width={size} height={size} fill={color} />}
        size={size}
      />
      <Icon
        href="https://www.instagram.com/aytchofficial/"
        icon={<InstagramIcon width={size} height={size} fill={color} />}
        size={size}
      />
      <Icon
        href="https://www.facebook.com/AytchOfficial"
        icon={<FacebookIcon width={size} height={size} fill={color} />}
        size={size}
      />
      <Icon
        href="https://open.spotify.com/artist/5USwQPDuFkuAfWMWFSQKY0?si=EhGCIHaqTgq6WlXNoxBmHw"
        icon={<SpotifyIcon width={size} height={size} fill={color} />}
        size={size}
      />
      <Icon
        href="https://soundcloud.com/aytchofficial"
        icon={<SoundCloudIcon width={size} height={size} fill={color} />}
        size={size}
      />
    </IconContainer>
  )
}

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 240px;
  justify-content: space-between;
  margin-top: 16px;
`
