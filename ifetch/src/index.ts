import { ifetchRequestConfig, ifetchPromise, ifetchResponse } from './types'
import xhr from './xhr'
import { buildURL } from './helper/url'
import { transformRequest, transformResponse } from './helper/data'
import { processHeaders } from './helper/headers'

function ifetch(config:ifetchRequestConfig):ifetchPromise{
  processConfig(config)
  return xhr(config).then((res) => {
    return transformResponseData(res)
  })
}

function processConfig(config: ifetchRequestConfig):void{
  config.url = transformUrl(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

/**
 *
 * @param config
 * 处理url请求
 */
function transformUrl(config: ifetchRequestConfig): string{
  const {url, params } = config
  return buildURL(url, params)
}

/**
 *
 * @param config
 * 处理请求data数据
 */
function transformRequestData(config: ifetchRequestConfig): any{
  return transformRequest(config.data)
}

/**
 *
 * @param config
 * 处理headers
 */
function transformHeaders(config: ifetchRequestConfig): any{
  const {headers = {}, data} = config
  return processHeaders(headers, data)
}

function transformResponseData(res: ifetchResponse):ifetchResponse{
  res.data = transformResponse(res.data)
  return res
}
export default ifetch;
