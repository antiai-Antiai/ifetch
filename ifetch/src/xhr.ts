import { ifetchRequestConfig, ifetchResponse, ifetchPromise } from './types'
import { parseHeaders } from './helper/headers'
import { rejects } from 'assert'

export default function xhr(config: ifetchRequestConfig): ifetchPromise{
  return new Promise((resolve, reject) =>{
    const { data = null, url, method = "get", headers, responseType, timeout} = config
    const request = new XMLHttpRequest()
    /**
     * 处理responseType
     */
    if(responseType){
      request.responseType = responseType
    }

    if(timeout){
      request.timeout = timeout
    }

    request.open(method.toUpperCase(), url, true)

    /**请求成功回调 */
    request.onreadystatechange = function(){
      if(request.readyState !== 4){
        return
      }

      if(request.status === 0){
        return
      }

      const responseHeaders = parseHeaders(request.getAllResponseHeaders())
      const responseData = responseType && responseType !=='text' ? request.response : request.responseText
      const response: ifetchResponse = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      }
      handleResponse(response)
    }

    function handleResponse(response: ifetchResponse){
      if(response.status >= 200 && response.status <=300 ){
        resolve(response)
      } else {
        reject(new Error(`Request failed with status code ${response.status}`))
      }
    }

    /**请求失败回调 */
    request.onerror = function(){
      reject(new Error('NetWork Error'))
    }

    /**请求超时回调 */
    request.ontimeout = function(){
      reject(new Error(`Timeout of ${timeout} ms exceeded`))
    }

    /**处理请求头 */
    Object.keys(headers).forEach((name) => {
      if(data === null && name.toLowerCase() === 'content-type'){
        delete headers[name]
      } else {
        request.setRequestHeader(name, headers[name])
      }
    })



    request.send(data)
  })
}
