import { ifetchRequestConfig } from './types'
import xhr from './xhr'
import buildURL from './helper/url'

function ifetch(config:ifetchRequestConfig){
  processConfig(config)
  xhr(config)
}

function processConfig(config: ifetchRequestConfig):void{
  config.url = transformUrl(config)
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

export default ifetch;
