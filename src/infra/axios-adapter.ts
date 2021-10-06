import { HttpGetClient } from './axios-contract'

import axios from 'axios'

export default class AxiosAdapter implements HttpGetClient {
  public async get ({ url, params }): Promise<any> {
    const response = await axios.get(url, { params })
    return response.data
  }
}
