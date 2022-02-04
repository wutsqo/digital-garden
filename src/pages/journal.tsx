import React from "react"
import JournalComponent from "../components/Journal"
import Layout from "../components/Layout"
import Seo from "../components/seo"

const JournalPage = () => {
  return (
    <Layout>
      <Seo title="Journal" />
      <JournalComponent />
    </Layout>
  )
}

export default JournalPage
