import { ifetchRequestConfig } from './types'
import xhr from './xhr'

function ifetch(config:ifetchRequestConfig){
  xhr(config)
}

export default ifetch;
