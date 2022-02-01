import React, { FC } from "react"
import { FaDiscord } from "@react-icons/all-files/fa/FaDiscord"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import { SiDuolingo } from "@react-icons/all-files/si/SiDuolingo"
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope"
import tw from "twin.macro"
import SpotifyWidgetSmall from "../Spotify/Widget/small"

const HomeComponent: FC<{}> = () => {
  return (
    <Container style={{ paddingTop: "20vh" }}>
      <h1 className="text-3xl">Hello!</h1>
      <h2 className="text-5xl">I am Wutsqo</h2>
      <br />
      <p>Welcome to my personal site</p>
      <SocialContainer>
        <SocialButton href="mailto:wutsqo@ristek.cs.ui.ac.id">
          <FaEnvelope color="red" />
        </SocialButton>

        <SocialButton href="https://linkedin.com/in/wutsqo">
          <FaLinkedin color="#0e76a8" />
        </SocialButton>

        <SocialButton href="https://discordapp.com/users/487959385939771392">
          <FaDiscord color="#7289d9" />
        </SocialButton>

        <SocialButton href="https://www.duolingo.com/profile/kafkanium">
          <SiDuolingo color="#7ac70c" />
        </SocialButton>
      </SocialContainer>

      <div style={{ marginTop: "12vh" }}>
        <SpotifyWidgetSmall />
      </div>
    </Container>
  )
}

interface ISocialButton {
  href: string
}

const Container = tw.div`max-w-screen-md mx-auto`
const SocialContainer = tw.div`relative flex gap-3 mt-8 h-12 items-center`
const SocialButton: FC<ISocialButton> = ({ children, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="h-10 w-10 bg-white rounded p-1 flex items-center justify-center text-3xl"
    >
      {children}
    </a>
  )
}

export default HomeComponent
