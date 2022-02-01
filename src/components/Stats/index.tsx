import axios from "axios"
import React, { FC, useEffect, useState } from "react"
import tw from "twin.macro"
import TrackWidget from "../Spotify/Widget/track"

const StatsComponent: FC = () => {
  const [tracks, setTracks] = useState<any[]>(new Array(8).fill({}))

  useEffect(() => {
    axios.get("/api/spotify-top").then((response) => {
      setTracks(response.data.tracks)
    })
  }, [])

  return (
    <Container>
      <Section>
        <h2>Recent top tracks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mt-4">
          {tracks.map((track, i) => {
            return <TrackWidget {...track} key={i} pos={i + 1} />
          })}
        </div>
      </Section>
      <Section>
        <h2>Recent reads</h2>
        <div>coming soon</div>
      </Section>
      <Section>
        <h2>Recent watches</h2>
        <div>coming soon</div>
      </Section>
      <Section>
        <h2>Recent workouts</h2>
        <div>coming soon</div>
      </Section>
      <div className="my-8 text-xs">
        Music data provided by Spotify AB. All images are copyrighted by their
        respective copyright owners.
      </div>
    </Container>
  )
}

const Container = tw.div`max-w-screen-md mx-auto pt-8`
const Section = tw.div`mb-8`

export default StatsComponent
