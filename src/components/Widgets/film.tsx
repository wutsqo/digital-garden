import React, { FC, useEffect, useRef, useState } from "react"
import StarRatings from "react-star-ratings"
import moment from "moment"

interface Film {
  title: string
  rating: string
  date: string
  link: string
  thumb: string
}

const FilmWidget: FC<Film> = (props) => {
  const { title, thumb, rating, date, link } = props
  const ref = useRef<HTMLHeadingElement>(null)
  const [width, setWidth] = useState<number>(0)

  useEffect(() => {
    if (ref.current) setWidth(ref.current.offsetWidth)
  }, [])

  const calculateHeight = () => {
    return Math.floor((1.5 * width) / 2) * 2
  }

  if (!title)
    return (
      <div
        className="w-full h-auto animate-pulse bg-white dark:bg-gray-900"
        ref={ref}
        style={{ height: calculateHeight() + 12 }}
      />
    )

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full h-auto"
    >
      <img src={thumb} alt={title} className="w-full" />
      <div className="flex justify-between">
        <div className="-mt-1.5">
          <StarRatings
            rating={parseFloat(rating)}
            starRatedColor="#EFA51D"
            starEmptyColor="#D3D3D3"
            starDimension="12px"
            starSpacing="0px"
          />
        </div>
        <div className="text-xs">{moment(date).format("MMM DD")}</div>
      </div>
    </a>
  )
}

export default FilmWidget
