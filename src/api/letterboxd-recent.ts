import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import axios from "axios"
import converter from "xml-js"

export default function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  const username = process.env.LETTERBOXD_USERNAME
  const endpoint = `https://letterboxd.com/${username}/rss/`

  axios
    .get(endpoint)
    .then((resp) => {
      const converted = JSON.parse(
        converter.xml2json(resp.data, { compact: true, spaces: 2 })
      )
      const items = converted.rss.channel.item
      let movies = []
      let count = 0
      for (let item of items) {
        if (count == 6) break
        const cd = item.description._cdata
        const movie = {
          title: item["letterboxd:filmTitle"]._text,
          rating: item["letterboxd:memberRating"]._text,
          date: item["letterboxd:watchedDate"]._text,
          link: item.link._text,
          thumb: cd.substring(cd.indexOf('src="') + 5, cd.indexOf('"/>')),
        }
        count++
        movies.push(movie)
      }
      res.send(JSON.stringify(movies))
    })
    .catch((error) => {
      console.log(error)
      res.status(500).send("An error occured")
    })
}
