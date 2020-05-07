import { ifetchRequestConfig } from './types'
import xhr from './xhr'
import buildURL from './helper/url'
import transformRequest from './helper/data'

function ifetch(config:ifetchRequestConfig){
  processConfig(config)
  xhr(config)
}

function processConfig(config: ifetchRequestConfig):void{
  config.url = transformUrl(config)
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
 * 处理data数据
 */
function transformRequestData(config: ifetchRequestConfig): any{
  return transformRequest(config.data)
}
export default ifetch;
