import { NowRequest, NowResponse } from '@vercel/node'

export default function merge(req: NowRequest, res: NowResponse) {
  res.json(req.body)
}