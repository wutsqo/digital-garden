import React, { FC } from "react"

interface TrackProps {
  name: string
  artists: any
  album: {
    images: any
  }
  external_urls: {
    spotify: string
  }
  pos?: number
}

const TrackWidget: FC<TrackProps> = (props) => {
  const { name, album, artists, external_urls, pos } = props

  return (
    <a
      href={external_urls ? external_urls?.spotify : "#"}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex w-full hover:bg-white dark:hover:bg-pink-900 h-16 hover:shadow ${
        !name && "animate-pulse bg-white dark:bg-gray-900"
      } `}
    >
      <div className={`flex-shrink-0 h-16 w-16  ${!name && "p-2"}`}>
        {name ? (
          <img
            src={album?.images[1]?.url}
            alt={name}
            className="h-full w-full"
          />
        ) : (
          <div className="bg-pink-300 dark:bg-gray-700  w-full h-full"></div>
        )}
      </div>
      <div className={`w-full ${name ? "pl-4" : "pl-2"}`}>
        <div
          className={`mt-1.5 ${
            name ? "w-full" : "bg-pink-300 dark:bg-gray-700 w-8 h-3 "
          }`}
          style={{ fontSize: "0.625rem", lineHeight: "0.75rem" }}
        >
          {name && `#${pos}`}
        </div>
        <div
          className={`font-medium text-sm ${
            name ? "w-full" : "bg-pink-300 dark:bg-gray-700 w-36 h-4  mt-1"
          }`}
        >
          {name}
        </div>
        <div
          className={`font-light text-sm ${
            name ? "w-full" : "bg-pink-300 dark:bg-gray-700 w-24 h-3 mt-1"
          }`}
        >
          {artists?.length > 0 && artists[0]?.name}
        </div>
      </div>
    </a>
  )
}

export default TrackWidget
