import axios from 'axios'
import Header from '../HttpHeader'

const DEV = true

const HOSTDEV = 'https://demo.vnda.com.br/api/v2/'
const HOSTPROD = ''

const HOSTAPI = DEV ? HOSTDEV : HOSTPROD

const HttpClient = () => ({
  get: async (path: string, auth: boolean = true) =>
    await axios.get(`${HOSTAPI}${path}`, Header(auth)),

  post: async (path: string, data: any, auth: boolean = true) =>
    await axios.post(`${HOSTAPI}${path}`, data, Header(auth)),

  remove: async (path: string, auth: boolean = true) =>
    await axios.delete(`${HOSTAPI}${path}`, Header(auth)),

  update: async (path: string, data: any, auth: boolean = true) =>
    await axios.put(`${HOSTAPI}${path}`, data, Header(auth))
})

export default HttpClient
