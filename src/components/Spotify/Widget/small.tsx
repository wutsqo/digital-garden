import axios from "axios"
import React, { FC, useEffect, useState } from "react"
import { FaSpotify } from "@react-icons/all-files/fa/FaSpotify"

const SpotifyWidgetSmall: FC = () => {
  const [data, setData] = useState<any>({})

  const fetchData = () => {
    axios.get("/api/spotify-recent").then((response) => {
      setData(response.data?.item)
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
    <div className="relative p-1 flex items-center max-w-xs text-sm">
      <FaSpotify
        className="-ml-1 text-2xl flex-shrink-0"
        style={{ color: "#1DB954" }}
      />
      <div className="max-h-12 px-2 ml-2 border-l-2 border-black dark:border-emerald-900 items-center h-10 flex">
        <div>
          {data.id ? (
            <div
              className="max-w-xs md:w-96 font-semibold truncate leading-tight fadeInUp"
              key={data.id}
            >
              <a
                href={data.album.external_urls.spotify}
                className="hover:underline"
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
            <div className="font-light fadeInUp" key={data.artists[0].id}>
              <a
                href={data.artists[0].external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
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
  )
}

export default SpotifyWidgetSmall
