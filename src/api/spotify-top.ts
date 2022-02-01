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
  const topArtistsEndpoint = `https://api.spotify.com/v1/me/top/artists`
  const topTracksEndpoint = `https://api.spotify.com/v1/me/top/tracks`
  const artistsLimit = process.env.SPOTIFY_LIMIT_ARTISTS || 6
  const tracksLimit = process.env.SPOTIFY_LIMIT_TRACKS || 8

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

  //   const topArtists = await axios
  //     .get(
  //       `${topArtistsEndpoint}?time_range=short_term&limit=${artistsLimit}`,
  //       options
  //     )
  //     .then((resp) => resp.data)

  const topTracks = await axios
    .get(
      `${topTracksEndpoint}?time_range=short_term&limit=${tracksLimit}`,
      options
    )
    .then((resp) => resp.data.items)

  res.send(
    JSON.stringify({
      //   artists: topArtists.items,
      tracks: topTracks,
    })
  )
}

export default handler
