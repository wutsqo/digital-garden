import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import axios from "axios"
import converter from "xml-js"

export default function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  const key = process.env.GOODREADS_KEY
  const id = process.env.GOODREADS_USER_ID
  const shelf = "read"
  const endpoint = `https://www.goodreads.com/review/list?v=2&id=${id}&shelf=${shelf}&key=${key}&per_page=6&sort=date_read`

  axios
    .get(endpoint)
    .then((resp) => {
      const converted = JSON.parse(
        converter.xml2json(resp.data, { compact: true, spaces: 2 })
      )
      const reviews = converted.GoodreadsResponse.reviews.review
      let books: any = []
      for (let review of reviews) {
        const item = {
          book: {
            title: review.book.title._text,
            image: review.book.image_url._text,
            author: review.book.authors.author.name._text,
          },
          rating: review.rating._text,
          read_at: `${review.read_at._text.substring(
            4,
            7
          )} ${review.read_at._text.substring(26)}`,
          url: review.url._cdata,
        }
        books.push(item)
      }
      res.send(JSON.stringify(books))
    })
    .catch(() => {
      res.status(500).send("An error occured")
    })
}
