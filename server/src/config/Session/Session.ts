import ExpressSession from 'express-session'
import { Express } from 'express'
require('dotenv').config()

const Session = (app:Express) => app.use(ExpressSession({
  secret: process.env.SESSION_KEY,
  saveUninitialized: false,
  resave: false
}))

export default Session
