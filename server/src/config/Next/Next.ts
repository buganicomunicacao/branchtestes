import { Express } from 'express'
import { IncomingMessage, ServerResponse } from 'http'
import next from 'next'
const dev = process.env.NODE_ENV !== 'production'
const appNext = next({ dev, dir: 'nextjs' })
const handle = appNext.getRequestHandler()

export default async (app: Express) => {
  try {
    await appNext.prepare()
    app.get('*', (req: IncomingMessage, res: ServerResponse) =>
      handle(req, res),
    )
    return true
  } catch (err) {
    console.log(err)
    return false
  }
}
