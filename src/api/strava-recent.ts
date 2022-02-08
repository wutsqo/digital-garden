import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import axios from "axios"

const handler = async (
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) => {
  const clientId = process.env.STRAVA_CLIENT_ID
  const clientSecret = process.env.STRAVA_CLIENT_SECRET
  const refreshToken = process.env.STRAVA_REFRESH_TOKEN
  const tokenEndpoint = "https://www.strava.com/oauth/token"

  const accessToken = await axios
    .post(
      `${tokenEndpoint}?client_id=${clientId}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`
    )
    .then((response) => {
      return response.data.access_token
    })

  const activitiesEndpoint =
    "https://www.strava.com/api/v3/athlete/activities?per_page=12"
  const activitiesResponse = await axios.get(activitiesEndpoint, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  let activities = []
  let typesToDisplay = ["Run", "Swim"]
  for (let activity of activitiesResponse.data) {
    if (activities.length === 4) break
    if (!typesToDisplay.includes(activity.type)) continue
    const data = {
      id: activity.id,
      name: activity.name,
      type: activity.type,
      distance: activity.distance,
      elapsed_time: activity.elapsed_time,
      map: activity.map.summary_polyline,
      date: activity.start_date,
    }
    activities.push(data)
  }

  res.send(JSON.stringify(activities))
}

export default handler
