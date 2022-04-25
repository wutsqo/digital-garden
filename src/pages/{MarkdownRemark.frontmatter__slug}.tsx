import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { Seo } from "../components/seo"

const Template = ({ data }: any) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <Seo title={frontmatter.title} />
      <div className="max-w-screen-md mx-auto mt-20">
        <div className="prose prose-sm lg:prose-md 2xl:prose-lg dark:prose-invert">
          <h1>{frontmatter.title}</h1>
          <div className="bg-blue-50 dark:bg-slate-900 p-4 border-l-4 border-blue-200 dark:border-blue-900">
            {frontmatter.subtitle}
          </div>
          <div className="mt-4" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
        subtitle
      }
    }
  }
`

export default Template
