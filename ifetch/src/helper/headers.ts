import { isPlainObject } from "./util"
import { isObject } from "util"

function normalizeName(headers: any, normalizeName: string){
  if(!headers){
    return
  }

  Object.keys(headers).forEach((name) => {
    if(name !== normalizeName && name.toUpperCase() === normalizeName.toUpperCase()){
      headers[normalizeName] = headers[name]
      delete headers[name]
    }
  })
}

export function processHeaders(headers: any, data: any):any{
  normalizeName(headers, 'Content-Type')
  if(isPlainObject(data)){
    if(headers && !headers['Content-Type']){
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }
  return headers;
}

export function parseHeaders(headers: string):any{
  let parsed = Object.create(null)
  if(!headers){
    return
  }
  headers.split('\r\n').forEach(line => {
    let [key, val] = line.split(':')
    if(!key){
      return
    }
    if(val){
      val = val.trim()
    }
    parsed[key] = val
  })
  return parsed
}
