import React from "react"
import { JournalComponent } from "../components/pages"
import { Layout } from "../components/layout"
import { Seo } from "../components/seo"

const JournalPage = () => {
  return (
    <Layout>
      <Seo title="Journal" />
      <JournalComponent />
    </Layout>
  )
}

export default JournalPage
