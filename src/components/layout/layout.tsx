import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./components/header"
import SocialsBar from "./components/socials"
import { Gradient1, Gradient2 } from "./components/gradients"

type DataProps = {
  noFooter?: boolean
  bgImage?: string
}

export const Layout: React.FC<DataProps> = ({
  children,
  noFooter = false,
  bgImage,
}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <SocialsBar />
      <div
        className="dark:bg-black text-black dark:text-white overflow-hidden relative"
        style={bgImage ? { backgroundImage: bgImage } : {}}
      >
        <Gradient1 />
        <Gradient2 />
        <main className="container mx-auto w-full min-h-screen pt-16 p-4 z-10 relative">
          {children}
        </main>
        {!noFooter && (
          <footer className="container mx-auto py-8 text-center text-sm">
            Designed & Built by Muhammad Urwatil Wutsqo
          </footer>
        )}
      </div>
    </>
  )
}
