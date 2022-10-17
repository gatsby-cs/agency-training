import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby'

export default function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  console.log(`submitted form`, req.body)
  // write to a database
  // talk to an api
  // send a success or error response
  // should return original req

  res.json(req.body.name)
}
