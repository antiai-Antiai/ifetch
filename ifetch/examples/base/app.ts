import ifetch from '../../src/index'
/**
 * 测试get请求
 */
// ifetch({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: ['bar', 'baz']
//   }
// })


// ifetch({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: {
//       bar: 'baz'
//     }
//   }
// })

// const date = new Date()

// ifetch({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     date
//   }
// })

// ifetch({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: '@:$, '
//   }
// })

// ifetch({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: 'bar',
//     baz: null
//   }
// })

// ifetch({
//   method: 'get',
//   url: '/base/get#hash',
//   params: {
//     foo: 'bar'
//   }
// })

// ifetch({
//   method: 'get',
//   url: '/base/get?foo=bar',
//   params: {
//     bar: 'baz'
//   }
// })

/**
 * 测试post请求
 */
// ifetch({
//   method: 'post',
//   url: '/base/post',
//   data: {
//     a:1,
//     b:2
//   }
// })

// const arr = new Int32Array([21, 31])

// ifetch({
//   method: 'post',
//   url: '/base/buffer',
//   data: arr
// })

// 测试headers
// ifetch({
//   method: 'post',
//   url: '/base/post',
//   data: {
//     a: 1,
//     b: 2
//   }
// })

// ifetch({
//   method: 'post',
//   url: '/base/post',
//   headers: {
//     'content-type': 'application/json;charset=utf-8'
//   },
//   data: {
//     a: 1,
//     b: 2
//   }
// })

// const paramsString = 'q=URLUtils.searchParams&topic=api'
// const searchParams = new URLSearchParams(paramsString)

// ifetch({
//   method: 'post',
//   url: '/base/post',
//   data: searchParams
// })


ifetch({
  method: 'post',
  url: '/base/post',
  data:{
    a:1,
    b:2
  }
}).then((res) => {
  console.log(res)
})

ifetch({
  method: 'post',
  url: '/base/post',
  responseType: 'json',
  data: {
    a: 3,
    b: 4
  }
}).then((res) => {
  console.log(res)
})
