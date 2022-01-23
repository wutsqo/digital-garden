import { Link } from "gatsby"
import React, { FC, ReactNode } from "react"

interface NavLinkProps {
  to: string
  children: ReactNode
}

const NavLink: FC<NavLinkProps> = ({ to, children }) => {
  if (to.startsWith("http"))
    return (
      <a
        className="py-2 my-2 rounded px-2 mx-1 text-lg hover:bg-pink-100 group"
        href={to}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
        <span className="hidden group-hover:inline-block">&nbsp;🡥</span>
      </a>
    )

  return (
    <Link
      to={to}
      className="py-2 my-2 rounded px-4 text-lg hover:bg-pink-100"
      activeClassName="bg-pink-200"
    >
      {children}
    </Link>
  )
}

const Navbar = () => {
  return (
    <div className="h-16 z-50 shadow flex justify-between backdrop-blur px-8 py-4 items-center bg-white/75">
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="flex gap-4">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/stats">Stats</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="https://resume.wutsqo.me">Resume</NavLink>
      </div>
    </div>
  )
}

export default Navbar
