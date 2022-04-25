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
    <Container>
      <Section>
        <div className="font-bold flex flex-col items-start gap-8 mt-20">
          <div
            className="bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-0.5 rounded-full relative group"
            onMouseEnter={hoverHandler}
          >
            <div className="absolute left-20 h-16 w-24 flex items-center text-base opacity-0 group-hover:opacity-100 duration-300 delay-75">
              {greetings[active]}
            </div>

            <StaticImage
              src="../../../assets/images/me.jpg"
              alt="Muhammad Urwatil Wutsqo"
              className="h-16 w-16 rounded-full border-2 cursor-pointer"
              imgClassName="rounded-full"
              height={200}
              placeholder="dominantColor"
            />
          </div>

          <h1>
            Hello! I am <span className="text-pink-600">Wutsqo</span>.
          </h1>
        </div>

        <div className="mt-4 text-xl md:text-2xl font-bold max-w-3xl">
          A <span className="text-blue-600">Computer</span>{" "}
          <span className="text-red-600">Science</span> student and{" "}
          <span className="text-yellow-600">Software Engineer</span>.
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
      </Section>

      <Section>
        <h2>About Me</h2>
        <article className="prose lg:prose-lg dark:prose-invert mt-8 mb-6 max-w-md">
          <p>
            Hey I'm Wutsqo, a 21-year-old CS student and software engineer
            currently living in Jakarta, Indonesia. 🇮🇩
          </p>
          <p>
            I love working in the realm between design and code. Some stuff that
            makes me excited are Fullstack Web Development, Design System, and
            delightful interfaces. ✨
          </p>
          <p>
            I spend my spare time reading, listening to music, running, and
            exploring the city. 🌆
          </p>

          <SpotifyWidgetSmall />
        </article>

        <div className="mt-6">
          <Link
            to="/feedback"
            className="inline-flex text-lg font-semibold group text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
          >
            Hit me up!
            <span className="group-hover:translate-x-2 ease-in-out duration-75">
              <ChevronRight />
            </span>
          </Link>
        </div>
      </Section>

      <Section>
        <h2>Selected Projects</h2>
        <div className="mt-6 prose lg:prose-lg dark:prose-invert max-w-md">
          Coming soon. For now, you can check my{" "}
          <a href="https://resume.wutsqo.me">resume</a> instead, if you’re into
          that sort of thing.
        </div>
      </Section>
    </Container>
  )
}

const Section = tw.div`py-20`

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
