import React from "react"
import { JournalComponent } from "../components/pages"
import { Layout } from "../components/layout"
import { Seo } from "../components/seo"

const GardenPage = () => {
  return (
    <Layout>
      <Seo title="The Digital Garden" />
      <JournalComponent />
    </Layout>
  )
}

export default GardenPage
