import React, { FC } from "react"
import tw from "twin.macro"
import { SpotifyWidgetSmall } from "../../widgets"

export const HomeComponent: FC<{}> = () => {
  return (
    <Container style={{ paddingTop: "20vh" }}>
      <h1
        className="text-5xl md:text-7xl font-bold fade-in"
        style={{ animationDelay: "0.3s" }}
      >
        Muhammad <br /> Urwatil Wutsqo.
      </h1>

      <h4
        className="fade-in mt-8 font-normal"
        style={{ animationDelay: "0.6s" }}
      >
        I am a Computer Science student with interests in Software Engineering.
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

const Container = tw.div`max-w-screen-lg lg:px-12 mx-auto`
