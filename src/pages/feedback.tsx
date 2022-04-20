import * as React from "react"
import { Layout } from "../components/layout"
import { FeedbackComponent } from "../components/pages"
import { Seo } from "../components/seo"

const FeedbackPage = () => (
  <Layout>
    <Seo title="Send me a message" />
    <FeedbackComponent />
  </Layout>
)

export default FeedbackPage
