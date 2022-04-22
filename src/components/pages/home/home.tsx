import { Link } from "gatsby"
import React, { FC, useCallback, useRef, useState } from "react"
import ReactCanvasConfetti from "react-canvas-confetti"
import tw from "twin.macro"
import { SpotifyWidgetSmall } from "../../widgets"
import { StaticImage } from "gatsby-plugin-image"

export const HomeComponent: FC<{}> = () => {
  const refAnimationInstance = useRef(null)

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance
  }, [])

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      })
  }, [])

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    })

    makeShot(0.2, {
      spread: 60,
    })

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    })

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    })

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    })
  }, [makeShot])

  const greetings = ["Salam!", "안녕!", "こんにちは！"]
  const [active, setActive] = useState(0)

  const hoverHandler = () => {
    fire()
    setActive((active + 1) % 3)
  }

  return (
    <Container style={{ paddingTop: "20vh" }}>
      <div>
        <div className="text-3xl md:text-4xl font-bold flex flex-col items-start gap-8">
          <div
            className="bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-0.5 rounded-full relative group"
            onClick={hoverHandler}
          >
            <div className="absolute left-16 h-12 w-96 items-center text-base hidden group-hover:flex">
              {greetings[active]}
            </div>
            <StaticImage
              src="../../../assets/images/me.jpg"
              alt="Muhammad Urwatil Wutsqo"
              className="h-12 w-12 rounded-full border-2 cursor-pointer"
              imgClassName="rounded-full"
              height={200}
              placeholder="dominantColor"
            />
          </div>
          <div>
            Hello! I am <span className="text-pink-600">Wutsqo</span>.
          </div>
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

      <ReactCanvasConfetti
        refConfetti={getInstance}
        style={{
          position: "fixed",
          pointerEvents: "none",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
        }}
      />
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
