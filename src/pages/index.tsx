import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout'
import config from '../../data/SiteConfig'

function IndexPage() {
  return (
    <Layout>
      <div>
        <Helmet title={`${config.siteTitle}`} />
        index
      </div>
    </Layout>
  )
}

export default IndexPage
