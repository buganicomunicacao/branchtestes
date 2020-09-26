/* eslint-disable no-undef */
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { GetDataShop } from './index'

require('dotenv').config()

describe('test integration ShopMidRepo', () => {
  const host = 'https://demo.vnda.com.br/api/v2/shop'

  it('should return GET data lis shop', async done => {
    var mock = new MockAdapter(axios)
    const data = {
      settings: 'any',
      name: 'any'
    }
    mock.onGet(host).reply(200, data)

    const resp = await GetDataShop()
    expect(resp).toEqual(data)
    done()
  })
})
