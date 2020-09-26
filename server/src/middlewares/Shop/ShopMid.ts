import { Response, Request } from 'express'
import { GetDataShop } from './ShopMidRepo'

const ShopMiddleware = async (req: Request, res: Response, next) => {
  const data = await GetDataShop()
  req.session.shop = data
  return next()
}

export default ShopMiddleware
