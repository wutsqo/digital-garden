import moment from "moment"
import React, { FC } from "react"
import { BiWalk } from "@react-icons/all-files/bi/BiWalk"
import { BiRun } from "@react-icons/all-files/bi/BiRun"
import { BiSwim } from "@react-icons/all-files/bi/BiSwim"

interface Workout {
  name: string
  type: string
  distance: number
  elapsed_time: number
  map: string
  id: number
  date: string
}

const WorkoutWidget: FC<Workout> = (props) => {
  const { name, type, date, id, distance, elapsed_time, map } = props

  if (!name)
    return (
      <div className="flex h-20 animate-pulse bg-white dark:bg-gray-900"></div>
    )

  return (
    <a
      href={`https://www.strava.com/activities/${id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="h-20 px-1 md:px-2 py-1 w-full hover:bg-white dark:hover:bg-pink-900 hover:shadow flex gap-1"
    >
      <div className="flex-shrink-0 pt-1">
        {type === "Run" && <BiRun />}
        {type === "Walk" && <BiWalk />}
        {type === "Swim" && <BiSwim />}
      </div>
      <div>
        <div className="font-medium">{name}</div>
        <div className="text-xs font-light">
          {moment(date).format("MMM DD")} |{" "}
          {distance > 0 && <span>{(distance / 1000).toFixed(2)}km | </span>}
          {(elapsed_time / 60).toFixed(0)}min.
        </div>
      </div>
    </a>
  )
}

export default WorkoutWidget
