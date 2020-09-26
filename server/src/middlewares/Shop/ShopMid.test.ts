/**
 * @jest-environment node
 */
import ServerExpress from '../../config/Server'
import request from 'supertest'
import sut from './ShopMid'
/* eslint-disable no-undef */

describe('integration test Shop middleware', () => {
  const path = '/test-shop-middleware'
  const server = ServerExpress().server
  const app = ServerExpress().app

  beforeAll(() => {
    app.get(path, sut, (req, res) => {
      return res.send(req.session.shop)
    })
  })

  afterAll(() => {
    server.close()
  })

  it('should return configs and data of shop', async done => {
    const data = await request(app)
      .get(path)
      .expect(200)

    expect(JSON.stringify(data.text)).toContain('Demonstração VNDA')
    done()
  })
})
