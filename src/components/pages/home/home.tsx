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
          in <span className="text-yellow-600">Software Engineering</span> fields.
        </div>
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

const Container = tw.div`max-w-screen-lg lg:px-12 mx-auto`
