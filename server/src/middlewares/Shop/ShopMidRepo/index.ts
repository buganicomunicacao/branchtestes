import { HttpClient } from '../../../services'

export const GetDataShop = async () => {
  try {
    const resp = await HttpClient().get('shop')
    return resp.data
  } catch (error) {
    console.log(error)

    return false
  }
}
