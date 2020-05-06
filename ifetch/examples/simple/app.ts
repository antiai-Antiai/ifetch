import axios from '../../src/index'

axios({
  method:'get',
  url:'/simple/get',
  param: {
    a: 1,
    b: 2
  }
})
