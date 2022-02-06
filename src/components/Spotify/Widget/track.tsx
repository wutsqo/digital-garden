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
      className={`flex w-full hover:bg-dark-cream dark:hover:bg-emerald-900 h-16 hover:shadow ${
        !name && "animate-pulse"
      } `}
    >
      <div className={`flex-shrink-0 h-16 w-16`}>
        {name ? (
          <img
            src={album?.images[1]?.url}
            alt={name}
            className="h-full w-full"
          />
        ) : (
          <div className="bg-dark-cream dark:bg-emerald-900  w-full h-full"></div>
        )}
      </div>
      <div className={`w-full ${name ? "pl-4" : "pl-2"}`}>
        <div
          className={`${
            name
              ? "w-full mt-1.5"
              : "bg-dark-cream dark:bg-emerald-900 w-8 h-3 mt-2"
          }`}
          style={{ fontSize: "0.625rem", lineHeight: "0.75rem" }}
        >
          {name && `#${pos}`}
        </div>
        <div
          className={`font-medium text-sm ${
            name ? "w-full" : "bg-dark-cream dark:bg-emerald-900 w-36 h-4  mt-1"
          }`}
        >
          {name}
        </div>
        <div
          className={`font-light text-sm ${
            name ? "w-full" : "bg-dark-cream dark:bg-emerald-900 w-24 h-3 mt-1"
          }`}
        >
          {artists?.length > 0 && artists[0]?.name}
        </div>
      </div>
    </a>
  )
}

export default TrackWidget
