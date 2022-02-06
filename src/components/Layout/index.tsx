import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

type DataProps = {
  noFooter?: boolean
  bgImage?: string
}

const Layout: React.FC<DataProps> = ({
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
      <div
        className="dark:bg-black text-black dark:text-white"
        style={bgImage ? { backgroundImage: bgImage } : {}}
      >
        <main className="container mx-auto w-full min-h-screen pt-16 p-4">
          {children}
        </main>
        {!noFooter && (
          <footer className="container mx-auto py-8 text-center text-sm">
            &copy; {new Date().getFullYear()} Muhammad Urwatil Wutsqo
          </footer>
        )}
      </div>
    </>
  )
}

export default Layout
