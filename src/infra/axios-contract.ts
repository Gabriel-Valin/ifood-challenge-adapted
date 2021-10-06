/* eslint-disable @typescript-eslint/consistent-type-definitions */
/* eslint-disable eol-last */
export type GetType = {
  url: string
}

export interface HttpGetClient {
  get: <T = any> (input: GetType) => Promise<T>
}