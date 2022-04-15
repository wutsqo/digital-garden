import React from "react"
import { Layout } from "../components/layout"
import { Seo } from "../components/seo"
import { StatsComponent } from "../components/pages"

const SpotifyPage = () => {
  return (
    <Layout>
      <Seo title="Stats" />
      <StatsComponent />
    </Layout>
  )
}

export default SpotifyPage
