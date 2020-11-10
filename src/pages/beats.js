import React, { useRef } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from 'layouts/Layout'
import Header from 'components/beats/Header'
import AllBeats from 'components/beats/AllBeats'

export default function Beats() {
  const data = useStaticQuery(graphql`
    query AllBeatsQuery {
      allSanityBeats {
        nodes {
          title
          url
          bpm
          duration
          image {
            asset {
              fixed(width: 75, height: 75) {
                ...GatsbySanityImageFixed
              }
            }
          }
          audio_file {
            asset {
              url
            }
          }
        }
      }
    }
  `)

  const firstBeatRef = React.createRef()

  return (
    <Layout>
      <Header
        beat={data.allSanityBeats.nodes[0]}
        onHighlightClick={() => {
          if (firstBeatRef.current) {
            firstBeatRef.current.click()
          }
        }}
      />

      <AllBeats
        beats={data.allSanityBeats.nodes}
        containerStyle={{ marginTop: '145px' }}
        ref={firstBeatRef}
      />
    </Layout>
  )
}
