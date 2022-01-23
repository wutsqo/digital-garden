import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import HomeComponent from "../components/Home"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HomeComponent />
  </Layout>
)

export default IndexPage
