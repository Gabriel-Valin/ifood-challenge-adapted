import { GetType, HttpGetClient } from './axios-contract'

import axios from 'axios'

export default class AxiosAdapter implements HttpGetClient {
  public async get ({ url }: GetType): Promise<any> {
    const response = await axios.get(url)
    return response.data
  }
}
