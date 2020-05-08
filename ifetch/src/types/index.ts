export type Method = 'get' | 'GET'
  |'delete'|'Delete'
  |'head'|'HEAD'
  |'options'|'OPTIONS'
  |'post'|'POST'
  |'put'|'PUT'
  |'patch'|'PATCH'

export interface ifetchRequestConfig{
  url: string
  method?: Method
  data?: any
  params?: any
  headers?: any
  responseType?: any
}

export interface ifetchResponse{
  data: any,
  status: number
  statusText: string
  headers: any
  config: ifetchRequestConfig
  request: any
}

export interface ifetchPromise extends Promise<ifetchResponse>{

}

