import React, { FC } from "react"
import { FaDiscord } from "@react-icons/all-files/fa/FaDiscord"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import { SiDuolingo } from "@react-icons/all-files/si/SiDuolingo"
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope"
import tw from "twin.macro"
import SpotifyWidgetSmall from "../Spotify/Widget/small"

const HomeComponent: FC<{}> = () => {
  return (
    <Container style={{ paddingTop: "15vh" }}>
      <h1
        className="text-4xl md:text-5xl uppercase font-bold text-white dark:text-black fade-in"
        style={{ WebkitTextStroke: "2px var(--stroke)" }}
      >
        Hello, I am
      </h1>
      <h2
        className="text-5xl md:text-7xl uppercase font-bold fade-in"
        style={{ animationDelay: "0.3s" }}
      >
        Muhammad Urwatil Wutsqo.
      </h2>

      <h4
        className="fade-in mt-8 font-normal"
        style={{ animationDelay: "0.6s" }}
      >
        I am a <span className="font-bold">CS Student</span> with interests in
        Fullstack <span className="font-bold">Web Development</span>.
      </h4>

      <div
        className="fade-in mt-8"
        style={{ marginTop: "15vh", animationDelay: "1.2s" }}
      >
        <SpotifyWidgetSmall />
      </div>
    </Container>
  )
}

const Container = tw.div`max-w-screen-lg mx-auto`

export default HomeComponent
