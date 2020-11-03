import React from 'react'

import Layout from 'layouts/Layout'

import HeroHeader from 'components/main/HeroHeader'
import Music from 'components/main/Music'
import Video from 'components/main/Video'
import Production from 'components/main/Production'

export default function Home() {
  return (
    <Layout alignTop>
      <HeroHeader />
      <Music />
      <Video />
      <Production />
    </Layout>
  )
}
