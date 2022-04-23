import axios from "axios"
import React, { FC, useEffect, useState } from "react"

export const SpotifyWidgetSmall: FC = () => {
  const [data, setData] = useState<any>({})
  const [type, setType] = useState<any>({})

  const fetchData = () => {
    axios.get("/api/spotify-recent").then((response) => {
      setData(response.data?.item)
      setType(response.data?.type)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData()
    }, 12000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className="mb-1">
        {type === "current" ? "Currently" : "Recently"} listening on Spotify:
      </div>
      <div className="relative p-1 pl-0 flex items-center max-w-xs text-sm">
        <img
          src={data?.album?.images[2].url}
          alt={data.name}
          className="h-10 w-10"
          key={data.id}
        />
        <div className="max-h-12 px-2 items-center h-8 flex">
          <div>
            {data.id ? (
              <div
                className="max-w-xs md:w-96 font-semibold truncate leading-tight fade-in"
                key={data.id}
              >
                <a
                  href={data.album.external_urls.spotify}
                  className="no-underline hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data.name}
                </a>
              </div>
            ) : (
              <div className="h-4 w-36 ph-child" />
            )}
            {data?.id ? (
              <div className="font-light fade-in" key={data.artists[0].id}>
                <a
                  href={data.artists[0].external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline hover:underline"
                >
                  {data.artists[0].name}
                </a>
              </div>
            ) : (
              <div className="h-4 w-32 ph-child mt-1" />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
