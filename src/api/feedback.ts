import axios from "axios"
import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import { Client } from "@notionhq/client"

const sendToNotion = async (req: GatsbyFunctionRequest) => {
  const databaseId = process.env.NOTION_FEEDBACK_ID || ""
  const notionKey = process.env.NOTION_KEY || ""

  if (!databaseId) throw new Error("Notion database ID not set")
  if (!notionKey) throw new Error("Notion key not set")

  const notion = new Client({
    auth: process.env.NOTION_KEY,
  })

  await notion.pages.create({
    parent: { database_id: databaseId },
    properties: {
      title: {
        title: [
          {
            text: {
              content: req.body.nama || "",
            },
          },
        ],
      },
      Message: {
        rich_text: [
          {
            text: {
              content: req.body.pesan,
            },
          },
        ],
      },
      Timestamp: {
        date: {
          start: new Date().toISOString(),
        },
      },
    },
  })
}

const sendToDiscord = async (req: GatsbyFunctionRequest) => {
  const ENDPOINT = process.env.DISCORD_WEBHOOK_URL || ""
  if (!ENDPOINT) throw new Error("Discord webhook url not set")

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

  await axios.post(ENDPOINT, payload)
}

const handler = async (
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) => {
  if (req.method !== "POST") {
    res.status(400).send("Method not allowed")
  }

  try {
    await sendToNotion(req)
    await sendToDiscord(req)
    res.status(200).send("Message has been sent")
  } catch (error) {
    res.status(500).send("An error occured")
  }
}

export default handler
