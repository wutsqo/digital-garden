import { Transition } from "@headlessui/react"
import { Link } from "gatsby"
import React, { FC, ReactNode, useState } from "react"
import ThemeToggle from "./themetoggle"
import tw from "twin.macro"

interface NavLinkProps {
  to: string
  children: ReactNode
}

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
            <NavLink to="/">home</NavLink>
            <NavLink to="/stats">stats</NavLink>
            <NavLink to="/journal">journal</NavLink>
            <NavLink to="https://resume.wutsqo.me">resume</NavLink>
          </NavLinkContainer>

          <ThemeToggle />

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
          <NavLink to="/">home</NavLink>
          <NavLink to="/stats">stats</NavLink>
          <NavLink to="/journal">journal</NavLink>
          <NavLink to="https://resume.wutsqo.me">resume</NavLink>
        </MobileMenuContainer>
      </Transition>
    </Nav>
  )
}

const Nav: FC = ({ children }) => {
  return (
    <nav
      className="fixed w-screen z-50 text-gray-900 dark:text-white top-0 backdrop-blur"
      style={{ zIndex: 50 }}
    >
      {children}
    </nav>
  )
}

const Container = tw.div`max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20`
const InnerContainer = tw.div`flex items-center justify-end`
const NavLinkContainer = tw.div`hidden md:flex mr-4 ml-10 text-gray-500 dark:text-gray-400 font-semibold text-lg`
const BurgerContainer = tw.div`mr-2 flex items-center md:hidden`
const MobileMenuContainer = tw.div`md:hidden px-4 pt-2 pb-3 flex flex-col text-center font-semibold`

const NavLink: FC<NavLinkProps> = ({ to, children }) => {
  if (to.startsWith("http"))
    return (
      <a
        className="py-2 my-2 rounded px-2 mx-1 hover:text-black dark:hover:text-white"
        href={to}
      >
        {children}
        <span className="hidden group-hover:inline-block">&nbsp;🡥</span>
      </a>
    )

  return (
    <Link
      to={to}
      className="py-2 my-2 rounded px-2 mx-1 hover:text-black dark:hover:text-white"
      activeClassName="dark:text-white text-black"
    >
      {children}
    </Link>
  )
}

const NavLogo = () => {
  return (
    <svg
      viewBox="0 0 697 697"
      className="h-10 w-10 text-black dark:text-white fill-current"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M408.11 346.06h-87.8v-47.74l-.59.74-78.3 98.59H231.2L154.87 297.6v178.58H97.9V220.53h65.37l74.5 98.24 74.87-98.24h64.64v117.8h20.18l10.65 7.73z" />
          <path d="M599.1 220.82v255.64h-65.37l-74.5-98.23-74.87 98.23h-64.64V371.37h-20.66l-10.65-7.73h88.28v35.04l.59-.74 78.3-98.59h10.22l76.33 100.05V220.82h56.97z" />
          <path d="M348.5 697A348.58 348.58 0 01212.84 27.4a348.58 348.58 0 01271.32 642.2A346.32 346.32 0 01348.5 697zm0-657C178.39 40 40 178.39 40 348.5S178.39 657 348.5 657 657 518.61 657 348.5 518.61 40 348.5 40z" />
        </g>
      </g>
    </svg>
  )
}

const Burger = () => {
  return (
    <svg
      className="block h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  )
}

const Cross = () => {
  return (
    <svg
      className="block h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  )
}

export default Navbar
