/* eslint-disable no-undef */
import { Express } from 'express'
import sut from './Next'
import ServerApp from '../Server'

describe('test next app', () => {
  let app: Express
  beforeEach((done) => {
    app = ServerApp().app
    done()
  })

  beforeEach((done) => {
    ServerApp().server.close()
    done()
  })

  it('should return true', async (done) => {
    const status = await sut(app)
    console.log(status)
    done()
  })
})
