import "./src/styles/global.css"
import React from "react"
import { AnimatePresence } from "framer-motion"

export const wrapPageElement = ({ element }) => (
  <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
)

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  const TRANSITION_DELAY = 0.3 * 1000 * 2

  if (location.action === "PUSH") {
    window.setTimeout(() => window.scrollTo(0, 0), TRANSITION_DELAY)
  } else {
    const savedPosition = getSavedScrollPosition(location) || [0, 0]
    window.setTimeout(() => window.scrollTo(...savedPosition), TRANSITION_DELAY)
  }

  return false
}
