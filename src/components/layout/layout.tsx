import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { motion } from "framer-motion"
import Header from "./components/header"
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
      <div
        className="dark:bg-black text-black dark:text-white overflow-hidden relative bg-beige"
        style={bgImage ? { backgroundImage: bgImage } : {}}
      >
        <main className="container mx-auto w-full min-h-screen pt-16 p-4 z-10 relative">
          <motion.main
            initial={{
              opacity: 0,
              y: 200,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -200,
            }}
            transition={{
              type: "spring",
              mass: 0.35,
              stiffness: 75,
              duration: 0.3,
            }}
          >
            {children}
          </motion.main>
        </main>
        {!noFooter && (
          <footer className="container mx-auto py-24 text-center text-sm z-50 relative">
            &copy;2022 Made with 💜 by Wutsqo
          </footer>
        )}
      </div>
    </>
  )
}
