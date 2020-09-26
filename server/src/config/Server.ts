import express from 'express'
import cors from 'cors'

import bodyParser from 'body-parser'

const app = express()
app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.PORT || 3000
const server = app.listen(port)

console.log('server run')

const serverExpress = () => ({
  server,
  app,
})

export default serverExpress
