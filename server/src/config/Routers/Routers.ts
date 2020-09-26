import { Express, Router } from 'express'
import { Shop } from '../../api'

const baseApi = '/api/'

const Routers = (app: Express, router:Router) => {
  app.use(baseApi, Shop(router))
}
export default Routers
