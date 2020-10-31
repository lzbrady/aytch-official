import React from 'react'

import Layout from 'layouts/Layout'

import HeroHeader from 'components/main/HeroHeader'
import Music from 'components/main/Music'
import Video from 'components/main/Video'

export default function Home() {
  return (
    <Layout alignTop>
      <HeroHeader />
      <Music />
      <Video />

      <p style={{ height: '100px' }}>1</p>
      <p style={{ height: '100px' }}>2</p>
      <p style={{ height: '100px' }}>3</p>
      <p style={{ height: '100px' }}>4</p>
      <p style={{ height: '100px' }}>5</p>
      <p style={{ height: '100px' }}>6</p>
      <p style={{ height: '100px' }}>7</p>
      <p style={{ height: '100px' }}>8</p>
      <p style={{ height: '100px' }}>9</p>
      <p style={{ height: '100px' }}>10</p>
    </Layout>
  )
}
