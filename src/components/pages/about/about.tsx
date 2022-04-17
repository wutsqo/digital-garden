import React, { FC } from "react"
import tw from "twin.macro"

export const AboutComponent: FC<{}> = () => {
  return (
    <Container>
      <h1>About me</h1>
    </Container>
  )
}

const Container = tw.div`max-w-screen-lg lg:px-12 mx-auto`
