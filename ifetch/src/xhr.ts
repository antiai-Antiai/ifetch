import { ifetchRequestConfig, ifetchResponse, ifetchPromise } from './types'

export default function xhr(config: ifetchRequestConfig): ifetchPromise{
  return new Promise((resolve) =>{
    const { data = null, url, method = "get", headers, responseType} = config
    const request = new XMLHttpRequest()
    /**
     * 处理responseType
     */
    if(responseType){
      request.responseType = responseType
    }

    request.open(method.toUpperCase(), url, true)

    /**请求成功回调 */
    request.onreadystatechange = function(){
      if(request.readyState !== 4){
        return
      }
      const responseHeaders = request.getAllResponseHeaders()
      const responseData = responseType && responseType !=='text' ? request.response : request.responseText
      const response: ifetchResponse = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      }
      resolve(response)
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
