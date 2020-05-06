import ifetch from '../../src/index'

ifetch({
  method:'get',
  url:'/simple/get',
  params: {
    a: 1,
    b: 2
  }
})
