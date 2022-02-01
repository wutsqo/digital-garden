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
      className={`flex w-full hover:bg-white dark:hover:bg-pink-900 h-20 hover:shadow ${
        !name && "animate-pulse bg-white dark:bg-gray-900"
      } `}
    >
      <div className={`flex-shrink-0 h-20 w-20 ${!name && "p-2"}`}>
        {name ? (
          <img
            src={album?.images[1]?.url}
            alt={name}
            className="h-full w-full"
          />
        ) : (
          <div className="bg-pink-200 dark:bg-gray-700  w-full h-full"></div>
        )}
      </div>
      <div className={`w-full ${name ? "pl-4" : "p-2"}`}>
        <div
          className={`mt-2 text-xs ${
            name ? "w-full" : "bg-pink-200 dark:bg-gray-700 w-8 h-3 "
          }`}
        >
          {name && `#${pos}`}
        </div>
        <div
          className={`font-medium ${
            name ? "w-full" : "bg-pink-200 dark:bg-gray-700 w-36 h-4  mt-1"
          }`}
        >
          {name}
        </div>
        <div
          className={`font-light  ${
            name ? "w-full" : "bg-pink-200 dark:bg-gray-700 w-24 h-3 mt-1"
          }`}
        >
          {artists?.length > 0 && artists[0]?.name}
        </div>
      </div>
    </a>
  )
}

export default TrackWidget
