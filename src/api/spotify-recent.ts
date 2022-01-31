import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import axios from "axios"

const handler = async (
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) => {
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN
  const siteUrl = process.env.SITE_URL || "http://localhost:8000"
  const auth = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  ).toString("base64")

  const tokenEndpoint = `https://accounts.spotify.com/api/token`
  const nowPlayingEndpoint = `https://api.spotify.com/v1/me/player/currently-playing?market=ID`
  const recentlyPlayedEndpoint = `https://api.spotify.com/v1/me/player/recently-played?market=ID&limit=1`

  const requestBody = `grant_type=refresh_token&refresh_token=${refreshToken}&redirect_uri=${encodeURI(
    `${siteUrl}/api/spotify-callback`
  )}`

  const accessToken = await axios
    .post(tokenEndpoint, requestBody, {
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((response) => {
      return response.data.access_token
    })

  const options = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }

  const nowPlaying = await axios.get(nowPlayingEndpoint, options)

  if (nowPlaying.data.item) {
    res.send({ item: nowPlaying.data.item, type: "current" })
  } else {
    const recentlyPlayed = await axios.get(recentlyPlayedEndpoint, options)
    res.send({ item: recentlyPlayed.data.items[0].track, type: "recent" })
  }
}

export default handler
