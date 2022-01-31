import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"

export default function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  console.log(process.env.SITE_URL)
  res.status(200).send("OK")
}
