import ifetch from '../../src/index'

// ifetch({
//   method: 'get',
//   url: '/error/get1'
// }).then((res) => {
//   console.log(res)
// }).catch((e) => {
//   console.log(e)
// })

// ifetch({
//   method: 'get',
//   url: '/error/get'
// }).then((res) => {
//   console.log(res)
// }).catch((e) => {
//   console.log(e)
// })

// setTimeout(() => {
//   ifetch({
//     method: 'get',
//     url: '/error/get'
//   }).then((res) => {
//     console.log(res)
//   }).catch((e) => {
//     console.log(e)
//   })
// }, 5000)

ifetch({
  method: 'get',
  url: '/error/timeout',
  timeout: 2000
}).then((res) => {
  console.log(res)
}).catch((e) => {
  console.log(e.message)
})
