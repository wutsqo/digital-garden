import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import StatsComponent from "../components/Stats"

const SpotifyPage = () => {
  return (
    <Layout>
      <Seo title="Stats" />
      <StatsComponent />
    </Layout>
  )
}

export default SpotifyPage
