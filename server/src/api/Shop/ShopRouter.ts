import { Router } from 'express'
import { List } from './ShopController'
import { MidShop } from '../../middlewares'

export default (router: Router) => {
  router.get('/shop', MidShop, List)
  return router
}
