import axios from "axios"
import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"

const handler = async (
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) => {
  if (req.method !== "POST") {
    res.status(400).send("Method not allowed")
  }

  const ENDPOINT = process.env.DISCORD_WEBHOOK_URL || ""
  if (!ENDPOINT) res.status(500).send("Discord webhook URL not set")

  const payload = {
    attachments: [],
    content: null,
    embeds: [
      {
        color: null,
        fields: [
          {
            name: "Nama",
            value: req.body.nama || "anon",
          },
          {
            name: "Pesan",
            value: req.body.pesan,
          },
        ],
      },
    ],
  }

  axios
    .post(ENDPOINT, payload)
    .then(() => {
      res.status(200).send("OK")
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send("Failed to send messages")
    })
}

export default handler
