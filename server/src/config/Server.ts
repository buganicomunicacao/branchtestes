import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import RegisterRouter from './Routers'
import Session from './Session'
const app = express()

app.disable('x-powered-by')
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
Session(app)

const port = process.env.PORT || 3000
const server = app.listen(port)

RegisterRouter(app, express.Router())
console.log('server run')

app.get('/api/hello', (request, response) => response.send('api on'))

const serverExpress = () => ({
  server, app
})

export default serverExpress
