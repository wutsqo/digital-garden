import { Transition } from "@headlessui/react"
import { Link } from "gatsby"
import React, { FC, ReactNode, useState } from "react"
import ThemeToggle from "./themetoggle"
import tw from "twin.macro"
import { Burger, Cross, NavLogo } from "./svgs"

interface NavLinkProps {
  to: string
  children: ReactNode
}

const links: NavLinkProps[] = [
  {
    to: "/",
    children: "home",
  },
  {
    to: "/feedback",
    children: "message",
  },
  {
    to: "/recents",
    children: "activities",
  },
  {
    to: "/garden",
    children: "garden",
  },
  {
    to: "https://resume.wutsqo.me",
    children: "resume",
  },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Nav>
      <Container>
        <Link to="/" className="py-2 flex-shrink-0">
          <NavLogo />
        </Link>

        <InnerContainer>
          <NavLinkContainer>
            {links.map((link, i) => (
              <NavLink to={link.to}>{link.children}</NavLink>
            ))}
          </NavLinkContainer>

          <div className="pt-0 md:pt-2">
            <ThemeToggle />
          </div>

          <BurgerContainer>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center ml-2 justify-center p-2 rounded-md text-gray-800 dark:text-gray-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? <Burger /> : <Cross />}
            </button>
          </BurgerContainer>
        </InnerContainer>
      </Container>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <MobileMenuContainer id="mobile-menu">
          {links.map((link, i) => (
            <NavLink to={link.to}>{link.children}</NavLink>
          ))}
        </MobileMenuContainer>
      </Transition>
    </Nav>
  )
}

const Nav: FC = ({ children }) => {
  return (
    <nav
      className="fixed w-screen z-50 text-gray-900 dark:text-white top-0 bg-beige dark:bg-black md:bg-transparent dark:md:bg-transparent"
      style={{ zIndex: 50 }}
    >
      {children}
    </nav>
  )
}

const Container = tw.div`max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center md:items-start justify-between h-20`
const InnerContainer = tw.div`flex items-center justify-end`
const NavLinkContainer = tw.div`hidden md:flex mr-4 ml-10 text-lg`
const BurgerContainer = tw.div`mr-2 flex items-center md:hidden`
const MobileMenuContainer = tw.div`md:hidden px-4 pt-2 pb-3 flex flex-col text-center`

const NavLink: FC<NavLinkProps> = ({ to, children }) => {
  if (to.startsWith("http"))
    return (
      <a
        className="pt-2 md:pt-4 pb-2 px-4 mx-1 group relative"
        href={to}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
        <span className="hidden absolute group-hover:inline-block text-sm">
          &nbsp;🡥
        </span>
      </a>
    )

  return (
    <Link
      to={to}
      className="pt-2 md:pt-4 py-2 px-4 mx-1"
      activeClassName="text-black bg-white dark:bg-primary-dark dark:text-white border-2 border-black dark:border-white md:border-t-0"
    >
      {children}
    </Link>
  )
}

export default Navbar
