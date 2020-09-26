/* eslint-disable no-undef */
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import sut from './HttpClient'

require('dotenv').config()

describe('test HttpClient', () => {
  const host = 'https://demo.vnda.com.br/api/v2/users'

  it('should return data if send GET request', async done => {
    var mock = new MockAdapter(axios)
    const data = {
      email: 'any@gmail.com',
      name: 'any',
      role_name: 'Agente',
      external_code: 'POA',
      tags: [
        'teste'
      ]
    }
    mock.onGet(host).reply(200, data)

    const resp = await sut().get('users')
    expect(resp.data).toEqual(data)
    done()
  })

  it('should return data if send POST request', async done => {
    var mock = new MockAdapter(axios)
    const data = {
      email: 'any@gmail.com',
      name: 'any',
      role_name: 'Agente',
      external_code: 'POA',
      tags: [
        'teste'
      ]
    }
    mock.onPost(host).reply(200, data)

    const resp = await sut().post('users', data)
    expect(resp.data).toEqual(data)
    done()
  })

  it('should return data if send DELETE request', async done => {
    var mock = new MockAdapter(axios)
    const data = {
      id: '1'
    }
    mock.onDelete(host).reply(200, data)

    const resp = await sut().remove('users')
    expect(resp.data).toEqual(data)
    done()
  })

  it('should return data if send PUT request', async done => {
    var mock = new MockAdapter(axios)
    const data = {
      email: 'any@gmail.com',
      name: 'any',
      role_name: 'Agente',
      external_code: 'POA',
      tags: [
        'teste'
      ]
    }
    mock.onPut(host).reply(200, data)

    const resp = await sut().update('users', data)
    expect(resp.data).toEqual(data)
    done()
  })
})
