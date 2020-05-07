import ifetch from '../../src/index'

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


ifetch({
  method: 'post',
  url: '/base/post',
  data: {
    a:1,
    b:2
  }
})

const arr = new Int32Array([21, 31])

ifetch({
  method: 'post',
  url: '/base/buffer',
  data: arr
})
