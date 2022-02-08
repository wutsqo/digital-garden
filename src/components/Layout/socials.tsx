import React, { FC } from "react"
import { FaDiscord } from "@react-icons/all-files/fa/FaDiscord"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import { SiDuolingo } from "@react-icons/all-files/si/SiDuolingo"
import tw from "twin.macro"
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope"

interface ISocialButton {
  href: string
}

const SocialsBar = () => {
  return (
    <Container>
      <SocialContainer>
        <SocialButton href="mailto:wutsqo@ristek.cs.ui.ac.id">
          <FaEnvelope className="hover:text-red-600" />
        </SocialButton>

        <SocialButton href="https://linkedin.com/in/wutsqo">
          <FaLinkedin className="hover:text-linkedin" />
        </SocialButton>

        <SocialButton href="https://discordapp.com/users/487959385939771392">
          <FaDiscord className="hover:text-discord" />
        </SocialButton>

        <SocialButton href="https://www.duolingo.com/profile/kafkanium">
          <SiDuolingo className="hover:text-duolingo" />
        </SocialButton>
      </SocialContainer>
    </Container>
  )
}

const Container = tw.div`text-black text-3xl fixed left-0 bottom-0 ml-4 mb-4 hidden xl:block`
const SocialContainer = tw.div`flex flex-col gap-2 m-4 text-gray-500`
const SocialButton: FC<ISocialButton> = ({ children, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="h-10 w-10 p-1 flex items-center justify-center text-3xl hover:scale-125 duration-300"
    >
      {children}
    </a>
  )
}

export default SocialsBar
