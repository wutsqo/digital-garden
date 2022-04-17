import * as React from "react"
import { PageProps } from "gatsby"
import { Layout } from "../components/layout"
import { Seo } from "../components/seo"
import { AboutComponent } from "../components/pages"

const UsingTypescript: React.FC<PageProps<{}>> = ({ data, path }) => (
  <Layout>
    <Seo title="About Me" />
    <AboutComponent />
  </Layout>
)

export default UsingTypescript
