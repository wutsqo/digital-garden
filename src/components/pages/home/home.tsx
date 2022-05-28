import React, { FC, useCallback, useRef, useState } from "react"
import ReactCanvasConfetti from "react-canvas-confetti"
import tw from "twin.macro"
import { SpotifyWidgetSmall } from "../../widgets"
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "../../button"

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

  const [active, setActive] = useState(0)

  const hoverHandler = () => {
    fire()
    setActive((active + 1) % 3)
  }

  return (
    <Container>
      <Section>
        <div className="flex flex-col items-start gap-8 mt-20">
          <StaticImage
            src="../../../assets/images/me.jpg"
            alt="Muhammad Urwatil Wutsqo"
            className="h-24 w-24 cursor-pointer card grayscale hover:grayscale-0"
            imgClassName=""
            height={200}
            placeholder="dominantColor"
            onClick={hoverHandler}
          />

          <h1>
            Hello! I am{" "}
            <span className="underline decoration-white dark:decoration-primary-dark decoration-8 underline-offset-0">
              Wutsqo
            </span>
          </h1>
        </div>

        <div className="mt-4 text-xl md:text-2xl font-semibold max-w-3xl">
          and welcome to your friend's personal{" "}
          <span className="text-green-600">digital garden</span> 🌱
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
        <SectionTitle text="About Me" />
        <article className="prose lg:prose-lg dark:prose-invert text-black dark:text-white mt-8 mb-6 max-w-md">
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
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-sm gap-4 text-lg">
            <Button to="/feedback">Hit Me Up!</Button>
            <Button to="/recents">Recent Activities</Button>
            <Button to="/garden">Visit My Garden</Button>
            <Button to="https://resume.wutsqo.me">View Resume</Button>
          </div>
        </div>
      </Section>

      <Section>
        <SectionTitle text="Selected Projects" />
        <div className="mt-6 prose lg:prose-lg dark:prose-invert max-w-md">
          Coming soon. For now, you can check my{" "}
          <a href="https://resume.wutsqo.me">resume</a> instead, if you’re into
          that sort of thing.
        </div>
      </Section>
    </Container>
  )
}

type SectionTitleProps = {
  text: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text }) => {
  return (
    <div>
      <div className="bg-white dark:bg-primary-dark absolute h-2 w-24" />
      <h2 className="-rotate-2">{text}</h2>
    </div>
  )
}

const Section = tw.div`py-20`
const Container = tw.div`max-w-screen-lg lg:px-12 mx-auto`
