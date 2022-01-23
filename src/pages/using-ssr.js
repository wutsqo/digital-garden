import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

// eslint-disable-next-line react/prop-types
const UsingSSR = ({ serverData }) => {
  return (
    <Layout>
      <Seo title="Using SSR" />
      <h1>SSR page</h1>
      <img
        style={{ width: "300px" }}
        alt="A random dog"
        // eslint-disable-next-line react/prop-types
        src={serverData.message}
      />
      <p>Welcome to a server side rendered page with a random dog photo</p>
      <p>
        To learn more, head over to our{" "}
        <a href="https://www.gatsbyjs.com/docs/reference/rendering-options/server-side-rendering/">
          documentation about Server Side Rendering
        </a>
        .
      </p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default UsingSSR

// eslint-disable-next-line require-jsdoc
export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`)
    if (!res.ok) {
      throw new Error(`Response failed`)
    }
    return {
      props: await res.json(),
    }
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    }
  }
}
