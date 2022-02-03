import * as React from "react"
import PropTypes from "prop-types"
import Navbar from "./navbar"

interface HeaderProps {
  siteTitle?: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => (
  <header>
    <Navbar />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
