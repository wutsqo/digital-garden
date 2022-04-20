import { Link } from "gatsby"
import React, { FC } from "react"
import tw from "twin.macro"
import { SpotifyWidgetSmall } from "../../widgets"

export const HomeComponent: FC<{}> = () => {
  return (
    <Container style={{ paddingTop: "20vh" }}>
      <div>
        <div className="text-3xl md:text-4xl font-bold">
          Hello! I am <span className="text-pink-600">Wutsqo</span>.
        </div>
        <div className="mt-4 text-xl md:text-2xl font-bold max-w-3xl">
          I am a <span className="text-blue-600">Computer</span>{" "}
          <span className="text-red-600">Science</span> student with interests
          in <span className="text-yellow-600">Software Engineering</span>{" "}
          fields.
        </div>
      </div>

      <div className="mt-16">
        <Link
          to="/feedback"
          className="inline-flex text-lg font-semibold group text-slate-700 hover:text-black dark:text-slate-300 dark:hover:text-white"
        >
          Send me a message
          <span className="group-hover:translate-x-2 ease-in-out duration-75">
            <ChevronRight />
          </span>
        </Link>
      </div>

      <div
        className="fade-in mt-8"
        style={{ marginTop: "15vh", animationDelay: "1.2s" }}
      >
        <SpotifyWidgetSmall />
      </div>
    </Container>
  )
}

const ChevronRight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 ml-1 mt-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5l7 7-7 7"
      ></path>
    </svg>
  )
}

const Container = tw.div`max-w-screen-lg lg:px-12 mx-auto`
