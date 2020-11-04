import React from 'react'

import Layout from 'layouts/Layout'
import Header from 'components/beats/Header'
import AllBeats from 'components/beats/AllBeats'

export default function Beats() {
  // https://la9v6ouo.api.sanity.io/v1/graphql/beats/default
  return (
    <Layout>
      <Header />
      <AllBeats containerStyle={{ marginTop: '145px' }} />
    </Layout>
  )
}
