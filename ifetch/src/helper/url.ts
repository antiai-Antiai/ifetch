import { isDate, isPlainObject, encode } from "./util"


export function buildURL(url:string, params?:any){
  if(!params){
    return url
  }

  const parts: string[] = []

  Object.keys(params).forEach((key) => {
    let val = params[key]
    // 参数为null && undefined
    if(val === null && typeof val === 'undefined'){
      return
    }

    let values: string[]
    // 参数为数组
    // 如果参数不是数组，讲参数转化成数组统一处理
    if(Array.isArray(val)){
      values = val
      key += '[]'
    } else {
      values = [val]
    }
    values.forEach((val) => {
      if(isDate(val)){
        val = val.toISOString()
      } else if(isPlainObject(val)){
        val = JSON.stringify(val)
      }
      if(val){
        parts.push(`${encode(key)}=${encode(val)}`)
      }
    })
  })


  let serializedParams = parts.join('&')

  if(serializedParams){
    const markIndex = url.indexOf('#')
    if(markIndex !== -1){
      url = url.slice(0, markIndex)
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
  }
  return url
}
