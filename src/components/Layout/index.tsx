import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

type DataProps = {
  noFooter?: boolean
}

const Layout: React.FC<DataProps> = ({ children, noFooter = false }) => {
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
      <div className="bg-pink-100 dark:bg-black text-black dark:text-white">
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
