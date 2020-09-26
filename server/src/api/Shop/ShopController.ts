import { Request, Response } from 'express'

export const List = async (req:Request, res:Response) => {
  res.send(req.session.shop)
}
