import moment from "moment"
import React, { FC } from "react"

interface Workout {
  name: string
  type: string
  distance: number
  elapsed_time: number
  map: string
  id: number
  date: string
  avg_hr: number
  max_hr: number
}

export const WorkoutWidget: FC<Workout> = (props) => {
  const { name, type, date, id, distance, elapsed_time, map, avg_hr, max_hr } =
    props

  const countPace = (timeInSeconds: number, distanceInMeters: number) => {
    let pace = (timeInSeconds / distanceInMeters / 60) * 1000
    let leftover = pace % 1
    let minutes = pace - leftover
    let seconds = Math.round(leftover * 60)
    return `${minutes}'${seconds < 10 ? `0${seconds}` : seconds}"`
  }

  if (!name)
    return (
      <div className="flex h-24 animate-pulse bg-dark-cream dark:bg-emerald-900"></div>
    )

  return (
    <a
      href={`https://www.strava.com/activities/${id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="h-24 px-1 md:px-2 py-1 w-full max-w-lg hover:bg-dark-cream dark:hover:bg-emerald-900 flex gap-4"
    >
      <div className="flex-shrink-0 pt-1 text-3xl">
        {type === "Run" && "👟"}
        {type === "Swim" && "🏊‍♂️"}
        {name.toLowerCase().includes("badminton") && "🏸"}
        {name.toLowerCase().includes("futsal") && "⚽"}
      </div>
      <div>
        <div className="font-medium">
          {name}{" "}
          <span className="font-normal text-xs">
            {" "}
            - {moment(date).format("DD MMM")}
          </span>{" "}
        </div>
        <div className="flex gap-4 pt-2">
          {distance > 0 && (
            <div>
              <div className="text-xs">📏 Distance</div>
              <div>{(distance / 1000).toFixed(2)} km</div>
            </div>
          )}
          {distance > 0 && (
            <div>
              <div className="text-xs">⏱ Pace</div>
              <div>{countPace(elapsed_time, distance)} /km</div>
            </div>
          )}
          <div>
            <div className="text-xs">⌛ Time</div>
            <div>
              {elapsed_time >= 3600 &&
                `${new Date(elapsed_time * 1000)
                  .toISOString()
                  .substr(11, 2)}h `}
              {new Date(elapsed_time * 1000).toISOString().substr(14, 2)}m{" "}
              {elapsed_time < 3600 &&
                `${new Date(elapsed_time * 1000).toISOString().substr(17, 2)}s`}
            </div>
          </div>
          {type !== "Run" && type !== "Swim" && (
            <>
              <div>
                <div className="text-xs">💓 Avg HR</div>
                <div>{avg_hr.toFixed(0)} bpm</div>
              </div>
              <div>
                <div className="text-xs">💓 Max HR</div>
                <div>{max_hr.toFixed(0)} bpm</div>
              </div>
            </>
          )}
        </div>
      </div>
    </a>
  )
}
