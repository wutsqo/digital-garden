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

export const TrackWidget: FC<TrackProps> = (props) => {
  const { name, album, artists, external_urls, pos } = props

  if (!name)
    return (
      <div className="flex w-full animate-pulse h-16">
        <div className="bg-dark-cream dark:bg-emerald-900 w-20 h-full" />
        <div className="w-full pl-2">
          <div className="bg-dark-cream dark:bg-emerald-900 w-8 h-3 mt-2" />
          <div className="bg-dark-cream dark:bg-emerald-900 w-36 h-4 mt-1" />
          <div className="bg-dark-cream dark:bg-emerald-900 w-24 h-3 mt-1" />
        </div>
      </div>
    )

  return (
    <a
      href={external_urls?.spotify}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full hover:bg-dark-cream dark:hover:bg-emerald-900 h-16 hover:shadow"
    >
      <div className="flex-shrink-0 h-16 w-16">
        <img src={album?.images[1]?.url} alt={name} className="h-full w-full" />
      </div>
      <div className="w-full pl-4">
        <div
          className="w-full mt-1.5"
          style={{ fontSize: "0.625rem", lineHeight: "0.75rem" }}
        >
          {`#${pos}`}
        </div>
        <div className="font-medium text-sm w-full">{name}</div>
        <div className="font-light text-sm w-full truncate">
          {artists?.map((artist: any, i: number) => [
            i > 0 && ", ",
            <span>{artist.name}</span>,
          ])}
        </div>
      </div>
    </a>
  )
}
