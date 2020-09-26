/* eslint-disable no-undef */
import { Express } from 'express'
import sut from './Next'
import ServerApp from '../Server'

describe('test next app', () => {
  let app: Express
  beforeAll(() => {
    app = ServerApp().app
  })

  afterAll(() => {
    ServerApp().server.close()
  })

  it('should return true', async (done) => {
    const status = await sut(app)
    console.log(status)
    done()
  })
})
