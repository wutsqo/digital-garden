import axios from "axios"
import React, { FC, useEffect, useState } from "react"
import tw from "twin.macro"
import { Button } from "../../button"
import {
  TrackWidget,
  BookWidget,
  FilmWidget,
  WorkoutWidget,
} from "../../widgets"

export const StatsComponent: FC = () => {
  const [tracks, setTracks] = useState<any[]>(new Array(8).fill({}))
  const [books, setBooks] = useState<any[]>(new Array(6).fill({}))
  const [films, setFilms] = useState<any[]>(new Array(6).fill({}))
  const [workouts, setWorkouts] = useState<any>(new Array(6).fill({}))

  useEffect(() => {
    axios.get("/api/spotify-top").then((response) => {
      setTracks(response.data.tracks)
    })
    axios.get("/api/goodreads-recent").then((response) => {
      setBooks(response.data)
    })
    axios.get("/api/letterboxd-recent").then((response) => {
      setFilms(response.data)
    })
    axios.get("/api/strava-recent").then((response) => {
      setWorkouts(response.data)
    })
  }, [])

  return (
    <Container>
      <Section>
        <SectionTitle>
          <h3>🎬 Recent watches</h3>
          <Button
            to="https://letterboxd.com/wutsqo/films/diary/"
            size="sm"
            secondary
          >
            see more
          </Button>
        </SectionTitle>

        <div className="grid gap-1 mt-2 grid-cols-3 sm:grid-cols-6">
          {films.map((film, i) => {
            return <FilmWidget key={i} {...film} />
          })}
        </div>
      </Section>

      <Section>
        <SectionTitle>
          <h3>📚 Recent reads</h3>
          <Button to="https://goodreads.com/wutsqo" size="sm" secondary>
            see more
          </Button>
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mt-2">
          {books.map((book, i) => {
            return <BookWidget key={i} {...book} />
          })}
        </div>
      </Section>

      <Section>
        <SectionTitle>
          <h3>🎧 Recent top tracks</h3>
          <Button
            to="https://open.spotify.com/user/urwatilwutsqo"
            size="sm"
            secondary
          >
            see more
          </Button>
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mt-2">
          {tracks.map((track, i) => {
            return <TrackWidget {...track} key={i} pos={i + 1} />
          })}
        </div>
      </Section>

      <Section>
        <SectionTitle>
          <h3>💪 Recent workouts</h3>
          <Button
            to="https://www.strava.com/athletes/61933714"
            size="sm"
            secondary
          >
            see more
          </Button>
        </SectionTitle>

        <div className="grid gap-1 mt-2 grid-cols-1 md:grid-cols-2">
          {workouts.map((workout: any, i: number) => {
            return <WorkoutWidget key={i} {...workout} />
          })}
        </div>
      </Section>

      <div className="my-8 text-xs">
        Music, books, movies, and workouts data are provided by Spotify AB,
        Goodreads, Letterboxd, and STRAVA respectively. All images are
        copyrighted by their respective copyright owners.
      </div>
    </Container>
  )
}

const Container = tw.div`max-w-screen-lg mx-auto pt-8 flex flex-col gap-12`
const Section = tw.div`mb-12 mt-6`
const SectionTitle = tw.div`flex justify-between mb-4`
